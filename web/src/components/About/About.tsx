import './about.css'
import AboutImg from './aboutImg.png'

const About = () => {
  return (
    <div className="container">
      <div className="shadow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <section className="text-center">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl mb-4">
            Welcome to Bob&apos;s Backyard!
          </h1>
          <h2 className="font-bold text-base sm:text-lg md:text-xl mb-4">
            Thank you for visiting our site.
          </h2>
          <div className="image-container">
            <img
              src={AboutImg}
              alt="Bob and his family"
              className="roundedImage"
            />
          </div>
          <span>
            <p className="mt-4 text-sm sm:text-base md:text-lg">
              Hello, my name is Bob and I am the owner of Bob&apos;s Backyard. I
              have five star reviews on Google. I have been in the landscaping
              business for 5 years. I am a family man and home owner understand
              how how easy it can be to let your backyard get out of control. I
              am here to help you.
            </p>
          </span>
          <br />
        </section>
      </div>
    </div>
  )
}

export default About
