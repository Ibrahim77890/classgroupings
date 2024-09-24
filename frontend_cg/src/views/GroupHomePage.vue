<script setup lang="ts">
import { ChevronLeftIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/outline'
import LabelsChat from '@/components/cards/LabelsChat.vue';
</script>

<template>
  <div class="screen">
    <!-- Navbar -->
    <div class="navbar">
      <div class="h-16 w-16 p-4"><ChevronLeftIcon/></div>
      <div class="flex items-center overflow-hidden">
        <h1 class="text-xl truncate">Group Nameajksdhjkadhsjkhdsajkhdasjkhdsakjhasdkjh</h1>
      </div>
      <div class="h-16 w-16 p-4"><EllipsisVerticalIcon/></div>
    </div>

    <!-- Main Chat Area -->
    <div class="main-chat-area">
      <LabelsChat/>
    </div>

    <!-- Input Area -->
    <div class="input-area">Form input</div>
  </div>
</template>

<style scoped>
.screen{
  @apply h-full w-full flex flex-col p-0 relative;
  @media screen and (min-width: 799px){
    flex-direction: row;
  }
}

.main-chat-area{
  @apply flex flex-1 w-full p-4;
}

.input-area{
  @apply w-full h-24 fixed bottom-0 left-0 bg-blue-400
}

.navbar{
  @apply w-full h-16 flex flex-row bg-[#349A59] josefin-sans
}

.truncate {
  max-width: 18ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (min-width: 400px) {
    max-width: 22ch;
  }

  @media screen and (min-width: 500px) {
    max-width: 35ch;
  }
}

.josefin-sans {
  font-family: 'Josefin Sans', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}

.montserrat {
  font-family: 'Montserrat', sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
}
</style>


