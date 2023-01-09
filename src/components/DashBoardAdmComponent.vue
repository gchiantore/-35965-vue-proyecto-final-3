<template>
    <div class="dashboard-container p-5">
        <DashBoardCardComponent icono="bi bi-list-columns-reverse" nombre="Productos Activos" :cantidad="cantProduct"/>
        <DashboardCardComponent icono="bi bi-people-fill" nombre="Usuarios Activos" :cantidad="cantUsuarios"/>
        <DashboardCardComponent icono="bi bi-cart-check-fill" nombre="Ordenes realizadas" :cantidad="cantOrdenes"/>
    </div>
</template>

<script>
import DashBoardCardComponent from '@/components/DashBoardCardComponent.vue'
import axios from 'axios'
export default {
        name:'DashboardAdmComponent',
        components:{
            DashBoardCardComponent,
            
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
            const URLAPIUSER="https://639e8f4e3542a261305d989b.mockapi.io/users";
            axios.get(URLAPIUSER)
                .then(response => response.data)
                .then(data =>{
                    this.users = data
                    this.cantUsuarios=this.users.length
                })
            
            const URLAPICARRITO="https://639e8f4e3542a261305d989b.mockapi.io/carritodetalle";
            axios.get(URLAPICARRITO)
                .then(response => response.data)
                .then(data =>{
                    this.carrito = data
                    this.cantOrdenes=this.carrito.length
                })  
                
            const URLAPIPRODUCTOS="https://639e8f4e3542a261305d989b.mockapi.io/productos";
            axios.get(URLAPIPRODUCTOS)
                .then(response => response.data)
                .then(data =>{
                    this.product = data
                    this.cantProduct=this.product.length
                })     
                
                
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
    }
</style>