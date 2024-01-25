import { useState } from "react";
import './Weather.css'
import Dropdown from "./Dropdown";
import InputBox from "./InputBox";
import WeatherDisplay from "./WeatherDisplay";

function Weather() {
  const [zip, setZip] = useState('')
  const [unit, setUnit] = useState('')
  const [data, setData] = useState(null)

  // ---------------------------------------------
  async function fetchWeather() {
    const apiKey = "8f3545c90c62383414d7e8d9ff7db3b7"
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${unit}`
    const res = await fetch(path)
    const json = await res.json()
    console.log(json)

    const cod = json.cod
    const message = json.message

    if (cod !== 200) {
      setData({ cod, message })
      return
    }

    const temp = json.main.temp
    const feelsLike = json.main.feels_like
    const description = json.weather[0].description
    const low = json.main.temp_min
    const high = json.main.temp_max
    const city = json["name"]


    setData({
      temp,
      feelsLike,
      description,
      unit,
      low,
      high,
      city,
      cod,
      message
    })
    console.log(data)
  }

  // ---------------------------------------------

  return(
    <div className="Weather">
      {data && <WeatherDisplay {...data} /> }
      <form onSubmit={e => {
        e.preventDefault()
        fetchWeather()
      }}>
        <InputBox zip={zip} setZip={setZip}/>
        <Dropdown setUnit={setUnit}/>
      </form>
    </div>
  )
}

export default Weather;
