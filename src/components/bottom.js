import React from 'react'
import cloud from '../assests/cloudy.png'
import sun from '../assests/sun.png'
import thnder from '../assests/thunderstorm.png'
import rain from '../assests/heavy-rain.png'
function Bottom(){
  return (
    <div className='bottom'>
        <p className='div-heading'>Next 7 Days....</p>
        <div className='bottom-inside'>
        <div className='inside-small-div'>
           <p className='days'>Mon</p>
           <img className='my-cloud-small' alt='logo' src={cloud} /> 
          <p className='temperature'>22°</p>
        </div>
        <div className='inside-small-div'>
           <p className='days'>Tue</p>
           <img className='my-cloud-small' alt='logo' src={rain} /> 
          <p className='temperature'>20°</p>
        </div>
        <div className='inside-small-div'>
           <p className='days'>Wed</p>
           <img className='my-cloud-small' alt='logo' src={sun} /> 
          <p className='temperature'>34°</p>
        </div>
        <div className='inside-small-div'>
           <p className='days'>Thu</p>
           <img className='my-cloud-small' alt='logo' src={thnder} /> 
          <p className='temperature'>16°</p>
        </div>
        <div className='inside-small-div'>
           <p className='days'>Fri</p>
           <img className='my-cloud-small' alt='logo' src={sun} /> 
          <p className='temperature'>40°</p>
        </div>
        <div className='inside-small-div'>
           <p className='days'>Sat</p>
           <img className='my-cloud-small' alt='logo' src={rain} /> 
          <p className='temperature'>15°</p>
        </div>
        <div className='inside-small-div'>
           <p className='days'>Sun</p>
           <img className='my-cloud-small' alt='logo' src={cloud} /> 
          <p className='temperature'>22°</p>
        </div>
    </div>
    </div>
  )
}

export default Bottom;