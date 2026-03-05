import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsCard, DsButton } from "@workspace/design-system";

const meta: Meta<typeof DsCard> = {
  title: "Design System/DsCard",
  component: DsCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    header: { control: false },
    title: { control: "text" },
    description: { control: "text" },
    action: { control: false },
    footer: { control: false },
    children: { control: false },
  },
  args: {
    title: "Lesson 1",
    description: "Introduction to the course",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[340px]">
      <DsCard
        {...args}
        action={<DsButton size="sm">Open</DsButton>}
        footer={
          <span className="text-xs text-muted-foreground">30% complete</span>
        }
      >
        <p className="text-sm text-muted-foreground">
          This is the card content.
        </p>
      </DsCard>
    </div>
  ),
};

export const CustomHeader: Story = {
  render: () => (
    <div className="w-[340px]">
      <DsCard
        header={
          <div className="px-4 py-3 flex items-center justify-between">
            <span className="text-sm font-semibold">Custom header</span>
            <DsButton size="sm">CTA</DsButton>
          </div>
        }
        footer={
          <span className="text-xs text-muted-foreground">Footer content</span>
        }
      >
        <p className="text-sm text-muted-foreground">
          Card with custom header.
        </p>
      </DsCard>
    </div>
  ),
};

export const NoHeader: Story = {
  render: () => (
    <div className="w-[340px]">
      <DsCard>
        <p className="text-sm text-muted-foreground">Card without header.</p>
      </DsCard>
    </div>
  ),
};
