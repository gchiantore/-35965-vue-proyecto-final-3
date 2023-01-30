<template>
    <div>
        <div v-if="getUsuActivo===null">
        <LogInComponent />
        </div>
        <div v-else class="contenedor">
            <div class="container content">
                <h1 class="titulo">Estas son nuestras pizzas!! </h1>
                <ProductDetailComponent />
            </div>
        </div>    
    </div>    
</template>

<script>
import {mapGetters} from 'vuex'
import LogInComponent from '@/components/LogInComponent.vue'
import ProductDetailComponent from '@/components/ProductDetailComponent.vue';
export default {
    name: 'ProductosView',
    props:{
        paso:Boolean,
    },
        
    components:{
    LogInComponent,
    ProductDetailComponent
},
    computed:{
    ...mapGetters('usersModule',['getUsuActivo'])
    }
}
</script>


<style scoped>
    .contenedor{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: rgb(235, 232, 232);;
        background-image: url("@/assets/fondo.png");
        background-repeat: repeat;
    }
    .content{
        padding: 15px;
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        background-color: white;
        margin-bottom: 0px;
        box-shadow: 5px 5px 10px #888888;
    }
    .titulo{
        width: 100%;
        text-align: center;
        padding: 30px;
    }
</style>