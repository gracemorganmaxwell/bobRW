// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Toaster> = (args) => {
//   return <Toaster {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Toaster from './Toaster'

export const generated = () => {
  return <Toaster />
}

export default {
  title: 'Components/Toaster',
  component: Toaster,
} as ComponentMeta<typeof Toaster>
