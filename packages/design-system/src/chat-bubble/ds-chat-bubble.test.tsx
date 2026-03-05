import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DsChatBubble } from "./ds-chat-bubble";

describe("DsChatBubble", () => {
  it("should render children", () => {
    render(<DsChatBubble role="assistant">Hello</DsChatBubble>);
    expect(screen.getByText("Hello")).toBeTruthy();
  });

  it("should apply user styling when role is user", () => {
    render(<DsChatBubble role="user">Hi</DsChatBubble>);
    const el = screen.getByText("Hi");
    expect(el.className).toContain("bg-primary");
  });
});
