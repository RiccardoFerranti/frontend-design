import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { DsBadge } from "@workspace/design-system";

const meta: Meta<typeof DsBadge> = {
  title: "Design System/DsBadge",
  component: DsBadge,
  argTypes: {
    status: {
      control: "select",
      options: ["completed", "in-progress", "locked", "new"],
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Completed: Story = {
  args: {
    status: "completed",
    children: "Completed",
  },
};

export const InProgress: Story = {
  args: {
    status: "completed",
    children: "In progress",
  },
};

export const Locked: Story = {
  args: {
    status: "locked",
    children: "Locked",
  },
};

export const New: Story = {
  args: {
    status: "new",
    children: "New",
  },
};

export const AllStatuses: Story = {
  args: {},
  render: () => (
    <div className="flex gap-3 flex-wrap">
      <DsBadge status="completed">Completed</DsBadge>
      <DsBadge status="in-progress">In progress</DsBadge>
      <DsBadge status="locked">Locked</DsBadge>
      <DsBadge status="new">New</DsBadge>
    </div>
  ),
};
