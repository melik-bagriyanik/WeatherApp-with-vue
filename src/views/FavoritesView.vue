<template>
  <div class="favorites">
    <div class="container">
      <h1 class="title">Favori Şehirler</h1>
      
      <div v-if="favorites.length === 0" class="empty-state">
        <p>Henüz favori şehriniz yok.</p>
        <router-link to="/" class="home-link">Ana sayfaya dön ve şehir ekle</router-link>
      </div>
      
      <div v-else class="favorites-list">
        <div 
          v-for="city in favorites" 
          :key="city" 
          class="favorite-item"
          @click="getWeatherForCity(city)"
        >
          <span class="city-name">{{ city }}</span>
          <button 
            @click.stop="removeFavorite(city)" 
            class="remove-button"
          >
            Kaldır
          </button>
        </div>
      </div>
      
      <div v-if="weatherData" class="weather-section">
        <h2>{{ weatherData.name }} Hava Durumu</h2>
        <WeatherCard :weather="weatherData" @addFavorite="() => {}" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
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

const favorites = ref<string[]>([])
const weatherData = ref<WeatherData | null>(null)

const getWeatherForCity = async (city: string) => {
  try {
    const response = await axios.get(getWeatherUrl(city))
    weatherData.value = response.data
  } catch (err: any) {
    if (err.response?.status === 404) {
      alert('Şehir bulunamadı!')
    } else if (err.response?.status === 401) {
      alert('API anahtarı geçersiz!')
    } else {
      alert('Bir hata oluştu.')
    }
  }
}

const removeFavorite = (city: string) => {
  const index = favorites.value.indexOf(city)
  if (index > -1) {
    favorites.value.splice(index, 1)
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
    
    // If the removed city was being displayed, clear the weather data
    if (weatherData.value?.name === city) {
      weatherData.value = null
    }
  }
}

onMounted(() => {
  const savedFavorites = localStorage.getItem('favorites')
  if (savedFavorites) {
    favorites.value = JSON.parse(savedFavorites)
  }
})
</script>

<style scoped>
.favorites {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
}

.empty-state {
  text-align: center;
  margin: 60px 0;
  color: #666;
}

.home-link {
  color: #4CAF50;
  text-decoration: none;
  font-weight: 500;
}

.home-link:hover {
  text-decoration: underline;
}

.favorites-list {
  margin-bottom: 40px;
}

.favorite-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.favorite-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.city-name {
  font-size: 18px;
  font-weight: 500;
  color: #2c3e50;
}

.remove-button {
  background-color: #ff6b6b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.remove-button:hover {
  background-color: #ff5252;
}

.weather-section {
  margin-top: 40px;
  text-align: center;
}

.weather-section h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.8rem;
}
</style>
