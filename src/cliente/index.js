// ------------------------------------------------------------------------------------------
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store/store.js'
import App from './App.vue';

// Para el .http.get
import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Test from  './components/Test.vue';
import Tasks from  './components/Tasks.vue';
import Users from  './components/Users.vue';
import Associations from  './components/Associations.vue';

const router = new VueRouter({
  mode: 'history', 
  base: __dirname,
  routes: [
    { path: '/',              component: Test},
    { path: '/users',         component: Users},
    { path: '/tasks',         component: Tasks},
    { path: '/associations',  component: Associations}
  ]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // render: h => h(App),
  store,
  router,
  components: { App },
  template: '<App/>',
  beforeCreate(){console.log("Antes de Crear en el index.html")}
}).$mount('#app')