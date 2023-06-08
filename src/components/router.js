import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/',
      name: 'chooseSchoolType',
      component: () => import('@/components/chooseSchoolType.vue')
    },
    {
      path: '/:id',
      name: 'chooseSchool',
      component: () => import('@/components/chooseSchool.vue')
    },
    {
      path: '/:id/:name',
      name: 'chooseDepartment',
      component: () => import('@/components/chooseDepartment.vue'),
      props: true
    },
    {
      path: '/:id/:name/:department/predmety',
      name: 'chooseSubject',
      component: () => import('@/components/chooseSubject.vue')
    },
    {
      path: '/:id/:name/:department/predmety/:subject',
      name: 'rateSubject',
      component: () => import('@/components/rateSubject.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/components/register.vue')
    },
    {
      path: '/:id/:department/obedy',
      name: 'lunchRating',
      component: () => import('@/components/lunchRating.vue')
    },
    {
      path: '/404',
      name: 'notFound',
      component: () => import('@/components/notFound.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/components/test.vue')
    },
    {
      path: '/test2/:id',
      name: 'test2',
      component: () => import('@/components/test2.vue')
    }
  ];

const router = createRouter({
    history: createWebHistory("/"),
    routes,
});
  
export default router;
  