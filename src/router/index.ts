import { createRouter, createWebHashHistory, Router } from 'vue-router';
import Home from '@/views/home.vue'

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home
    }
  ]
});

export default router;
