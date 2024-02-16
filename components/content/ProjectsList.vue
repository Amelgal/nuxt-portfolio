<template>
  <div>
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-1 list-none">
        <li v-for="repo in repos" :key="repo.id"
            class="border-gray-200 rounded-sm p-4 hover:bg-gray-400 dark:hover:bg-gray-200 font-mono">
          <a :href="repo.html_url" target="_blank" class="block p-4 dark:bg-gray-200 bg-gray-100  rounded-md no-underline ">
            <div class="flex items-center justify-between">
              <div class="w-2/3">
                <h3 class="text-xl font-semibold">{{ repo.name }}</h3>
              </div>
              <div class="w-1/3 text-right">
                {{ repo.stargazers_count }} stars /
                {{ repo.forks_count }} forks /
                {{ repo.open_issues_count }} issues /
                {{ repo.language }}
              </div>
            </div>
            <p class="mt-2">{{ repo.description }}</p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const {error, pending, data} = await useFetch('https://api.github.com/users/Amelgal/repos')

const repos = computed(
    () => data.value
        // .filter(repo => repo.description)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
)
</script>

<style scoped>

</style>