"use client";

import Image from "next/image";
import { LessonsPanelHandler } from "@/app/lms/components/lessons/lessons-panel-handler";
import { LessonsTree } from "@/app/lms/components/lessons/lessons-tree";
import { SIDEBAR_COLLAPSED, SIDEBAR_OPEN } from "@/app/lms/components/consts";

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
    <aside
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
      <div className="min-h-0 flex-1 overflow-auto">
        <LessonsTree />
      </div>
    </aside>
  );
}
