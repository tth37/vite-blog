<script setup>
import Layout from "@/components/Layout.vue"
import WidgetAvatar from "@/components/widgets/WidgetAvatar.vue"
import WidgetAbout from "@/components/widgets/WidgetAbout.vue";
import WidgetCategories from "@/components/widgets/WidgetCategories.vue";
import WidgetTags from "@/components/widgets/WidgetTags.vue";
import WidgetAbstractCategory from "@/components/widgets/WidgetAbstractCategory.vue";

import WidgetBreadCrumb from "@/components/widgets/WidgetBreadCrumb.vue";

const props = defineProps({
    curPage: {
        default: 1,
    },
    category: {
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

    <WidgetBreadCrumb :bread-crumb="[{name: 'Categories', to: '/categories'}, {name: props.category, to: '/category/' + props.category}]" />
    <WidgetAbstractCategory :cur-page="props.curPage" :category="props.category"></WidgetAbstractCategory>

</Layout>
</template>
