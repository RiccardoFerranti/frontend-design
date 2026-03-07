"use client";

import { DsSidebar, SidebarProvider } from "@workspace/design-system";
import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";
import { SIDEBAR_COLLAPSED, SIDEBAR_OPEN } from "@/app/lms/components/consts";
import { LessonsPanelHandler } from "@/app/lms/components/lessons/lessons-panel-handler";
import { LessonsTree } from "@/app/lms/components/lessons/lessons-tree";
import { LmsScrollArea } from "../lms-scroll-area";

interface LessonsPanelProps {
  collapsed: boolean;
  onCollapsedChange: (v: boolean) => void;
}

export function LessonsPanel({
  collapsed,
  onCollapsedChange,
}: LessonsPanelProps) {
  const width = collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_OPEN;

  return (
    <SidebarProvider
      onOpenChange={(open) => onCollapsedChange(!open)}
      open={!collapsed}
    >
      <DsSidebar
        className="flexs relative h-full flex-col gap-8 border-border border-r bg-sidebar px-4 text-sidebar-foreground"
        collapsible="icon"
        side="left"
        style={{ width }}
        variant="sidebar"
      >
        <LessonsPanelHandler collapsed={collapsed} />

        <div className="flex items-center gap-3 bg-sidebar py-6">
          <Image
            alt="Epicode"
            height={24}
            src="/assets/logos/epicode-logo.png"
            width={24}
          />
          {!collapsed && (
            <span className="truncate font-semibold text-sm">
              Data Analytics &amp; AI
            </span>
          )}
        </div>
        <div
          className={cn(
            "min-h-0 flex-1 transition-all duration-200",
            collapsed ? "pointer-events-none opacity-0" : "opacity-100"
          )}
        >
          <LmsScrollArea className="h-full overflow-hidden">
            <LessonsTree />
          </LmsScrollArea>
        </div>
      </DsSidebar>
    </SidebarProvider>
  );
}
