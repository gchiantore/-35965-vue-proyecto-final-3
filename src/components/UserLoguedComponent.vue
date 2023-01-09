<template>
    <div class="contenedorUser">
        <img class="avatar" :src="getUsuActivo.avatar" alt="">
        <div>
            <p class="m-2">{{getUsuActivo.nombre}}</p>
        </div>
        <div>
            <button @click="logOut()" class="btn btn-success"><i class="bi bi-box-arrow-right"></i></button>
        </div>    
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
export default {
    name:'UserLogedComponent',
    methods:{
        ...mapMutations('usersModule',['modificarUsuActivo']),
        logOut(){
            this.modificarUsuActivo(null);
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
        max-width: 350px;
        padding-top: 10px;
    }
    .avatar{
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
</style>