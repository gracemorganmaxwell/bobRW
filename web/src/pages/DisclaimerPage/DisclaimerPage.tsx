import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const DisclaimerPage = () => {
  return (
    <>
      <MetaTags title="Disclaimer" description="Disclaimer page" />

      <h1>DisclaimerPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/DisclaimerPage/DisclaimerPage.tsx</code>
      </p>
      <p>
        My default route is named <code>disclaimer</code>, link to me with `
        <Link to={routes.disclaimer()}>Disclaimer</Link>`
      </p>
    </>
  )
}

export default DisclaimerPage
