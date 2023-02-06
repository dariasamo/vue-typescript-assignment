<script setup lang="ts">
import { computed } from "vue";

export interface SvgContainerProps {
  width?: string;
  color?: string;
}

const props = withDefaults(defineProps<SvgContainerProps>(), {
  width: "w-full",
  color: "text-black",
});

const computedClasses = computed(() => `${props.width} ${props.color}`);
</script>

<template>
  <span :class="computedClasses" class="inline-block">
    <slot></slot>
  </span>
</template>
