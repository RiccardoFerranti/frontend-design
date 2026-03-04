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
      onClick={onToggle}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      className="group absolute -right-3 top-20 z-10 grid size-6 -translate-y-1/2 place-items-center rounded-full bg-background/60 text-muted-foreground shadow-sm backdrop-blur hover:bg-background/80"
    >
      <div className="grid size-6 place-items-center rounded-full bg-card/80 group-hover:bg-card">
        {collapsed ? (
          <ChevronsRight className="size-4" />
        ) : (
          <ChevronsLeft className="size-4" />
        )}
      </div>
    </DsButton>
  );
}
