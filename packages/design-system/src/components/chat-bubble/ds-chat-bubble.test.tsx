import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DsChatBubble } from "./ds-chat-bubble";

describe("DsChatBubble", () => {
  it("should render children", () => {
    render(<DsChatBubble>Hello</DsChatBubble>);
    expect(screen.getByText("Hello")).toBeTruthy();
  });

  it("should apply user styling when sender is user", () => {
    render(<DsChatBubble sender="user">Hi</DsChatBubble>);
    const el = screen.getByText("Hi");
    expect(el.className).toContain("bg-primary");
  });
});
