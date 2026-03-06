"use client";

import * as React from "react";
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
  renderLink?: (props: {
    href: string;
    className?: string;
    children: React.ReactNode;
  }) => React.ReactNode;
};

export function DsTreeItem({
  node,
  level = 0,
  activeId,
  defaultOpen,
  renderLink,
}: DsTreeItemProps) {
  const hasChildren = (node.children?.length ?? 0) > 0;
  const isExpandable = node.children !== undefined;
  const [open, setOpen] = React.useState(Boolean(defaultOpen ?? level === 0));

  const Icon = node.icon;
  const isActive = activeId === node.id;
  const isDisabled = Boolean(node.disabled || node.status === "locked");

  const indentStep = 16;
  const indentPx = level * indentStep;

  const chevronColW = 16;
  const railLeft = indentPx + chevronColW / 2;

  const labelClassName = "w-[55px] min-w-[55px] max-w-[55px] truncate";

  const labelContent = node.href ? (
    renderLink ? (
      renderLink({
        href: node.href,
        className: labelClassName,
        children: node.label,
      })
    ) : (
      <a href={node.href} className={labelClassName}>
        {node.label}
      </a>
    )
  ) : (
    <div className={labelClassName}>{node.label}</div>
  );

  return (
    <div className="relative">
      <div
        className={cn(
          "relative flex items-center text-sm",
          isDisabled && "pointer-events-none opacity-50",
        )}
        style={{ paddingLeft: indentPx }}
      >
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
                  !hasChildren && "opacity-60",
                )}
              />
            </button>
          ) : null}
        </div>

        <div
          className={cn(
            "flex w-fit max-w-full shrink-0 items-center rounded-lg px-2 py-2 transition-colors",
            "hover:bg-accent/40",
            isActive && "bg-accent text-accent-foreground hover:bg-accent",
            node.status && "min-w-[185px]",
          )}
        >
          <div className="mr-2 flex w-5 shrink-0 items-center justify-center">
            {Icon ? <Icon className="size-5" /> : null}
          </div>

          {labelContent}

          {node.status ? (
            <DsBadge status={node.status} className="ml-1 shrink-0">
              {node.status === "in-progress"
                ? "In progress"
                : node.status.charAt(0).toUpperCase() + node.status.slice(1)}
            </DsBadge>
          ) : null}
        </div>
      </div>

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
                renderLink={renderLink}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

DsTreeItem.displayName = "DsTreeItem";
