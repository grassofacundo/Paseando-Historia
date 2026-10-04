import type {
  BackgroundId,
  CharacterId,
  ChoiceImageId,
  EraImageId,
  ObjectId,
} from "@/assets/assets";

export type { BackgroundId, CharacterId, ObjectId };

/** An answer option. Answers are always identified by `id`, never by text. */
export type Option = { id: string; text: string; help: string };

type ScreenBase = {
  /** Display name for the name tag (a single space for narration). */
  speaker: string;
  text: string;
  background: BackgroundId;
};

export type DialogueScreen = ScreenBase & {
  type: "dialogue";
  /** `null` = narration screen (no sprite). */
  character: CharacterId | null;
};

export type QuestionScreen = ScreenBase & {
  type: "question";
  character: CharacterId;
  correct: Option;
  distractors: [Option, Option, Option, Option];
};

export type Screen = DialogueScreen | QuestionScreen;

export type ChapterId = "intro" | "arg1810" | "pueblo" | "realista" | "industrial" | "guerra";

export type Chapter = {
  id: ChapterId;
  title: string;
  /** CSS colour used for the dialogue box and name tag. */
  accentColor: string;
  reward: { name: string; image: ObjectId; text: string };
  /** Finishing the chapter = advancing past the last screen. */
  screens: Screen[];
};

/** A card on the era selection page. */
export type Era = {
  id: string;
  title: string;
  image: EraImageId;
  playable: boolean;
  /** Chapter the era's choices belong to, when playable. */
  chapterId?: ChapterId;
};

/** A character choice in the era modal. */
export type EraChoice = {
  id: string;
  /** Era whose modal shows this choice. */
  eraId: string;
  image: ChoiceImageId;
  text: string;
  buttonLabel: string;
  playable: boolean;
  /** Chapter started by the button, when playable. */
  chapterId?: ChapterId;
};
