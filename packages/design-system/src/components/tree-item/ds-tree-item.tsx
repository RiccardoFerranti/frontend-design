"use client";

import { DsBadge } from "@workspace/design-system";
import { cn } from "@workspace/ui/lib/utils";
import { ChevronDown } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { useState } from "react";

export type NodeStatus = "completed" | "in-progress" | "locked" | "new";

export interface TreeNode {
  children?: TreeNode[];
  disabled?: boolean;
  href?: string;
  icon?: ComponentType<{ className?: string }>;
  id: string;
  label: string;
  status?: NodeStatus;
}

export interface DsTreeItemProps {
  activeId?: string;
  defaultOpen?: boolean;
  level?: number;
  node: TreeNode;
  renderLink?: (props: {
    href: string;
    className?: string;
    children: ReactNode;
    title?: string;
  }) => ReactNode;
}

const LABEL_CLASS = "mr-2 truncate";

/**
 * Renders the label content for a tree node.
 * If the node has an href, it renders it as a link (using a custom renderLink if provided),
 * otherwise displays the label text in a styled div.
 * @param {TreeNode} node - The tree node whose label to render.
 * @param {DsTreeItemProps["renderLink"]} renderLink - Optional custom render function for links.
 * @returns {ReactNode} The rendered node label (as a div, custom link, or anchor).
 */
function renderLabelContent(
  node: TreeNode,
  renderLink: DsTreeItemProps["renderLink"]
): ReactNode {
  const labelTitle = node.label;
  if (!node.href) {
    return (
      <div className={LABEL_CLASS} title={labelTitle}>
        {node.label}
      </div>
    );
  }
  if (renderLink) {
    return renderLink({
      href: node.href,
      className: LABEL_CLASS,
      children: node.label,
      title: labelTitle,
    });
  }
  return (
    <a className={LABEL_CLASS} href={node.href} title={labelTitle}>
      {node.label}
    </a>
  );
}

/**
 * Returns a user-friendly label for the given node status.
 *
 * @param {NodeStatus} status - The status of the tree node ("locked", "in-progress", "completed", etc.)
 * @returns {string} The formatted status label (e.g., "Locked", "In progress", "Completed").
 */
function getStatusBadgeLabel(status: NodeStatus): string {
  if (status === "in-progress") {
    return "In progress";
  }
  return status.charAt(0).toUpperCase() + status.slice(1);
}

export function DsTreeItem({
  node,
  level = 0,
  activeId,
  defaultOpen,
  renderLink,
}: DsTreeItemProps) {
  const hasChildren = (node.children?.length ?? 0) > 0;
  const isExpandable = node.children !== undefined;
  const [open, setOpen] = useState(Boolean(defaultOpen ?? level === 0));

  const Icon = node.icon;
  const isActive = activeId === node.id;
  const isDisabled = Boolean(node.disabled || node.status === "locked");

  const indentStep = 16;
  const indentPx = level * indentStep;

  const chevronColW = 16;
  const railLeft = indentPx + chevronColW / 2;

  const labelContent = renderLabelContent(node, renderLink);

  return (
    <div className="relative">
      <div
        className={cn(
          "relative flex items-center text-sm",
          isDisabled && "pointer-events-none opacity-50"
        )}
        style={{ paddingLeft: indentPx }}
      >
        <div className="mr-2 flex w-4 items-center justify-center">
          {isExpandable ? (
            <button
              aria-expanded={open}
              aria-label={open ? "Collapse" : "Expand"}
              className="grid size-4 place-items-center"
              onClick={() => setOpen((v) => !v)}
              type="button"
            >
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  hasChildren && open && "rotate-180",
                  !hasChildren && "opacity-60"
                )}
              />
            </button>
          ) : null}
        </div>

        <div
          className={cn(
            "flex min-w-0 flex-1 items-center rounded-lg px-2 py-2 transition-colors",
            "hover:bg-accent/40",
            isActive && "bg-accent text-accent-foreground hover:bg-accent",
            node.status && "min-w-[185px]"
          )}
        >
          <div className="mr-2 flex w-5 shrink-0 items-center justify-center">
            {Icon ? <Icon className="size-5" /> : null}
          </div>

          {labelContent}

          {node.status ? (
            <DsBadge className="ml-1 shrink-0" status={node.status}>
              {getStatusBadgeLabel(node.status)}
            </DsBadge>
          ) : null}
        </div>
      </div>

      {hasChildren && open ? (
        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-0 border-sidebar-border/80 border-l"
            style={{ left: railLeft }}
          />
          <div className="space-y-1">
            {node.children?.map((child) => (
              <DsTreeItem
                activeId={activeId}
                defaultOpen={defaultOpen}
                key={child.id}
                level={level + 1}
                node={child}
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
