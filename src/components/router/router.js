import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {path: '/', component: HomePage, name: 'HomePage'},
    {path: '/catalog/girls', component: () => import('@/components/Girls.vue'), name: 'Girls'},
    {path: '/catalog/boys', component: () => import('@/components/Boys.vue'), name: 'Boys'},
    {path: '/contacts', component: () => import('@/components/Contacts.vue'), name: 'Contacts'},
    {path: '/basket', component: () => import('@/components/Basket.vue'), name: 'Basket'}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
