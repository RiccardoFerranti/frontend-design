import * as React from "react";

import { Input } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";

export type DsInputProps = React.ComponentPropsWithoutRef<typeof Input> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export const DsInput = React.forwardRef<
  React.ComponentRef<typeof Input>,
  DsInputProps
>(({ className, label, helperText, error, id, ...props }, ref) => {
  const autoId = React.useId();
  const inputId = id ?? autoId;
  const describedById = `${inputId}-desc`;

  const describedBy = error || helperText ? describedById : undefined;

  return (
    <div className="grid gap-1.5">
      {label ? (
        <label htmlFor={inputId} className="text-sm font-medium">
          {label}
        </label>
      ) : null}

      <Input
        ref={ref}
        id={inputId}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={describedBy}
        className={cn(
          // Branded focus ring (keeps ui behavior, but makes it “ours”)
          "focus-visible:ring-primary/30 focus-visible:border-primary",
          // Error state
          error ? "border-destructive focus-visible:ring-destructive/30" : "",
          className,
        )}
        {...props}
      />

      {error ? (
        <p id={describedById} className="text-xs text-destructive">
          {error}
        </p>
      ) : helperText ? (
        <p id={describedById} className="text-xs text-muted-foreground">
          {helperText}
        </p>
      ) : null}
    </div>
  );
});

DsInput.displayName = "DsInput";

export default DsInput;
