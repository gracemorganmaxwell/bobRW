import { render, screen } from '@redwoodjs/testing/web'

import Footer from './Footer'

describe('Footer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Footer />)
    }).not.toThrow()
  })

  it('contains the correct copyright text', () => {
    const { getByText } = render(<Footer />)
    const copyrightElement = getByText(/© 2023 Grace Morgan-Maxwell/i)
    expect(copyrightElement).toBeInTheDocument()
  })

  it('contains the correct contact information', () => {
    const { getByText } = render(<Footer />)
    const contactInfoElement = getByText(/123 Main St, Anytown, USA/i)
    expect(contactInfoElement).toBeInTheDocument()
  })

  it('contains the correct social media links', () => {
    const { getByRole } = render(<Footer />)
    const facebookLinkElement = getByRole('link', { name: /facebook/i })
    const twitterLinkElement = getByRole('link', { name: /twitter/i })
    const instagramLinkElement = getByRole('link', { name: /instagram/i })
    expect(facebookLinkElement).toBeInTheDocument()
    expect(twitterLinkElement).toBeInTheDocument()
    expect(instagramLinkElement).toBeInTheDocument()
  })

  it('renders successfully', () => {
    render(<Footer />)
    expect(screen.getByText('Follow us on')).toBeInTheDocument()
    expect(screen.getByText('Contact us')).toBeInTheDocument()
    expect(screen.getByText('123 Main St, Anytown, USA')).toBeInTheDocument()
    expect(screen.getByText('(123) 456-7890')).toBeInTheDocument()
    expect(screen.getByText('© 2023 Grace Morgan-Maxwell')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByAltText('facebook')).toBeInTheDocument()
    expect(screen.getByAltText('twitter')).toBeInTheDocument()
    expect(screen.getByAltText('instagram')).toBeInTheDocument()
  })
})
