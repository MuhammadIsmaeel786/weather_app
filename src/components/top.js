import React from 'react'
import image from '../assests/cloudy.png'
function Top(){
  return (
    <div className='top'>
        <div className='day-time-location'>
          <p className='day-date'>SUN 24</p>
          <p className='day-location'>Today in Pakistan,Islamabad</p>
        </div>
        <div className='image-div'>
          <img className='my-cloud-image' alt='logo' src={image} />
          <p className='weather-condition'>Moderate sun</p>
        </div>
        <div className='weather-celcius-feeling'>
          <p className='weather-celcius'>22°</p>
          <p className='weather-feeling'>Feels Like 28°</p>
        </div>
        </div>
  )
}

export default Top;