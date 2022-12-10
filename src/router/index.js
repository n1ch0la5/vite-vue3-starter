import HomePage from '../views/HomeView.vue'
import { createRouter, createWebHistory } from "vue-router"
const routeInfos = [
    {
        path : "/",
        component : HomePage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;