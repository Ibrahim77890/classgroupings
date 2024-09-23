<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps<{
  initialMessage: string
}>()
const message = ref(props.initialMessage || 'nothing')
</script>

<template>
  <button class="button-label">{{ message }}</button>
</template>

<style scoped>
.button-label {
  @apply px-4 py-1 bg-transparent bg-opacity-15 border-2 border-slate-800 text-slate-800 rounded-full min-w-fit shadow-lg font-semibold;
}
</style>
