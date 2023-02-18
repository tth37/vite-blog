<script setup>
import Layout from "../components/Layout.vue"
import WidgetAbout from "../components/widgets/WidgetAbout.vue"
import { defineProps } from "vue"
import WidgetPost from "../components/widgets/WidgetPost.vue"

const props = defineProps({
    id: {
        type: String,
        required: true,
    },
})
</script>

<template>
  <Layout>
    <template #sidebar>
      <WidgetAbout />
    </template>

    <WidgetPost :id="props.id"></WidgetPost>
  </Layout>
</template>
