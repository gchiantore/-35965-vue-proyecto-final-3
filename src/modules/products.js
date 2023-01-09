
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
        getProductosApi: function({ commit }){
            const URLAPI="https://639e8f4e3542a261305d989b.mockapi.io/productos";
            axios.get(URLAPI)
                .then(response => response.data)
                .then(data =>{
                    const productos = data
                    commit('cargarProductos',productos)
                })
        },
        postProductosApi: function({ commit }, producto){
        const URLPOST="https://639e8f4e3542a261305d989b.mockapi.io/productos"
                axios.post(URLPOST, producto)
                    .then(resp => resp.data)
                    .then(data=>{
                        const productos = data
                        commit('cargarProductos',productos)
                    })
        },
        deleteProductosApi: function ({ commit }, producto){
            const URLDELETE="https://639e8f4e3542a261305d989b.mockapi.io/productos/"+producto
            console.log(URLDELETE)
                axios.delete(URLDELETE)
                .then(resp => resp.data)
                    .then(data=>{
                        const productos = data
                        commit('cargarProductos',productos)
                    })
        },
        putProductosApi: function ({commit},prod){
            const URLPUT="https://639e8f4e3542a261305d989b.mockapi.io/productos/"+prod.id
            console.log(URLPUT)
            console.log('>>>>')
            console.log(prod)
            console.log('>>>>')
                axios
                    .put(URLPUT, prod)
                    .then(resp => resp.data)
                    .then(data=>{
                        const productos = data
                        console.log(productos)
                        commit('cargarProductos',productos)
                        });
        }
    },
}    
