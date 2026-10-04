import { notFound } from "next/navigation";
import { Game } from "@/components/Game";
import { chapterIds, getChapter } from "@/content/chapters";

export const dynamicParams = false;

export function generateStaticParams() {
  return chapterIds.map((chapter) => ({ chapter }));
}

export default async function PlayPage({ params }: { params: Promise<{ chapter: string }> }) {
  const { chapter } = await params;
  if (!getChapter(chapter)) notFound();
  return <Game chapterId={chapter} />;
}
