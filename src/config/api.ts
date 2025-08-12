// OpenWeather API Configuration
// Replace 'YOUR_API_KEY_HERE' with your actual OpenWeather API key
// Get your API key from: https://openweathermap.org/api

export const API_CONFIG = {
  BASE_URL: 'https://api.openweathermap.org/data/2.5',
  API_KEY: 'YOUR_API_KEY_HERE', // Replace with your actual API key
  UNITS: 'metric',
  LANGUAGE: 'tr'
}

export const getWeatherUrl = (city: string) => {
  return `${API_CONFIG.BASE_URL}/weather?q=${city}&appid=${API_CONFIG.API_KEY}&units=${API_CONFIG.UNITS}&lang=${API_CONFIG.LANGUAGE}`
}
