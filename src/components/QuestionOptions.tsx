import styles from "./QuestionOptions.module.css";

type Props = {
  options: { id: string; text: string }[];
  onChoose: (optionId: string) => void;
};

/** Only visible text is rendered: correctness is never exposed in the DOM. */
export function QuestionOptions({ options, onChoose }: Props) {
  return (
    <div className={styles.options}>
      {options.map((o) => (
        <button key={o.id} type="button" className={styles.option} onClick={() => onChoose(o.id)}>
          {o.text}
        </button>
      ))}
    </div>
  );
}
