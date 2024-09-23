<script setup lang="ts">
import { BeakerIcon, Cog6ToothIcon } from '@heroicons/vue/24/solid'
import { AcademicCapIcon, UserPlusIcon, HashtagIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <nav class="side-navbar">
    <div class="side-navbar-element">
      <div class="h-10 w-full flex justify-center items-center gap-4">
        <AcademicCapIcon class="w-10" />
        <h1 class="nav-header">Create Groups</h1>
      </div>
    </div>
    <div class="side-navbar-element">
      <div class="h-10 w-full flex justify-center items-center gap-4">
        <UserPlusIcon class="w-10" />
        <h1 class="nav-header">Profile Requests</h1>
      </div>
    </div>
    <div class="side-navbar-element">
      <div class="h-10 w-full flex justify-center items-center gap-4">
        <HashtagIcon class="w-10" />
        <h1 class="nav-header">Register Requests</h1>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-header {
  @apply text-slate-700 text-lg;
  @media screen and (max-width: 799px) {
    display: none;
    width: 0px;
    font-size: small;
  }
}

.side-navbar {
  @apply w-full bg-[#36ac61] flex flex-row justify-evenly p-3 h-fit;
}

.side-navbar-element {
  @apply flex flex-row w-full;
}
</style>
