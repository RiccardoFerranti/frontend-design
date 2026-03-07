"use client";

import { useIsMobile } from "@workspace/ui/hooks/use-mobile";
import { type ReactNode, useState } from "react";
import { CenterHeader } from "@/app/lms/components/center-header";
import { ChatPanel } from "@/app/lms/components/comments/chat-panel";
import { LessonsPanel } from "@/app/lms/components/lessons/lessons-panel";
import { SIDEBAR_COLLAPSED, SIDEBAR_OPEN } from "./consts";
import { LmsScrollArea } from "./lms-scroll-area";

interface LMSWrapperProps {
  children: ReactNode;
}

export function LMSWrapper({ children }: LMSWrapperProps) {
  const isMobile = useIsMobile(); // <768: hide both sidebars

  // user preferences: toggle controls open/close; below desktop/mobile just hide or show, state is still user-driven
  const [lessonsUserCollapsed, setLessonsUserCollapsed] = useState(false);
  const [commentsUserCollapsed, setCommentsUserCollapsed] = useState(true);

  // effective collapsed = user preference only, so open/close buttons always work
  const lessonsCollapsed = lessonsUserCollapsed;
  const commentsCollapsed = commentsUserCollapsed;

  // grid layout
  const gridTemplateColumns = isMobile
    ? "minmax(0,1fr)"
    : `${lessonsCollapsed ? SIDEBAR_COLLAPSED : SIDEBAR_OPEN} minmax(0,1fr) ${
        commentsCollapsed ? SIDEBAR_COLLAPSED : SIDEBAR_OPEN
      }`;

  return (
    <div
      className="grid h-dvh min-h-0 transition-[grid-template-columns] duration-200 ease-linear"
      style={{ gridTemplateColumns, gridTemplateRows: "minmax(0, 1fr)" }}
    >
      {!isMobile && (
        <LessonsPanel
          collapsed={lessonsCollapsed}
          onCollapsedChange={setLessonsUserCollapsed}
        />
      )}

      <main className="flex min-w-0 flex-col space-y-4 bg-workspace-background px-6 py-2">
        <CenterHeader />
        <LmsScrollArea className="h-full overflow-hidden">
          <div className="min-h-0 flex-1 overflow-auto">{children}</div>
        </LmsScrollArea>
      </main>

      {!isMobile && (
        <ChatPanel
          collapsed={commentsCollapsed}
          onCollapsedChange={setCommentsUserCollapsed}
        />
      )}
    </div>
  );
}
