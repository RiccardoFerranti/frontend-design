import { DsProgress, DsBadge } from "@workspace/design-system";

import { LessonContentBreadcrumb } from "./lesson-content-breadcrumb";

export function LessonContentHeader() {
  return (
    <div className="space-y-2">
      {/* Breadcrumb */}
      <LessonContentBreadcrumb />

      {/* Title */}
      <h1 className="text-2xl font-semibold">Dati 1</h1>

      {/* Progress */}
      <div className="flex items-center gap-4">
        <DsProgress value={32} className="w-[220px]" />
        <DsBadge status="in-progress">In Progress</DsBadge>
      </div>
    </div>
  );
}
