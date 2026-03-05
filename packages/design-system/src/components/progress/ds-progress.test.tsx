import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
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
    render(<DsProgress value={42} showValue={false} />);
    expect(screen.queryByText("42%")).toBeNull();
  });
});
