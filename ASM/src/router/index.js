import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/home.vue'
import Login from '../views/login.vue'
import Register from '../views/register.vue'
import Profile from '../views/profile.vue'
import CreateDetail from '../views/createdetail.vue'
import postdetail from '../views/postdetail.vue'
const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/profile', component: Profile },
  { path: '/createdetail', component: CreateDetail },
  { path: '/postdetail', component: postdetail }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
