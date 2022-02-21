import Home from '~/pages/home.vue';
import About from '~/pages/about.vue';
import TailApi from '~/pages/tailApi.vue';
import ElementApi from '~/pages/elementApi.vue';
import Test from '~/pages/test.vue';
import { createWebHistory, createRouter } from 'vue-router';
interface item {
    path: string;
    name: string;
    component: any;
}
class routerItem implements item {
    constructor(path: string, name: string, component: any, children: Array<routerItem> = []) {
        this.path = path;
        this.name = name;
        this.component = component;
        this.children = children;
    }
    path = '/';
    name = 'index';
    component = null;
    children: Array<routerItem>;
}

let routes = [
    new routerItem('/', 'index', Home),
    new routerItem('/home', 'home', Home),
    new routerItem('/about', 'about', About),
    new routerItem('/tailApi', 'tailApi', TailApi),
    new routerItem('/elementApi', 'elementApi', ElementApi),
    new routerItem('/test', 'test', Test),
];
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;