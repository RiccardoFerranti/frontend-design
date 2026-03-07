"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { cn } from "@workspace/ui/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type DsDialogProps = ComponentPropsWithoutRef<typeof Dialog> & {
  trigger?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
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

  let headerContent: ReactNode = null;
  if (hasHeader) {
    if (header) {
      headerContent = header;
    } else {
      headerContent = (
        <DialogHeader className="border-border border-b pb-3">
          {title ? <DialogTitle>{title}</DialogTitle> : null}
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
      );
    }
  }

  return (
    <Dialog {...props}>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}

      <DialogContent className={cn(contentClassName)}>
        {headerContent}

        {children}

        {footer ? <DialogFooter>{footer}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  );
}

DsDialog.displayName = "DsDialog";
