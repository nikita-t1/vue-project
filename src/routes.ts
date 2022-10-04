import { createRouter, createWebHistory, RouterView, } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import PageNotFound from './views/PageNotFound.vue'

import Auth from "./views/Auth.vue"
import Profile from "./views/Profile.vue"

import * as pages from '~pages'

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
        path: "/login",
        name: "Login",
        component: Auth
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
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
    routes: [
        ...routes,
        ...pages.default
    ]
})

export default router
