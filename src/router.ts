import Home from '~/pages/home.vue';
import About from '~/pages/about.vue'
import { createWebHistory, createRouter } from 'vue-router';
class routerItem {
    constructor(path: string, name: string, component: any) {
        this.path = path;
        this.name = name;
        this.component = component;
    };
    path: string;
    name: string;
    component: any;
}

let routes = [
    new routerItem('/', 'index', Home),
    new routerItem('/home', 'home', Home),
    new routerItem('/about', 'about', About),
];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;