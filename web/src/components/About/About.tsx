import './about.css'
import AboutImg from './aboutImg.png'

const About = () => {
  return (
    <div className="container">
      <div className="shadow">
        <section>
          <h1>Welcome to Bob&apos;s Backyard!</h1>
          <h2>Thank you for visiting our site.</h2>
          <div className="image-container">
            <img
              src={AboutImg}
              alt="Bob and his family"
              className="roundedImage"
            />
          </div>
          <p>
            Hello, my name is Bob and I am the owner of Bob&apos;s Backyard. I
            have five star reviews on Google. I have been in the landscaping
            business for 5 years. I am a family man and home owner understand
            how how easy it can be to let your backyard get out of control. I am
            here to help you.
          </p>
          <br />
        </section>
      </div>
    </div>
  )
}

export default About
