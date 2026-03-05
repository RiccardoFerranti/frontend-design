import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// jsdom does not provide ResizeObserver (used by Radix UI)
vi.stubGlobal(
  "ResizeObserver",
  class ResizeObserver {
    observe = vi.fn();
    unobserve = vi.fn();
    disconnect = vi.fn();
    constructor(_callback: ResizeObserverCallback) {}
  },
);