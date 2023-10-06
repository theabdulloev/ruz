<template>
  <div class="w-screen h-screen bg-teal-400 text-white text-2xl">
    User {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data () {
    return {}
  }
}
</script>
