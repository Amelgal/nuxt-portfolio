<template>
  <article class="prose dark:invert max-w-none">
    <ContentDoc>
      <template #not-found>
        <div>
          <h1>Not Found</h1>
          <p>Sorry, we couldn't find the page you were looking for.</p>
        </div>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{
          'col-span-4': doc.toc,
          'col-span-6': !doc.toc,
        }">
            <ContentRenderer :value="doc"/>
          </div>
          <div v-if="doc.toc" class="col-span-2 not-prose">
            <aside class="sticky top-4">
              <div class="font-semibold mb-2">
                Table of Contents
              </div>
              <nav class="space-y-2">
                <toc-links :links="doc.body.toc.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
const activeId = ref(null)
onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
        break;
      }
    }
  }
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })
  const elements = document.querySelectorAll('h2, h3')
  for (const element of elements) {
    observer.observe(element)
  }
  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element)
    }
  })
})
</script>

<style scoped>

</style>