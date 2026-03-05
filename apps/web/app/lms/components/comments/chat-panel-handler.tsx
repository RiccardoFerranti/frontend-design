"use client";

import { DsButton } from "@workspace/design-system";
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
    <DsButton
      type="button"
      variant="ghost"
      size="icon-sm"
      onClick={onToggle}
      aria-label={
        collapsed ? "Expand comments panel" : "Collapse comments panel"
      }
      className="
        bg-transparent text-muted-foreground shadow-sm backdrop-blur -ml-1
        hover:bg-transparent active:bg-transparent
        focus:bg-transparent focus-visible:bg-transparent
        focus-visible:ring-0 focus-visible:ring-transparent focus-visible:outline-none
      "
    >
      {collapsed ? (
        <ChevronLeft className="size-6" />
      ) : (
        <ChevronRight className="size-6" />
      )}
    </DsButton>
  );
}
