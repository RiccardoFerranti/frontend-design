"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip";
import type { ComponentProps, ReactNode } from "react";

export interface DsTooltipProps {
  align?: ComponentProps<typeof TooltipContent>["align"];
  children: ReactNode;
  content: ReactNode;
  delayDuration?: number;
  side?: ComponentProps<typeof TooltipContent>["side"];
  sideOffset?: number;
}

export function DsTooltip({
  content,
  children,
  side = "top",
  align = "center",
  sideOffset = 6,
  delayDuration = 0,
}: DsTooltipProps) {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent align={align} side={side} sideOffset={sideOffset}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

DsTooltip.displayName = "DsTooltip";
