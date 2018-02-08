<template>
  <div>
      <h3>Login</h3>
      <form @submit.prevent="login">
        <input type="text" placeholder="username" v-model="username">
        <input type="password" placeholder="password" v-model="password">
        <input type="submit" value="Login">
      </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data() {
      return {
          username: '',
          password: ''
      }
  },
  methods: {
      login() {
          firebase
            .auth()
            .signInWithEmailAndPassword(this.username, this.password)
            .then((user) => {
                this.$router.push({ name: 'Profile' })
            })
      }
  }
}
</script>

