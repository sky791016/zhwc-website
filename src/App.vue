<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>
