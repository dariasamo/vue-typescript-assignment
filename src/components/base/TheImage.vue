<script setup lang="ts">
const props = defineProps<{
  src: string | undefined;
  alt: string;
}>();
</script>

<template>
  <img
    :src="props.src"
    :alt="props.alt"
    class="block w-full h-auto"
    data-testid-image
  />
</template>
