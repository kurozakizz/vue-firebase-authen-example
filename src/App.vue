<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="user"><router-link to="/profile">Profile</router-link></li>
      <li v-if="!user"><router-link to="/login">Login</router-link></li>
      <li v-if="!user"><router-link to="/register">Register</router-link></li>
    </ul>
    <hr>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'App',
  data() {
    return {
      user: firebase.auth().currentUser
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
