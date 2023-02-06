<script setup lang="ts">
import TheTree from "@/components/TheTree.vue";
import type { TheTreeInterface } from "@/components/TheTree.vue";
defineProps<{
  isLoading: boolean;
  trees: TheTreeInterface[];
}>();
</script>

<template>
  <div v-if="isLoading" data-testid="loading">Loading...</div>
  <div
    class="md:masonry-2-col lg:masonry-3-col"
    data-testid="trees-list"
    v-else
  >
    <TheTree v-for="tree in trees" :key="tree.name" :tree="tree" />
  </div>
</template>
