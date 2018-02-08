<template>
  <div>
      <h3>Register</h3>
      <form @submit.prevent="register">
        <input type="text" placeholder="username" v-model="username">
        <input type="password" placeholder="password" v-model="password">
        <input type="submit" value="Register">
      </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Register',
  data() {
      return {
          username: '',
          password: ''
      }
  },
  methods: {
      register() {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.username, this.password)
            .then((user) => {
                console.log('success register', user)
            })
            .catch((err) => {
                console.log('error', err)
            })
      }
  }
}
</script>
