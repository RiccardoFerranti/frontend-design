"use client";

import {
  DsButton,
  DsChatBubble,
  DsChatInput,
  SidebarProvider,
} from "@workspace/design-system";
import { cn } from "@workspace/ui/lib/utils";
import { ChevronDown, ChevronUp, Users } from "lucide-react";
import { useState } from "react";
import { ChatPanelHandler } from "@/app/lms/components/comments/chat-panel-handler";
import { SIDEBAR_COLLAPSED, SIDEBAR_OPEN } from "@/app/lms/components/consts";
import { LmsScrollArea } from "@/app/lms/components/lms-scroll-area";
import { mockChatData } from "@/lib/mock-chat-data";

interface ChatPanelProps {
  collapsed: boolean;
  onCollapsedChange: (v: boolean) => void;
}

const SIDEBAR_WIDTH_TRANSITION = "width 200ms ease-linear";

export function ChatPanel({ collapsed, onCollapsedChange }: ChatPanelProps) {
  const [value, setValue] = useState("");
  const [composerExpanded, setComposerExpanded] = useState(false);

  const toggleComposer = () => setComposerExpanded((v) => !v);

  const width = collapsed ? SIDEBAR_COLLAPSED : SIDEBAR_OPEN;

  return (
    <SidebarProvider
      className="h-full min-h-0 overflow-hidden"
      onOpenChange={(open) => onCollapsedChange(!open)}
      open={!collapsed}
    >
      <div
        className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden border-border border-l bg-sidebar text-sidebar-foreground"
        style={{
          width,
          transition: SIDEBAR_WIDTH_TRANSITION,
        }}
      >
        {/* top handler only */}
        <div className="shrink-0 bg-card px-4 pt-2">
          <ChatPanelHandler collapsed={collapsed} />
        </div>

        {/* Body: messages on top, Comments at bottom; when expanded, Comments slides up and covers messages */}
        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col overflow-hidden transition-opacity duration-200",
            collapsed ? "pointer-events-none opacity-0" : "opacity-100"
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
                  <DsChatBubble key={message.id} sender={message.role}>
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

              <span className="font-semibold text-sm">Comments</span>

              <DsButton
                aria-label="Toggle composer"
                className="ml-auto rounded-md bg-transparent p-2 text-primary/60 hover:bg-transparent! hover:text-primary/90"
                onClick={toggleComposer}
                size="icon-sm"
                variant="ghost"
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
                buttonProps={{
                  variant: "secondary",
                }}
                onAttach={(file) => {
                  console.log("Attached file:", file);
                }}
                onChange={setValue}
                onSend={() => setValue("")}
                placeholder="Leave a comment..."
                textareaProps={{
                  className: cn(
                    "bg-transparent transition-[height] duration-400 ease-in-out",
                    composerExpanded ? "h-44" : "h-16"
                  ),
                }}
                value={value}
              />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
