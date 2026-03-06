import Image from "next/image";
import { DsCard } from "@workspace/design-system";

import { LessonContentNav } from "./lesson-content-nav";

export function LessonContent() {
  return (
    <DsCard
      className="bg-transparent ring-0 shadow-none w-full"
      contentProps={{ className: "p-0" }} // remove CardContent padding
    >
      <div className="w-full">
        <div className="relative w-full overflow-hidden px-12">
          <div className="relative aspect-video mx-auto">
            <Image
              src="/assets/content/content-lesson.png"
              alt="Lesson preview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
        <LessonContentNav />
      </div>
    </DsCard>
  );
}
