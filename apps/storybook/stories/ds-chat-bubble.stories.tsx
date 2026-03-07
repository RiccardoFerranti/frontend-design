import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsChatBubble } from "@workspace/design-system";

const meta: Meta<typeof DsChatBubble> = {
  title: "Design System/DsChatBubble",
  component: DsChatBubble,
  tags: ["autodocs"],
  argTypes: {
    sender: { control: "select", options: ["user", "assistant"] },
    children: { control: "text" },
  },
  args: { sender: "assistant", children: "Assistant message" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Conversation: Story = {
  render: () => (
    <div className="grid max-w-lg gap-3">
      <DsChatBubble sender="assistant">Hi! How can I help?</DsChatBubble>
      <DsChatBubble sender="user">Show me my lessons</DsChatBubble>
      <DsChatBubble sender="assistant">
        Sure — loading your dashboard…
      </DsChatBubble>
    </div>
  ),
};
