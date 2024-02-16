<template>
  <slot :posts="posts">
    <div class="not-prose">
      <div v-if="posts" class="mt-5 font-mono">
        <ul>
          <li class="column-default text-gray-400 text-sm">
            <div class="column-1">data</div>
            <div class="column-2">title</div>
            <div class="column-3">description</div>
          </li>
          <li v-for="post in posts" :key="post._path">
            <nuxt-link :to="post._path" class="column">
              <div class="column-1"
                   :class="{ 'invisible': !post.displayYear }">
                {{ post.year }}
              </div>
              <div class="column-2">
                <h2 class="text-3xl">{{ post.title }}</h2>
              </div>
              <div class="column-3">
                <p>{{ post.description }}</p>
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </slot>
</template>

<script setup>
const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
});
const {data} = await useAsyncData(
    'blog-list',
    () => {
      const query = queryContent('blog')
          .only(['_path', 'title', 'description', 'publishedAt'])
          .where({_path: { $ne: '/blog' }})
          .sort({publishedAt: -1 });

      if (props.limit) {
        query.limit(props.limit);
      }

      return query.find()
    }
);

const posts = computed(() => {
  if (!data.value) return [];

  const res = []
  let lastYear = null

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear()
    post.displayYear = year !== lastYear
    post.year = year
    res.push(post)
    lastYear = year
  }

  return res;
});
console.log(posts);
</script>

<style scoped>
.column, .column-default {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-900;
}
.column{
  @apply hover:bg-gray-100 dark:hover:bg-black;
}
.column-1 {
  width: 3%;
}
.column-2 {
  @apply w-3/6
}
.column-3 {
  @apply w-3/6
}
</style>