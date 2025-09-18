import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'), // layout wrapper
    children: [
      {
        path: '/', // default child route for "/"
        name: 'Home',
        component: () => import('../Pages/HomePage.vue'),
        
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../Pages/AboutPage.vue'),

      },
      {
        path: 'user/:id',
        name: 'User',
        component: () => import('../Pages/UserPage.vue'),
        props: { prop: "ooo" },
        
      },
      {
        path: 'ParentComp',
        name: 'Parent',
        component: () => import('../components/ParentComp.vue'),
        
      },
      {
        path: 'vIf',
        name: 'vIf',
        component: () => import('../components/vIf.vue'),
       
      },
      {
        path: 'vShow',
        name: 'vShow',
        component: () => import('../components/vShow.vue'),
       
      },
      {
        path: 'VModel',
        name: 'VModel',
        component: () => import('../Pages/VModel.vue'),
      
      },
      {
        path: 'LoginPage',
        name: 'LoginPage',
        component: () => import('../Pages/LoginPage.vue'),
      },
      {
        path: 'LogOutPage',
        name: 'LogOutPage',
        component: () => import('../Pages/LogOutPage.vue'),
      },
       {
        path: 'LoginForm',
        name: 'LoginForm',
        component: () => import('../Pages/LoginForm.vue'),
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*', // catch-all for 404
     name: 'NotFound',
    component: () => import('../Pages/NotFoundPage.vue'),

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
