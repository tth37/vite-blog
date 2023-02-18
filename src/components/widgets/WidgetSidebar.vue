<script setup>
import Widget from "./Widget.vue"
</script>

<template>
  <Widget>
    <h5
      class="mb-2 text-2xl font-bold text-gray-900 dark:text-white"
    >
      <slot name="title"></slot>
    </h5>
    <slot></slot>
  </Widget>
</template>
