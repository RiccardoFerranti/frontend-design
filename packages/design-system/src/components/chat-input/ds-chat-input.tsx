"use client";

import { cn } from "@workspace/ui/lib/utils";
import { DsButton } from "../button/ds-button";

export type DsChatInputProps = {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  placeholder?: string;
  disabled?: boolean;
};

export function DsChatInput({
  value,
  onChange,
  onSend,
  placeholder = "Write a message…",
  disabled,
}: DsChatInputProps) {
  const canSend = value.trim().length > 0 && !disabled;

  return (
    <div className="flex items-end gap-2 border-t border-border p-3">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "min-h-[44px] max-h-[160px] flex-1 resize-none rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none",
          "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30",
        )}
        disabled={disabled}
      />
      <DsButton onClick={onSend} disabled={!canSend}>
        Send
      </DsButton>
    </div>
  );
}

export default DsChatInput;
