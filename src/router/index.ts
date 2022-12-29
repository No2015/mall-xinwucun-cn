import { createRouter, createWebHashHistory, Router } from 'vue-router';
import Home from '@/views/home.vue'
import Cart from '@/views/cart.vue'
import Cate from '@/views/cate.vue'
import My from '@/views/my.vue'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: '',
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'cart',
      path: '/cart',
      component: Cart
    },
    {
      name: 'cate',
      path: '/cate',
      component: Cate
    },
    {
      name: 'my',
      path: '/my',
      component: My
    }
  ]
});

export default router;
