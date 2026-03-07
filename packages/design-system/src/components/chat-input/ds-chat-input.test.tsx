import { render, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { DsChatInput } from "./ds-chat-input";

function noop() {
  /* no-op for tests */
}

describe("DsChatInput", () => {
  it("should call onChange when typing", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { container } = render(
      <DsChatInput onChange={onChange} onSend={noop} value="" />
    );

    const scope = within(container);
    await user.type(scope.getByRole("textbox"), "Hi");
    expect(onChange).toHaveBeenCalled();
  });

  it("should call onSend when clicking send", async () => {
    const user = userEvent.setup();
    const onSend = vi.fn();
    const { container } = render(
      <DsChatInput onChange={noop} onSend={onSend} value="Hello" />
    );

    const scope = within(container);
    await user.click(scope.getByRole("button", { name: "Send" }));
    expect(onSend).toHaveBeenCalledTimes(1);
  });

  it("should disable send when value is empty", () => {
    const { container } = render(
      <DsChatInput onChange={noop} onSend={noop} value="" />
    );
    const scope = within(container);
    expect(scope.getByRole("button", { name: "Send" })).toHaveProperty(
      "disabled",
      true
    );
  });

  it("should apply custom className to wrapper", () => {
    const { container } = render(
      <DsChatInput
        className="custom-class"
        onChange={noop}
        onSend={noop}
        value=""
      />
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass("custom-class");
  });

  it("should apply buttonProps to send button", () => {
    const { container } = render(
      <DsChatInput
        buttonProps={{ className: "custom-send-btn" }}
        onChange={noop}
        onSend={noop}
        value="Hello"
      />
    );
    const sendButton = within(container).getByRole("button", { name: "Send" });
    expect(sendButton).toHaveClass("custom-send-btn");
  });

  it("should show custom button label when buttonProps.children is provided", () => {
    const { container } = render(
      <DsChatInput
        buttonProps={{ children: "Invia" }}
        onChange={noop}
        onSend={noop}
        value="Hello"
      />
    );
    const sendButton = within(container).getByRole("button", { name: "Invia" });
    expect(sendButton).toHaveTextContent("Invia");
  });
});
