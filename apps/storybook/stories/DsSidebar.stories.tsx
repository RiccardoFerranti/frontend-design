import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  DsSidebar,
  DsTreeItem,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/design-system";
import type { TreeNode } from "@workspace/design-system";

const meta: Meta<typeof DsSidebar> = {
  title: "Design System/DsSidebar",
  component: DsSidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: { control: "text" },
    footer: { control: false },
    children: { control: false },
  },
  args: {
    title: "Course",
  },
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

const navTree: TreeNode = {
  id: "1",
  label: "Course",
  children: [
    { id: "1-1", label: "Lesson 1", status: "completed" },
    { id: "1-2", label: "Lesson 2", status: "in-progress" },
    { id: "1-3", label: "Lesson 3", status: "locked" },
  ],
};

export const Default: Story = {
  render: (args) => (
    <div className="flex min-h-[400px] w-full">
      <DsSidebar {...args}>
        <div className="p-2">
          <DsTreeItem node={navTree} defaultOpen activeId="1-2" />
        </div>
      </DsSidebar>
      <main className="flex-1 p-4">
        <SidebarTrigger />
        <p className="mt-4 text-sm text-muted-foreground">
          Main content area. Use the trigger to toggle the sidebar.
        </p>
      </main>
    </div>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <div className="flex min-h-[400px] w-full">
      <DsSidebar
        title="Course"
        footer={
          <span className="text-xs text-muted-foreground">v1.0.0</span>
        }
      >
        <div className="p-2">
          <DsTreeItem node={navTree} defaultOpen />
        </div>
      </DsSidebar>
      <main className="flex-1 p-4">
        <SidebarTrigger />
      </main>
    </div>
  ),
};

export const NoTitle: Story = {
  render: () => (
    <div className="flex min-h-[400px] w-full">
      <DsSidebar>
        <div className="p-2">
          <DsTreeItem node={navTree} defaultOpen />
        </div>
      </DsSidebar>
      <main className="flex-1 p-4">
        <SidebarTrigger />
      </main>
    </div>
  ),
};
