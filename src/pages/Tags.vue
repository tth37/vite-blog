<script setup>
import Layout from "../components/Layout.vue"
import WidgetAvatar from "../components/widgets/WidgetAvatar.vue"
import WidgetAbout from "../components/widgets/WidgetAbout.vue";
import WidgetCategories from "../components/widgets/WidgetCategories.vue";
import WidgetBreadCrumb from "../components/widgets/WidgetBreadCrumb.vue";
import WidgetTags from "../components/widgets/WidgetTags.vue";

</script>

<template>
  <Layout>
    <template #sidebar>
      <WidgetAvatar />
      <WidgetAbout />
      <WidgetCategories class="hidden md:block" />
    </template>

    <WidgetBreadCrumb :bread-crumb="[{name: 'Tags', to: '/tags'}]" />
    <WidgetTags />
  </Layout>
</template>
