<template>
  <nuxt-layout>
    <main>
      <nuxt-page/>
    </main>
  </nuxt-layout>
</template>

<script setup lang="ts">
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: grayscale(1);
}
</style>