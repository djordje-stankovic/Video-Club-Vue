import Vue from 'vue'
import App from './App.vue'
import Movie from './component/MovieComponent';
import VueResources from 'vue-resource';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue';
import { routes } from './routes';
import VueRouter from "vue-router";



Vue.use(VueResources);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.http.options.root = "http://localhost:5000/";
const router = new VueRouter({
  mode : 'history',
  routes
}) 


new Vue({
  el: '#app',
  router, 
  render: h => h(App)
})
