"use client";

import { DsTreeItem } from "@workspace/design-system";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { courseTree } from "@/lib/mock-data";

export function LessonsTree() {
  const searchParams = useSearchParams();
  const activeId =
    searchParams.get("lesson") ??
    courseTree[1]?.children?.[0]?.children?.[0]?.id;

  return (
    <div className="flex flex-col">
      {courseTree.map((node) => (
        <DsTreeItem
          activeId={activeId}
          key={node.id}
          node={node}
          renderLink={({ href, className, children, title }) => (
            <Link className={className} href={href} title={title}>
              {children}
            </Link>
          )}
        />
      ))}
    </div>
  );
}
