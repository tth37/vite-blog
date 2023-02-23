<script setup>
import Layout from "@/components/Layout.vue"
import WidgetAboutPost from "@/components/widgets/WidgetAboutPost.vue";
import WidgetAbout from "@/components/widgets/WidgetAbout.vue";
import WidgetCategories from "@/components/widgets/WidgetCategories.vue";
import WidgetTags from "@/components/widgets/WidgetTags.vue";
import WidgetAvatar from "@/components/widgets/WidgetAvatar.vue"
import WidgetBreadCrumb from "@/components/widgets/WidgetBreadCrumb.vue";

</script>

<template>
  <Layout>
    <template #sidebar>
      <WidgetAvatar />
      <WidgetAbout />
      <WidgetCategories class="hidden md:block" />
      <WidgetTags class="hidden md:block" />
    </template>

    <WidgetBreadCrumb :bread-crumb="[{name: 'About', to: '/about'}]" />
    <WidgetAboutPost />
  </Layout>
</template>
