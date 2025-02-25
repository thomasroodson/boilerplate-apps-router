import { Meta, StoryObj } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    description: {
      control: { type: 'text' }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Another description, overriding the comments'
      }
    }
  }
} as Meta

export const Default: StoryObj = {}

export const Basic: StoryObj = {
  args: {
    title: 'Title Basic',
    description: 'Description Basic'
  }
}
