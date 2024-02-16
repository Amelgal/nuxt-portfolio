<template>
  <nuxt-layout>
    <main>
      <div>
        <h1 class="text-4xl mb-3">{{ error.statusCode }}</h1>
        <p class="text-xl mb-3">{{ error.message }}</p>
        <button @click="handleError" class="text-gray-500 hover:bg-gray-400">Back to Main page</button>
      </div>
    </main>
  </nuxt-layout>
</template>

<script setup>
const props = defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style scoped>

</style>