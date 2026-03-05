"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";
import { ChevronDown } from "lucide-react";
import { DsBadge } from "@workspace/design-system";

export type NodeStatus = "completed" | "in-progress" | "locked" | "new";

export type TreeNode = {
  id: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  status?: NodeStatus;
  disabled?: boolean;
  children?: TreeNode[];
};

export type DsTreeItemProps = {
  node: TreeNode;
  level?: number;
  activeId?: string;
  defaultOpen?: boolean;
};

export function DsTreeItem({
  node,
  level = 0,
  activeId,
  defaultOpen,
}: DsTreeItemProps) {
  const isExpandable = node.children !== undefined; // ✅ arrow should show
  const hasChildren = (node.children?.length ?? 0) > 0; // ✅ render only if real children exist
  const [open, setOpen] = React.useState(Boolean(defaultOpen ?? level === 0));

  const Icon = node.icon;
  const isActive = activeId === node.id;
  const isDisabled = Boolean(node.disabled || node.status === "locked");

  const indentStep = 16;
  const indentPx = level * indentStep;

  const chevronColW = 16;
  const railLeft = indentPx + chevronColW / 2;

  const RowTag = node.href ? Link : "div";
  const rowProps = node.href ? ({ href: node.href } as const) : {};

  return (
    <div className="relative">
      <div
        className={cn(
          "relative flex items-center rounded-md px-2 py-2 text-sm transition-colors",
          "hover:bg-sidebar-accent/30",
          isActive && "bg-accent text-accent-foreground",
          isDisabled && "opacity-50 pointer-events-none",
        )}
        style={{ paddingLeft: indentPx }}
      >
        {/* ✅ Arrow column (visible for expandable nodes, even if empty) */}
        <div className="mr-2 flex w-4 items-center justify-center">
          {isExpandable ? (
            <button
              type="button"
              aria-label={open ? "Collapse" : "Expand"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid size-4 place-items-center"
            >
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  open && "rotate-180",
                  !hasChildren && "opacity-60", // optional: dim if empty placeholder
                )}
              />
            </button>
          ) : null}
        </div>

        <div className="mr-2 flex w-5 items-center justify-center">
          {Icon ? <Icon className="size-5 shrink-0" /> : null}
        </div>

        <RowTag
          {...rowProps}
          className={cn(
            "min-w-0 flex-1 truncate",
            node.href && "hover:underline",
          )}
        >
          {node.label}
        </RowTag>

        {node.status ? (
          <DsBadge status={node.status} className="ml-1 shrink-0">
            {node.status === "in-progress"
              ? "In progress"
              : node.status.charAt(0).toUpperCase() + node.status.slice(1)}
          </DsBadge>
        ) : null}
      </div>

      {/* ✅ Only render rails + children if there are actual children */}
      {hasChildren && open ? (
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 border-l border-sidebar-border/80"
            style={{ left: railLeft }}
          />
          <div className="space-y-1">
            {node.children!.map((child) => (
              <DsTreeItem
                key={child.id}
                node={child}
                level={level + 1}
                activeId={activeId}
                defaultOpen={defaultOpen}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
