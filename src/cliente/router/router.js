
import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// Components
import '../views/Test.vue';
import '../views/Tasks.vue';
import '../views/Users.vue';
import '../views/Associations.vue';

export default new Router({
  mode: 'history', 
  base: __dirname,
  routes: [
    { path: '/', name: 'Test', component: () => import('../views/Test.vue')},
    { path: '/users', name: 'Users', component: () => import('../views/Users.vue')},
    // { path: '/tasks', name: 'Tasks', component: () => import('../views/Tasks.vue')},
    { path: '/associations', name: 'Associations', component: () => import('../views/Associations.vue')},
    { path: '/tasks/:id', name: 'tasks', component: () => import('../views/Tasks.vue')}
  ]
})

    // { path: '/',              component: Test},
    // { path: '/users',         component: Users},
    // { path: '/tasks',         component: Tasks},
    // { path: '/associations',  component: Associations}