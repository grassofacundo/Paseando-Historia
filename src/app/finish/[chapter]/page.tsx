import { notFound } from "next/navigation";
import { FinishContent } from "@/components/FinishContent";
import { chapterIds, getChapter } from "@/content/chapters";
import styles from "./page.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return chapterIds.map((chapter) => ({ chapter }));
}

export default async function FinishPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter: id } = await params;
  const chapter = getChapter(id);
  if (!chapter) notFound();
  return (
    <main className={styles.main}>
      <FinishContent chapter={chapter} />
    </main>
  );
}
