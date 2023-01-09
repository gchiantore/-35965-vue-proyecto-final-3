<template>
    <div class="contenedor">
        <div v-if="getUsuActivo===null">
            <LogInComponent />
        </div>
        <div v-else>
            <div class="container content">
                <h1 class="titulo">Este es tu carrito</h1>
                <CheckOutComponent />
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import LogInComponent from '@/components/LogInComponent.vue'
import CheckOutComponent from './CheckOutComponent.vue'
export default {
    name: 'CarritoView',

    components:{
    LogInComponent,
    CheckOutComponent
},
    computed:{
    ...mapGetters('usersModule',['getUsuActivo'])
}
}
</script>

<style scoped>
    .content{
        padding: 15px;
        display: flex;
        flex-direction: row;
        column-gap: 15px;
        row-gap: 15px;
        justify-content: space-evenly;
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