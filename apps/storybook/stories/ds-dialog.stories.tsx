import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsButton, DsDialog } from "@workspace/design-system";

const meta: Meta<typeof DsDialog> = {
  title: "Design System/DsDialog",
  component: DsDialog,
  tags: ["autodocs"],
  argTypes: {
    trigger: { control: false },
    header: { control: false },
    footer: { control: false },
    children: { control: false },
    title: { control: "text" },
    description: { control: "text" },
    contentClassName: { control: "text" },
  },
  args: {
    title: "Delete lesson?",
    description: "This action can’t be undone.",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <DsDialog
      {...args}
      footer={<DsButton variant="destructive">Confirm</DsButton>}
      trigger={<DsButton>Open dialog</DsButton>}
    >
      <div className="text-muted-foreground text-sm">
        Example content inside the dialog.
      </div>
    </DsDialog>
  ),
};
