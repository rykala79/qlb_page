import LogoTitle from '../../assets/images/logo_Q.png';
import './index.scss';

const Home = () => {
  return (
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
               LIFE
          <br />
               BROKER
        </h2>
      </div>
    </div>
  )
}

export default Home
