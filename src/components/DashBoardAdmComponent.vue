<template>
    <div class="dashboard-container p-5">
        <DashBoardCardComponent icono="bi bi-list-columns-reverse" nombre="Productos Activos" :cantidad="cantProduct"/>
        <DashBoardCardComponent icono="bi bi-people-fill" nombre="Usuarios Activos" :cantidad="cantUsuarios"/>
        <DashBoardCardComponent icono="bi bi-cart-check-fill" nombre="Ordenes realizadas" :cantidad="cantOrdenes"/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DashBoardCardComponent from '@/components/DashBoardCardComponent.vue'
export default {
        name:'DashboardAdmComponent',
        components:{
                DashBoardCardComponent
            
        },
        data(){
            return{
                users:Object,
                product:Object,
                carrito:Object,
                cantProduct:0,
                cantUsuarios:0,
                cantOrdenes:0,
            }    
        },
        created(){
            this.getUserApi()
            this.getProductosApi()
            this.getOrdenApi()
            setTimeout(() => {
                console.log(this.getListaUsuarios())
            this.cantUsuarios=this.getListaUsuarios().length
            console.log(this.getListaProductos())
            this.cantProduct=this.getListaProductos().length
            console.log(this.getListaOrdenes())
            this.cantOrdenes=this.getListaOrdenes().length
            }, 1000);
            
        },
        methods:{
            ...mapActions(
                'usersModule',
                ['getUserApi']
                ),
            ...mapGetters(
                'usersModule',
                ['getListaUsuarios']
                ),
            ...mapActions(
                'productsModule',
                ['getProductosApi']
                ),
            ...mapGetters(
                'productsModule',
                ['getListaProductos']
                ),
            ...mapActions(
                'ordersModule',
                ['getOrdenApi']
                ),
            ...mapGetters('ordersModule',
                ['getListaOrdenes']
                )
        }
}
</script>

<style>
    .dashboard-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 30px;
    }
</style>