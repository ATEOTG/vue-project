<template>
  <div class="bg-gray-100 h-full">
    <Navbar />

    <main>
      <div class="max-w-[1200px] max-auto"></div>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
</script>
