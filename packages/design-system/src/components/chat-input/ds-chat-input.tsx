"use client";

import * as React from "react";
import { Paperclip, X } from "lucide-react";
import { cn } from "@workspace/ui/lib/utils";
import { DsButton, DsButtonProps } from "../button/ds-button";

export type DsChatInputProps = {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  onAttach?: (file: File | null) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  textareaProps?: React.ComponentPropsWithoutRef<"textarea">;
  buttonProps?: DsButtonProps;
};

const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "image/webp",
];

export function DsChatInput({
  value,
  onChange,
  onSend,
  onAttach,
  placeholder = "Write a message…",
  disabled,
  className,
  textareaProps,
  buttonProps,
}: DsChatInputProps) {
  const canSend = value.trim().length > 0 && !disabled;
  const fileRef = React.useRef<HTMLInputElement>(null);
  const [attachment, setAttachment] = React.useState<File | null>(null);
  const [fileError, setFileError] = React.useState<string | null>(null);

  const handleAttach = (file: File | null) => {
    if (!file) {
      setAttachment(null);
      setFileError(null);
      onAttach?.(null);
      return;
    }

    if (!ALLOWED_FILE_TYPES.includes(file.type)) {
      setFileError("Unsupported file type");
      setAttachment(null);
      onAttach?.(null);

      if (fileRef.current) {
        fileRef.current.value = "";
      }
      return;
    }

    setFileError(null);
    setAttachment(file);
    onAttach?.(file);
  };

  const handleRemoveAttachment = () => {
    setAttachment(null);
    setFileError(null);
    onAttach?.(null);

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  const handleSend = () => {
    onSend();
    setAttachment(null);
    setFileError(null);

    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-2 border-t border-border p-3",
        className,
      )}
    >
      <div className="relative">
        <textarea
          {...textareaProps}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "min-h-[64px] w-full resize-none rounded-lg border border-border bg-background px-3 py-2 pr-8 text-sm outline-none",
            "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30",
            textareaProps?.className,
          )}
        />

        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="absolute right-2 bottom-4 text-muted-foreground hover:text-foreground"
          disabled={disabled}
          aria-label="Attach file"
        >
          <Paperclip className="size-4" />
        </button>

        <input
          ref={fileRef}
          type="file"
          className="hidden"
          accept=".pdf,.png,.jpg,.jpeg,.webp"
          onChange={(e) => handleAttach(e.target.files?.[0] ?? null)}
        />
      </div>

      {attachment ? (
        <div className="flex w-fit max-w-full items-center gap-2 rounded-md border border-border bg-card px-2 py-1 text-xs">
          <Paperclip className="size-3 shrink-0 text-muted-foreground" />
          <span className="max-w-[180px] truncate">{attachment.name}</span>
          <button
            type="button"
            onClick={handleRemoveAttachment}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Remove attachment"
          >
            <X className="size-3" />
          </button>
        </div>
      ) : null}

      {fileError ? (
        <p className="text-xs text-destructive">{fileError}</p>
      ) : null}

      <div className="flex justify-end">
        <DsButton
          type="button"
          onClick={handleSend}
          disabled={!canSend}
          {...buttonProps}
        >
          Send
        </DsButton>
      </div>
    </div>
  );
}

DsChatInput.displayName = "DsChatInput";