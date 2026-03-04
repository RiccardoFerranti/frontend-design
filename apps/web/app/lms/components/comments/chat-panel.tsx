"use client";

import { Users, ChevronUp } from "lucide-react";
import * as React from "react";
import { ChatPanelHandler } from "@/app/lms/components/comments/chat-panel-handler";
import { SIDEBAR_COLLAPSED, SIDEBAR_OPEN } from "@/app/lms/components/consts";

type ChatPanelProps = {
  collapsed: boolean;
  onCollapsedChange: (v: boolean) => void;
};

export function ChatPanel({ collapsed, onCollapsedChange }: ChatPanelProps) {
  const width = collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_OPEN;

  return (
    <aside
      style={{ width }}
      className="relative flex min-w-0 flex-col border-l border-border bg-sidebar text-sidebar-foreground transition-[width] duration-200"
    >
      {/* Header */}
      <div className="border-b border-border bg-sidebar px-4 pt-3 pb-3 flex flex-col gap-3">
        <ChatPanelHandler
          collapsed={collapsed}
          onToggle={() => onCollapsedChange(!collapsed)}
        />
        <div className="flex items-center justify-center gap-4">
          <div className="size-8 px-1 flex items-center justify-center">
            <Users className="text-primary" />
          </div>
          {!collapsed && (
            <span className="text-sm font-semibold">Comments</span>
          )}
          {/* right purple chevron */}
          {!collapsed && (
            <button
              type="button"
              aria-label="Collapse comments"
              className="rounded-md p-2 text-primary/90 hover:bg-white/5 ml-auto"
            >
              <ChevronUp className="size-5" />
            </button>
          )}
        </div>
      </div>

      {/* Body */}
      {!collapsed ? (
        <div className="flex-1 p-4">
          <textarea
            placeholder="Leave a comment..."
            className="min-h-[220px] w-full resize-none bg-transparent text-sm outline-none placeholder:text-muted-foreground rounded-lg border border-border p-3"
          />
          <div className="mt-3 flex justify-end">
            <button
              type="button"
              disabled
              className="h-9 rounded-md bg-muted px-4 text-sm font-medium text-muted-foreground opacity-60 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
