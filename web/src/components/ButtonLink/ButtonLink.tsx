import { useState } from 'react'

import './button.css'

import { Link, routes } from '@redwoodjs/router'

const ButtonLink = () => {
  const [colour, setColour] = useState('#ffeb3b')

  return (
    <div className='card'>
      <h2>Ready to get started?</h2>
      <Link
        to={routes.contactUs()}
        target="_blank"
        rel="noopener noreferrer"
        className="buttonLink"
        style={{ backgroundColor: colour }}
        onMouseEnter={() => setColour('#8bc34a')}
        onMouseLeave={() => setColour('#2c786c')}
      >
        Book a Quote
      </Link>
    </div>
  )
}

export default ButtonLink
