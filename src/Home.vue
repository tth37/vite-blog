<script setup>
  import Layout from './components/Layout.vue'
  import Abstract from './components/widgets/Abstract.vue'
  import WidgetSidebar from './components/widgets/WidgetSidebar.vue'
  import { defineProps } from 'vue'

  const { curPage } = defineProps({
    curPage: {
      default: 1
    }
  })
</script>

<template>
  {{ curPage }}
  <Layout>
    <template #sidebar>
      <WidgetSidebar>
        <template #title> About </template>
        Hello, my name is tth37.
      </WidgetSidebar>
      <WidgetSidebar>
        <template #title> Contact </template>
        GitHub
      </WidgetSidebar>
    </template>

    <Abstract :cur-page="curPage"></Abstract>
  </Layout>
</template>
