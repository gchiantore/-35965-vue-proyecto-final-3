<template>
    <div class="contenedor">
        <div v-if="getUsuActivo===null">
            <LogInComponent />
        </div>
        <div v-else class="container content">
            <h1 class="titulo">Lista de usuarios Activos</h1>
            <ListaUsuarios />
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import LogInComponent from '@/components/LogInComponent.vue'
    import ListaUsuarios from '@/components/ListaUsuarios.vue';
    export default {
        name: 'HomeView',
        components:{
            ListaUsuarios,
            LogInComponent,
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