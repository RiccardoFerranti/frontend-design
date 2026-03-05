import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DsTooltip from "./ds-tooltip";

describe("DsTooltip", () => {
  it("should show tooltip content on hover", async () => {
    const user = userEvent.setup();
    render(
      <DsTooltip content="Hello">
        <button type="button">Hover</button>
      </DsTooltip>,
    );

    await user.hover(screen.getByText("Hover"));
    expect(await screen.findByText("Hello")).toBeTruthy();
  });
});
