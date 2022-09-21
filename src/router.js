import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/list',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./components/Dashboard.vue')
            },
            {
                path: '/city/',
                name: 'city',
                component: () => import('./components/vCity')
            },
            {
                path: '/',
                name: 'list',
                component: () => import('./components/ListDemo.vue')
            },
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
