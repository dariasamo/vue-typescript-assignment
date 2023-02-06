<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { API_ENDPOINT } from "./constants";
import TheHeader from "./components/TheHeader.vue";
import TheTrees from "./components/TheTrees.vue";
import type { TheTreeInterface } from "@/components/TheTree.vue";
const state = reactive({
  loading: false,
  trees: [] as TheTreeInterface[],
});

async function fetchTrees() {
  state.loading = true;
  try {
    const response = await fetch(API_ENDPOINT);
    state.trees = await response.json().then((response) => response.trees);
  } catch (error) {
    console.error(error);
  } finally {
    state.loading = false;
  }
}

onMounted(() => {
  fetchTrees();
});
</script>

<template>
  <TheHeader msg="<span class='sr-only'>Brand</span>does good stuff &#10084;" />
  <main class="container mx-auto px-4 pb-8 mt-4" role="main">
    <TheTrees :isLoading="state.loading" :trees="state.trees" />
  </main>
</template>
