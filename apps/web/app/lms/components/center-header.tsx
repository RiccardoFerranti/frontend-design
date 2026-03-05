"use client";

import { Bell, Search, User } from "lucide-react";
import { useRef } from "react";
import { DsAvatar, DsButton, DsInput } from "@workspace/design-system";
import { useSelectSearchShortcut } from "../hooks/use-select-search-shortcut";

export function CenterHeader() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useSelectSearchShortcut(inputRef);

  return (
    <header className="flex min-h-14 items-center justify-between">
      {/* Search */}
      <div className="relative w-[360px] max-w-[55%]">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <DsInput
          ref={inputRef}
          className="h-10 w-full rounded-sm border border-border bg-background pl-9 pr-10 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
          placeholder="Search in course"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-sm border border-border px-2 py-0.5 text-xs text-muted-foreground">
          ⌘K
        </kbd>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-3">
        <DsButton
          className="relative rounded-md p-2 hover:bg-muted cursor-pointer"
          variant="ghost"
          size="icon-sm"
          aria-label="Notifications"
        >
          <Bell className="size-5" />
          <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            1
          </span>
        </DsButton>

        {/* Avatar (replaces User icon) */}
        <button
          type="button"
          aria-label="Account"
          className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        >
          <DsAvatar
            name="John Doe"
            // src optional: if it fails, fallback is used anyway
            src="https://github.com/john-doe.png"
            size="sm"
            fallback={<User className="size-4" />}
          />
        </button>
      </div>
    </header>
  );
}
