import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { DsSidebar, SidebarProvider } from "./ds-sidebar";

vi.stubGlobal(
  "matchMedia",
  vi.fn(() => ({
    matches: false,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
);

describe("DsSidebar", () => {
  it("should render without crashing", () => {
    render(
      <SidebarProvider>
        <DsSidebar />
      </SidebarProvider>
    );
    expect(true).toBe(true);
  });

  it("should render title when provided", () => {
    render(
      <SidebarProvider>
        <DsSidebar title="My title" />
      </SidebarProvider>
    );
    expect(screen.getByText("My title")).toBeTruthy();
  });

  it("should render footer when provided", () => {
    render(
      <SidebarProvider>
        <DsSidebar footer={<div>Custom footer</div>} />
      </SidebarProvider>
    );
    expect(screen.getByText("Custom footer")).toBeTruthy();
  });

  it("should render children inside content when provided", () => {
    render(
      <SidebarProvider>
        <DsSidebar>
          <div>Sidebar body</div>
        </DsSidebar>
      </SidebarProvider>
    );
    expect(screen.getByText("Sidebar body")).toBeTruthy();
  });
});
