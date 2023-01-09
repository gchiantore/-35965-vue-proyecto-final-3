import axios from 'axios'
export default {
    namespaced:true,
    state: {
        usuarioActivo:null,
        listaUsuarios:[]
    },
    getters: {
        getUsuActivo(state){
            console.log(state.usuarioActivo)
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
        getUserApi: function({ commit }){
            const URLAPI="https://639e8f4e3542a261305d989b.mockapi.io/users";
            axios.get(URLAPI)
                .then(response => response.data)
                .then(data =>{
                    const usuarios = data
                    commit('cargarUsuarios',usuarios)
                })
        },
        postUserApi: function({ commit }, user){
        const URLPOST="https://639e8f4e3542a261305d989b.mockapi.io/users"
                axios.post(URLPOST, user)
                    .then(resp => resp.data)
                    .then(data=>{
                        const usuarios = data
                        commit('cargarUsuarios',usuarios)
                    })
        }
    },
}