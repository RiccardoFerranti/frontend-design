import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { DsTooltip } from "./ds-tooltip";

describe("DsTooltip", () => {
  it("should render trigger and wrap children", () => {
    render(
      <DsTooltip content="Hello">
        <button type="button">Hover</button>
      </DsTooltip>,
    );
    expect(screen.getByRole("button", { name: "Hover" })).toBeTruthy();
  });
});
