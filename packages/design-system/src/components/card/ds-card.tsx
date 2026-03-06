import * as React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
  CardFooter,
} from "@workspace/ui/components/card";
import { cn } from "@workspace/ui/lib/utils";

export type DsCardProps = React.ComponentPropsWithoutRef<typeof Card> & {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  footer?: React.ReactNode;

  header?: React.ReactNode;

  headerProps?: React.ComponentPropsWithoutRef<typeof CardHeader>;
  contentProps?: React.ComponentPropsWithoutRef<typeof CardContent>;
  footerProps?: React.ComponentPropsWithoutRef<typeof CardFooter>;
};

export const DsCard = React.forwardRef<
  React.ComponentRef<typeof Card>,
  DsCardProps
>(
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
    ref,
  ) => {
    const hasHeader = Boolean(header || title || description || action);

    return (
      <Card ref={ref} className={className} {...props}>
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
  },
);

DsCard.displayName = "DsCard";