"use client";

import { DsButton } from "@workspace/design-system";
import { useSidebar } from "@workspace/ui/components/sidebar";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

interface LessonsPanelHandlerProps {
  collapsed: boolean;
}

export function LessonsPanelHandler({ collapsed }: LessonsPanelHandlerProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <DsButton
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      className="absolute top-20 -right-3 z-10 grid size-6 -translate-y-1/2 place-items-center bg-transparent text-muted-foreground backdrop-blur hover:bg-transparent focus-visible:ring-0 active:bg-transparent"
      onClick={toggleSidebar}
      size="icon-sm"
      type="button"
      variant="ghost"
    >
      <div className="grid size-6 place-items-center rounded-full bg-workspace-background">
        {collapsed ? (
          <ChevronsRight className="size-4" />
        ) : (
          <ChevronsLeft className="size-4" />
        )}
      </div>
    </DsButton>
  );
}
