import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';
import SingleProject from './pages/SingleProject.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
            meta: {
                title: 'Projects'
            }
        },
        {
            path: '/projects/:title',
            name: 'singleProjects',
            component: SingleProject,

        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: {
                title: 'Contact'
            }
        }

    ]
});

router.beforeEach((to) => {
    document.title = to.meta?.title ? 'Portfolio - ' + to.meta.title : 'Portfolio';
});

export { router };