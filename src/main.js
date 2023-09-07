import { createApp } from 'vue'
import './style.css'
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue'
import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'
import AboutUsPg from './pages/AboutUsPg.vue'

const router = createRouter ({ 
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/about-us', component: AboutUs},
        {path: '/about-us/full', component: AboutUsPg}
    ]
});

const app = createApp(App); 

app.use(router);
app.mount('#app');