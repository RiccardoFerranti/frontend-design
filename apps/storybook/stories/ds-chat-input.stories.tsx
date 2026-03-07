import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsChatInput } from "@workspace/design-system";
import { type ReactNode, useState } from "react";

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
  <div className="max-w-lg overflow-hidden rounded-xl border border-border">
    {children}
  </div>
);

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Wrapper>
        <DsChatInput
          onChange={setValue}
          onSend={() => console.log("Send:", value)}
          value={value}
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
          onAttach={setAttachment}
          onChange={setValue}
          onSend={() =>
            console.log(
              "Send:",
              value,
              attachment ? `with ${attachment.name}` : ""
            )
          }
          value={value}
        />
      </Wrapper>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Wrapper>
      <DsChatInput
        disabled
        onChange={() => {
          /* intentional no-op for disabled demo */
        }}
        onSend={() => {
          /* intentional no-op for disabled demo */
        }}
        value=""
      />
    </Wrapper>
  ),
};

export const CustomPlaceholder: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Wrapper>
        <DsChatInput
          onChange={setValue}
          onSend={() => console.log("Send:", value)}
          placeholder="Ask a question or share feedback…"
          value={value}
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
          buttonProps={{ variant: "outline" }}
          onChange={setValue}
          onSend={() => console.log("Send:", value)}
          value={value}
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
          buttonProps={{ loading: true }}
          onChange={setValue}
          onSend={() => {
            /* intentional no-op for loading demo */
          }}
          value={value}
        />
      </Wrapper>
    );
  },
};
