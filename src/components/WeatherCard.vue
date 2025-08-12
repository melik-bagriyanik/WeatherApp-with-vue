<template>
  <div v-if="weather" class="weather-card">
    <div class="weather-header">
      <h2>{{ weather.name }}</h2>
      <p class="weather-description">{{ weather.weather[0].description }}</p>
    </div>
    
    <div class="weather-info">
      <div class="weather-item">
        <span class="label">Sıcaklık:</span>
        <span class="value">{{ Math.round(weather.main.temp) }}°C</span>
      </div>
      <div class="weather-item">
        <span class="label">Nem:</span>
        <span class="value">{{ weather.main.humidity }}%</span>
      </div>
      <div class="weather-item">
        <span class="label">Rüzgar:</span>
        <span class="value">{{ weather.wind.speed }} m/s</span>
      </div>
      <div class="weather-item">
        <span class="label">Basınç:</span>
        <span class="value">{{ weather.main.pressure }} hPa</span>
      </div>
    </div>
    
    <button @click="$emit('addFavorite', weather.name)" class="favorite-button">
      Favorilere Ekle
    </button>
  </div>
</template>

<script setup lang="ts">
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

defineProps<{
  weather: WeatherData | null
}>()

defineEmits<{
  addFavorite: [city: string]
}>()
</script>

<style scoped>
.weather-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
}

.weather-header {
  text-align: center;
  margin-bottom: 25px;
}

.weather-header h2 {
  margin: 0 0 10px 0;
  font-size: 28px;
  font-weight: 600;
}

.weather-description {
  margin: 0;
  font-size: 18px;
  opacity: 0.9;
  text-transform: capitalize;
}

.weather-info {
  margin-bottom: 25px;
}

.weather-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.weather-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: 500;
  opacity: 0.9;
}

.value {
  font-weight: 600;
  font-size: 18px;
}

.favorite-button {
  width: 100%;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;
}

.favorite-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}
</style>
