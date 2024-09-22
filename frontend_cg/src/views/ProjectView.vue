<template>
  <div class="screen">
    <nav class="navbar">
      <ul class="flex gap-4">
        <li><a href="#description">Project Description</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <h1 class="font-medium">Project Description</h1>

    <section id="description" class="section">
      <h2>Description</h2>
      <p>This section contains the project description.</p>
    </section>

    <section id="features" class="section">
      <h2>Features</h2>
      <p>Here are some features of the project.</p>
    </section>

    <section id="team" class="section">
      <h2>Team</h2>
      <p>Meet the team behind the project.</p>
    </section>

    <section id="contact" class="section">
      <h2>Contact</h2>
      <p>Contact details for the project.</p>
    </section>
  </div>
</template>

<style scoped>
.screen {
  @apply h-screen w-screen bg-green-400 p-4 text-slate-800 overflow-auto;
}

.navbar {
  @apply bg-white bg-opacity-80 sticky top-0 z-10 p-2;
}

.section {
  @apply my-5 p-5 bg-white rounded-lg shadow-md h-96;
}

h2 {
  @apply mb-2;
}

.navbar a {
  @apply text-slate-600 no-underline hover:text-slate-800;
}
</style>
