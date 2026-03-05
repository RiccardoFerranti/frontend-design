"use client";

import { Bell, Search, User } from "lucide-react";
import { useSelectSearchShortcut } from "../hooks/use-select-search-shortcut";
import { useRef } from "react";

export function CenterHeader() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useSelectSearchShortcut(inputRef);

  return (
    <header className="flex min-h-14 items-center justify-between">
      {/* Search */}
      <div className="relative w-[360px] max-w-[55%]">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          ref={inputRef}
          className="h-10 w-full rounded-sm border border-border bg-background pl-9 pr-10 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
          placeholder="Search in course"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-border bg-card px-2 py-0.5 text-xs text-muted-foreground">
          ⌘K
        </kbd>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-3">
        <button className="relative rounded-md p-2 hover:bg-muted cursor-pointer">
          <Bell className="size-5" />
          <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            1
          </span>
        </button>

        <button className="p-2 hover:bg-muted cursor-pointer">
          <User className="size-5" />
        </button>
      </div>
    </header>
  );
}
