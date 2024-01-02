// router.ts
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './../views/Home.vue';
import Product from './../views/Product.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/products', component: Product },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
