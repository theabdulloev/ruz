<template>
  <div class="w-screen h-screen bg-teal-400 text-white text-2xl">
    <span> {{ pageTitle }} </span>
    <ul>
      <li v-for="user in users" :key="user" @click.prevent="goTo(user)">
        <a href="#">{{ user.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const users = await $axios.$get('https://jsonplaceholder.typicode.com/users')
    return { users }
  },
  data () {
    return {
      pageTitle: 'User page'
    }
  },
  methods: {
    goTo (user) {
      this.$router.push('/users/' + user)
    }
  }

}
</script>
