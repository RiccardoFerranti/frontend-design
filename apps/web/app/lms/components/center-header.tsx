"use client";

import { DsAvatar, DsButton, DsInput } from "@workspace/design-system";
import { Bell, Search, User } from "lucide-react";
import { useRef } from "react";
import { useSelectSearchShortcut } from "../hooks/use-select-search-shortcut";

export function CenterHeader() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useSelectSearchShortcut(inputRef);

  return (
    <header className="flex min-h-14 items-center justify-between">
      {/* Search */}
      <div className="relative w-[360px] max-w-[55%]">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <DsInput
          className="h-10 w-full rounded-sm border border-border bg-sidebar! pr-10 pl-9 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
          placeholder="Search in course"
          ref={inputRef}
        />
        <kbd className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 rounded-sm border border-border px-2 py-0.5 text-muted-foreground text-xs">
          ⌘K
        </kbd>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-3">
        <DsButton
          aria-label="Notifications"
          className="relative rounded-md p-2 hover:bg-muted"
          size="icon-sm"
          variant="ghost"
        >
          <Bell className="size-5" />
          <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            1
          </span>
        </DsButton>

        <DsButton
          aria-label="Account"
          className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          size="icon-sm"
          variant="ghost"
        >
          <DsAvatar
            fallback={<User className="size-4" />}
            name="John Doe"
            size="sm"
            src="https://github.com/john-doe.png"
          />
        </DsButton>
      </div>
    </header>
  );
}
