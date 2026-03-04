import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { DsButton } from "./ds-button";

describe("DsButton", () => {
  it("should render children", () => {
    render(<DsButton>Save</DsButton>);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("should disable when loading", () => {
    render(<DsButton loading>Save</DsButton>);
    expect(screen.getByRole("button", { name: "Loading..." })).toBeDisabled();
  });

  it("should call onClick", () => {
    const onClick = vi.fn();
    render(<DsButton onClick={onClick}>Click</DsButton>);
    screen.getByRole("button", { name: "Click" }).click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
