import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { DsBadge } from "./ds-badge";

describe("DsBadge", () => {
  it("renders without crashing", () => {
    render(<DsBadge>Badge</DsBadge>);
    expect(screen.getByText("Badge")).toBeTruthy();
  });

  it("renders expected children text", () => {
    render(<DsBadge>Completed</DsBadge>);
    expect(screen.getByText("Completed")).toBeTruthy();
  });

  it("applies status styles when status is provided", () => {
    render(<DsBadge status="completed">Done</DsBadge>);

    const el = screen.getByText("Done");

    expect(el.className).toContain("bg-status-completed/15");
    expect(el.className).toContain("text-status-completed");
    expect(el.className).toContain("border-status-completed/20");
  });

  it("does not apply status styles when status is omitted", () => {
    render(<DsBadge>Default</DsBadge>);
    const el = screen.getByText("Default");

    // baseline border (if your DsBadge always adds one)
    expect(el.className).toContain("border");

    // no status tokens
    expect(el.className).not.toContain("bg-status-completed/15");
    expect(el.className).not.toContain("bg-status-in-progress/15");
    expect(el.className).not.toContain("bg-status-locked/15");
    expect(el.className).not.toContain("bg-status-new/15");
  });

  it("merges custom className", () => {
    render(<DsBadge className="custom-class">X</DsBadge>);
    expect(screen.getByText("X").className).toContain("custom-class");
  });

  it("supports asChild (renders the child element)", () => {
    render(
      <DsBadge asChild>
        <a href="/test">Link</a>
      </DsBadge>,
    );

    const link = screen.getByRole("link", { name: "Link" });
    expect(link).toBeTruthy();
    expect(link.tagName.toLowerCase()).toBe("a");
  });
});
