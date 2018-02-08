import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'

Vue.use(Router)

const sendToLoginWhenUserNotExist = (to, from, next) => {
  const currentUser = firebase.auth().currentUser
  if (!currentUser) {
    next({ name: 'Login' })
  } else {
    next()
  }
}

const sendToProfileWhenUserExist = (to, from, next) => {
  const currentUser = firebase.auth().currentUser
  if (currentUser) {
    next({ name: 'Profile' })
  } else {
    next()
  }
}

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: sendToProfileWhenUserExist
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      beforeEnter: sendToProfileWhenUserExist
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      beforeEnter: sendToLoginWhenUserNotExist
    }
  ]
})

export default router
