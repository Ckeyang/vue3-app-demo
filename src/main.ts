import {
    createApp
} from 'vue'
import router from '~/router';
import globalComponent from '~/globalComponent';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import API from '~/service/api/api';
const app = createApp(router);
globalComponent.installComponent(app);
app.use(ElementPlus);
app.use(API);
app.mount('#app')