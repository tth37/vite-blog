<script setup>
  import Pagination from './components/Pagination.vue'
  import Skeleton from './components/Skeleton.vue'
  import Widget from './Widget.vue'
  import { ref, defineProps, watch, watchEffect } from 'vue'
  import { useConfigStore } from '../../stores/config'
  import axios from 'axios'

  const PAGE_URL = '/api/page/'

  const loading = ref(true)
  const page = ref([])
  const props = defineProps({
    curPage: {
      default: 1,
    },
  })
  const config = useConfigStore()

  watchEffect(async () => {
    loading.value = true
    const res = await axios.get(PAGE_URL + props.curPage)
    page.value = res.data
    loading.value = false
  })
</script>

<template>
  <div v-if="loading">
    <Widget v-for="_ in config.postsPerPage">
      <Skeleton />
    </Widget>
  </div>
  <div v-else>
    <Widget v-for="post in page">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ post.title }}
      </h5>

      <p>{{ post.abstract }}</p>
      <p>{{ post.date }}</p>
    </Widget>
  </div>
  <Widget>
    <Pagination :curPage="props.curPage" :totPage="config.totPage" />
  </Widget>
</template>
