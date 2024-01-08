import './assets/main.css'
import 'tailwindcss/tailwind.css'

import {createPinia} from 'pinia'

// import { Drawer,
//     Button, message } from 'ant-design-vue';

import './static/fontawesome/fontawesome-free-6.4.2-web/css/all.min.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// import 'bootstrap/dist/css/bootstrap-grid.min.css'
// import 'bootstrap/dist/css/bootstrap-utilities.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
// import "ant-design-vue/dist/reset.css";


// import 'ant-design-vue/dist/reset.css';
// const app = createApp(App);

// app.config.globalProperties.asset = (path) => {
//   // Thay đổi URL này tùy thuộc vào môi trường và cấu hình của bạn
//   const baseUrl = process.env.NODE_ENV === 'production' ? 'https://your-production-url.com' : 'http://localhost:8000';
//   return `${baseUrl}/storage/${path}`;
// };


import axios from 'axios'
window.axios = axios;


const app = createApp(App)
app.use(router)
app.use(store);
app.use(createPinia)

// app.use(Button);
// app.use(Drawer);


app.mount('#app')

app.config.globalProperties.$message = message;
