import { createRouter, createWebHistory } from 'vue-router';
import Story from '../components/Story.vue';

const routes = [
  {
    path: '/',
    name: 'Story',
    component: Story,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
