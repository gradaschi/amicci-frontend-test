import React, { useState } from 'react'
import './styles.scss'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import TextField from '@mui/material/TextField'
import { FaMapPin } from 'react-icons/fa6'
import { FaSearch } from 'react-icons/fa'
import { Tooltip } from '@mui/material'
import useScreenSize from '../../hooks/useScreenSize'

interface SearchBarProps {
  onSearch: (query: string) => void
  onGeoLocate: (scroll: boolean) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onGeoLocate }) => {
  const isMobile = useScreenSize()
  const [query, setQuery] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const handleSearch = (query: string) => {
    onSearch(query)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(query)
    }
  }

  return (
    <div className='search-bar'>
      <TextField
        type='text'
        label='Search for a city'
        value={query}
        onChange={handleInputChange}
        fullWidth
        variant='outlined'
        autoComplete='off'
        onKeyPress={handleKeyPress}
        sx={{
          '& .MuiInputLabel-root.Mui-focused': {
            color: '#000',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#000',
            },
          },
        }}
        InputProps={{
          style: {
            color: '#000',
          },
          inputProps: {
            style: {
              fontSize: isMobile ? '1.5rem' : '2rem',
              textAlign: 'center',
            },
          },
          startAdornment: (
            <InputAdornment position='start'>
              <Tooltip
                title='Use my location'
                placement='bottom'
              >
                <IconButton
                  onClick={() => onGeoLocate(true)}
                  aria-label='Use my location'
                >
                  <FaMapPin
                    size={32}
                    color='#262626'
                  />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              <Tooltip
                title='Search'
                placement='bottom'
              >
                <IconButton
                  onClick={() => handleSearch(query)}
                  aria-label='Search'
                >
                  <FaSearch
                    size={32}
                    color='#262626'
                  />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}

export default SearchBar
