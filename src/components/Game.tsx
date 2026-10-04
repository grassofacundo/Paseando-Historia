"use client";

import { useSyncExternalStore } from "react";
import { backgrounds } from "@/assets/assets";
import { getChapter } from "@/content/chapters";
import type { Chapter } from "@/content/types";
import { resolveOption } from "@/game/engine";
import { useGame } from "@/game/useGame";
import { getResumeIndex } from "@/storage/progress";
import { BackArrow } from "./BackArrow";
import { CharacterSprite } from "./CharacterSprite";
import { DialogueBox } from "./DialogueBox";
import { NameTag } from "./NameTag";
import { QuestionOptions } from "./QuestionOptions";
import { StartOverlay } from "./StartOverlay";
import { TeacherHelp } from "./TeacherHelp";
import styles from "./Game.module.css";

const HELP_COLOR = "var(--accent-help)";
const noopSubscribe = () => () => {};

/** Reads the resume index on the client only; renders a stable placeholder on the server. */
export function Game({ chapterId }: { chapterId: string }) {
  const chapter = getChapter(chapterId);
  const startIndex = useSyncExternalStore(
    noopSubscribe,
    () => getResumeIndex(chapterId),
    () => null,
  );
  if (!chapter || startIndex === null) {
    return <div className={styles.root} aria-busy="true" />;
  }
  return <GameInner chapter={chapter} startIndex={startIndex} />;
}

function GameInner({ chapter, startIndex }: { chapter: Chapter; startIndex: number }) {
  const { state, start, advance, choose, dismissHelp } = useGame(chapter, startIndex);
  const screen = chapter.screens[state.screenIndex];
  const inHelp = state.phase === "help";
  const isQuestion = screen.type === "question";

  const selected =
    inHelp && screen.type === "question" && state.selectedId
      ? resolveOption(screen, state.selectedId)
      : undefined;

  const options =
    screen.type === "question"
      ? state.optionIds.flatMap((id) => {
          const o = resolveOption(screen, id);
          return o ? [{ id: o.id, text: o.text }] : [];
        })
      : [];

  const color = inHelp ? HELP_COLOR : chapter.accentColor;

  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `url(${backgrounds[screen.background]})` }}
    >
      <BackArrow />
      {state.phase === "start" ? (
        <StartOverlay onStart={start} />
      ) : (
        <>
          <div className={styles.stage}>
            <div className={styles.stageInner}>
              {inHelp ? (
                <TeacherHelp />
              ) : (
                screen.character && <CharacterSprite character={screen.character} />
              )}
              <NameTag
                name={inHelp ? "Profe" : screen.speaker}
                side={inHelp ? "right" : "left"}
                color={color}
              />
            </div>
          </div>
          <div className={styles.panel}>
            <DialogueBox
              color={color}
              text={inHelp ? (selected?.help ?? "") : screen.text}
              onClick={inHelp ? dismissHelp : isQuestion ? undefined : advance}
            >
              {!inHelp && isQuestion && <QuestionOptions options={options} onChoose={choose} />}
            </DialogueBox>
          </div>
        </>
      )}
    </div>
  );
}
