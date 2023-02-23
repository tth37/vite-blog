<script setup>
import Layout from "@/components/Layout.vue"
import WidgetAvatar from "@/components/widgets/WidgetAvatar.vue"
import WidgetAbstract from "@/components/widgets/WidgetAbstract.vue"
import WidgetBreadCrumb from "@/components/widgets/WidgetBreadCrumb.vue";
import WidgetCategories from "@/components/widgets/WidgetCategories.vue";
import WidgetTags from "@/components/widgets/WidgetTags.vue";
import WidgetAbout from "@/components/widgets/WidgetAbout.vue";

const props = defineProps({
    curPage: {
        default: 1,
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

    <WidgetBreadCrumb :bread-crumb="[]" />
    <WidgetAbstract :cur-page="props.curPage"></WidgetAbstract>
  </Layout>
</template>
