import { describe, expect, it, vi } from "vitest";
import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DsChatInput } from "./ds-chat-input";

describe("DsChatInput", () => {
  it("should call onChange when typing", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container } = render(
      <DsChatInput value="" onChange={onChange} onSend={() => {}} />,
    );

    const scope = within(container);
    await user.type(scope.getByRole("textbox"), "Hi");
    expect(onChange).toHaveBeenCalled();
  });

  it("should call onSend when clicking send", async () => {
    const user = userEvent.setup();
    const onSend = vi.fn();
    const { container } = render(
      <DsChatInput value="Hello" onChange={() => {}} onSend={onSend} />,
    );

    const scope = within(container);
    await user.click(scope.getByRole("button", { name: "Send" }));
    expect(onSend).toHaveBeenCalledTimes(1);
  });

  it("should disable send when value is empty", () => {
    const { container } = render(
      <DsChatInput value="" onChange={() => {}} onSend={() => {}} />,
    );
    const scope = within(container);
    expect(scope.getByRole("button", { name: "Send" })).toHaveProperty(
      "disabled",
      true,
    );
  });

  it("should apply custom className to wrapper", () => {
    const { container } = render(
      <DsChatInput
        value=""
        onChange={() => {}}
        onSend={() => {}}
        className="custom-class"
      />,
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("custom-class");
  });

  it("should apply buttonProps to send button", () => {
    const { container } = render(
      <DsChatInput
        value="Hello"
        onChange={() => {}}
        onSend={() => {}}
        buttonProps={{ className: "custom-send-btn" }}
      />,
    );
    const sendButton = within(container).getByRole("button", { name: "Send" });
    expect(sendButton).toHaveClass("custom-send-btn");
  });
});
