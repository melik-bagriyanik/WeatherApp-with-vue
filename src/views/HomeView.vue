<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SearchBar from '../components/SearchBar.vue'
import WeatherCard from '../components/WeatherCard.vue'
import { getWeatherUrl } from '../config/api'

interface WeatherData {
  name: string
  weather: Array<{
    description: string
  }>
  main: {
    temp: number
    humidity: number
    pressure: number
  }
  wind: {
    speed: number
  }
}

const weatherData = ref<WeatherData | null>(null)
const loading = ref(false)
const error = ref('')
const favorites = ref<string[]>([])

const getWeather = async (city: string) => {
  loading.value = true
  error.value = ''
  
  try {
    const response = await axios.get(getWeatherUrl(city))
    weatherData.value = response.data
  } catch (err: any) {
    if (err.response?.status === 404) {
      error.value = 'Şehir bulunamadı! Lütfen geçerli bir şehir adı girin.'
    } else if (err.response?.status === 401) {
      error.value = 'API anahtarı geçersiz! Lütfen doğru API anahtarını kullanın.'
    } else {
      error.value = 'Bir hata oluştu. Lütfen tekrar deneyin.'
    }
    weatherData.value = null
  } finally {
    loading.value = false
  }
}

const addToFavorites = (city: string) => {
  if (!favorites.value.includes(city)) {
    favorites.value.push(city)
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
    alert(`${city} favorilere eklendi!`)
  } else {
    alert(`${city} zaten favorilerde!`)
  }
}

onMounted(() => {
  const savedFavorites = localStorage.getItem('favorites')
  if (savedFavorites) {
    favorites.value = JSON.parse(savedFavorites)
  }
})
</script>

<template>
  <div class="home">
    <div class="container">
      <h1 class="title">Hava Durumu Uygulaması</h1>
      <SearchBar @search="getWeather" />
      
      <div v-if="loading" class="loading">
        <p>Hava durumu bilgileri yükleniyor...</p>
      </div>
      
      <div v-if="error" class="error">
        <p>{{ error }}</p>
      </div>
      
      <WeatherCard 
        v-if="weatherData" 
        :weather="weatherData" 
        @addFavorite="addToFavorites" 
      />
      
      <div v-if="!weatherData && !loading" class="welcome">
        <p>Bir şehir adı girin ve hava durumunu öğrenin!</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.title {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 30px;
  font-weight: 600;
}

.loading {
  margin: 40px 0;
  color: #666;
  font-size: 18px;
}

.error {
  background-color: #ff6b6b;
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  font-weight: 500;
}

.welcome {
  margin: 60px 0;
  color: #666;
  font-size: 18px;
}
</style>
