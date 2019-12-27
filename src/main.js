// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import axios from './utils/asios';
import Qs from 'qs'
import API from './api/index'
import { Promise } from 'q'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
// const service = axios.create({
//     baseURL: '',
//     timeout: 10000,
// });
// service.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded";
// service.interceptors.response.use((response) => {
//         return Promise.reject(response);
//     },
//     (error) => {
//         return Promise.reject(error);
//     })
Vue.prototype.$qs = Qs
Vue.prototype.$API = API
Vue.prototype.$http = axios
Vue.use(Element)
new Vue({
    el: '#app',
    router,
    Element,
    axios,
    Qs,
    store, //挂载到vue实例
    components: { App },
    template: '<App/>'
})