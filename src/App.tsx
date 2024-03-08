import React from 'react'
import './App.scss'
import SearchBar from './components/Searchbar'
import WeatherCard from './components/WeatherCard'

function App() {
  const onSearch = (query: string) => {
    console.log('Search query:', query)
  }

  const onGeoLocate = () => {
    console.log('Geolocating...')
  }

  return (
    <div className='app'>
      <SearchBar
        onSearch={onSearch}
        onGeoLocate={onGeoLocate}
      />
      <WeatherCard
        weatherData={{
          temperature: 25,
          climate: 'Sunny',
          humidity: 45,
          windSpeed: 5,
          weatherDescription: 'Clear Sky',
          cloudiness: 0,
        }}
      />
    </div>
  )
}

export default App
