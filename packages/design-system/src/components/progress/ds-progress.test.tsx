import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { DsProgress } from "./ds-progress";

describe("DsProgress", () => {
  it("should render label when provided", () => {
    render(<DsProgress label="Progress" value={20} />);
    expect(screen.getByText("Progress")).toBeTruthy();
  });

  it("should render percentage by default", () => {
    render(<DsProgress value={42} />);
    expect(screen.getByText("42%")).toBeTruthy();
  });

  it("should hide percentage when showValue is false", () => {
    const { container } = render(<DsProgress value={42} showValue={false} />);
    const scope = within(container);
    expect(scope.queryByText("42%")).toBeNull();
  });
});
