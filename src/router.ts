import App from '~/App.vue';
import Home from '~/pages/home.vue';
import { render, h } from 'vue';
class routerItem {
    constructor(path: string, component: any) {
        this.path = path;
        this.component = component;
    };
    path: string;
    component: any;
}

let routes = [
    new routerItem('/', App),
    new routerItem('/home', Home),
];
const simpleRouter = {
    data: () => ({
        current: window.location.pathname
    }),
    computed: {
        currentC() {
            return routes.find(i => i.path === this.current).component
        }
    },
    render() {
        return h(this.currentC);
    }
};
export default simpleRouter;