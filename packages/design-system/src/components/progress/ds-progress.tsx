"use client";

import * as React from "react";
import { Progress } from "@workspace/ui/components/progress";
import { cn } from "@workspace/ui/lib/utils";

export type DsProgressProps = React.ComponentPropsWithoutRef<
  typeof Progress
> & {
  label?: string;
  showValue?: boolean;
};

export const DsProgress = React.forwardRef<
  React.ComponentRef<typeof Progress>,
  DsProgressProps
>(({ className, value = 0, label, showValue = true, ...props }, ref) => {
  const pct = Math.max(0, Math.min(100, Number(value) || 0));

  return (
    <div className={cn("grid gap-1.5", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-xs text-muted-foreground">
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
export default DsProgress;
