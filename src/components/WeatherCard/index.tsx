import React from 'react'
import './styles.scss'

interface WeatherCardProps {
  weatherData: {
    coord: {
      lon: number
      lat: number
    }
    weather: {
      id: number
      main: string
      description: string
      icon: string
    }[]
    main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      humidity: number
    }
    wind: {
      speed: number
      deg: number
      gust: number
    }
    rain: {
      '1h': number
    }
    clouds: {
      all: number
    }
    sys: {
      country: string
      sunrise: number
      sunset: number
    }
    name: string
  } | null
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  console.log(weatherData)
  if (!weatherData) {
    return null
  }

  return (
    <div className='weather-card'>
      <h2>
        {weatherData.name} / {weatherData.sys.country}
      </h2>
      <div className='weather-details'>
        <div className='temperature'>
          <span className='label'>Temperature:</span>
          <span className='value'>{weatherData.main.temp}°C</span>
        </div>
        <div className='description'>
          <span className='label'>Weather:</span>
          <span className='value'>{weatherData.weather[0].description}</span>
        </div>
        <div className='humidity'>
          <span className='label'>Humidity:</span>
          <span className='value'>{weatherData.main.humidity}%</span>
        </div>
        <div className='wind-speed'>
          <span className='label'>Wind Speed:</span>
          <span className='value'>{weatherData.wind.speed} m/s</span>
        </div>
        <div className='rain'>
          <span className='label'>Rain (1h):</span>
          <span className='value'>{weatherData.rain['1h']} mm</span>
        </div>
        <div className='cloudiness'>
          <span className='label'>Cloudiness:</span>
          <span className='value'>{weatherData.clouds.all}%</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
