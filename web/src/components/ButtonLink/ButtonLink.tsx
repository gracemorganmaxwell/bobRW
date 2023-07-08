import { Link, routes } from '@redwoodjs/router'

const ButtonLink = () => (
  <Link to={routes.contactUs()}>
    <button>Book a Quote</button>
  </Link>
)

export default ButtonLink
