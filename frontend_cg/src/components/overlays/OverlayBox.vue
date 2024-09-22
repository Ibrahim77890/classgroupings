<template>
    <div v-if="isOverlayVisible" class="overlay">
      <div class="overlay-content">
        <h2>Overlay Title</h2>
        <p>This is the content of the overlay.</p>
        <button @click="closeOverlay">Close</button>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOverlayVisible = ref(false);

// const showOverlay = () => {
//   isOverlayVisible.value = true;
// };

const closeOverlay = () => {
  isOverlayVisible.value = false;
};
</script>

<style>
.overlay {
  @apply fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50;
}

.overlay-content {
  @apply bg-white p-6 rounded-lg shadow-lg text-center raleway text-base sm:text-lg md:text-lg lg:text-lg;
  max-width: 400px; /* Adjust as needed */
}

.raleway {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-style: normal;
}
</style>
