import Vue from 'vue'
import Vuex from 'vuex'
import usersModule from '@/modules/users'
import productsModule from '@/modules/products'
import ordersModule from '@/modules/orders'
import carritoModule from '@/modules/carrito'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  
  },
  getters: {

  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
    usersModule,
    productsModule,
    ordersModule,
    carritoModule
  }
})