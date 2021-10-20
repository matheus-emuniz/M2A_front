import Vue from 'vue';
import VueRouter from 'vue-router';

import Sistema from '../views/Sistema.vue';
import Empresas from '../views/Empresas';

import Login from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/sistema',
    name: 'Sistema',
    component: Sistema,
    children: [
      {
        path: '/empresas',
        component: Empresas,
      },
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
