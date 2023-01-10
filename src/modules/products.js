
import axios from "axios";
export default {
    namespaced:true,
    state: {
        listaProductos:[]
    },
    getters: {
        getListaProductos(state){
            return state.listaProductos
        },
    },
    mutations: {
        cargarProductos(state, productosApi){
            state.listaProductos=productosApi;
        }
    },
    actions: {
        getProductosApi: async function({ commit }){
            const URLAPI="https://639e8f4e3542a261305d989b.mockapi.io/productos";
            const respuesta=await axios.get(URLAPI)
            const productos = respuesta.data
            commit('cargarProductos',productos)
        },
        postProductosApi: async function({ commit }, producto){
            const URLPOST="https://639e8f4e3542a261305d989b.mockapi.io/productos"
            const respuesta = await axios.post(URLPOST, producto)
            const productos = respuesta.data
            commit('cargarProductos',productos)
        },
        deleteProductosApi: async function ({ commit }, producto){
            const URLDELETE="https://639e8f4e3542a261305d989b.mockapi.io/productos/"+producto
            const respuesta = await axios.delete(URLDELETE)
            const productos = respuesta.data
            commit('cargarProductos',productos)
        },
        putProductosApi: async function ({commit},prod){
            const URLPUT="https://639e8f4e3542a261305d989b.mockapi.io/productos/"+prod.id
            const respuesta = await axios.put(URLPUT, prod)
            const productos = respuesta.data
            commit('cargarProductos',productos)
        }
    },
}    
