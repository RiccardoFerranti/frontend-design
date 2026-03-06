"use client";

import { courseTree } from "@/lib/mock-data";
import { DsTreeItem } from "@workspace/design-system";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function LessonsTree() {
  const searchParams = useSearchParams();
  const activeId = searchParams.get("lesson") ?? "m0-intro-data-video-1";

  return (
    <div className="flex flex-col pr-4">
      {courseTree.map((node) => (
        <DsTreeItem
          key={node.id}
          node={node}
          activeId={activeId}
          renderLink={({ href, className, children }) => (
            <Link href={href} className={className}>
              {children}
            </Link>
          )}
        />
      ))}
    </div>
  );
}
