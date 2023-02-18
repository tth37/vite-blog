<script setup>
import Widget from "./Widget.vue"
import { ref, watchEffect } from "vue"
import Skeleton from "./components/Skeleton.vue"
import axios from "axios"
import { scroll } from "../../utils/scroll"

const loading = ref(true)
const post = ref({})


watchEffect(async () => {
    loading.value = true
    const res = await axios.get("/api/about")
    post.value = {
        ...res.data,
        content: await import("../../utils/renderMd.js").then((module) =>
            module.renderMd(res.data.content)
        ),
    }
    loading.value = false
    scroll()
})
</script>

<template>
  <Widget>
    <div v-if="loading">
      <Skeleton />
    </div>
    <div v-else>
      <div
        class="prose markdown-body max-w-3xl overflow-x-auto overflow-y-hidden"
        v-html="post.content"
      ></div>
    </div>
  </Widget>
</template>
