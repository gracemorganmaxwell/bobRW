// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Portfolio> = (args) => {
//   return <Portfolio {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Portfolio from './Portfolio'

export const generated = () => {
  return <Portfolio />
}

export default {
  title: 'Components/Portfolio',
  component: Portfolio,
} as ComponentMeta<typeof Portfolio>
