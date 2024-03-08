import React, { useEffect, useRef } from 'react'
import './App.scss'
import SearchBar from './components/Searchbar'
import WeatherCard from './components/WeatherCard'
import { getWeatherData, getCityLocation, getGeoLocation } from './services'
import Parallax from './components/Parallax'
import { useAlert } from './context'

function App() {
  const [location, setLocation] = React.useState({
    latitude: 0,
    longitude: 0,
  })

  const [weatherData, setWeatherData] = React.useState(null)
  const showAlert = useAlert()
  const parallaxRef = useRef<any>(null)

  const handleLocationError = () => {
    showAlert('error', 'Erro ao buscar localização')
  }

  const handleWeatherDataError = () => {
    showAlert('error', 'Erro ao buscar dados do clima')
  }

  const searchLocation = (query: string) => {
    getCityLocation(query)
      .then((data) => {
        setLocation(data)
        parallaxRef.current?.scrollTo(1)
      })
      .catch(handleLocationError)
  }

  const geoLocate = async (scroll: boolean) => {
    getGeoLocation()
      .then((data) => {
        setLocation(data)
        if (scroll) parallaxRef.current?.scrollTo(1)
      })
      .catch(handleLocationError)
  }

  useEffect(() => {
    if (location.latitude === 0 && location.longitude === 0) return

    getWeatherData(location.latitude, location.longitude)
      .then((data) => {
        setWeatherData(data)
      })
      .catch(handleWeatherDataError)
  }, [location])

  useEffect(() => {
    geoLocate(false)
  }, [])

  return (
    <div className='app'>
      <Parallax ref={parallaxRef}>
        <SearchBar
          onSearch={searchLocation}
          onGeoLocate={geoLocate}
        />
        <WeatherCard weatherData={weatherData} />
      </Parallax>
    </div>
  )
}

export default App
