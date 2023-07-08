import { render } from '@redwoodjs/testing/web'

import Toaster from './Toaster'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Toaster', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Toaster />)
    }).not.toThrow()
  })
})
