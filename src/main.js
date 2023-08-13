import { createApp } from 'vue'
import './style.scss'
import App from './App.vue';
import { router } from './router';
import * as bootstrap from 'bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App).use(router).mount('#app')
