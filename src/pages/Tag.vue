<script setup>
import Layout from "../components/Layout.vue"
import WidgetAvatar from "../components/widgets/WidgetAvatar.vue"
import WidgetAbout from "../components/widgets/WidgetAbout.vue";
import WidgetCategories from "../components/widgets/WidgetCategories.vue";
import WidgetTags from "../components/widgets/WidgetTags.vue";
import WidgetAbstractTag from "../components/widgets/WidgetAbstractTag.vue";
import WidgetBreadCrumb from "../components/widgets/WidgetBreadCrumb.vue";

const props = defineProps({
    curPage: {
        default: 1,
    },
    tag: {
        required: true,
    }
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

    <WidgetBreadCrumb :bread-crumb="[{name: 'Tags', to: '/tags'}, {name: props.tag, to: '/tag/' + props.tag}]" />
    <WidgetAbstractTag :cur-page="props.curPage" :tag="props.tag"></WidgetAbstractTag>
  </Layout>
</template>
