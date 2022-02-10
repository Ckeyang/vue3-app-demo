import {
    createApp
} from 'vue'
import defaultLayout from '~/layouts/default.vue'
import router from '~/router';
import globalComponent from '~/globalComponent';
import ElementPlus from 'element-plus';
import '~/assets/common.css';
import 'element-plus/dist/index.css'; //请将 组件css 放在 common 下面
const app = createApp(defaultLayout);
globalComponent.installComponent(app);
app.use(ElementPlus);
app.use(router);
app.mount('#app')