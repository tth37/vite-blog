<script setup>
import Widget from "./Widget.vue"
import { ref, watchEffect } from "vue"
import Skeleton from "./components/Skeleton.vue"
import axios from "axios"

const loading = ref(true)
const categories = ref([])


watchEffect(async () => {
    loading.value = true
    const res = await axios.get("/api/categories")
    categories.value = res.data
    loading.value = false
})
</script>

<template>
  <Widget>
    <router-link
      to="/categories"
      class="mb-2 text-2xl font-bold text-gray-900 dark:text-white"
    >
      Categories
    </router-link>
    <div v-if="loading">
      <Skeleton />
    </div>
    <div v-else class="flex flex-row flex-wrap mt-5 justify-start">

    <router-link
      v-if="categories"
        v-for="category in categories"
        :key="category"
        :to="`/category/${category}`"
        class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 whitespace-nowrap"
    >
      <font-awesome-icon icon="fa-solid fa-folder-open" class="mr-1" />
      {{ category }}
    </router-link>
  </div>
  </Widget>
</template>
