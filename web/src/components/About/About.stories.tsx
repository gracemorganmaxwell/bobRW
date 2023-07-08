// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof About> = (args) => {
//   return <About {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import About from './About'

export const generated = () => {
  return <About />
}

export default {
  title: 'Components/About',
  component: About,
} as ComponentMeta<typeof About>
