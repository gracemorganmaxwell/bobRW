// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Contact> = (args) => {
//   return <Contact {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Contact from './Contact'

export const generated = () => {
  return <Contact />
}

export default {
  title: 'Components/Contact',
  component: Contact,
} as ComponentMeta<typeof Contact>
