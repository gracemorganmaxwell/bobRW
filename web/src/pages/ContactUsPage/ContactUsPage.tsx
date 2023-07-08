import { MetaTags } from '@redwoodjs/web'

import Contact from 'src/components/Contact/Contact'
import HeaderHero from 'src/components/HeaderHero/HeaderHero'

const ContactUsPage = () => {
  return (
    <>
      <MetaTags title="ContactUs" description="ContactUs page" />
      <HeaderHero />
      <Contact />
    </>
  )
}

export default ContactUsPage
