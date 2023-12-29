import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    
    darkMode: {
      classTarget: 'html'
    }
  },
};

export default preview;
