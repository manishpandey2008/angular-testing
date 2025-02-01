import { Meta } from '@storybook/angular';
import { PopoverContentComponent } from './popover-content.component';

export default {
  title: 'PopoverContentComponent',
  component: PopoverContentComponent,
} as Meta<PopoverContentComponent>;

export const Primary = {
  render: (args: PopoverContentComponent) => ({
    props: args,
  }),
  args: {},
};
