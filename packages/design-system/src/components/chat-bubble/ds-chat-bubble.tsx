"use client";

import { cn } from "@workspace/ui/lib/utils";
import type * as React from "react";

export type DsChatBubbleProps = React.ComponentPropsWithoutRef<"div"> & {
  sender?: "user" | "assistant";
};

export function DsChatBubble({
  sender = "assistant",
  className,
  ...props
}: DsChatBubbleProps) {
  const isUser = sender === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-xl border border-border px-3 py-2 text-sm",
          isUser ? "bg-primary text-primary-foreground" : "bg-card",
          className
        )}
        {...props}
      />
    </div>
  );
}

DsChatBubble.displayName = "DsChatBubble";
