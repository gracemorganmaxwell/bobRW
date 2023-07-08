import { useState } from 'react'

import { routes } from '@redwoodjs/router'

const ButtonLink = () => {
  const [colour, setColour] = useState('blue')

  return (
    <a href={routes.contactUs()} target="_blank" rel="noopener noreferrer">
      <button
        style={{ backgroundColor: colour }}
        onClick={() => setColour('green')}
      >
        Book a Quote
      </button>
    </a>
  )
}

export default ButtonLink
