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
};

export default preview;