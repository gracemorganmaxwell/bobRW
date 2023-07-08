import { render } from '@redwoodjs/testing/web'

import HeaderHero from './HeaderHero'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeaderHero', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderHero />)
    }).not.toThrow()
  })
})
