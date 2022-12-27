import { createApp } from 'vue';
import App from './App.vue';
import { Button } from 'vant';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { axiosPlugin } from './plugins/axios';

import './styles/index.scss';

const app = createApp(App);

dayjs.locale('zh-ch');
app.config.globalProperties.$dayjs = dayjs;

app.use(Button);

app.use(axiosPlugin);


app.mount('#app');
