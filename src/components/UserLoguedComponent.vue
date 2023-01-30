<template>
<div>    
        <div v-if="!estado" class="contenedorUser">
            <img @click="cambioEstado()" class="avatar" :src="getUsuActivo.avatar" alt="">
        </div>
        <div v-else class="card contenedorUserGrande" style="width: 18rem;">
            <div class="row justify-content-center p-2"> 
                    <img @click="cambioEstado()" class="avatarGrande card-img-center" :src="getUsuActivo.avatar" alt="...">
            </div>      
            <div class="card-body">
                <h5 class="card-title text-center">{{getUsuActivo.nombre}}</h5>
                <div v-if="getUsuActivo.tipo"> 
                    <p class="card-text text-center">Administrador</p>
                </div>
                <div v-else>
                    <p class="card-text text-center">Cliente</p>
                </div>
            </div>
            <button @click="logOut()" class="btn btn-success p-2"><i class="bi bi-box-arrow-right"></i> Log Out</button>
        </div>
</div>    
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default { 
    name:'UserLogedComponent',
    data(){
            return{
                estado:false,
            }    
        },
    methods:{
        ...mapMutations('usersModule',['modificarUsuActivo']),
        logOut(){
            this.modificarUsuActivo(null);
            if (localStorage.getItem('items')!==null && localStorage.getItem('items')){
                localStorage.removeItem('items')
            }
        },
        cambioEstado(){
            this.estado=!this.estado
        }
    },
    computed:{
        ...mapGetters('usersModule',['getUsuActivo'])
    }
}
</script>

<style scoped>
    .contenedorUser{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 50px;
        padding-top: 10px;
    }
    .avatar{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
    }
    .avatarGrande{
        height: 120px;
        width: 140px;
        border-radius: 50%;
        cursor: pointer;
    }
    .contenedorUserGrande{
        z-index: 1000;
    }
</style>