<template>
    <div class="dashboard-container p-5">
        <DashboardCardContainer icono="bi bi-boxes" nombre="Cantidad Productos Comprados" :cantidad="cantProduct"/>
        <DashboardCardContainer icono="bi bi-currency-dollar" nombre="Importe de las Compras" :cantidad="impTotal"/>
        <DashboardCardContainer icono="bi bi-cart-check-fill" nombre="Cantodad Ordenes realizadas" :cantidad="cantOrdenes"/>
    </div>
</template>

<script>
    import DashboardCardContainer from '@/components/DashBoardCardComponent.vue'
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name:'DashboardAdmComponent',
        components:{
            DashboardCardContainer,
        },
        data(){
            return{
                user:Object,
                carrito:Object,
                cantProduct:0,
                impTotal:0,
                cantOrdenes:0,
            }    
        },
        created(){
            this.getOrdenApi()
            setTimeout(() => {
                const carritousuario=this.getListaOrdenes().filter(car => (car.userid === this.getUsuActivo().id))   
                this.cantOrdenes=carritousuario.length
                this.impTotal=this.calculototal(carritousuario)
                this.cantProduct=this.calculoproductos(carritousuario)
            }, 2000);
                

        },
        methods:{
            ...mapGetters ('usersModule',['getUsuActivo']),
            ...mapGetters ('ordersModule',['getListaOrdenes']),
            ...mapActions ('ordersModule',['getOrdenApi']),

            calculototal(car){
                let total=0 
                for (let i=0;i<car.length;i++){
                    total=total+car[i].total
                }
                return total 
            },
            calculoproductos(car){
                let cant=0 
                for (let i=0;i<car.length;i++){
                    for (let j=0;j<car[i].items.length;j++){
                        cant=cant+car[i].items[j].cantidad
                    }
                }
                return cant
            }
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