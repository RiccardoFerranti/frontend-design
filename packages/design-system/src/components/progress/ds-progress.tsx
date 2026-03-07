"use client";

import { Progress } from "@workspace/ui/components/progress";
import { cn } from "@workspace/ui/lib/utils";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";
import { forwardRef } from "react";

export type DsProgressProps = ComponentPropsWithoutRef<typeof Progress> & {
  label?: string;
  showValue?: boolean;
};

export const DsProgress = forwardRef<
  ComponentRef<typeof Progress>,
  DsProgressProps
>(({ className, value = 0, label, showValue = true, ...props }, ref) => {
  const pct = Math.max(0, Math.min(100, Number(value) || 0));

  return (
    <div className={cn("grid gap-1.5", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-muted-foreground text-xs">
          <span>{label}</span>
          {showValue ? (
            <span className="tabular-nums">{Math.round(pct)}%</span>
          ) : null}
        </div>
      )}
      <Progress ref={ref} value={pct} {...props} />
    </div>
  );
});

DsProgress.displayName = "DsProgress";
