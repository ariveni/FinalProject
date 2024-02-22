import {createRouter, createWebHistory} from 'vue-router';
import IndexPage from './views/IndexPage.vue';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import DiseasePage from './views/DiseasePage.vue'
const router = createRouter({
  history:createWebHistory(),
  routes:[
      {path:'/', component:IndexPage, alias: '/'},
      {path:'/home', component:HomePage, alias: '/'},
      {path:'/about', component:AboutPage,alias: '/'},
      {path:'/disease', component:DiseasePage,alias: '/'}
      ]
});

export default router;