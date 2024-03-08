import React, { useEffect, useRef } from 'react'
import './App.scss'
import SearchBar from './components/Searchbar'
import WeatherCard from './components/WeatherCard'
import { getWeatherData, getCityLocation, getGeoLocation } from './services'
import Parallax from './components/Parallax'

function App() {
  const [location, setLocation] = React.useState<{
    latitude: number
    longitude: number
  }>({
    latitude: 0,
    longitude: 0,
  })
  const [weatherData, setWeatherData] = React.useState<any>(null)
  const parallaxRef = useRef<any>(null)

  const onSearch = (query: string) => {
    getCityLocation(query).then((data) => {
      setLocation(data)
    })
  }

  const onGeoLocate = async () => {
    getGeoLocation().then((data) => {
      setLocation(data)
    })
  }

  useEffect(() => {
    if (location.latitude === 0 && location.longitude === 0) return
    getWeatherData(location.latitude, location.longitude).then((data) => {
      setWeatherData(data)
    })
  }, [location])

  return (
    <div className='app'>
      <Parallax ref={parallaxRef}>
        <SearchBar
          onSearch={onSearch}
          onGeoLocate={onGeoLocate}
        />
        <WeatherCard weatherData={weatherData} />
      </Parallax>
    </div>
  )
}

export default App
