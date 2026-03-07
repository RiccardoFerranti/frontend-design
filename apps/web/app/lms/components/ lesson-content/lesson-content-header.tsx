import { DsBadge, DsProgress } from "@workspace/design-system";
import { Suspense } from "react";

import { LessonContentBreadcrumb } from "./lesson-content-breadcrumb";

export function LessonContentHeader() {
  return (
    <div className="space-y-2">
      {/* Breadcrumb */}
      <div className="min-h-5">
        <Suspense fallback={<div className="h-5" />}>
          <LessonContentBreadcrumb />
        </Suspense>
      </div>

      {/* Title */}
      <h1 className="font-semibold text-2xl">Dati 1</h1>

      {/* Progress */}
      <div className="flex items-center gap-4">
        <DsProgress className="w-[220px]" value={32} />
        <DsBadge status="in-progress">In Progress</DsBadge>
      </div>
    </div>
  );
}
