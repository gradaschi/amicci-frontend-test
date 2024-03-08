import React, { useState } from 'react'
import './styles.scss'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import { FaMapPin, FaSearchengin } from 'react-icons/fa6'

interface SearchBarProps {
  onSearch: (query: string) => void
  onGeoLocate: () => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onGeoLocate }) => {
  const [query, setQuery] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleSearch = () => {
    onSearch(query)
  }

  return (
    <div className='search-bar'>
      <div className='button-group'>
        <IconButton
          className='icon-button'
          onClick={onGeoLocate}
        >
          <FaMapPin
            size={20}
            color='#000'
          />
        </IconButton>
      </div>

      <TextField
        type='text'
        placeholder='Enter city name'
        value={query}
        onChange={handleInputChange}
        variant='outlined'
        className='search-input'
        InputProps={{
          style: {
            color: '#000',
          },
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={handleSearch}>
                <FaSearchengin
                  size={20}
                  color='#000'
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}

export default SearchBar
