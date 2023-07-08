import type { ComponentMeta } from '@storybook/react'

import DisclaimerPage from './DisclaimerPage'

export const generated = () => {
  return <DisclaimerPage />
}

export default {
  title: 'Pages/DisclaimerPage',
  component: DisclaimerPage,
} as ComponentMeta<typeof DisclaimerPage>
