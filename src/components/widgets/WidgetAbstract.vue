<script setup>
import Pagination from "./components/Pagination.vue"
import Skeleton from "./components/Skeleton.vue"
import Widget from "./Widget.vue"
import { ref, defineProps, watchEffect } from "vue"
import { useConfigStore } from "../../stores/config"
import axios from "axios"
import { renderTimeAgo } from "../../utils/renderTimeAgo"
import { scroll } from "../../utils/scroll"

const PAGE_URL = "/api/page/"

const props = defineProps({
    curPage: {
        default: 1,
    },
})
const loading = ref(true)
const page = ref([])
const config = useConfigStore()

watchEffect(async () => {
    loading.value = true
    const res = await axios.get(PAGE_URL + props.curPage)
    page.value = res.data
    loading.value = false
    scroll()
})
</script>

<template>
  <Widget v-if="loading" v-for="_ in config.postsPerPage" :key="_">
    <Skeleton />
  </Widget>
  <Widget v-else v-for="post in page" :key="post.id">
    <router-link
      :to="'/post/' + post.id"
      class="block mb-2 text-2xl font-bold text-gray-900 dark:text-white"
    >
      {{ post.title }}
    </router-link>

    <p>{{ post.abstract }}</p>
    <p>{{ renderTimeAgo(post.date) }}</p>
  </Widget>
  <Widget>
    <Pagination :curPage="props.curPage" :totPage="config.totPage" />
  </Widget>
</template>
