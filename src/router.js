import {createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import Countries from './views/countries/index.vue';
import Name from './views/Name.vue';



export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/API/',
            component: Home
        },
        {
            path: '/countries',
            component: Countries
        },
        {
            path: '/Name',
            component: Name
        },
       
    ]
});
