"use client";

import * as React from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
} from "@workspace/ui/components/avatar";
import { cn } from "@workspace/ui/lib/utils";

export type DsAvatarProps = React.ComponentPropsWithoutRef<typeof Avatar> & {
  name?: string;
  src?: string;
  online?: boolean;
  fallback?: React.ReactNode;
};

function initials(name?: string) {
  if (!name) return "U";
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("") || "U";
}

export const DsAvatar = React.forwardRef<
  React.ComponentRef<typeof Avatar>,
  DsAvatarProps
>(
  (
    { className, name, src, online, size = "default", fallback, ...props },
    ref,
  ) => {
    return (
      <Avatar ref={ref} size={size} className={cn(className)} {...props}>
        <AvatarImage src={src} alt={name ?? "Avatar"} />

        <AvatarFallback>{fallback ?? initials(name)}</AvatarFallback>

        {online ? <AvatarBadge aria-label="Online" /> : null}
      </Avatar>
    );
  },
);

DsAvatar.displayName = "DsAvatar";
