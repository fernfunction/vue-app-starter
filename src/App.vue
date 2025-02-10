<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>

<template>
  <main id="root">
    <AppNavbar></AppNavbar>
    <RouterView />
  </main>
</template>
