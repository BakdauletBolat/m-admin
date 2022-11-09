import { createRouter, createWebHistory } from 'vue-router'
import DashBoardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashBoardView
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/product/:id',
      name: 'product_detail',
      component: () => import('../views/ProductDetail/ProductDetailView.vue'),
      children: [
        {
          path: 'main',
          name: 'product_detail_main',
          component: () => import('../views/ProductDetail/Tabs/Main.vue'),
          children: [
            {
              path: 'russian',
              name: 'product_russian',
              component: () => import('../views/ProductDetail/Tabs/Russian.vue')
            },
            {
              path: 'england',
              name: 'product_england',
              component: () => import('../views/ProductDetail/Tabs/England.vue')
            },
            {
              path: 'kazakh',
              name: 'product_kazakh',
              component: () => import('../views/ProductDetail/Tabs/Kazakh.vue')
            }
          ]
        },
        {
          path: 'product_base',
          name: 'product_detail_base',
          component: () => import('@/views/ProductDetail/Tabs/ProductBase.vue')
        },
        {
          path: 'images',
          name: 'product_detail_images',
          component: () => import('@/views/ProductDetail/Tabs/Images.vue')
        },
        {
          path: 'prices',
          name: 'product_detail_prices',
          component: () => import('@/views/ProductDetail/Tabs/Prices.vue')
        }
      
      ]
    },
  ]
})

export default router
