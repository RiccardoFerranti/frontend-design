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

  it("should show description when provided", () => {
    render(
      <DsDialog
        defaultOpen
        title="Dialog title"
        description="Dialog description text"
        trigger={<button type="button">Open</button>}
      >
        <div>Body</div>
      </DsDialog>
    );

    expect(screen.getByText("Dialog description text")).toBeTruthy();
  });

  it("should show footer when provided", () => {
    render(
      <DsDialog
        defaultOpen
        title="Dialog title"
        footer={<button type="button">Confirm</button>}
        trigger={<button type="button">Open</button>}
      >
        <div>Body</div>
      </DsDialog>
    );

    expect(screen.getByText("Confirm")).toBeTruthy();
  });
});
