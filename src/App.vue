<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="app-title">🌤️ Hava Durumu</h1>

      <nav>
        <RouterLink to="/">Ana Sayfa</RouterLink>
        <RouterLink to="/favorites">Favoriler</RouterLink>
        <RouterLink to="/about">Hakkında</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-title {
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: background-color 0.3s;
  font-weight: 500;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

nav a.router-link-active {
  background-color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .wrapper {
    flex-direction: column;
    gap: 15px;
  }
  
  .app-title {
    font-size: 1.5rem;
  }
  
  nav {
    gap: 10px;
  }
  
  nav a {
    padding: 6px 12px;
    font-size: 14px;
  }
}
</style>
