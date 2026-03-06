import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsChatInput } from "@workspace/design-system";
import { useState, type ReactNode } from "react";

const meta: Meta<typeof DsChatInput> = {
  title: "Design System/DsChatInput",
  component: DsChatInput,
  tags: ["autodocs"],
  argTypes: {
    value: { control: false },
    onChange: { control: false },
    onSend: { control: false },
    onAttach: { control: false },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    className: { control: "text" },
    buttonProps: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="max-w-lg border border-border rounded-xl overflow-hidden">
    {children}
  </div>
);

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Wrapper>
        <DsChatInput
          value={value}
          onChange={setValue}
          onSend={() => alert(`Send: ${value}`)}
        />
      </Wrapper>
    );
  },
};

export const WithAttachment: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [attachment, setAttachment] = useState<File | null>(null);
    return (
      <Wrapper>
        <DsChatInput
          value={value}
          onChange={setValue}
          onSend={() =>
            alert(
              `Send: ${value}${attachment ? ` with ${attachment.name}` : ""}`,
            )
          }
          onAttach={setAttachment}
        />
      </Wrapper>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Wrapper>
      <DsChatInput value="" onChange={() => {}} onSend={() => {}} disabled />
    </Wrapper>
  ),
};

export const CustomPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Wrapper>
        <DsChatInput
          value={value}
          onChange={setValue}
          onSend={() => alert(`Send: ${value}`)}
          placeholder="Ask a question or share feedback…"
        />
      </Wrapper>
    );
  },
};

export const WithButtonProps: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Wrapper>
        <DsChatInput
          value={value}
          onChange={setValue}
          onSend={() => alert(`Send: ${value}`)}
          buttonProps={{ variant: "outline" }}
        />
      </Wrapper>
    );
  },
};

export const Loading: Story = {
  render: () => {
    const [value, setValue] = useState("Hello");
    return (
      <Wrapper>
        <DsChatInput
          value={value}
          onChange={setValue}
          onSend={() => {}}
          buttonProps={{ loading: true }}
        />
      </Wrapper>
    );
  },
};
