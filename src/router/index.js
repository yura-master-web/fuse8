import Vue from 'vue'
import VueRouter from 'vue-router'

const routerOptions = [
    {
        path: '/',
        name: 'Home',
        component: 'HomePage',
    },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
]

const routes = routerOptions.map(route => {
    return {
        ...route,
        component: () => import(/* webpackChunkName: "[request]" */ `../views/${route.component}.vue`),
    }
})

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

Vue.use(VueRouter)

export default router
