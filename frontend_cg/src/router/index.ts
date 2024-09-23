import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from '../views/ProjectView.vue'
import AppHome from '@/views/AppHome.vue'
import AdminHome from '@/views/AdminHome.vue'
import AddNewGroup from '@/views/AddNewGroup.vue'
import GroupHomePage from '@/views/GroupHomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome
    },
    {
      path: '/project-description',
      name: 'project-description',
      component: ProjectView
    },
    {
      path: '/admin',
      name: 'admin-home',
      component: AdminHome,
    },
    {
      path: '/group-home-page',
      name: 'group-home-page',
      component: GroupHomePage,
    }
  ]
})

export default router
