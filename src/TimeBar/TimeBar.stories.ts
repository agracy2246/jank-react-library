import type { Meta, StoryObj } from '@storybook/react';

import { TimeBar } from './TimeBar';

const meta: Meta<typeof TimeBar> = {
    title: 'TimeBar',
    component: TimeBar,
    tags: ['autodocs'],
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
}
export default meta;

type Story = StoryObj<typeof TimeBar>;

export const Full: Story = {
    args: {
        theme: 'dark',
        active: true,
        id: 'tb-1',
        progress: 10
    },
};

