import { render, screen } from '@redwoodjs/testing/web'

import HeaderHero from './HeaderHero'

describe('HeaderHero', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderHero />)
    }).not.toThrow()
  })

  it('renders the logo', () => {
    render(<HeaderHero />)
    const logo = screen.getByAltText('logo')
    expect(logo).toBeInTheDocument()
  })

  it('renders the navigation links', () => {
    render(<HeaderHero />)
    const homeLink = screen.getByText('Home')
    const contactLink = screen.getByText('Contact')
    expect(homeLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })

  it('renders the header title', () => {
    render(<HeaderHero />)
    const title = screen.getByText("Bob's Backyard")
    expect(title).toBeInTheDocument()
  })
})
