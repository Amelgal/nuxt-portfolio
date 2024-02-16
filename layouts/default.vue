<template>
  <div>
    <header class="justify-between items-center ">
        <app-menu/>
    </header>

    <div class="container mx-auto max-w-6xl">
      <main class="p-2 mt-10">
        <slot />
      </main>
    </div>

    <div>
      Footer
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: '[title]',
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  titleTemplate: '%s - Test',
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style>

body{
  @apply bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-sans antialiased;
}

</style>