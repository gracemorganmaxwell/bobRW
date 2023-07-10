import { render, screen } from '@redwoodjs/testing/web'

import ButtonLink from './ButtonLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ButtonLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ButtonLink />)
    }).not.toThrow()
  })

  test('Button link opens in a new tab', () => {
    render(<ButtonLink />)
    const button = screen.getByText('Book a Quote')
    expect(button.closest('a')).toHaveAttribute('target', '_blank')
  })
})
