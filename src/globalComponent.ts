import _helloWorld from '~/components/HelloWorld.vue';
const components = {
    helloWorld: _helloWorld
}
export default {
    installComponent(app: any) {
        Object.entries(components).map(item => {
            app.component(item[0], item[1])
        });
    }
}