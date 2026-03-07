import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";
import { forwardRef } from "react";

export type DsButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  loading?: boolean;
};

export const DsButton = forwardRef<ComponentRef<typeof Button>, DsButtonProps>(
  (
    { loading, disabled, className, variant = "default", children, ...props },
    ref,
  ) => {
    // The primitive Button in `@workspace/ui` has a hover rule written as `[a]:hover:bg-primary/80`, which only applies
    // when an <a> is inside the button.
    // Since `packages/ui` must remain untouched (challenge requirement), we patch the default hover behavior here in the
    // design-system layer.
    const fixDefaultHover =
      variant === "default" ? "hover:bg-primary/90 active:bg-primary/80" : "";

    const cursor = "cursor-pointer disabled:cursor-not-allowed";

    return (
      <Button
        className={cn(cursor, fixDefaultHover, className)}
        disabled={disabled || loading}
        ref={ref}
        variant={variant}
        {...props}
      >
        {loading ? "Loading..." : children}
      </Button>
    );
  },
);

DsButton.displayName = "DsButton";
