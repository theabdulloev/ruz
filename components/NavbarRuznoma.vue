<template>
  <nav class="w-full bg-white px-5 text-teal-300 flex justify-between items-center">
    <h2 class="text-rose-700 uppercase">
      Ruznoma
    </h2>
    <div class="space-x-2">
      <NuxtLink no-prefetch class="uppercase p-1 rounded-md" active-class="text-teal-600" exact to="/">
        Home
      </NuxtLink>
      <NuxtLink no-prefetch class="uppercase p-1 rounded-md" active-class="text-teal-600" to="/users">
        Users
      </NuxtLink>
      <NuxtLink no-prefetch class="uppercase p-1 rounded-md" active-class="text-teal-600" to="/about">
        About
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'RuznomaNavbar'
}
</script>
