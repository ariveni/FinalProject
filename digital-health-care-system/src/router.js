import {createRouter, createWebHistory} from 'vue-router';
import IndexPage from './views/IndexPage.vue';
import HomePage from './views/HomePage.vue';
import AboutPage from './views/AboutPage.vue';
import DiseasePage from './views/DiseasePage.vue'
const router = createRouter({
  history:createWebHistory(),
  routes:[
      {path:'/', component:IndexPage},
      {path:'/home', component:HomePage},
      {path:'/about', component:AboutPage},
      {path:'/disease', component:DiseasePage}
      ]
});

export default router;