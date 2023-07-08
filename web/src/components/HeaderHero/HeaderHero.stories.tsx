// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof HeaderHero> = (args) => {
//   return <HeaderHero {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import HeaderHero from './HeaderHero'

export const generated = () => {
  return <HeaderHero />
}

export default {
  title: 'Components/HeaderHero',
  component: HeaderHero,
} as ComponentMeta<typeof HeaderHero>
