<script setup lang="ts">
import { computed, ref } from "vue";
import type { PropType } from "vue";
import TheCard from "./ui/TheCard.vue";
import TheImage from "./base/TheImage.vue";
import TheButton from "./ui/TheButton.vue";

export interface TheTreeInterface {
  name: string;
  species_name: string;
  image: string;
}

const props = defineProps({
  tree: Object as PropType<TheTreeInterface>,
});

const isImageVisible = ref(false);

const computedAlt = computed<string>(
  () => `${props.tree?.name}, ${props.tree?.species_name}`
);

const computedButtonText = computed<string>(() =>
  isImageVisible.value ? "Hide Image" : "Show Image"
);
</script>

<template>
  <TheCard class="break-avoid mb-4">
    <h2 class="text-2xl font-bold">{{ tree?.name }}</h2>
    <small class="inline-block text-base font-serif mt-2">{{
      tree?.species_name
    }}</small>
    <Transition
      enter-from-class="opacity-0"
      enter-active-class="transition duration-300"
      leave-to-class="opacity-0"
      leave-active-class="transition duration-300"
    >
      <TheImage
        v-if="isImageVisible"
        :src="tree?.image"
        :alt="computedAlt"
        class="mt-4"
        data-testid="tree-image"
      />
    </Transition>
    <TheButton
      @click="isImageVisible = !isImageVisible"
      :text="computedButtonText"
      class="mt-8 w-24 min-w-fit"
      data-testid="tree-button"
    ></TheButton>
  </TheCard>
</template>
