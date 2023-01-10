<template>
        <div class="col-md-8">
        <div v-if="carritovacio==1">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Importe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) of carritodetalle" :key="index">
                        <th scope="row">{{item.prodid}}</th>
                        <td>{{item.producto}}</td>
                        <td>{{item.cantidad}}</td>
                        <td>{{item.precio}}</td>
                        <td>{{item.importe}}</td>
                    </tr>
                </tbody>
            </table>
            <div class="col-md-12 text-center p-3">
                
                <button @click="cancelarCompra()" class="btn btn-danger m-3">Cancelo la compra</button>
                <button @click="seguirComprando()" class="btn btn-light m-3">me falto algo</button>
                <button @click="comprar()" class="btn btn-success m-3"> Listo Compro !</button>
                
            </div>
        </div>
        <div v-else>
            <div class="col-md-12 text-center p-3">
                <h2>No hay items en el carrito</h2>
                <button @click="seguirComprando()" class="btn btn-success m-3"> ir a comprar ...</button>
                
            </div>
            
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name:'CheckOutComponent',
    data(){
        return{
            carritovacio:0,
            carritodetalle:Object,
            usuario:Object,
            carrito:{
                fecha:'',
                userid:'',
                username:'',
                useremail:'',
                items:Object,
                total:''
            }
            
        }    
    },
    created(){
            
            if (JSON.parse(localStorage.getItem('items'))){
                this.carritodetalle=JSON.parse(localStorage.getItem('items'))
                this.carritovacio=1
            }else{
                
                this.carritovacio=0
            }
            this.usuario=this.getUsuActivo()
        },
    methods:{
        ...mapGetters('usersModule',['getUsuActivo']),
        ...mapActions('ordersModule',['postOrdenApi']),
        comprar(){
            let total=0
            for (let i=0;i<this.carritodetalle.length;i++){
                total=total+this.carritodetalle[i].importe
            }
            this.carrito.fecha=new Date()
            this.carrito.userid=this.usuario.id 
            this.carrito.username=this.usuario.nombre
            this.carrito.useremail=this.usuario.email 
            this.carrito.items=this.carritodetalle
            this.carrito.total=total
            this.postOrdenApi(this.carrito)
            this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Gracias ${this.carrito.username}, tu pedido se esta procesando, te mantedremos informado en tu casilla de correo ${this.carrito.useremail}`,
                            showConfirmButton: false,
                            timer: 5000
                            })  
            localStorage.removeItem('items')                
            this.$router.push('/')         
        },
        seguirComprando(){
            this.$router.push('/productos')
        },

        cancelarCompra(){
            this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${this.carrito.username}, tu compra ha sido cancelada`,
                            showConfirmButton: false,
                            timer: 5000
                            })  
            localStorage.removeItem('items')                
            this.$router.push('/')         
        },

    }   
        
}
</script>

<style>
</style>