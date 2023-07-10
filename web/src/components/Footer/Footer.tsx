import './footer.css'
import facebook from './facebook.png'
import instagram from './instagram.png'
import twitter from './twitter.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="social-media">
          <h6>Follow us on</h6>
          <div className="social-icons">
            <a href="https://www.facebook.com/">
              <img src={facebook} alt="facebook" />
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://wwww.twitter.com">
              <img src={twitter} alt="twitter" />
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="instagram" />
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="contact-info">
          <h6>Contact us</h6>
          <p>123 Main St, Anytown, USA</p>
          <p>(123) 456-7890</p>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Grace Morgan-Maxwell</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
