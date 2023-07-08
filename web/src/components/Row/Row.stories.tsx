// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Row> = (args) => {
//   return <Row {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Row from './Row'

export const generated = () => {
  return <Row />
}

export default {
  title: 'Components/Row',
  component: Row,
} as ComponentMeta<typeof Row>
