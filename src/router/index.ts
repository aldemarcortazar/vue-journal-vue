import { Router, createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import daybookRouter from './../modules/daybook/router';

const routes:RouteRecordRaw[]  = [
    {
        path: '/',
        name: 'home',
        component: () => import('./../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('./../views/About.vue')
    },
    {
        path: '/daybook',
        ...daybookRouter,
    }
]; 

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;