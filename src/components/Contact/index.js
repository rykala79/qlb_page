import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './index.scss'
import { useEffect, useEffect as UseEffect, useState as UseState } from 'react'

const contact = () => {
 
  const [letterClass, setLetterClass] = UseState('text-animate')

  UseEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate')
    }, 2000)
  }, [letterClass])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['K', 'o', 'n', 't', 'a', 'k', 't']}
              idx={15}
            />
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
            officia! A, ullam placeat. Inventore sunt soluta eligendi atque
            quasi numquam sint provident sequi, voluptas ad veniam illo animi
            porro omnis!
          </p>

          <div className="contact-form">
            <form action="">
              <ul>
                <li className="half">
                  <input type="text"
                   name="name" 
                   placeholder="Name" 
                   required 
                   /> 
                </li>   
                

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>

                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                  ></textarea>
                </li>

                <li>
                    <input 
                    type="submit" 
                    className='falt-button' 
                    value='send' 
                    />   
                </li>    
                

              </ul>
            </form>
          </div>
        </div>

        <div className='info-map'>
          Quality Life Broker
          <br />
          Switzerland
          <br />
          Wasserwerkstrasse 6
          <br />
          4332 Stein <br />
          <span>qualitylifebroker@gmail.com</span>
        </div>

        <div className='map-wrap'>
        <MapContainer center={[47.54532151072359, 7.957513212982851]} zoom={15}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[47.54532151072359, 7.957513212982851]}>

              <Popup>Quality Life Broker</Popup>
            </Marker>
            </MapContainer>
        </div>

      </div>
    </>
  )
}

export default contact
