"use client";

import { DsButton } from "@workspace/design-system";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function LessonContentNav() {
  return (
    <div className="z-10 flex items-center justify-between bg-surface-elevated px-6 py-4">
      <DsButton
        className="flex items-center gap-2 border-none"
        variant="outline"
      >
        <ChevronLeft className="size-4" />
        Previous Lesson
      </DsButton>

      <DsButton className="flex items-center gap-2 border-none">
        Next Lesson
        <ChevronRight className="size-4" />
      </DsButton>
    </div>
  );
}
