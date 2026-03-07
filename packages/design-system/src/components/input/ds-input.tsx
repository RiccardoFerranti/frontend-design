import { Input } from "@workspace/ui/components/input";
import { cn } from "@workspace/ui/lib/utils";
import type { ComponentPropsWithoutRef, ComponentRef } from "react";
import { forwardRef, useId } from "react";

export type DsInputProps = ComponentPropsWithoutRef<typeof Input> & {
  label?: string;
  helperText?: string;
  error?: string;
};

export const DsInput = forwardRef<ComponentRef<typeof Input>, DsInputProps>(
  ({ className, label, helperText, error, id, ...props }, ref) => {
    const autoId = useId();
    const inputId = id ?? autoId;
    const describedById = `${inputId}-desc`;

    const describedBy = error || helperText ? describedById : undefined;

    return (
      <div className="grid gap-1.5">
        {label ? (
          <label className="font-medium text-sm" htmlFor={inputId}>
            {label}
          </label>
        ) : null}

        <Input
          aria-describedby={describedBy}
          aria-invalid={Boolean(error) || undefined}
          className={cn(
            "focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary/10!",
            error
              ? "border-destructive focus-visible:ring-1 focus-visible:ring-destructive/10!"
              : "",
            className
          )}
          id={inputId}
          ref={ref}
          {...props}
        />

        {error ? (
          <p className="text-destructive text-xs" id={describedById}>
            {error}
          </p>
        ) : null}
        {!error && helperText ? (
          <p className="text-muted-foreground text-xs" id={describedById}>
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

DsInput.displayName = "DsInput";
