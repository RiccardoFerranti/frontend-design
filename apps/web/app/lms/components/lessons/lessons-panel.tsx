"use client";

import Image from "next/image";
import { LessonsPanelHandler } from "@/app/lms/components/lessons/lessons-panel-handler";
import { LessonsTree } from "@/app/lms/components/lessons/lessons-tree";
import { SIDEBAR_COLLAPSED, SIDEBAR_OPEN } from "@/app/lms/components/consts";

import { DsSidebar } from "@workspace/design-system";
import { SidebarProvider } from "@workspace/ui/components/sidebar";
import { LmsScrollArea } from "../lms-scroll-area";
import { cn } from "@workspace/ui/lib/utils";

type LessonsPanelProps = {
  collapsed: boolean;
  onCollapsedChange: (v: boolean) => void;
};

export function LessonsPanel({
  collapsed,
  onCollapsedChange,
}: LessonsPanelProps) {
  const width = collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_OPEN;

  return (
    <SidebarProvider>
      <DsSidebar
        style={{ width }}
        className="relative flex min-w-0 flex-col border-r border-border bg-sidebar text-sidebar-foreground transition-[width] duration-200 px-4 gap-8"
      >
        <LessonsPanelHandler
          collapsed={collapsed}
          onToggle={() => onCollapsedChange(!collapsed)}
        />

        <div className="bg-sidebar py-6 flex items-center gap-3">
          <Image
            src="/assets/logos/epicode-logo.png"
            alt="Epicode"
            width={24}
            height={24}
          />
          {!collapsed && (
            <span className="truncate text-sm font-semibold">
              Data Analytics &amp; AI
            </span>
          )}
        </div>
        <div
          className={cn(
            "min-h-0 flex-1 transition-all duration-200",
            collapsed
              ? "opacity-0 -translate-x-2 pointer-events-none"
              : "opacity-100 translate-x-0",
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
