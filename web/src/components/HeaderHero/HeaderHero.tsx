import { Link, routes } from '@redwoodjs/router'

import logo from './logo.png'
import './headerhero.css'

const HeaderHero = () => {
  return (
    <header className="header-container">
      <div className="header-hero">
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <div className="title-container">
          <h1 className="headerTitle">Bob&apos;s Backyard</h1>
        </div>
        <nav className="nav-container">
          <ul className="nav-list">
            <li>
              <Link to={routes.home()} className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to={routes.contactUs()} className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderHero
