import Home from '~/pages/home.vue';
import About from '~/pages/about.vue'
import { createWebHashHistory, createRouter } from 'vue-router';
import { render, h } from 'vue';
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
    new routerItem('/', 'home', Home),
    new routerItem('/home', 'home', Home),
    new routerItem('/about', 'about', About),
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;