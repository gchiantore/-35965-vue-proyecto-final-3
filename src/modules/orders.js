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
        getOrdenApi: async function({ commit }){
            const URLAPI="https://639e8f4e3542a261305d989b.mockapi.io/carritodetalle";
            const respuesta= await axios.get(URLAPI)
            const ordenes = respuesta.data
            commit('cargarOrdenes',ordenes)
        },
        postOrdenApi: async function({ commit }, orden){
            const URLPOST="https://639e8f4e3542a261305d989b.mockapi.io/carritodetalle"
            const respuesta= await axios.post(URLPOST, orden)
            const ordenes = respuesta.data
            commit('cargarOrdenes',ordenes)
        }
    },
}    
