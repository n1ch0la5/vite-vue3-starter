<script setup>
import DarkMode from './components/DarkMode.vue'
</script>
<template>
  <div class=" max-w-3xl mx-auto text-center p-12">
    <nav class="mb-6">
      <router-link to="/" exact>Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <DarkMode />
    <div>
      <router-view />
    </div>
  </div>
</template>

<style>
html.dark {
  color-scheme: dark;
}
body {
   @apply bg-gray-50 text-gray-800 dark:bg-gray-800 dark:text-gray-50;
}
</style>
