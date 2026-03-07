import type { Meta, StoryObj } from "@storybook/react-vite";
import { DsInput } from "@workspace/design-system";
import { fn } from "storybook/test";

const meta: Meta<typeof DsInput> = {
  title: "Design System/DsInput",
  component: DsInput,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "search", "number"],
    },
    label: { control: "text" },
    placeholder: { control: "text" },
    helperText: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    type: "text",
    label: "Email",
    placeholder: "name@epicode.com",
    helperText: "",
    error: "",
    disabled: false,
    onChange: fn(),
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHelperText: Story = {
  args: {
    helperText: "We’ll never share your email",
  },
};

export const ErrorState: Story = {
  args: {
    error: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Types: Story = {
  render: (args) => (
    <div className="flex w-full flex-col gap-4">
      <DsInput {...args} label="Text input" placeholder="Text" type="text" />
      <DsInput {...args} label="Email input" placeholder="Email" type="email" />
      <DsInput
        {...args}
        label="Password input"
        placeholder="Password"
        type="password"
      />
      <DsInput
        {...args}
        label="Search input"
        placeholder="Search..."
        type="search"
      />
    </div>
  ),
};
