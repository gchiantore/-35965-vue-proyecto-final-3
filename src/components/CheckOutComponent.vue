<template>
    <div>
        <div>    
            <div v-if="carritovacio==1">
                <div class="check-out">
                    <div class="items-cart">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Importe</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) of carritodetalle" :key="index">
                                    <th scope="row">{{item.prodid}}</th>
                                    <td>{{item.producto}}</td>
                                    <td class="text-center">
                                        <div class="cantidad">
                                        <button @click="restarCantidad(index)" class="restar">
                                            -
                                        </button>
                                        {{item.cantidad}}
                                        <button @click="sumarCantidad(index)" class="sumar">
                                            +
                                        </button>
                                    </div>
                                    </td>
                                    <td class="text-end">{{parseInt(item.precio).toFixed(2).toLocaleString()}}</td>
                                    <td class="text-end">{{parseInt(item.importe).toFixed(2).toLocaleString()}}</td>
                                    <td>
                                        <i @click="eliminarProducto(product.id)" class="bi bi-trash3-fill"></i>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="total-cart">
                        <div class="titulo">
                            <h4>Resumen a Pagar</h4>
                        </div>    
                        <div>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Sub Total :</td>
                                        <td></td>
                                        <td class="text-end"> {{ subtotalcarrito.toFixed(2).toLocaleString() }}</td>
                                    </tr>
                                    <tr>
                                        <td>Propina 10% :</td>
                                        <td></td>
                                        <td class="text-end"> {{ propina.toFixed(2).toLocaleString()}}</td>
                                    </tr>
                                    <tr>
                                        <td><h6>Total a Pagar:</h6></td>
                                        <td></td>
                                        <td><h6 class="text-end">{{ totalcarrito.toFixed(2).toLocaleString()}}</h6></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <div class="compara col-md-12 text-center">
                                <button @click="comprar()" class="btn btn-success m-1">Compro !</button> 
                            </div>
                            <div class="col-md-12 text-center p-1">
                                <button @click="seguirComprando()" class="btn btn-light m-1">Me falto algo</button>
                                <button @click="cancelarCompra()" class="btn btn-danger m-1">Cancelo</button>
                            </div>
                        </div>
                    </div>
                    
                </div>    
            </div>
            <div v-else>
                <div class="col-md-12 text-center p-3">
                    <h2>No hay items en el carrito</h2>
                    <button @click="seguirComprando()" class="btn btn-success m-3"> ir a comprar ...</button>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    name:'CheckOutComponent',
    data(){
        return{
            carritovacio:0,
            totalcarrito:0,
            subtotalcarrito:0,
            propina:0,
            compra:false,
            carritodetalle:Object,
            usuario:Object,
            carrito:{
                fecha:'',
                userid:'',
                username:'',
                useremail:'',
                direnvio:'',
                items:Object,
                subtotal:0,
                propina:0,
                total:0,
                formadepago:1,
                pendiente:true,
            }
            
        }    
    },
    created(){
        this.usuario=this.getUsuActivo()
        this.actualizarListaStore()
        },
    
    beforeUpdate(){
        this.actualizarListaStore()
    },
    methods:{
        ...mapGetters('usersModule',['getUsuActivo']),
        ...mapActions('ordersModule',['postOrdenApi']),
        ...mapGetters('carritoModule',['getCantidadCarrito']),
        ...mapMutations('carritoModule',['inicializarItems', 'sacaritem']),
        ...mapActions ('ordersModule',['getOrdenApi']),

        actualizarListaStore(){
            this.subtotalcarrito=0
            this.carritodetalle={}
            if (JSON.parse(localStorage.getItem('items'))){
                this.carritodetalle=JSON.parse(localStorage.getItem('items'))
                this.carritovacio=1
                this.subtotalcarrito=0
                for(let i=0;i<this.carritodetalle.length;i++){
                    this.subtotalcarrito=this.subtotalcarrito+this.carritodetalle[i].importe
                } 
            }else{
                
                this.carritovacio=0
            }
            this.propina=this.subtotalcarrito*0.10
            this.totalcarrito=this.subtotalcarrito+this.propina
        },

        eliminarProducto(id){

            this.$swal.fire({
                    title: 'Estas Seguro??',
                    text: "Se va a eliminar el producto " + id + ", del carrito",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si!, Borralo'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        this.carritodetalle=this.carritodetalle.filter(item => item.prodid != id)
                        localStorage.setItem('items',JSON.stringify(this.carritodetalle))
                        this.actualizarListaStore()
                        this.sacaritem()
                        this.$swal.fire(
                        'El producto '+id+'.',
                        'Ha sido eliminado',
                        'success'
                        )
                    }
                })
        },

        sumarCantidad(index){
            this.carritodetalle[index].cantidad++
            this.carritodetalle[index].importe=this.carritodetalle[index].precio*this.carritodetalle[index].cantidad
            localStorage.setItem('items',JSON.stringify(this.carritodetalle))
            this.actualizarListaStore()
        },
        restarCantidad(index){
            if (this.carritodetalle[index].cantidad==1){
                this.eliminarProducto(this.carritodetalle[index].prodid)
            }else{
                this.carritodetalle[index].cantidad--
                this.carritodetalle[index].importe=this.carritodetalle[index].precio*this.carritodetalle[index].cantidad
                localStorage.setItem('items',JSON.stringify(this.carritodetalle))
                this.actualizarListaStore()
            }
        },
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
            this.carrito.total=this.totalcarrito
            this.carrito.propina=this.propina
            this.carrito.subtotal=this.subtotalcarrito
            this.carrito.direnvio=this.usuario.direccion
            this.carrito.pendiente=true
            this.carrito.activa=true
            this.postOrdenApi(this.carrito)
            this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Gracias ${this.carrito.username}, tu pedido se esta procesando, te mantedremos informado en tu casilla de correo ${this.carrito.useremail}`,
                            showConfirmButton: false,
                            timer: 5000
                            })  
            localStorage.removeItem('items')   
            this.inicializarItems(0)
            this.$router.push('/productos')  

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
            this.inicializarItems(0)         
            this.$router.push('/')         
        },

    }   
        
}
</script>

<style scoped>
    .check-out{
        display: flex;
        flex-direction: row;
        column-gap: 30px;
        justify-content:center;
    }
    .total-cart{
        width: 350px;
        height: 400px;
        background-color: #F0F0F0;
        border-radius: 10px;
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    .titulo{
        text-align: center;
        font-weight: 400;
    }

    .table{
        width: 100%;
    }

    .cantidad{
        display: flex;
        flex-direction: row;

    }
    .restar{
        text-align: center;
        background-color: red;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        display:flex;
        align-items: center;
        justify-content: center;
        color:white;
        cursor: hand;
        border:none;
    }
    .sumar{
        text-align: center;
        background-color: green;
        width: 20px;
        height: 20px;
        margin-left: 10px;
        display:flex;
        align-items: center;
        justify-content: center;
        color:white;
        cursor: hand;
        border:none;
    }
</style>