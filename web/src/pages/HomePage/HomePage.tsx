import { MetaTags } from '@redwoodjs/web'

import About from 'src/components/About/About'
import HeaderHero from 'src/components/HeaderHero/HeaderHero'
import Portfolio from 'src/components/Portfolio/Portfolio'
import Services from 'src/components/Services/Services'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <HeaderHero />
      <About />
      <Portfolio />
      <Services />
    </>
  )
}

export default HomePage
