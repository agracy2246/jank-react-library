import type { Meta, StoryObj } from '@storybook/react';

import { TimeBar } from './TimeBar';
import { withDecorator } from './decorator';
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
type TimeBarStory = StoryObj<typeof TimeBar>; // May need to rename to Story

export const Full: TimeBarStory = {
    args: {
        theme: 'dark',
        active: true,
        id: 'tb-1',
        progress: 80
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
    decorators: [withDecorator]
};