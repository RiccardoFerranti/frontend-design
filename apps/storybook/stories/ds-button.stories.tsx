import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsButton } from "@workspace/design-system";
import { fn } from "storybook/test";

const meta: Meta<typeof DsButton> = {
  title: "Design System/DsButton",
  component: DsButton,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    asChild: { control: "boolean" },
  },
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    loading: false,
    disabled: false,
    onClick: fn(),
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = { args: { variant: "outline" } };
export const Secondary: Story = { args: { variant: "secondary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Destructive: Story = { args: { variant: "destructive" } };
export const Link: Story = { args: { variant: "link" } };

export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <DsButton {...args} size="xs">
        XS
      </DsButton>
      <DsButton {...args} size="sm">
        SM
      </DsButton>
      <DsButton {...args} size="default">
        Default
      </DsButton>
      <DsButton {...args} size="lg">
        LG
      </DsButton>
    </div>
  ),
};
