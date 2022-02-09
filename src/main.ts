import {
    createApp
} from 'vue'
import router from '~/router';
import globalComponent from '~/globalComponent';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
const app = createApp(router);
globalComponent.installComponent(app);
app.use(ElementPlus);
app.mount('#app')