<template>
    <div class="container-fluid header">
        <div class="container">
            <div class="header-div">
                <img class="header-img" src="../assets/logo-app.png" alt="">
                <div class="header-derecho">
                    <div>
                        <UserLoguedComponent />
                    </div>
                    <div v-if="!getUsuActivo.tipo">
                        <CartIconComponent />
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import CartIconComponent from './CartIconComponent.vue';
    import UserLoguedComponent from './UserLoguedComponent.vue';
    export default {
        name:'HeaderComponent',
        components: { 
            UserLoguedComponent, 
            CartIconComponent, 
        },
        computed:{
            ...mapGetters('usersModule',['getUsuActivo'])
    }    
}
</script>

<style scoped>
    .header{
        background-color: white;
        height: 60px;
    }
    .header-derecho{
        display:flex;
        flex-direction: row;
        align-items: center;
    }
    .header-div{
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .header-img{
        height: 55px;
        width: 150px; 
    }
</style>