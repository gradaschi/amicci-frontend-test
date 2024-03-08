import axios from 'axios'

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'

export const getWeatherData = async (
  latitude: number,
  longitude: number,
): Promise<any> => {
  const apiUrl = `${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`

  const response = await axios.get<any>(apiUrl)
  const data = response.data

  return data
}
