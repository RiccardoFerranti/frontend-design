"use client";

import { ScrollArea } from "@workspace/ui/components/scroll-area";
import { cn } from "@workspace/ui/lib/utils";
import type { ComponentProps } from "react";

type LmsScrollAreaProps = ComponentProps<typeof ScrollArea>;

export function LmsScrollArea({ className, ...props }: LmsScrollAreaProps) {
  return (
    <ScrollArea
      {...props}
      className={cn(
        "min-h-0 flex-1",
        // Fix Radix: viewport direct child defaults to `display: table`
        "[&_[data-slot=scroll-area-viewport]>div]:block!",
        // Ensure it takes full width (prevents badge/layout weirdness)
        "[&_[data-slot=scroll-area-viewport]>div]:min-w-full!",
        className
      )}
    />
  );
}
