import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsButton, DsCard } from "@workspace/design-system";

const meta: Meta<typeof DsCard> = {
  title: "Design System/DsCard",
  component: DsCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    header: { control: false },
    headerProps: { control: false },
    contentProps: { control: false },
    footerProps: { control: false },
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
          <span className="text-muted-foreground text-xs">30% complete</span>
        }
      >
        <p className="text-muted-foreground text-sm">
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
        footer={
          <span className="text-muted-foreground text-xs">Footer content</span>
        }
        header={
          <div className="flex items-center justify-between px-4 py-3">
            <span className="font-semibold text-sm">Custom header</span>
            <DsButton size="sm">CTA</DsButton>
          </div>
        }
      >
        <p className="text-muted-foreground text-sm">
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
        <p className="text-muted-foreground text-sm">Card without header.</p>
      </DsCard>
    </div>
  ),
};
