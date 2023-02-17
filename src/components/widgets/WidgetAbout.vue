<script setup>
  import Widget from './Widget.vue'
</script>

<template>
  <Widget>
    <div class="flex flex-row items-center md:flex-col space-x-4 md:space-x-1 space-y-2">
      <img
        class="rounded w-20 h-20 lg:w-36 lg:h-36 ring-2 ring-gray-300 dark:ring-gray-500"
        src="/assets/avatar.jpg"
        alt="Extra large avatar"
      />

      <!-- flex start -->
      <div class="flex flex-col items-start lg:items-center">
        <h1 class="text-2xl font-bold">tth37</h1>
        <h2 class="text-lg font-medium">Think twice, Code once.</h2>
        <h3 class="text-lg font-medium text-gray-500 dark:text-gray-400">
          <font-awesome-icon icon="fa-solid fa-location-dot" />
          Jiangsu, China
        </h3>
      </div>
    </div>
  </Widget>
</template>
