import { Link, NavLink, routes } from '@redwoodjs/router'

import logo from './logo.png'

const HeaderHero = () => {
  return (
    <header>
      <nav>
        <h1>Bob&apos;s Backyard</h1>
        <div>
          <Link to={routes.home()} />
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>
            <NavLink to={routes.home()} activeClassName={''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.contactUs()} activeClassName={''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderHero
