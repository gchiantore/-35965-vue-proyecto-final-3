<template>
    <div class="card col-md-8" >
        <div class="card-header">
            Usuarios
        </div>
        <div class="card-body table-responsive ">
            <table class="table align-middle table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Avatar</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">e-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, i) of getListaUsuarios" :key="i">
                        <th scope="row">{{user.id}}</th>
                        <td><img class="avatar" :src="user.avatar" alt=""></td>
                        <td>{{user.nombre}}</td>
                        <td>{{user.email}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapGetters} from 'vuex'
    export default {
        name:'ListaUsuarios',
        data(){
            return{
                users:Object,
            }    
        },
        computed:{
        ...mapGetters('usersModule',['getListaUsuarios'])
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