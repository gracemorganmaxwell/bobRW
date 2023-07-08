import { render } from '@redwoodjs/testing/web'

import Row from './Row'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Row', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Row />)
    }).not.toThrow()
  })
})
