import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DsDialog } from "./ds-dialog";

describe("DsDialog", () => {
  it("should open when trigger is clicked", async () => {
    const user = userEvent.setup();
    render(
      <DsDialog
        trigger={<button type="button">Open</button>}
        title="Dialog title"
      >
        <div>Dialog body</div>
      </DsDialog>,
    );

    await user.click(screen.getByText("Open"));
    expect(screen.getByText("Dialog title")).toBeTruthy();
    expect(screen.getByText("Dialog body")).toBeTruthy();
  });
});
