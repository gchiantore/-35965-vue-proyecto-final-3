<template>
        <div class="contenedor">
            <div class="login-container">
                <div class="login-header">
                    <img class="login-img mb-5" src="@/assets/logo-app.png" alt="">
                    <h3 class="text-center mb-3">Ingreso a la App</h3>
                </div>
                <div v-if="error" class="alert alert-danger" role="alert">
                    Ups! el usuario o la contraseña no son correctos
                </div>
                <div class="login-form" id="loginform">
                    <form action="" @submit.prevent="logValidate" id="loginForm">
                        <div class="mb-2">
                            <label for="email" class="form-label">Tu e-mail</label>
                            <input v-model="email" type="email" class="form-control" id="email"> 
                        </div>
                        <div class="mb-3">
                            <label for="pass" class="form-label">Password</label>
                            <input v-model="pass" type="password" class="form-control" id="pass">
                        </div>
                        <button type="submit" class="btn btn-success float-end">Ingresar</button>
                    </form>
                </div>  
                <div class="login-footer">
                    <hr class="mb-1">
                    <p class="text-center text-secondary mb-1 fs-6">No tenes cuenta, No te preocupes hace clic <a @click="registro()" href="#">Aqui</a> y crea una</p>
                </div>
            </div>
        </div>
</template>

<script>
import {mapMutations, mapActions, mapGetters} from 'vuex'
export default {
    name:'LogInComponent',

    data() {
        return {
            email:'',
            pass:'',
            error:false
        }
    },
    created(){
        this.getUserApi();
        this.$router.push("/").catch(()=>{});
    },
    methods: {

        ...mapGetters('usersModule',['getListaUsuarios']),
        ...mapMutations('usersModule',['modificarUsuActivo']),
        ...mapActions('usersModule',['getUserApi']),

        logValidate(){
            console.log(this.getListaUsuarios())
            const encontrado = this.getListaUsuarios().find((usuario) => (usuario.email==this.email && usuario.pass==this.pass));
            console.log(encontrado)
            if(encontrado){
                console.log(encontrado)
                this.modificarUsuActivo(encontrado);
                Object.assign(this.$data, this.$options.data);
                document.getElementById("loginForm").reset();
            } else {
                this.error=true
                setTimeout(() => {
                    this.error=false
                }, 4000);
            }
        },
        registro(){
            this.$router.push('/registro')
        }
    },
}
</script>

<style scoped>
    .contenedor{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(235, 232, 232);;
        background-image: url("@/assets/fondo.png");
        background-repeat: repeat;
    }
    .form-control:focus { 
        border-color: #28a745; 
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); 
    }
    .form-select:focus{
        border-color: #28a745; 
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);  
    }
    .login-container{
        width: 400px;
        height: 600px;
        background-color: white;
        border: 1px solid rgb(196, 195, 195);
        padding: 30px;
        box-shadow: 5px 5px 10px #888888;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .login-header{
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .login-img{
        height: 85px;
        width: 250px; 
    }
</style>