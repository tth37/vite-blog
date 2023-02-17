<script setup>
  import Navbar from './Navbar.vue'
</script>

<template>
  <!-- Body -->
  <div class="bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white">
    <!-- Navbar -->
      <Navbar />

    <!-- Page Container -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-8xl">
      <div class="flex flex-col md:flex-row sm:px-6 lg:px-8 py-8">
        <!-- Sidebar -->
        <div class="w-full md:w-1/3">
          <div class="flex flex-col">
            <slot name="sidebar"></slot>
          </div>
        </div>

        <!-- Content -->
        <div class="w-full md:w-2/3">
          <div class="flex flex-col">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
