import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsTreeItem } from "@workspace/design-system";
import type { TreeNode } from "@workspace/design-system";

const meta: Meta<typeof DsTreeItem> = {
  title: "Design System/DsTreeItem",
  component: DsTreeItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    node: { control: false },
    level: { control: { type: "number", min: 0, max: 5 } },
    activeId: { control: "text" },
    defaultOpen: { control: "boolean" },
    renderLink: { control: false },
  },
  args: {
    defaultOpen: true,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const singleNode: TreeNode = {
  id: "1",
  label: "Introduction",
};

const treeWithChildren: TreeNode = {
  id: "1",
  label: "Course",
  children: [
    { id: "1-1", label: "Lesson 1", status: "completed" },
    { id: "1-2", label: "Lesson 2", status: "in-progress" },
    { id: "1-3", label: "Lesson 3", status: "locked" },
    { id: "1-4", label: "Lesson 4", status: "new" },
  ],
};

const treeWithNesting: TreeNode = {
  id: "1",
  label: "Module 1",
  children: [
    {
      id: "1-1",
      label: "Section A",
      children: [
        { id: "1-1-a", label: "Topic 1", status: "completed" },
        { id: "1-1-b", label: "Topic 2", status: "in-progress" },
      ],
    },
    {
      id: "1-2",
      label: "Section B",
      children: [{ id: "1-2-a", label: "Topic 1", status: "locked" }],
    },
  ],
};

const treeWithLinks: TreeNode = {
  id: "1",
  label: "Navigation",
  children: [
    { id: "1-1", label: "Dashboard", href: "/dashboard" },
    { id: "1-2", label: "Settings", href: "/settings" },
    { id: "1-3", label: "Profile", href: "/profile" },
  ],
};

export const Default: Story = {
  args: {
    node: singleNode,
  },
  render: (args) => (
    <div className="w-[280px] rounded-lg border border-border bg-sidebar p-2">
      <DsTreeItem {...args} />
    </div>
  ),
};

export const WithChildren: Story = {
  args: {
    node: treeWithChildren,
    defaultOpen: true,
  },
  render: (args) => (
    <div className="w-[280px] rounded-lg border border-border bg-sidebar p-2">
      <DsTreeItem {...args} />
    </div>
  ),
};

export const WithNesting: Story = {
  args: {
    node: treeWithNesting,
    defaultOpen: true,
  },
  render: (args) => (
    <div className="w-[320px] rounded-lg border border-border bg-sidebar p-2">
      <DsTreeItem {...args} />
    </div>
  ),
};

export const WithActiveId: Story = {
  args: {
    node: treeWithChildren,
    activeId: "1-2",
    defaultOpen: true,
  },
  render: (args) => (
    <div className="w-[280px] rounded-lg border border-border bg-sidebar p-2">
      <DsTreeItem {...args} />
    </div>
  ),
};

export const WithLinks: Story = {
  args: {
    node: treeWithLinks,
    defaultOpen: true,
  },
  render: (args) => (
    <div className="w-[280px] rounded-lg border border-border bg-sidebar p-2">
      <DsTreeItem {...args} />
    </div>
  ),
};

export const WithRenderLink: Story = {
  args: {
    node: treeWithLinks,
    defaultOpen: true,
  },
  render: (args) => (
    <div className="w-[280px] rounded-lg border border-border bg-sidebar p-2">
      <DsTreeItem
        {...args}
        renderLink={({ href, className, children }) => (
          <a
            href={href}
            className={className}
            onClick={(e) => {
              e.preventDefault();
              alert(`Navigate to ${href}`);
            }}
          >
            {children}
          </a>
        )}
      />
    </div>
  ),
};

export const CollapsedByDefault: Story = {
  args: {
    node: treeWithChildren,
    defaultOpen: false,
  },
  render: (args) => (
    <div className="w-[280px] rounded-lg border border-border bg-sidebar p-2">
      <DsTreeItem {...args} />
    </div>
  ),
};
