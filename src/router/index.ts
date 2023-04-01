import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import StartPage from '../views/StartPage.vue'
import IntroPage from '../views/IntroPage.vue'
import IntroSuccessPage from '../views/IntroSuccessPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import StorePage from '../views/StorePage.vue'
import OverviewPage from '../views/OverviewPage.vue'
import UserProfile from '../views/UserProfile.vue'
import DeveloperPage from '../views/DeveloperPage.vue'
import GameTheory from '../views/game/GameTheory.vue'
import GameQuiz from '../views/game/GameQuiz.vue'
import GameReward from '../views/game/GameReward.vue'
import GiftPage from '../views/GiftPage.vue'
import NotificationPage from '../views/NotificationPage.vue'

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
  },
  {
    path: '/dashboard',
    name: 'DashboardPage',
    component: DashboardPage
  },
  {
    path: '/store',
    name: 'StorePage',
    component: StorePage
  },
  {
    path: '/overview',
    name: 'OverviewPage',
    component: OverviewPage
  },
  {
    path: '/gifts',
    name: 'GiftPage',
    component: GiftPage
  },
  {
    path: '/user-profile',
    name: 'UserProfile',
    component: UserProfile
  },
  {
    path: '/developer',
    name: 'DeveloperPage',
    component: DeveloperPage
  },
  {
    path: '/theory/:id',
    name: 'GameTheory',
    component: GameTheory,
    props: (route) => ({ myData: route.params.myData }),
  },
  {
    path: '/quiz/:id',
    name: 'GameQuiz',
    component: GameQuiz,
    props: true,
  },
  {
    path: '/reward/:id',
    name: 'GameReward',
    component: GameReward,
    props: true,
  },
  {
    path: '/notification',
    name: 'NotificationPage',
    component: NotificationPage,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
