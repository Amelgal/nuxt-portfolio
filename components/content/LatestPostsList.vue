<template>
  <posts-list v-slot="{ posts }" :limit="limit">
    <div v-if="posts" class="not-prose">
      <div v-for="post in posts" :key="post._path" class="mt-5 font-mono">
        <nuxt-link :to="post._path" class="column">
          <div class="column-2">
            <h2 class="text-3xl">{{ post.title }}</h2>
          </div>
        </nuxt-link>
      </div>
    </div>
  </posts-list>
</template>

<script setup>
defineProps({
  limit: {
    type: Number,
    default: null
  }
})
</script>

<style scoped>
</style>