import { LessonContentHeader } from "@/app/lms/components/ lesson-content/lesson-content-header";
import { LessonContent } from "./components/ lesson-content/lesson-content";

export default function LmsPage() {
  return (
    <div className="mx-auto w-full max-w-[980px] space-y-6">
      <LessonContentHeader />
      <LessonContent />
    </div>
  );
}
