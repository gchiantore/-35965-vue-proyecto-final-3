import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/abmprod',
    name: 'abmprod',
    component: () => import('@/views/AbmProdView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('@/views/ProductosView.vue')
  },
  {
    path: '/usuarios',
    name: 'usuarios',
    component: () => import('@/views/UsuariosView.vue')
  },
  {
    path: '/carrito',
    name: 'carrito',
    component: () => import('@/views/CarritoView.vue')
  },
  {
    path: '/ordenes',
    name: 'ordenes',
    component: () => import('@/views/OrdenesView.vue')
  },
  {
    path: '/registro',
    name: 'registro',
    component: () => import('@/views/RegistryView.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
