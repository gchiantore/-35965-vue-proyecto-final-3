import axios from 'axios'
export default {
    namespaced:true,
    state: {
        usuarioActivo:null,
        listaUsuarios:[]
    },
    getters: {
        getUsuActivo(state){
            return state.usuarioActivo
        },
        getListaUsuarios(state){
            return state.listaUsuarios
        },
    },
    mutations: {
        modificarUsuActivo(state, nuevoUsuario){
            state.usuarioActivo=nuevoUsuario; 
        },
        desloguearUsuario(state){
            state.usuarioActivo=null;
        },
        cargarUsuarios(state, usuariosApi){
            state.listaUsuarios=usuariosApi;
        }
    },
    actions: {
        getUserApi: async function({ commit }){
            const URLAPI="https://639e8f4e3542a261305d989b.mockapi.io/users";
            const respuesta = await axios.get(URLAPI)
            const usuarios = respuesta.data
            commit('cargarUsuarios',usuarios)
        },
        postUserApi: async function({ commit }, user){
            const URLPOST="https://639e8f4e3542a261305d989b.mockapi.io/users"
            const respuesta = await axios.post(URLPOST, user)
            const usuarios = respuesta.data
            commit('cargarUsuarios',usuarios)
        }
    },
}