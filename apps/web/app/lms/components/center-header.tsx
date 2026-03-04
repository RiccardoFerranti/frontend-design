"use client";

import { Bell, Search, User } from "lucide-react";

export function CenterHeader() {
  return (
    <div className="flex items-center justify-between">
      {/* Search */}
      <div className="relative w-[360px] max-w-[55%]">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          className="h-10 w-full rounded-lg border border-border bg-background pl-9 pr-10 text-sm outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring/50"
          placeholder="Search in course"
        />
        <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-border bg-card px-2 py-0.5 text-xs text-muted-foreground">
          ⌘K
        </kbd>
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-3">
        <button className="relative rounded-md p-2 hover:bg-muted">
          <Bell className="size-5" />
          <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
            1
          </span>
        </button>

        <button className="rounded-full border border-border p-2 hover:bg-muted">
          <User className="size-5" />
        </button>
      </div>
    </div>
  );
}
