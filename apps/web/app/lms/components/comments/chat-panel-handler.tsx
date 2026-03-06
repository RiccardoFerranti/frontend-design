"use client";

import { DsButton } from "@workspace/design-system";
import { useSidebar } from "@workspace/ui/components/sidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ChatPanelHandlerProps = {
  collapsed: boolean;
};

export function ChatPanelHandler({ collapsed }: ChatPanelHandlerProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <DsButton
      type="button"
      variant="ghost"
      size="icon-sm"
      onClick={toggleSidebar}
      aria-label={
        collapsed ? "Expand comments panel" : "Collapse comments panel"
      }
      className="-ml-1 bg-transparent text-muted-foreground shadow-none hover:bg-transparent!"
    >
      {collapsed ? (
        <ChevronLeft className="size-6" />
      ) : (
        <ChevronRight className="size-6" />
      )}
    </DsButton>
  );
}
