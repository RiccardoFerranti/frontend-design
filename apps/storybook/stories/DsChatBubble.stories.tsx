import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsChatBubble } from "@workspace/design-system";

const meta: Meta<typeof DsChatBubble> = {
  title: "Design System/DsChatBubble",
  component: DsChatBubble,
  tags: ["autodocs"],
  argTypes: {
    role: { control: "select", options: ["user", "assistant"] },
    children: { control: "text" },
  },
  args: { role: "assistant", children: "Assistant message" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Conversation: Story = {
  render: () => (
    <div className="grid gap-3 max-w-lg">
      <DsChatBubble role="assistant">Hi! How can I help?</DsChatBubble>
      <DsChatBubble role="user">Show me my lessons</DsChatBubble>
      <DsChatBubble role="assistant">
        Sure — loading your dashboard…
      </DsChatBubble>
    </div>
  ),
};
