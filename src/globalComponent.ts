import _helloWorld from '~/components/HelloWorld.vue';
const components = {
    helloWorld: _helloWorld
}
export default {
    installComponent(app) {
        Object.entries(components).map(item => {
            app.component(item[0], item[1])
        });
    }
}