"use client";

import { courseTree } from "@/lib/mock-data";
import { DsTreeItem } from "@workspace/design-system";

export function LessonsTree() {
  return (
    <div className="flex flex-col">
      {courseTree.map((node) => (
        <DsTreeItem key={node.id} node={node} />
      ))}
    </div>
  );
}
