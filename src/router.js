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
            path: '',
            name: 'projects',
            component: Projects,
            meta: {
                title: 'Projects'
            }
        },
        {
            path: '',
            name: 'singleProject',
            component: SingleProject,
        },
        {
            path: '',
            name: 'contact',
            component: Contact,
            meta: {
                title: 'Contact'
            }
        }

    ]
});

// add title on URL
router.beforeEach((to) => {
    document.title = to.meta?.title ? 'Portfolio - ' + to.meta.title : 'Portfolio';
});

// Scroll to top on page change 
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
  });

export { router };