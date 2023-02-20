<script setup>
const props = defineProps({
    base: {
        type: String,
        default: "",
    },
    curPage: {
        type: Number,
        required: true,
    },
    totPage: {
        type: Number,
        required: true,
    },
})

function createPageList(curPage, totPage) {
    return Array.from({ length: totPage }, (_, i) => i + 1)
}

const pageList = createPageList(props.curPage, props.totPage)
</script>

<template>
  <nav class="flex align-middle">
  <ul class="inline-flex -space-x-px mx-auto">
    <li>
      <router-link v-if="props.curPage != 1" :to="`${props.base}/page/${Number(props.curPage) - 1}`" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">&#10094;</router-link>
      <span v-else class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">&#10094;</span>
    </li>
    <li v-for="n in pageList" :key="n">
      <router-link v-if="props.curPage != n" :to="`${props.base}/page/${n}`" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ n }}</router-link>
      <span v-else aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{{ n }}</span>
    </li>
    <li>
      <router-link v-if="props.curPage != totPage" :to="`${props.base}/page/${Number(props.curPage) + 1}`" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">&#10095;</router-link>
      <span v-else class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">&#10095;</span>
    </li>
    
  </ul>
</nav>




</template>
