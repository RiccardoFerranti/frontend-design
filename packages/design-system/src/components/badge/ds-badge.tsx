import * as React from "react";
import { Badge } from "@workspace/ui/components/badge";
import { cn } from "@workspace/ui/lib/utils";

export type DsBadgeStatus = "completed" | "in-progress" | "locked" | "new";

export type DsBadgeProps = Omit<
  React.ComponentPropsWithoutRef<typeof Badge>,
  "variant"
> & {
  status?: DsBadgeStatus;
};

const statusClass = {
  completed:
    "bg-status-completed/15 text-status-completed border-status-completed/20",
  "in-progress":
    "bg-status-in-progress/15 text-status-in-progress border-status-in-progress/20",
  locked: "bg-status-locked/15 text-status-locked border-status-locked/20",
  new: "bg-status-new/15 text-status-new border-status-new/20",
} as const satisfies Record<DsBadgeStatus, string>;

export const DsBadge = React.forwardRef<
  React.ComponentRef<typeof Badge>,
  DsBadgeProps
>(({ className, status, ...props }, ref) => {
  return (
    <Badge
      ref={ref}
      className={cn("border", status && statusClass[status], className)}
      {...props}
    />
  );
});

DsBadge.displayName = "DsBadge";
export default DsBadge;
