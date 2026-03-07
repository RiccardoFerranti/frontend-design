import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsButton, DsTooltip } from "@workspace/design-system";

const meta: Meta<typeof DsTooltip> = {
  title: "Design System/DsTooltip",
  component: DsTooltip,
  tags: ["autodocs"],
  argTypes: {
    content: { control: "text" },
    side: { control: "select", options: ["top", "right", "bottom", "left"] },
    align: { control: "select", options: ["start", "center", "end"] },
    children: { control: false },
  },
  args: { content: "Tooltip text", side: "top", align: "center" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <DsTooltip {...args}>
      <DsButton>Hover me</DsButton>
    </DsTooltip>
  ),
};
