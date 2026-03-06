"use client";

import * as React from "react";
import { Users, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { SIDEBAR_COLLAPSED, SIDEBAR_OPEN } from "@/app/lms/components/consts";
import {
  DsButton,
  DsChatBubble,
  DsChatInput,
  SidebarProvider,
} from "@workspace/design-system";
import { ChatPanelHandler } from "@/app/lms/components/comments/chat-panel-handler";
import { LmsScrollArea } from "@/app/lms/components/lms-scroll-area";
import { mockChatData } from "@/lib/mock-chat-data";

type ChatPanelProps = {
  collapsed: boolean;
  onCollapsedChange: (v: boolean) => void;
};

const SIDEBAR_WIDTH_TRANSITION = "width 200ms ease-linear";

export function ChatPanel({ collapsed, onCollapsedChange }: ChatPanelProps) {
  const [value, setValue] = React.useState("");
  const [composerExpanded, setComposerExpanded] = React.useState(false);

  const toggleComposer = () => setComposerExpanded((v) => !v);

  const width = collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_OPEN;

  return (
    <SidebarProvider
      open={!collapsed}
      onOpenChange={(open) => onCollapsedChange(!open)}
      className="h-full min-h-0 overflow-hidden"
    >
      <div
        className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden border-l border-border bg-sidebar text-sidebar-foreground"
        style={{
          width,
          transition: SIDEBAR_WIDTH_TRANSITION,
        }}
      >
        {/* top handler only */}
        <div className="shrink-0 px-4 pt-2 bg-card">
          <ChatPanelHandler collapsed={collapsed} />
        </div>

        {/* Body: messages on top, Comments at bottom; when expanded, Comments slides up and covers messages */}
        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col overflow-hidden transition-opacity duration-200",
            collapsed ? "pointer-events-none opacity-0" : "opacity-100",
          )}
        >
          {/* Messages area: animates height when Comments expands */}
          <div
            className="min-h-0 flex-1 overflow-hidden transition-[max-height] duration-400 ease-in-out"
            style={{ maxHeight: composerExpanded ? 0 : "100vh" }}
          >
            <LmsScrollArea className="h-full min-h-0 overflow-hidden">
              <div className="flex flex-col gap-3 p-4">
                {mockChatData.map((message) => (
                  <DsChatBubble key={message.id} role={message.role}>
                    {message.content}
                  </DsChatBubble>
                ))}
              </div>
            </LmsScrollArea>
          </div>

          {/* Composer: at bottom when collapsed; slides up and covers messages when expanded */}
          <div
            className="flex min-h-0 shrink-0 flex-col bg-sidebar"
            style={{
              maxHeight: composerExpanded ? "100%" : "240px",
              transition: "max-height 400ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="flex shrink-0 items-center gap-4 bg-card px-4 py-1">
              <div className="flex size-6 items-center justify-center px-1">
                <Users className="text-primary" />
              </div>

              <span className="text-sm font-semibold">Comments</span>

              <DsButton
                variant="ghost"
                size="icon-sm"
                aria-label="Toggle composer"
                onClick={toggleComposer}
                className="ml-auto rounded-md p-2 text-primary/60 hover:text-primary/90 bg-transparent hover:bg-transparent!"
              >
                {composerExpanded ? (
                  <ChevronDown className="size-5" />
                ) : (
                  <ChevronUp className="size-5" />
                )}
              </DsButton>
            </div>

            <div className="min-h-0 flex-1 overflow-hidden">
              <DsChatInput
                value={value}
                textareaProps={{
                  className: cn(
                    "bg-transparent transition-[height] duration-400 ease-in-out",
                    composerExpanded ? "h-44" : "h-16",
                  ),
                }}
                buttonProps={{
                  variant: "secondary",
                }}
                onChange={setValue}
                onSend={() => setValue("")}
                onAttach={(file) => {
                  console.log("Attached file:", file);
                }}
                placeholder="Leave a comment..."
              />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
