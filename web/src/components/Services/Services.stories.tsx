// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Services> = (args) => {
//   return <Services {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Services from './Services'

export const generated = () => {
  return <Services />
}

export default {
  title: 'Components/Services',
  component: Services,
} as ComponentMeta<typeof Services>
