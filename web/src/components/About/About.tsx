import React from 'react'

import AboutImg from './aboutImg.png'

const About = () => {
  return (
    <div>
      <div>
        <img src={AboutImg} alt="Bob and his family" />
        <p>
          Hello, my name is Bob and I am the owner of Bob&apos;s Backyard. I
          have five star reviews on Google. I have been in the landscaping
          business for 5 years. I am a family man and home owner understand how
          easy it can be to let your backyard get out of control. I am here to
          help you.
        </p>
      </div>
    </div>
  )
}

export default About
