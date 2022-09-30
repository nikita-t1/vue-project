import { createRouter, createWebHistory, RouterView, } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import PageNotFound from './views/PageNotFound.vue'

const routes = [
    { 
        path: "/",
        name: "main",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: '/:catchAll(.*)*',
        name: "PageNotFound",
        component: PageNotFound,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router