import type { Meta, StoryObj } from '@storybook/react';

import DnDContext from './DnDContext';

const meta: Meta<typeof DnDContext> = {
    title: 'DnDContext',
    component: DnDContext,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
}
export default meta;

type Story = StoryObj<typeof DnDContext>;

export const MyDragNDrop: Story = {
    args: {
        theme: 'dark'
    },
    argTypes: {
        progress: {
            control: {
                type: 'range',
                min: 0, max: 100,
                step: 1
            }
        }
    },
};

