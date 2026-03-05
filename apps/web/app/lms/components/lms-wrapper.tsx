"use client";

import { ReactNode, useState } from "react";
import { LessonsPanel } from "@/app/lms/components/lessons/lessons-panel";
import { ChatPanel } from "@/app/lms/components/comments/chat-panel";
import { CenterHeader } from "@/app/lms/components/center-header";
import { SIDEBAR_COLLAPSED, SIDEBAR_OPEN } from "./consts";

type LMSWrapperProps = {
  children: ReactNode;
};

export function LMSWrapper({ children }: LMSWrapperProps) {
  const [lessonsUserCollapsed, setLessonsUserCollapsed] = useState(false);
  const [commentsUserCollapsed, setCommentsUserCollapsed] = useState(false);

  const gridTemplateColumns = `${lessonsUserCollapsed ? SIDEBAR_COLLAPSED : SIDEBAR_OPEN} minmax(0, 1fr) ${
    commentsUserCollapsed ? SIDEBAR_COLLAPSED : SIDEBAR_OPEN
  }`;

  return (
    <div className="grid h-svh" style={{ gridTemplateColumns }}>
      <LessonsPanel
        collapsed={lessonsUserCollapsed}
        onCollapsedChange={setLessonsUserCollapsed}
      />

      <main className="flex min-w-0 flex-col px-6 py-2 space-y-4">
        <CenterHeader />
        <div className="min-h-0 flex-1 overflow-auto">{children}</div>
      </main>

      <ChatPanel
        collapsed={commentsUserCollapsed}
        onCollapsedChange={setCommentsUserCollapsed}
      />
    </div>
  );
}
