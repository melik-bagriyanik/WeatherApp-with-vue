<template>
  <div class="search-bar">
    <input 
      v-model="city" 
      @keyup.enter="searchCity" 
      placeholder="Şehir adı girin..." 
      class="search-input"
    />
    <button @click="searchCity" class="search-button">Ara</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const city = ref('')

const emit = defineEmits<{
  search: [city: string]
}>()

const searchCity = () => {
  if (city.value.trim()) {
    emit('search', city.value)
    city.value = ''
  }
}
</script>

<style scoped>
.search-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  justify-content: center;
}

.search-input {
  padding: 10px 15px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  min-width: 250px;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #4CAF50;
}

.search-button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.search-button:hover {
  background-color: #45a049;
}
</style>
