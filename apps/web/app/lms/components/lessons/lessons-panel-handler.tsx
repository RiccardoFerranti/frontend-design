"use client";

import { DsButton } from "@workspace/design-system";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

type LessonsPanelHandlerProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export function LessonsPanelHandler({
  collapsed,
  onToggle,
}: LessonsPanelHandlerProps) {
  return (
    <DsButton
      type="button"
      variant="ghost"
      size="icon-sm"
      onClick={onToggle}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      className="
        absolute -right-3 top-20 z-10 grid size-6 -translate-y-1/2 place-items-center
        bg-transparent text-muted-foreground shadow-sm backdrop-blur
        hover:bg-transparent active:bg-transparent
        focus:bg-transparent focus-visible:bg-transparent
        focus-visible:ring-0 focus-visible:ring-transparent focus-visible:outline-none
      "
    >
      <div className="grid size-6 place-items-center rounded-full bg-background">
        {collapsed ? (
          <ChevronsRight className="size-4" />
        ) : (
          <ChevronsLeft className="size-4" />
        )}
      </div>
    </DsButton>
  );
}
