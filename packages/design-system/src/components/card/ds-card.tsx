import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";
import type { ComponentPropsWithoutRef, ComponentRef, ReactNode } from "react";
import { forwardRef } from "react";

export type DsCardProps = ComponentPropsWithoutRef<typeof Card> & {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  headerProps?: ComponentPropsWithoutRef<typeof CardHeader>;
  contentProps?: ComponentPropsWithoutRef<typeof CardContent>;
  footerProps?: ComponentPropsWithoutRef<typeof CardFooter>;
};

export const DsCard = forwardRef<ComponentRef<typeof Card>, DsCardProps>(
  (
    {
      className,
      header,
      title,
      description,
      action,
      footer,
      children,
      headerProps,
      contentProps,
      footerProps,
      ...props
    },
    ref
  ) => {
    const hasHeader = Boolean(header || title || description || action);

    return (
      <Card className={className} ref={ref} {...props}>
        {hasHeader &&
          (header ? (
            header
          ) : (
            <CardHeader
              {...headerProps}
              className={cn("gap-1", headerProps?.className)}
            >
              {action && <CardAction>{action}</CardAction>}
              {title && <CardTitle>{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
          ))}

        {children && (
          <CardContent
            {...contentProps}
            className={cn("pt-0", contentProps?.className)}
          >
            {children}
          </CardContent>
        )}

        {footer && (
          <CardFooter {...footerProps} className={cn(footerProps?.className)}>
            {footer}
          </CardFooter>
        )}
      </Card>
    );
  }
);

DsCard.displayName = "DsCard";
