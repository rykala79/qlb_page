import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
  faTwitter,
} 
from '@fortawesome/free-brands-svg-icons'

const RightSidebar = () => (

  <div className="nav-bar-right">

    <ul>

      <li>
        <a
        href="https://www.facebook.com"
        rel=" noreferrer"
         target="_blank">
          <FontAwesomeIcon icon={faFacebook} className="anchor-icon" />
        </a>
      </li>

      <li>
        <a href="https://www.instagram.com"
        rel=" noreferrer"
         target="_blank">
          <FontAwesomeIcon icon={faInstagram} className="anchor-icon" />
        </a>
      </li>

      <li>
        <a href="https://www.youtube.com" 
        rel=" noreferrer" 
        target="_blank">
          <FontAwesomeIcon icon={faYoutube} className="anchor-icon" />
        </a>
      </li>

      <li>
        <a href="https://www.linkedin.com" 
        rel=" noreferrer"
        target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />
        </a>
      </li>

      <li>
        <a href="https://www.twitter.com"
        rel=" noreferrer"
         target="_blank">
          <FontAwesomeIcon icon={faTwitter} className="anchor-icon" />
        </a>
      </li>

    </ul>

  </div>
)


export default RightSidebar
