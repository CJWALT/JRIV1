import { createApp } from 'vue'
import './style.css'
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue'
import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'
import AboutUsPg from './pages/AboutUsPg.vue'
import Activities from './pages/Activities.vue'
import Academy from './pages/Academy.vue'
import Gallery from './pages/Gallery.vue'
import Blog from './pages/Blog.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter ({ 
    history: createWebHistory('/'),
    routes: [
        {path: '/', name: 'homepage', component: Home},
        {path:'/about-us', component:AboutUs},
        {path: '/about-us/full', name:'about-us', component: AboutUsPg},
        {path: '/activities', component: Activities},
        {path: '/academy', component: Academy},
        {path: '/gallery', component: Gallery},
        {path: '/blog', component: Blog},
        {
            path:"/:Match(.*)*",
            component:NotFound
        }
    ]
});

const app = createApp(App); 

app.use(router);
app.mount('#app');