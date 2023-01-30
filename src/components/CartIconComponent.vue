<template>
    <div>
        <div class="cartContainer position-relative" @click="checkOut()">
            <i class="bi bi-cart"></i>
            <span class="position-absolute start-100 translate-middle badge rounded-pill bg-success" v-if="itemsCarrito > 0">{{itemsCarrito}}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name:'CartIconComponent',
    data(){
        return{
            togle:"offcanvas",
            carritodetalle:Object,
            carritovacio:0,
            totalcarrito:0,
        }
    },    
    created(){
        let cantidadItems=0
        if (JSON.parse(localStorage.getItem('items'))){
                cantidadItems=JSON.parse(localStorage.getItem('items')).length
            }else{
                cantidadItems=0
            }
        this.inicializarItems(cantidadItems)
    },

    methods:{
        ...mapGetters('carritoModule',['getCantidadCarrito']),
        ...mapMutations('carritoModule',['inicializarItems', 'sacaritem']),
        checkOut(){
            if(this.$router.currentRoute.path!='/carrito'){
                this.$router.push('/carrito')
            }    
        }
    },

    computed:{
        itemsCarrito(){
            return this.getCantidadCarrito()
        },
    }
}
</script>

<style scoped>
    .cartContainer {
        background-color: black;
        color: white;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        margin-top:10px;
        margin-left: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .cartContainer i{
        font-size: 20px;
        cursor:hand;
    }

</style>