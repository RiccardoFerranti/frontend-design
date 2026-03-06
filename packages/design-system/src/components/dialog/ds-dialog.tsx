"use client";

import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@workspace/ui/components/dialog";
import { cn } from "@workspace/ui/lib/utils";

export type DsDialogProps = React.ComponentPropsWithoutRef<typeof Dialog> & {
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  contentClassName?: string;
};

export function DsDialog({
  trigger,
  title,
  description,
  header,
  footer,
  children,
  contentClassName,
  ...props
}: DsDialogProps) {
  const hasHeader = Boolean(header || title || description);

  return (
    <Dialog {...props}>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}

      <DialogContent className={cn(contentClassName)}>
        {hasHeader ? (
          header ? (
            header
          ) : (
            <DialogHeader className="border-b border-border pb-3">
              {title ? <DialogTitle>{title}</DialogTitle> : null}
              {description ? (
                <DialogDescription>{description}</DialogDescription>
              ) : null}
            </DialogHeader>
          )
        ) : null}

        {children}

        {footer ? <DialogFooter>{footer}</DialogFooter> : null}

        {/* keep Close available */}
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
}

DsDialog.displayName = "DsDialog";