"use client";

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@workspace/ui/components/avatar";
import { cn } from "@workspace/ui/lib/utils";
import type {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from "react";
import { forwardRef } from "react";

export type DsAvatarProps = ComponentPropsWithoutRef<typeof Avatar> & {
  name?: string;
  src?: string;
  online?: boolean;
  fallback?: ReactNode;
};

export type DsAvatarComponent = ForwardRefExoticComponent<
  DsAvatarProps & RefAttributes<HTMLSpanElement>
>;

const WHITESPACE_REGEX = /\s+/;

/**
 * Returns the initials extracted from a name string.
 * - Splits the name by whitespace and uses up to the first two words.
 * - Uppercases the first letter of each part.
 * - Returns "U" if the name is empty or doesn't contain any valid letters.
 *
 * @param {string} [name] - The name to extract initials from.
 * @returns {string} The initials or "U" as fallback.
 */
function initials(name?: string) {
  if (!name) {
    return "U";
  }
  const parts = name.trim().split(WHITESPACE_REGEX).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("") || "U";
}

export const DsAvatar: DsAvatarComponent = forwardRef<
  HTMLSpanElement,
  DsAvatarProps
>(
  (
    { className, name, src, online, size = "default", fallback, ...props },
    ref
  ) => {
    return (
      <Avatar className={cn(className)} ref={ref} size={size} {...props}>
        <AvatarImage alt={name ?? "Avatar"} src={src} />

        <AvatarFallback>{fallback ?? initials(name)}</AvatarFallback>

        {online ? <AvatarBadge aria-label="Online" /> : null}
      </Avatar>
    );
  }
);

DsAvatar.displayName = "DsAvatar";
