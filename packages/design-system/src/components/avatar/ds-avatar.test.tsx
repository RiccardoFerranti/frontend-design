import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DsAvatar } from "./ds-avatar";

describe("DsAvatar", () => {
  it("should render fallback initials from name", () => {
    render(<DsAvatar name="Riccardo Ferranti" />);
    expect(screen.getByText("RF")).toBeTruthy();
  });

  it("should render default fallback when name is missing", () => {
    render(<DsAvatar />);
    expect(screen.getByText("U")).toBeTruthy();
  });

  it("should render online badge when online is true", () => {
    render(<DsAvatar online />);
    expect(screen.getByLabelText("Online")).toBeTruthy();
  });
});
