import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DsChatInput from "./ds-chat-input";

describe("DsChatInput", () => {
  it("should call onChange when typing", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<DsChatInput value="" onChange={onChange} onSend={() => {}} />);

    await user.type(screen.getByRole("textbox"), "Hi");
    expect(onChange).toHaveBeenCalled();
  });

  it("should call onSend when clicking send", async () => {
    const user = userEvent.setup();
    const onSend = vi.fn();
    render(<DsChatInput value="Hello" onChange={() => {}} onSend={onSend} />);

    await user.click(screen.getByRole("button", { name: "Send" }));
    expect(onSend).toHaveBeenCalledTimes(1);
  });

  it("should disable send when value is empty", () => {
    render(<DsChatInput value="" onChange={() => {}} onSend={() => {}} />);
    expect(screen.getByRole("button", { name: "Send" })).toHaveProperty(
      "disabled",
      true,
    );
  });
});
