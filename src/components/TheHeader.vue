<script setup lang="ts">
import TheLogo from "./TheLogo.vue";
defineProps<{
  msg: string;
}>();
</script>

<template>
  <header role="banner">
    <div class="container mx-auto p-4 flex items-center">
      <TheLogo />
      <h1 v-html="msg" class="text-xl ml-4" />
    </div>
  </header>
</template>
