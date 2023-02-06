<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<template>
  <button
    type="button"
    class="rounded p-2 bg-custom hover:bg-custom-dark focus:bg-custom-dark active:bg-custom-dark text-white shadow outline-custom-dark outline-offset-2"
  >
    {{ props.text }}
  </button>
</template>
