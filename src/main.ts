import {
    createApp
} from 'vue'
import defaultLayout from '~/layouts/default.vue'
import router from '~/router';
import globalComponent from '~/globalComponent';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
const app = createApp(defaultLayout);
globalComponent.installComponent(app);
app.use(ElementPlus);
app.use(router);
app.mount('#app')