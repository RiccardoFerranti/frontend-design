import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsChatInput } from "@workspace/design-system";
import { useState } from "react";

const meta: Meta<typeof DsChatInput> = {
  title: "Design System/DsChatInput",
  component: DsChatInput,
  tags: ["autodocs"],
  argTypes: {
    value: { control: false },
    onChange: { control: false },
    onSend: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="max-w-lg border border-border rounded-xl overflow-hidden">
        <DsChatInput
          value={value}
          onChange={setValue}
          onSend={() => alert(`Send: ${value}`)}
        />
      </div>
    );
  },
};
