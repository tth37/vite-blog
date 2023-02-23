<script setup>
import Layout from "@/components/Layout.vue"
import WidgetAvatar from "@/components/widgets/WidgetAvatar.vue"
import WidgetAbout from "@/components/widgets/WidgetAbout.vue";
import WidgetTags from "@/components/widgets/WidgetTags.vue";
import WidgetBreadCrumb from "@/components/widgets/WidgetBreadCrumb.vue";
import WidgetCategories from "@/components/widgets/WidgetCategories.vue";

</script>

<template>
  <Layout>
    <template #sidebar>
      <WidgetAvatar />
      <WidgetAbout />
      <WidgetTags class="hidden md:block" />
    </template>

    <WidgetBreadCrumb :bread-crumb="[{name: 'Categories', to: '/categories'}]" />
    <WidgetCategories />
  </Layout>
</template>
