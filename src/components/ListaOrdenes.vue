<template>
    <div class="card col-md-8 mb-5" >
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
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) of getListaOrdenes" :key="i">
                        <th scope="row">{{item.id}}</th>
                        <td>{{item.fecha}}</td>
                        <td>{{item.username}}</td>
                        <td>{{item.total}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name:'ListaOrdenes',
        data(){
            return{
                carrito:Object,
            }    
        },
        computed:{
        ...mapGetters('ordersModule',['getListaOrdenes'])
    }
}   

</script>

<style scoped>
    .avatar{
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
</style>