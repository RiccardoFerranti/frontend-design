"use client";

import * as React from "react";
import { cn } from "@workspace/ui/lib/utils";

export type DsChatBubbleProps = React.ComponentPropsWithoutRef<"div"> & {
  role: "user" | "assistant";
};

export function DsChatBubble({ role, className, ...props }: DsChatBubbleProps) {
  const isUser = role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-xl border border-border px-3 py-2 text-sm",
          isUser ? "bg-primary text-primary-foreground" : "bg-card",
          className,
        )}
        {...props}
      />
    </div>
  );
}

DsChatBubble.displayName = "DsChatBubble";