"use client";

import { cn } from "@workspace/ui/lib/utils";
import { Paperclip, X } from "lucide-react";
import type { ComponentPropsWithoutRef } from "react";
import { useRef, useState } from "react";
import { DsButton, type DsButtonProps } from "../button/ds-button";

export interface DsChatInputProps {
  buttonProps?: DsButtonProps;
  className?: string;
  disabled?: boolean;
  onAttach?: (file: File | null) => void;
  onChange: (v: string) => void;
  onSend: () => void;
  placeholder?: string;
  textareaProps?: ComponentPropsWithoutRef<"textarea">;
  value: string;
}

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
  const fileRef = useRef<HTMLInputElement>(null);
  const [attachment, setAttachment] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

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
        "flex flex-col gap-2 border-border border-t p-3",
        className,
      )}
    >
      <div className="relative">
        <textarea
          {...textareaProps}
          className={cn(
            "min-h-[64px] w-full resize-none rounded-lg border border-border bg-background px-3 py-2 pr-8 text-sm outline-none",
            "focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30",
            textareaProps?.className,
          )}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          value={value}
        />

        <button
          aria-label="Attach file"
          className="absolute right-2 bottom-4 text-muted-foreground hover:text-foreground"
          disabled={disabled}
          onClick={() => fileRef.current?.click()}
          type="button"
        >
          <Paperclip className="size-4" />
        </button>

        <input
          accept=".pdf,.png,.jpg,.jpeg,.webp"
          className="hidden"
          onChange={(e) => handleAttach(e.target.files?.[0] ?? null)}
          ref={fileRef}
          type="file"
        />
      </div>

      {attachment ? (
        <div className="flex w-fit max-w-full items-center gap-2 rounded-md border border-border bg-card px-2 py-1 text-xs">
          <Paperclip className="size-3 shrink-0 text-muted-foreground" />
          <span className="max-w-[180px] truncate">{attachment.name}</span>
          <DsButton
            aria-label="Remove attachment"
            className="text-muted-foreground hover:text-foreground"
            onClick={handleRemoveAttachment}
            type="button"
          >
            <X className="size-3" />
          </DsButton>
        </div>
      ) : null}

      {fileError ? (
        <p className="text-destructive text-xs">{fileError}</p>
      ) : null}

      <div className="flex justify-end">
        <DsButton
          disabled={!canSend}
          onClick={handleSend}
          type="button"
          {...buttonProps}
        >
          {buttonProps?.children ?? "Send"}
        </DsButton>
      </div>
    </div>
  );
}

DsChatInput.displayName = "DsChatInput";
