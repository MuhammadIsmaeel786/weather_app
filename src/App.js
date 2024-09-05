import './App.css';
import Clouds from './assests/cloudy.png'
import Day from './assests/day.png'
import Night from './assests/night.png'
import Clear from './assests/sun.png'
import thnder from './assests/thunderstorm.png'
import Rain from './assests/heavy-rain.png'
import Search from "./assests/search.png"
import Smoke from "./assests/smoke.png"
import { useState } from 'react';
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d = new Date();
let date = d.getDate()
let day = weekday[d.getDay()];
let localtime = d.getHours();
function WeatherApp() {
  let [dayNight,setDayNight] = useState(Day);
  let [conditionLogo, setConditionLogo] = useState(Clear);
  let time = new Date().toLocaleTimeString();
  let [ctime, setCTime] = useState();
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  };
  setInterval(updateTime, 1000);
  const updateLight= () => {
    localtime >= 6 && localtime <=19  ? setDayNight(Day) : setDayNight(Night) 
  }
  setInterval(updateLight, 1000);
  let api_key = '1dd44c4bb6f8b9ed19317519fc9aeb16';
  const search = async () => {
    const element = document.getElementsByClassName('search-bar');
    if (element[0] === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    const temperature = document.getElementsByClassName("weather-celcius");
    const humidity = document.getElementsByClassName("weather-feeling");
    const location = document.getElementsByClassName("day-location");
    const conditions = document.getElementsByClassName("weather-condition");
    conditions[0].innerHTML = data.weather[0].description;
    temperature[0].innerHTML = Math.floor(data.main.temp) + "°";
    location[0].innerHTML = "Today in " + data.name + ", " + data.sys.country;
    humidity[0].innerHTML = "Humidity " + data.main.humidity + "%";

    if (data.weather[0].main === "Clouds") {
      setConditionLogo(Clouds);
    }
    else if (data.weather[0].main === "Clear") {
      setConditionLogo(Clear);
    }

    else if (data.weather[0].main === "thunder") {
      setConditionLogo(thnder);
    }
    else if (data.weather[0].main === "Smoke") {
      setConditionLogo(Smoke);
    }
    else if (data.weather[0].main === "Rain") {
      setConditionLogo(Rain);
    }
    else {
      setConditionLogo(Clear);
    }
  }
  return (

    <div className="App">
      <div className='div1'>
        <div className='top'>
          <div className='day-time-location'>
            <p className='day-date'>{day[0] + day[1] + day[2]} {date}</p>
            <p className='day-location'>Today in Islamabad Pk</p>
          </div>
          <div className='image-div'>
            <img className='my-cloud-image' alt='logo' src={conditionLogo} />
            <p className='weather-condition'>Moderate Sun</p>
          </div>
          <div className='weather-celcius-feeling'>
            <p className='weather-celcius'>22°</p>
            <p className='weather-feeling'>Humidity 28°</p>
          </div>
        </div>
        <div className='bottom'>
          <p className='div-heading'>Current Time</p>
          <div className='bottom-inside'>
            <div className='inside-small-div'>
              <p className='time-current'>{ctime}</p>
            </div>
          </div>
          <img className='day-Night' src={dayNight} alt='logo'/>
        </div>
      </div>
      <div className='div2'>
        <div className="search-bar-div">
          <div>
            <input placeholder="Search" className="search-bar" />
          </div>
          <div className="search-icon-div" onClick={() => { search() }}>
            <img className="search-icon" alt="search" src={Search} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
