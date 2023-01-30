<template>
<div>
    <div class="card mb-3" >
        <div class="row g-0">
            <div class="col-md-6">
                <img :src="getProduct.imagen" class="card-img-top ratio ratio-4x3" alt="...">
            </div>
            <div class="col-md-6 info-container">
                <div class="card-body texto">
                    <div class="botones mb-5">
                        <div class="precio">
                            <h3>{{getProduct.name}}</h3>
                        </div>
                        <div class="accion">
                            <i @click="volver()" class="bi bi-arrow-left-circle-fill fs-2"></i>
                        </div>
                    </div>
                    <p class="card-text">{{ getProduct.desc }}</p>
                </div>
                <div class="card-body botones">
                    <div class="precio">
                        <h4 class="card-text fw-bold text-danger">$ {{getProduct.precio}}</h4>
                    </div>
                    <div class="accion">
                        <button @click="agregarCarrito(getProduct.id)" class="btn btn-success center"><i class="bi bi-cart"></i> Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    name:'ProductDetailComponent',
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
        this.products=this.getListaProductos()
    },
    methods:{
        ...mapActions('usersModule',['getUserApi']),
        ...mapGetters('usersModule',['getUsuActivo']),
        ...mapActions('productsModule',['getProductosApi']),
        ...mapGetters('productsModule',['getListaProductos']),
        ...mapMutations('carritoModule',['poneritem']),

        volver(){
            this.$router.push("/productos");
        },

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
                console.log(index)
                if (index<0){
                    storageItem.push(this.itemcarrito)
                    this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Se agrego ${this.itemcarrito.producto} con exito al carrito`,
                            showConfirmButton: false,
                            timer: 1500
                            })      
                            
                    this.poneritem()        
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
                this.poneritem()   
            }
        },

    },
   
    computed:{
        getProduct(){
            const producto=this.getListaProductos().filter(p => (p.id == this.$route.params.id))
            return producto[0]
        }
    },
}

</script>

<style scoped>
    .accion{
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: space-between;
        column-gap: 15px;
    }
    .precio{
        width: 60%;
    }
    .info-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    .texto{
        height: 80%;
    }
    .botones{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: space-between;
    }
</style>