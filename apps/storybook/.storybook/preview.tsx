import type { Preview } from "@storybook/react-vite";

import "@workspace/design-system/tokens";
import "@workspace/ui/globals.css";
import "./preview-extra.css";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-background text-foreground font-sans p-6">
        <Story />
      </div>
    ),
  ],
};

export default preview;