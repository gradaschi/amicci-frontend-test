import React from 'react'
import './App.scss'
import SearchBar from './components/Searchbar'

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
    </div>
  )
}

export default App
