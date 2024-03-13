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
            path: '/product/:id',
            name: "Single_Product",
            component: () => import('../router/SingleProduct.vue')
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
        },
        {

            path: '/:catchAll(.*)',
            name: "NotFound",
            component: () => import('@/router/NotFound.vue')
        }
    ]
})

export default routes