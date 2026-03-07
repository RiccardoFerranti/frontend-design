import { type RefObject, useEffect } from "react";

export function useSelectSearchShortcut(
  inputRef: RefObject<HTMLInputElement | null>
) {
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [inputRef]);
}
