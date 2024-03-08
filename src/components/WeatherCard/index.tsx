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
  if (!weatherData) {
    return null
  }

  const {
    name,
    sys: { country },
    main: { temp, humidity },
    weather,
    wind,
    rain,
    clouds,
  } = weatherData

  return (
    <div className='weather-card'>
      <h2>
        {name} / {country}
      </h2>
      <div className='weather-details'>
        <div className='temperature'>
          <span className='label'>Temperature:</span>
          <span className='value'>{temp}°C</span>
        </div>
        <div className='description'>
          <span className='label'>Weather:</span>
          <span className='value'>{weather?.[0]?.description}</span>
        </div>
        <div className='humidity'>
          <span className='label'>Humidity:</span>
          <span className='value'>{humidity}%</span>
        </div>
        <div className='wind-speed'>
          <span className='label'>Wind Speed:</span>
          <span className='value'>{wind?.speed} m/s</span>
        </div>
        {rain && (
          <div className='rain'>
            <span className='label'>Rain (1h):</span>
            <span className='value'>{rain['1h'] || 0} mm</span>
          </div>
        )}
        <div className='cloudiness'>
          <span className='label'>Cloudiness:</span>
          <span className='value'>{clouds?.all}%</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
