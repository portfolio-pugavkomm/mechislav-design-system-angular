import type {Meta, StoryObj} from '@storybook/angular';
import {MTag} from './m-tag.component'

const _tagTemplate = `<m-tag [size]=size [variant]="variant" >{{label ?? 'Tag example'}}</m-tag>`;

const meta: Meta<MTag> = {
  title: 'UI KIT/Atoms/Tag',
  component: MTag,
  tags: ['autodocs'],

  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'linked', 'canceled'],
      description: 'Button variant',
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    label: {
      control: 'text',
      description: 'The text displayed inside the button.',
    },
    size: {
      control: 'select',
      options: [
        'xxl',
        'xl',
        'm',
        's'
      ],
      description: 'Button height',
    },
  },
}

export default meta;
type Story = StoryObj<MTag>;

export const Primary: Story = {
  render: (args) => ({
    props: args,
    template: _tagTemplate,
  }),
  args: {
    variant: 'primary',
    size: 'xxl',
  },
};


export const Secondary: Story = {
  render: (args) => ({
    props: args,
    template: _tagTemplate,
  }),
  args: {
    variant: 'secondary',
    size: 'xxl',
  },
};

export const Info: Story = {
  render: (args) => ({
    props: args,
    template: _tagTemplate,
  }),
  args: {
    variant: 'info',
    size: 'xxl',
  },
};

export const Warning: Story = {
  render: (args) => ({
    props: args,
    template: _tagTemplate,
  }),
  args: {
    variant: 'warning',
    size: 'xxl',
  },
};

export const Danger: Story = {
  render: (args) => ({
    props: args,
    template: _tagTemplate,
  }),
  args: {
    variant: 'danger',
    size: 'xxl',
  },
};
