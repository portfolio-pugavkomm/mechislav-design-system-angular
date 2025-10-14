import type {Meta, StoryObj} from '@storybook/angular';
import {MButton} from './m-button.component';

const _buttonTemplate = `<m-button [size]=size [variant]="variant" [disabled]="disabled">{{label ?? 'Click me'}}</m-button>`;

const meta: Meta<MButton> = {
  title: 'UI KIT/Atoms/Button',
  component: MButton,
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
      options: ['s', 'm', 'l'],
      description: 'Button height',
    },
    disabled: {
      control: 'boolean',
      description: 'No active button'
    },
  },

}

export default meta;
type Story = StoryObj<MButton>;


export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: _buttonTemplate,
  }),
  args: {
    variant: 'primary',
    size: 'm',
    disabled: false,
  },
};

export const Secondary: Story = {
  render: (args) => ({
    props: args,
    template: _buttonTemplate,
  }),
  args: {
    variant: 'secondary',
    size: 'm',
    disabled: false,
  },
};

export const Linked: Story = {
  render: (args) => ({
    props: args,
    template: _buttonTemplate,
  }),
  args: {
    variant: 'linked',
    size: 'm',
    disabled: false,
  },
};


export const Canceled: Story = {
  render: (args) => ({
    props: args,
    template: _buttonTemplate,
  }),
  args: {
    variant: 'canceled',
    size: 'm',
    disabled: false,
  },
};

export const Medium: Story = {
  render: (args) => ({
    props: args,
    template: _buttonTemplate,
  }),
  args: {
    variant: 'primary',
    size: 'm',
    disabled: false,
  }
}


export const Small: Story = {
  render: (args) => ({
    props: args,
    template: _buttonTemplate,
  }),
  args: {
    variant: 'primary',
    size: 's',
    disabled: false,
  }
};
