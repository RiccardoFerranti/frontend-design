import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DsDialog } from "./ds-dialog";

describe("DsDialog", () => {
  it("should open when trigger is clicked", async () => {
    const user = userEvent.setup();
    render(
      <DsDialog
        title="Dialog title"
        trigger={<button type="button">Open</button>}
      >
        <div>Dialog body</div>
      </DsDialog>
    );

    await user.click(screen.getByText("Open"));
    expect(screen.getByText("Dialog title")).toBeTruthy();
    expect(screen.getByText("Dialog body")).toBeTruthy();
  });
});
