<template>
  <div>
    <div>
      Custom Header
    </div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Posts</nuxt-link>
        </li>
      </ul>
    </nav>
    <slot />
    <div>
      Custom Footer
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>