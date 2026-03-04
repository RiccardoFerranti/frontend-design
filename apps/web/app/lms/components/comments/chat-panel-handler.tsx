"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type ChatPanelHandlerProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export function ChatPanelHandler({
  collapsed,
  onToggle,
}: ChatPanelHandlerProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="cursor-pointer inline-flex self-start"
      aria-label={
        collapsed ? "Expand comments panel" : "Collapse comments panel"
      }
    >
      {collapsed ? (
        <ChevronLeft className="size-8" />
      ) : (
        <ChevronRight className="size-8" />
      )}
    </button>
  );
}
