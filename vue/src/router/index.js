import { createRouter, createWebHistory } from 'vue-router'

import Data from '../views/Data.vue'
import Portfolio from '../views/Portfolio.vue'
import Voter from '../views/Voter.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Portfolio },
  { path: '/wallet', component: Portfolio },
  { path: '/voter', component: Voter },
  { path: '/data', component: Data }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
