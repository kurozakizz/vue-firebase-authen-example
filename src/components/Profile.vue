<template>
  <div>
      <h3>Profile</h3>
      <span><strong>welcome </strong> {{ email }}</span>
      <button @click="logout">Logout</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Profile',
  data() {
      return {
          email : ''
      }
  },
  created() {
    //   console.log('Profile created -> ', firebase.auth().currentUser)
      this.email = firebase.auth().currentUser.email
  },
  methods: {
      logout () {
          firebase
            .auth()
            .signOut()
            .then(() => {
                this.$router.push({ name: 'Login' })
            })
      }
  }
}
</script>
