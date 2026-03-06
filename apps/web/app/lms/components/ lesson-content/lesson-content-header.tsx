import { DsProgress, DsBadge } from "@workspace/design-system";
import { courseTree } from "@/lib/mock-data";

export function LessonContentHeader() {
  return (
    <div className="space-y-2">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        {courseTree[1]?.label}
        <span className="mx-1">›</span>
        {courseTree[1]?.children?.[0]?.label}
        <span className="mx-1">›</span>
        {courseTree[1]?.children?.[0]?.children?.[0]?.label}
        <span className="mx-1">›</span>
        {courseTree[1]?.children?.[0]?.children?.[0]?.children?.[0]?.label}
      </div>

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
