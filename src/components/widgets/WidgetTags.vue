<script setup>
import Widget from "./Widget.vue"
import { ref, watchEffect } from "vue"
import Skeleton from "./components/Skeleton.vue"
import axios from "axios"

const loading = ref(true)
const tags = ref([])


watchEffect(async () => {
    loading.value = true
    const res = await axios.get("/api/tags")
    tags.value = res.data
    loading.value = false
})
</script>

<template>
  <Widget>
    <router-link
      to="/tags"
      class="mb-2 text-2xl font-bold text-gray-900 dark:text-white"
    >
      Tags
    </router-link
      >
    <div v-if="loading">
      <Skeleton />
    </div>
    <div v-else class="flex flex-row flex-wrap mt-5 justify-start">

    <router-link
      v-if="tags"
      v-for="tag in tags"
      :key="tag"
      :to="`/tag/${tag}`"
      class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 whitespace-nowrap"
    >
      <font-awesome-icon icon="fa-solid fa-tag" class="mr-1" />
      {{ tag }}
    </router-link>
  </div>
  </Widget>
</template>
