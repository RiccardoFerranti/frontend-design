"use client";

import { DsButton } from "@workspace/design-system";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function LessonContentNav() {
  return (
    <div className="bg-surface-elevated px-6 py-4 flex items-center justify-between z-10">
      <DsButton
        variant="outline"
        className="flex items-center gap-2 border-none"
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
