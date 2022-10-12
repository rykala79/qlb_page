import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import LogoQ from '../../../assets/images/QLB.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHome,
  faUser,
  faEnvelope,
  faHeartPulse,
  faPersonWalking,
  faShop,
  faClose,
} from '@fortawesome/free-solid-svg-icons'

const LeftSidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar-left">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoQ} alt="logo" />
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#060684" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#060684" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="zdrowie-link"
          to="/health"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHeartPulse} color="#060684" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="aktywnosc-link"
          to="/active"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faPersonWalking} color="#060684" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="shop-link"
          to="/shop"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faShop} color="#060684" />
        </NavLink>

        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#060684" />
        </NavLink>

        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
    </div>
  )
}

export default LeftSidebar
