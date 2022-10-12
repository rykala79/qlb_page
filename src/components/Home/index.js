import LogoTitle from '../../assets/images/1.png';
import SecondLetter from '../../assets/images/2.png';
import ThirdLetter from '../../assets/images/3.png';
import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {

  

  return (

    <>

    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Witaj, 
          <br />
             na stronie
          <br />
          </h1>

          <h2>
             <img src={LogoTitle} alt="quality" />UALITY
          
          <br />
              <img src= {SecondLetter}  alt="life" />IFE
          <br />
          <img src= {ThirdLetter}  alt="broker" />ROKER
        </h2>
      </div>
    </div>
    </>
  )
}

export default Home
