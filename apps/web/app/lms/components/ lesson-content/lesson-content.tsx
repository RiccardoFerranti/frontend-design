import { DsCard } from "@workspace/design-system";
import Image from "next/image";

import { LessonContentNav } from "./lesson-content-nav";

export function LessonContent() {
  return (
    <DsCard
      className="w-full bg-transparent shadow-none ring-0"
      contentProps={{ className: "p-0" }} // remove CardContent padding
    >
      <div className="w-full">
        <div className="relative w-full overflow-hidden px-12">
          <div className="relative mx-auto aspect-video">
            <Image
              alt="Lesson preview"
              className="object-cover"
              fill
              priority
              src="/assets/content/content-lesson.png"
            />
          </div>
        </div>
        <LessonContentNav />
      </div>
    </DsCard>
  );
}
