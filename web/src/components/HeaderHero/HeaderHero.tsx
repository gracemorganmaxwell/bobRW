import { Link, NavLink, routes } from '@redwoodjs/router'

import logo from './logo.png'

const HeaderHero = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to={routes.home()}>
            <h1>Bob&apos;s Backyard</h1>
            <img src={logo} alt="logo" />
          </Link>
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
