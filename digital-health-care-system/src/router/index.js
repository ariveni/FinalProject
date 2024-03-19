import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainPage from '../views/MainPage.vue'
import DiseaseReport from '../views/DiseaseReport.vue'
import SelectedSymptoms from '@/views/SelectedSymptoms.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'landingpage',
      component: HomeView
    },
    {
      path: '/main',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/symptomcart',
      name: 'SelectedSymptoms',
      component: SelectedSymptoms
    },
    {
      path: '/report',
      name: 'DiseaseReport',
      component: DiseaseReport
    }
  ]
});
router.beforeEach((to,from,next) => {
  if(to.name === 'DiseaseReport')
  {
    if(from.name !== 'SelectedSymptoms')
    {
      next('/');
    }
    else{
      next();
    }
  }
else{
  next();
}
})

export default router
