<template>
    <div>
        <div v-if="getUsuActivo===null">
        <LogInComponent />
        </div>
        <div v-else class="contenedor-prod">
            <div class="container content">
                <h1 class="titulo">Estas son nuestras pizzas!! </h1>
                <ListaProductosCompras />
            </div>
        </div>    
    </div>    
</template>

<script>
import {mapGetters} from 'vuex'
import LogInComponent from '@/components/LogInComponent.vue'
import ListaProductosCompras from '@/components/ListaProductosCompras.vue';
export default {
    name: 'ProductosView',
    props:{
        paso:Boolean,
    },
        
    components:{
    LogInComponent,
    ListaProductosCompras
},
    computed:{
    ...mapGetters('usersModule',['getUsuActivo'])
    }
}
</script>


<style scoped>
    .contenedor-prod{
        display: flex;
        justify-content: center;
        background-color: rgb(235, 232, 232);;
        background-image: url("@/assets/fondo.png");
        background-repeat: repeat;
    }
    .content{
        padding: 15px;
        display: flex;
        flex-direction: row;
        row-gap: 15px;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        background-color: white;
        box-shadow: 5px 5px 10px #888888;
    }
    .titulo{
        width: 100%;
        text-align: center;
        padding: 30px;
    }
</style>