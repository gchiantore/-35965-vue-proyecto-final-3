
export default {
    namespaced:true,
    state: {
        cantidadItems:0
    },
    getters: {
        getCantidadCarrito(state){
            return state.cantidadItems
        },
    },
    mutations: {
        poneritem(state){
            state.cantidadItems=state.cantidadItems+1
        },
        sacaritem(state){
            state.cantidadItems=state.cantidadItems-1
        },
        inicializarItems(state, cantidad){
            state.cantidadItems=cantidad
        }
    },
}    