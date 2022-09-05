import axios from 'axios'
import { useEffect, useState } from 'react'
import First from './componets/First';
import Second from './componets/Second';
import './App.css'
import img from './assets/img/loader.gif'
import img01d from './assets/img/clear-sky.gif'
import img02d from './assets/img/few-clouds.gif'
import img03d from './assets/img/scattered-clouds.gif'
import img04d from './assets/img/broken-clouds.gif'
import img09d from './assets/img/shower-rain.gif'
import img10d from './assets/img/rain.gif'
import img11d from './assets/img/thunderstorm.gif'
import img13d from './assets/img/snow.gif'
import img50d from './assets/img/mist.gif'
import audioRain from './assets/sounds/rain.mp3'
import audioShower from './assets/sounds/shower rain.mp3'
import audioWind from './assets/sounds/wind.mp3'


function App() {

  const loader = document.getElementById("loader")
  const [weather, setWeather] = useState({})
  const [centigrade, setCentigrade] = useState(0)
  const [fahrenheit, setFahrenheit] = useState(0)
  const [temperature, setTemperature] = useState(0)
  const [medida, setMedida] = useState('°C')
  const [background, setBackground] = useState('')
  const [ sounds, setSounds ] = useState('')


  function load() {
    setTimeout(() => {
      loader.classList.add("hide")
    }, 4000);
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
      const crd = pos.coords;

      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=030220ef8255931561ca49d74da57673`)
        .then(res => {
          setWeather(res.data)
          setTemperature(parseInt(res.data.main?.temp - 273.15))
          setCentigrade(parseInt(res.data.main?.temp - 273.15))
          // K − 273.15 =  °C --> de kelvin a centigrados

          setFahrenheit((parseInt(res.data.main?.temp - 273.15) * 9 / 5) + 32)
          // ((K − 273.15) × 9/5) + 32 = 32 °F --> de centigrados a fahrenheit

          setBackground(climate[`${res.data.weather?.[0].icon}`])
          setSounds(climateSound[`${res.data.weather?.[0].icon}`])
        }

        )
    }
  }, [])

  load()


  const changetemp = () => {

    if (temperature === centigrade) {
      setTemperature(fahrenheit)
      setMedida('°F')
    } else {
      setTemperature(centigrade)
      setMedida('°C')
    }
    console.log(weather)
  }


  const climate = {
    '01d': `${img01d}`,
    '02d': `${img02d}`,
    '03d': `${img03d}`,
    '04d': `${img04d}`,
    '09d': `${img09d}`,
    '10d': `${img10d}`,
    '11d': `${img11d}`,
    '13d': `${img13d}`,
    '50d': `${img50d}`,
    '01n': `${img01d}`,
    '02n': `${img02d}`,
    '03n': `${img03d}`,
    '04n': `${img04d}`,
    '09n': `${img09d}`,
    '10n': `${img10d}`,
    '11n': `${img11d}`,
    '13n': `${img13d}`,
    '50n': `${img50d}`,
  }

  const climateSound = {
    '01d': `${audioWind}`,
    '02d': `${audioWind}`,
    '03d': `${audioWind}`,
    '04d': `${audioWind}`,
    '09d': `${audioRain}`,
    '10d': `${audioRain}`,
    '11d': `${audioShower}`,
    '13d': `${audioWind}`,
    '50d': `${audioWind}`,
    '01n': `${audioWind}`,
    '02n': `${audioWind}`,
    '03n': `${audioWind}`,
    '04n': `${audioWind}`,
    '09n': `${audioRain}`,
    '10n': `${audioRain}`,
    '11n': `${audioShower}`,
    '13n': `${audioWind}`,
    '50n': `${audioWind}`,
  }


  return (
    <div className="App">
      <div id="loader" className="loader"><img src={img} alt="loader" /></div>
      <div className='container-background'>
        <img className='background' src={background} alt="weather photography" />
      </div>
      <First info={weather} temp={temperature} und={medida} functions={changetemp} />
      <Second info={weather} />
      <audio  className='audio' src={sounds} controls></audio>
    </div>
  )
}

export default App
