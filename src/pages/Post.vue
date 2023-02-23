<script setup>
import Layout from "@/components/Layout.vue"
import WidgetAvatar from "@/components/widgets/WidgetAvatar.vue"
import WidgetAbout from "@/components/widgets/WidgetAbout.vue";
import WidgetCategories from "@/components/widgets/WidgetCategories.vue";
import WidgetTags from "@/components/widgets/WidgetTags.vue";
import WidgetBreadCrumb from "@/components/widgets/WidgetBreadCrumb.vue";
import WidgetPost from "@/components/widgets/WidgetPost.vue"

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
      <WidgetAvatar />
      <WidgetAbout />
      <WidgetCategories class="hidden md:block" />
      <WidgetTags class="hidden md:block" />
    </template>

    <WidgetBreadCrumb :bread-crumb="[{name: props.id, to: '/post/' + props.id}]" />
    <WidgetPost :id="props.id"></WidgetPost>
  </Layout>
</template>
