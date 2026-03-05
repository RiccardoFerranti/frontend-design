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

export type DsCardProps = React.ComponentPropsWithoutRef<typeof Card> & {
  header?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  footer?: React.ReactNode;
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
            <CardHeader className="gap-1">
              {action ? <CardAction>{action}</CardAction> : null}
              {title ? <CardTitle>{title}</CardTitle> : null}
              {description ? (
                <CardDescription>{description}</CardDescription>
              ) : null}
            </CardHeader>
          ))}

        {children ? (
          <CardContent className="pt-0">{children}</CardContent>
        ) : null}

        {footer ? <CardFooter>{footer}</CardFooter> : null}
      </Card>
    );
  },
);

DsCard.displayName = "DsCard";
export default DsCard;
