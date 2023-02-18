<script setup>
import Pagination from "./components/Pagination.vue"
import Skeleton from "./components/Skeleton.vue"
import Widget from "./Widget.vue"
import { ref, watchEffect } from "vue"
import { useConfigStore } from "../../stores/config"
import axios from "axios"
import { scroll } from "../../utils/scroll"
import Meta from "./components/Meta.vue"

const TAGPAGE_URL = "/api/tag/"

const props = defineProps({
    curPage: {
        default: 1,
    },
    tag: {
        required: true,
    }
})
const loading = ref(true)
const page = ref([])
const config = useConfigStore()

watchEffect(async () => {
    loading.value = true
    const res = await axios.get(TAGPAGE_URL + props.tag + "/" + props.curPage)
    page.value = res.data
    loading.value = false
    scroll()
})
</script>

<template>
  <Widget v-if="loading" v-for="_ in config.postsPerPage" :key="_">
    <Skeleton />
  </Widget>
  <Widget v-else v-for="post in page" :key="post.meta.id">
    <router-link
      :to="'/post/' + post.meta.id"
      class="block mb-2 text-2xl font-bold text-gray-900 dark:text-white"
    >
      {{ post.meta.title }}
    </router-link>

    <p>{{ post.meta.abstract }}</p>
    <Meta :meta="post.meta" />
  </Widget>
  <Widget>
    <Pagination :curPage="props.curPage" :totPage="config.tagTotPage[props.tag]" :base="`/tag/${props.tag}`" />
  </Widget>
</template>
