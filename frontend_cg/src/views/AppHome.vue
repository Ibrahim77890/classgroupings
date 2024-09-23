<script setup lang="ts">
// import HomeCard from '../components/cards/HomeCard.vue'
import OverlayBox from '../components/overlays/OverlayBox.vue'
import LabelsNavbar from '../components/cards/LabelsNavbar.vue'
import profiles from '../assets/fakeprofile.json'
import { ref, onMounted } from 'vue'

const hasEmail = ref(false)

onMounted(() => {
  profiles.forEach((profile) => {
    if (profile.email) {
      console.log(`User Email: ${profile.email}`)
      hasEmail.value = true
    }
  })
})
</script>

<template>
  <div class="screen">
    <div class="image-container">
      <img src="../assets/Class.png" class="logo" alt="Class Image" />
    </div>

    <div class="sections-changer">
      <section class="navbar">
        <h1 class="heading">Hi, John Doe</h1>
        <div>
          <template v-if="hasEmail">
            <img src="../assets/avatar.png" class="profile" alt="Class Image" />
          </template>
          <template v-else>
            <p>Create Profile</p>
          </template>
        </div>
      </section>

      <section class="groups-section">
        <div class="sections-navbar">
          <LabelsNavbar initialMessage="Groups" />
          <LabelsNavbar initialMessage="Register" />
        </div>
        <h2 class="sub-heading">Your Class Collaboration Hub</h2>
        <div class="groups-panel">
          <div class="h-full flex flex-col">
            <div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div>
            <!--  -->
            <div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div><div class="h-16 w-full flex flex-row items-center p-2 bg-blue-200 border-b-2 border-slate-400">
              <div class="flex flex-col flex-1 montserrat">
                <h1 class="font-bold text-lg">Group Name</h1>
                <p class="font-medium">Latest Message</p>
              </div>
              <div>
                <h1 class="p-1 h-8 w-8 flex justify-center items-center shadow-xl border-2 border-slate-700 rounded-full">10</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <OverlayBox />
  </div>
</template>

<style>
.screen {
  @apply h-screen w-screen bg-[rgba(34,197,94,1)] p-4 text-slate-800 overflow-hidden gap-4 flex flex-col;
}

.sections-changer {
  @apply h-full w-full bg-[rgba(34,197,94,1)] bg-opacity-30 flex flex-col;

  @media (min-width: 850px) {
    flex-direction: row;
  }
}
.heading {
  @apply text-4xl sm:text-5xl md:text-5xl lg:text-5xl josefin-sans;
}

.sections-navbar {
  @apply flex flex-row gap-4 items-center min-h-10 max-h-12 w-full overflow-auto;
}

.navbar {
  @apply flex flex-row justify-between;
}

.profile {
  @apply min-h-16 min-w-16 max-h-20 max-w-20 rounded-full border-2 border-slate-600 hover:scale-110;
}

.groups-section {
  @apply h-full w-full flex gap-4 flex-col mt-2;
}

.groups-panel {
  @apply w-full h-full bg-slate-300 rounded-2xl border-2 border-slate-700 flex overflow-auto flex-col;
}

.sub-heading {
  @apply text-lg sm:text-2xl md:text-2xl lg:text-2xl montserrat;
}

.image-container {
  @apply flex items-center justify-start min-h-16 max-h-16 w-72 overflow-hidden relative mx-auto rounded-md mb-8;
}

.logo {
  @apply h-full w-full object-cover object-center;
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
