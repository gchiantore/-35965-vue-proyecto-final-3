<template>
    <div class="dashboard-container p-5">
        <DashBoardCardComponent icono="bi bi-list-columns-reverse" nombre="Productos Activos" :cantidad="calculoDashboard.cantProduct"/>
        <DashBoardCardComponent icono="bi bi-people-fill" nombre="Usuarios Activos" :cantidad="calculoDashboard.cantUsuarios"/>
        <DashBoardCardComponent icono="bi bi-cart-check-fill" nombre="Ordenes realizadas" :cantidad="calculoDashboard.cantOrdenes"/>
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
        },
        computed:{
            calculoDashboard(){
                    const dashboard={}
                    const usuarios=this.getListaUsuarios()
                    if (usuarios){
                        dashboard.cantUsuarios=usuarios.length
                    }else{
                        dashboard.cantOrdenes=0
                    }
                    const productos=this.getListaProductos()
                    if (productos){
                        dashboard.cantProduct=this.getListaProductos().length
                    }else{
                        dashboard.cantProduct=0
                    }
                    const ordenes=this.getListaOrdenes()
                    if (ordenes){
                        dashboard.cantOrdenes=this.getListaOrdenes().length
                    }else{
                        dashboard.cantOrdenes=0
                    }
                    return dashboard
                }
        },    
}
</script>

<style>
    .dashboard-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        row-gap: 30px;
        column-gap: 30px;
    }
</style>