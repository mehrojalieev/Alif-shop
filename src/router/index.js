import Home from "@/views/Home.vue"
import {createRouter, createWebHistory} from 'vue-router'

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: 'Home',
            component: Home
        },
        {
            path: '/prayer-time',
            name: 'PrayerTime',
            component: () => import('../router/PrayerTime.vue')
        },
        {
            path: '/cart',
            name: 'Cart',
            component: () => import('@/router/Cart.vue')
        },
        {
            path: '/favorites',
            name: 'Favorites',
            component: () => import('@/router/Favorite.vue')
        }
    ]
})

export default routes