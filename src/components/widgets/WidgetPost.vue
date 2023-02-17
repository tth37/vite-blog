<script setup>
  import Widget from './Widget.vue'
  import { defineProps, ref, watchEffect } from 'vue'
  import Skeleton from './components/Skeleton.vue'
  import axios from 'axios'
  import {renderMd} from '../../utils/renderMd.js'


  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
  })
  const loading = ref(true)
  const post = ref({})

  watchEffect(async () => {
    loading.value = true
    const res = await axios.get('/api/post/' + props.id)
    post.value = {
      ...res.data,
      content: renderMd(res.data.content),
    }
    loading.value = false
  })
</script>

<template>
  <Widget>
    <div v-if="loading">
      <Skeleton/>
    </div>
    <div v-else>
      <div class="prose markdown-body max-w-3xl overflow-x-auto"
          v-html="post.content"></div>
    </div>
  </Widget>
</template>
