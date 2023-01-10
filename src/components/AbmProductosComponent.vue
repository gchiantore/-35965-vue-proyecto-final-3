<template>
    <div  class="col-md-10">
        <div class="mb-5" v-if="formulario">
            <div class="card">
                <div class="card-header">
                    {{tituloformulario}}
                </div>
                <div class="card-body">
                    <product-form @enviar="formulario=$event" :boton="textosubmit" :modo="modo" :produ="id"/>
                </div>
            </div>
        </div>
        
        <div v-else>
            <div class="btnPosition">
                <button @click="nuevoProducto()" class="btn btn-success mb-2">Agregar Producto</button>  
            </div>
            <div class="card mb-5"> 
                <div class="card-header">
                    Productos
                </div>
                <div class="card-body table-responsive ">
                    <table class="table align-middle table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Avatar</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(product, i) of actualizaLista" :key="i">
                                <th scope="row">{{product.id}}</th>
                                <td><img class="avatar" :src="product.imagen" alt=""></td>
                                <td>{{product.name}}</td>
                                <td>{{product.precio}}</td>
                                <td>
                                    <i @click="eliminarProducto(product.id)" class="bi bi-trash3-fill"></i> | 
                                    <i @click="modificarProducto(product.id)" class="bi bi-pencil-square"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductForm from './ProductForm.vue';
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name:'AbmProductosComponent',
        components: { 
            ProductForm 
        },
        data(){
            return{
                products:Object,
                formulario:false,
                tituloformulario:'',
                textosubmit:'',
                modo:1,
                id:'',
                veces:0,
            }    
        },
        created(){
            this.getProductosApi()
        },

        methods:{
            ...mapGetters('productsModule',['getListaProductos']),
            ...mapActions('productsModule',['getProductosApi','deleteProductosApi']),

            nuevoProducto(){
                this.formulario=true
                this.tituloformulario="Nuevo Producto"
                this.textosubmit="Agregar Producto"
                this.modo=1
            },
            modificarProducto(id){
                this.formulario=true
                this.tituloformulario="Editar Producto"
                this.textosubmit="Guardar Cambios"
                this.modo=2
                this.id=id
            },
            eliminarProducto(id){
                this.$swal.fire({
                    title: 'Estas Seguro??',
                    text: "Se va a eliminar el producto " + id + ", esto es irreversible",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Si!, Borralo'
                    }).then((result) => {
                    if (result.isConfirmed) {
                        this.deleteProductosApi(id)
                        this.$swal.fire(
                        'El producto '+id+'.',
                        'Ha sido eliminado',
                        'success'
                        )
                    }
                })
            },
        },
        computed:{
            actualizaLista(){
                this.getProductosApi()
                return this.getListaProductos()
            }
        },
}   

</script>

<style scoped>
    .btnPosition{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    }
    .avatar{
        height: 50px;
        width: 50px;
        border-radius: 10%;
    }
</style>