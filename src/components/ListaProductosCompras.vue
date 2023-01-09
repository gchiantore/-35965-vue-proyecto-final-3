<template>
    <div>
        <div class="row row-cols-1 row-cols-md-4 g-4">    
            <div v-for="(product, i) of products" :key="i" class="col">
                <div class="card h-100 w-100">
                    <img :src="product.imagen" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                        <p class="card-text">{{product.precio}}</p>
                        <button @click="agregarCarrito(product.id)" class="btn btn-success"><i class="bi bi-cart"></i>  Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:'ListaProductosCompras',
    data(){
        return{
            products:Object,
            prod:Object,
            user:Object,
            itemcarrito:{
            userid:'',
            prodid:'',
            producto:'',
            cantidad:'',
            avatar:'',
            precio:0,
            importe:0
            },
            items:[]
        }
    },
    created(){
            this.getUserApi()
            this.getProductosApi()
            setTimeout(() => {
                this.products = this.getListaProductos()
                this.user=this.getUsuActivo()  
            }, 2000);
    },
    methods:{
        ...mapActions('usersModule',['getUserApi']),
        ...mapGetters('usersModule',['getUsuActivo']),
        ...mapActions('productsModule',['getProductosApi']),
        ...mapGetters('productsModule',['getListaProductos']),

        agregarCarrito(id)
        {
            this.prod=this.products.find(prod => prod.id === id)
            this.itemcarrito.userid=this.user.id
            this.itemcarrito.prodid=this.prod.id
            this.itemcarrito.producto=this.prod.name
            this.itemcarrito.cantidad=1
            this.itemcarrito.precio=this.prod.precio
            this.itemcarrito.avatar=this.prod.imagen
            this.itemcarrito.importe=this.prod.precio * 1
            let storageItem=[]
            if (localStorage.getItem('items')!==null && localStorage.getItem('items')){
                storageItem = JSON.parse(localStorage.getItem('items'))
                let index=storageItem.findIndex(item => item.prodid===this.itemcarrito.prodid)
                if (index<0){
                    console.log(index)
                    storageItem.push(this.itemcarrito)
                    this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Se agrego ${this.itemcarrito.producto} con exito al carrito`,
                            showConfirmButton: false,
                            timer: 1500
                            })      
                }else{
                    storageItem[index].cantidad++
                    storageItem[index].importe=storageItem[index].precio*storageItem[index].cantidad
                    this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Se agrego una unidad mas de ${this.itemcarrito.producto} con exito al carrito`,
                            showConfirmButton: false,
                            timer: 1500
                            })  
                }    
                localStorage.setItem('items',JSON.stringify(storageItem))
            }else{
                storageItem.push(this.itemcarrito)
                this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Se agrego ${this.itemcarrito.producto} con exito al carrito`,
                            showConfirmButton: false,
                            timer: 1500
                            })    
                localStorage.setItem('items',JSON.stringify(storageItem))
            }
        },
    }
}
</script>

<style>
</style>