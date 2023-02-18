<script setup>
import Layout from "../components/Layout.vue"
import WidgetAbout from "../components/widgets/WidgetAbout.vue"
import WidgetAbstract from "../components/widgets/WidgetAbstract.vue"
import WidgetSidebar from "../components/widgets/WidgetSidebar.vue"
import { defineProps } from "vue"

const props = defineProps({
    curPage: {
        default: 1,
    },
})
</script>

<template>
  <Layout>
    <template #sidebar>
      <WidgetAbout />
      <WidgetSidebar>
        <template #title> About </template>
        Hello, my name is tth37.
      </WidgetSidebar>
      <WidgetSidebar>
        <template #title> Contact </template>
        GitHub
      </WidgetSidebar>
    </template>

    <WidgetAbstract :cur-page="props.curPage"></WidgetAbstract>
  </Layout>
</template>
