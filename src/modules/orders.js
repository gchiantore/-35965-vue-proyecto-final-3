import axios from "axios";
export default {
    namespaced:true,
    state: {
        listaOrdenes:[]
    },
    getters: {
        getListaOrdenes(state){
            return state.listaOrdenes
        },
    },
    mutations: {
        cargarOrdenes(state, ordenesApi){
            state.listaOrdenes=ordenesApi;
        }
    },
    actions: {
        getOrdenApi: function({ commit }){
            const URLAPI="https://639e8f4e3542a261305d989b.mockapi.io/carritodetalle";
            axios.get(URLAPI)
                .then(response => response.data)
                .then(data =>{
                    const ordenes = data
                    commit('cargarOrdenes',ordenes)
                })
        },
        postOrdenApi: function({ commit }, orden){
        const URLPOST="https://639e8f4e3542a261305d989b.mockapi.io/carritodetalle"
                axios.post(URLPOST, orden)
                    .then(resp => resp.data)
                    .then(data=>{
                        const ordenes = data
                        commit('cargarOrdenes',ordenes)
                    })
        }
    },
}    
