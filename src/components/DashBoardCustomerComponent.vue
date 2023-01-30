<template>
    <div class="dashboard-container p-5">
        <DashboardCardContainer icono="bi bi-boxes" nombre="Cantidad Productos Comprados" :cantidad="calculoDashboard.cantProduct"/>
        <DashboardCardContainer icono="bi bi-currency-dollar" nombre="Importe de las Compras" :cantidad="calculoDashboard.impTotal"/>
        <DashboardCardContainer icono="bi bi-cart-check-fill" nombre="Cantidad Ordenes realizadas" :cantidad="calculoDashboard.cantOrdenes"/>
    </div>
</template>

<script>
    import DashboardCardContainer from '@/components/DashBoardCardComponent.vue'
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name:'DashboardCustomerComponent',
        components:{
            DashboardCardContainer,
        },
        data(){
            return{
                user:Object,
                carrito:Object,
                dash:Object,
            }    
        },
        created(){
            console.log('Pasa por el create del Dash')
            this.getOrdenApi()
            
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
            },
        },

        computed:{
            calculoDashboard(){
                let dashboard={}
                console.log('getListaOrdenesAntesDelIF')
                console.log(this.getListaOrdenes())
                if (this.getListaOrdenes().length==0){
                    dashboard.cantOrdenes=0
                    dashboard.impTotal=0
                    dashboard.cantProduct=0
                    console.log('Esta vacia la lista')
                }else{
                    console.log('la lista esta llena')
                    console.log(this.getListaOrdenes())
                    let carritousuario=this.getListaOrdenes().filter(car => (car.userid === this.getUsuActivo().id))
                    if (carritousuario){
                        dashboard.cantOrdenes=carritousuario.length
                        dashboard.impTotal=this.calculototal(carritousuario)
                        dashboard.cantProduct=this.calculoproductos(carritousuario)
                    }else{
                        dashboard.cantOrdenes=0
                        dashboard.impTotal=0
                        dashboard.cantProduct=0
                    }
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