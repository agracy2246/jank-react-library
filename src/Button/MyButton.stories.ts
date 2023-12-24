import type { Meta, StoryObj } from '@storybook/react';

import {Button} from '../Button';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
}
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        kind: 'primary',
        disabled: false,
        children: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        kind: 'secondary',
        disabled: false,
        children: 'Button',
    }
};