"use client";

import { DsTreeItem } from "@workspace/design-system";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { courseTree } from "@/lib/mock-data";

export function LessonsTree() {
  const searchParams = useSearchParams();
  const activeId = searchParams.get("lesson") ?? "m0-intro-data-video-1";

  return (
    <div className="flex flex-col pr-4">
      {courseTree.map((node) => (
        <DsTreeItem
          activeId={activeId}
          key={node.id}
          node={node}
          renderLink={({ href, className, children }) => (
            <Link className={className} href={href}>
              {children}
            </Link>
          )}
        />
      ))}
    </div>
  );
}
