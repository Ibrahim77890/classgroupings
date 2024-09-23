<script setup lang="ts">
import AdminNavbar from '../components/navbars/AdminNavbar.vue'
import AddNewGroup from '@/views/AddNewGroup.vue'

const isCreateGroupPath = () => {
  const pathSegments = this.$route.path.split('/').filter(Boolean) // Split and filter empty segments
  return pathSegments.slice(-2).join('/') === 'admin/create-group' // Check last two segments
}
</script>

<template>
  <div class="screen">
    <AdminNavbar />
    <template v-if="isCreateGroupPath">
      <AddNewGroup />
    </template>
  </div>
</template>

<style scoped>
.screen {
  @apply h-screen p-0 w-screen bg-[rgba(34,197,94,1)] text-slate-800 overflow-hidden gap-4 flex flex-col;

  @media screen and (min-width: 799px) {
    flex-direction: row;
  }
}
</style>
