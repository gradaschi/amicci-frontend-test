import React from 'react'
import './styles.scss'

interface WeatherCardProps {
  weatherData: {
    temperature: number
    climate: string
    humidity: number
    windSpeed: number
    weatherDescription: string
    cloudiness: number
  }
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  return (
    <div className='weather-display'>
      <h2>Weather Information</h2>
      <div className='weather-info'>
        <div className='info-item'>
          <span className='info-label'>Temperature:</span>
          <span className='info-value'>{weatherData.temperature}°C</span>
        </div>
        <div className='info-item'>
          <span className='info-label'>Climate:</span>
          <span className='info-value'>{weatherData.climate}</span>
        </div>
        <div className='info-item'>
          <span className='info-label'>Weather Description:</span>
          <span className='info-value'>{weatherData.weatherDescription}</span>
        </div>
        <div className='info-item'>
          <span className='info-label'>Humidity:</span>
          <span className='info-value'>{weatherData.humidity}%</span>
        </div>
        <div className='info-item'>
          <span className='info-label'>Wind Speed:</span>
          <span className='info-value'>{weatherData.windSpeed} m/s</span>
        </div>
        <div className='info-item'>
          <span className='info-label'>Cloudiness:</span>
          <span className='info-value'>{weatherData.cloudiness}%</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
