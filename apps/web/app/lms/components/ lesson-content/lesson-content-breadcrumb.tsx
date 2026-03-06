"use client";

import { useSearchParams } from "next/navigation";
import { courseTree, NavNode } from "@/lib/mock-data";

/**
 * Recursively finds the path from the root of the tree to the node with the specified targetId.
 *
 * @param {NavNode[]} tree - The array of navigation nodes representing the tree.
 * @param {string} targetId - The id of the node to find within the tree.
 * @returns {NavNode[] | null} An array of NavNodes representing the path to the target node, or null if not found.
 */
function findNodePath(tree: NavNode[], targetId: string): NavNode[] | null {
  for (const node of tree) {
    if (node.id === targetId) return [node];

    if (node.children) {
      const childPath = findNodePath(node.children, targetId);
      if (childPath) return [node, ...childPath];
    }
  }

  return null;
}

export function LessonContentBreadcrumb() {
  const searchParams = useSearchParams();
  const lessonId = searchParams.get("lesson");

  const path = lessonId ? findNodePath(courseTree, lessonId) : null;

  if (!path) return null;

  return (
    <div className="text-sm text-muted-foreground">
      {path.map((node, i) => (
        <span key={node.id}>
          {node.label}
          {i < path.length - 1 && <span className="mx-1">›</span>}
        </span>
      ))}
    </div>
  );
}
