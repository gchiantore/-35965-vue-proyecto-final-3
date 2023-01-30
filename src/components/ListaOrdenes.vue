<template>
    <div class="container">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header headerColor" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Ordenes Pendiente de Envío 
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="card col-md-12 mb-5" >
                        <div class="card-header">
                            Ordenes
                        </div>
                        <div class="card-body table-responsive ">
                            <table class="table align-middle table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Usuario</th>
                                        <th scope="col">Total Orden</th>
                                        <th scope="col" class="text-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, i) of ordenesPendientes" :key="i">
                                        <th scope="row">{{item.id}}</th>
                                        <td>{{new Date(item.fecha).toLocaleDateString()}}</td>
                                        <td>{{item.username.toUpperCase()}}</td>
                                        <td class="text-center">$ {{item.total.toFixed(2)}}</td>
                                        <td class="text-center"> <i @click="enviarOrden(item)" class="bi bi-truck"></i> | <i @click="cancelarOrden(item)" class="bi bi-x-circle"></i></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Ordenes Entregadas
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="card col-md-12 mb-5" >
                        <div class="card-header">
                            Ordenes
                        </div>
                        <div class="card-body table-responsive ">
                            <table class="table align-middle table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Usuario</th>
                                        <th scope="col">Total Orden</th>
                                        <th scope="col" class="text-center">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, i) of ordenesEntregadas" :key="i">
                                        <th scope="row">{{item.id}}</th>
                                        <td>{{new Date(item.fecha).toLocaleDateString()}}</td>
                                        <td>{{item.username.toUpperCase()}}</td>
                                        <td class="text-end">$ {{item.total.toFixed(2)}}</td>
                                        <td class="text-center"> <i class="bi bi-cart-check"></i> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name:'ListaOrdenes',
        data(){
            return{
                carrito:Object,
            }    
        },
        methods:{
            ...mapGetters('ordersModule',['getListaOrdenes']),
            ...mapActions('ordersModule',['putOrdenApi','getOrdenApi']),

            enviarOrden(orden){
                orden.pendiente=false
                this.putOrdenApi(orden)
                this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `La Orden ${orden.id} a sedo envia a ${orden.username}.`,
                            showConfirmButton: false,
                            timer: 1500
                            })   
            },

            cancelarOrden(orden){
                this.$swal.fire({
                    title: 'Estas Seguro??',
                    text: "Se va a cancelar la orden " + orden.id + ", de " + orden.username,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si!, Cancelala'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        orden.activa=false
                        this.putOrdenApi(orden)
                        this.$swal.fire(
                        'la Orden '+orden.id+'.',
                        'Ha sido cancelada',
                        'success'
                        )
                    }
                })
            },
        },   
        computed:{
            ordenesPendientes(){
                this.getListaOrdenes()
                const pendientes=this.getListaOrdenes().filter(car => (car.pendiente === true && car.activa === true))
                return pendientes
            },

            ordenesEntregadas(){
                this.getListaOrdenes()
                const entregadas=this.getListaOrdenes().filter(car => (car.pendiente === false))
                return entregadas
            }
        },
    }


</script>

<style scoped>
    .headerColor{
        background-color: aqua;
    }
    .avatar{
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
</style>