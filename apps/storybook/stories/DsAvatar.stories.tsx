import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsAvatar } from "@workspace/design-system";
import { User } from "lucide-react";

const meta: Meta<typeof DsAvatar> = {
  title: "Design System/DsAvatar",
  component: DsAvatar,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "default", "lg"] },
    online: { control: "boolean" },
    name: { control: "text" },
    src: { control: "text" },

    // usually not useful as controls
    className: { control: false },
    fallback: { control: false },
  },
  args: {
    name: "John Doe",
    online: false,
    size: "default",
    src: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Online: Story = { args: { online: true } };

export const WithImage: Story = {
  args: {
    // use a stable public image; github avatar works fine
    src: "https://github.com/octocat.png",
    name: "Octocat",
  },
};

export const FallbackIcon: Story = {
  args: {
    name: "",
    src: "",
  },
  render: (args) => (
    <DsAvatar {...args} fallback={<User className="size-4" />} />
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-center gap-4">
      <DsAvatar {...args} size="sm" />
      <DsAvatar {...args} size="default" />
      <DsAvatar {...args} size="lg" />
    </div>
  ),
};
