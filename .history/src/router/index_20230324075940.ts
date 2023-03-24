import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import StartPage from '../views/StartPage.vue'
import IntroPage from '../views/IntroPage.vue'
import IntroSuccessPage from '../views/IntroSuccessPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/start',
    name: 'StartPage',
    component: StartPage
  },
  {
    path: '/intro',
    name: 'IntroPage',
    component: IntroPage
  },
  {
    path: '/intro-success',
    name: 'IntroSuccessPage',
    component: IntroSuccessPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
