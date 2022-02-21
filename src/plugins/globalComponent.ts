import _helloWorld from '~/components/HelloWorld.vue';
import _header from '~/components/layouts/header.vue'
const components = {
    helloWorld: _helloWorld,
    myHeader: _header
}
export default {
    installComponent(app: any) {
        Object.entries(components).map(item => {
            app.component(item[0], item[1])
        });
    }
}