import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsProgress } from "@workspace/design-system";

const meta: Meta<typeof DsProgress> = {
  title: "Design System/DsProgress",
  component: DsProgress,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    label: { control: "text" },
    showValue: { control: "boolean" },
  },
  args: {
    value: 35,
    label: "Lesson progress",
    showValue: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
