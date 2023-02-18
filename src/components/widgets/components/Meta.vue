<script setup>
  import { renderTimeAgo } from '../../../utils/renderTimeAgo'

  const props = defineProps({
    meta: {
      type: Object,
      required: true,
    },
  })

  console.log(props.meta)
</script>

<template>
  <div class="flex flex-row flex-wrap mt-5 justify-start">
    <router-link
      v-if="props.meta.category"
      :to="`/category/${props.meta.category}`"
      class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400"
    >
      <font-awesome-icon icon="fa-solid fa-folder-open" class="mr-1" />
      {{ props.meta.category }}
    </router-link>

    <router-link
      v-if="props.meta.tags"
      v-for="tag in props.meta.tags"
      :key="tag"
      :to="`/tag/${tag}`"
      class="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400"
    >
      <font-awesome-icon icon="fa-solid fa-tag" class="mr-1" />
      {{ tag }}
    </router-link>

    <span
      class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500"
    >
      <font-awesome-icon icon="fa-solid fa-clock" class="mr-1" />
      {{ renderTimeAgo(props.meta.date) }}
    </span>
  </div>
</template>
