import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsAvatar } from "@workspace/design-system";

const meta: Meta<typeof DsAvatar> = {
  title: "Design System/DsAvatar",
  component: DsAvatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "default", "lg"] },
    online: { control: "boolean" },
    name: { control: "text" },
    src: { control: "text" },
  },
  args: {
    name: "Riccardo Ferranti",
    online: false,
    size: "default",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Online: Story = { args: { online: true } };

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <DsAvatar {...args} size="sm" />
      <DsAvatar {...args} size="default" />
      <DsAvatar {...args} size="lg" />
    </div>
  ),
};
