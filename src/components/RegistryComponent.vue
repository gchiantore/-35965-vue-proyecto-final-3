<template>
    <div class="contenedor">
        <div class="registry-container container">
            <div v-if="errores.length!=0" class="alert alert-danger">
                {{showErrors}}
            </div>
            <div class="registry-header">
                <img class="login-img mb-5" src="@/assets/logo-app.png" alt="">
                <h3>Vamos a Registrarnos</h3>
                <hr>
            </div>
            <div class="registry-form">
                <form id="userform" action="" @submit.prevent="regValidate">
                    <div class="mb-2">
                        <label for="nombre" class="form-label">Tu Nombre</label>
                        <input v-model="user.nombre" type="text" class="form-control" id="nombre">
                    </div>
                    <div class="mb-2">
                        <label for="nacimiento" class="form-label">Cuando Naciste?</label>
                        <input v-model="user.nacimiento" type="date" class="form-control" id="nacimiento">
                    </div>
                    <div>
                        <label for="tipo" class="form-label">Tipo Usuario</label>
                        <select v-model="user.tipo" class="form-select" id="tipo">
                            <option selected disabled value=""></option>
                            <option value=false>Cliente</option>
                            <option value=true>Administrador</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <label for="email" class="form-label">Tu e-mail</label>
                        <input v-model="user.email" type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                        <label for="pass" class="form-label">Password</label>
                        <input v-model="user.pass" type="password" class="form-control" id="pass">
                    </div>
                    <div class="mb-3">
                        <label for="checkpass" class="form-label">Confirmar Password</label>
                        <input v-model="chekpass" type="password" class="form-control" id="checkpass">
                    </div>
                    <button type="submit" class="btn btn-success float-end">Guardar Datos</button>
                </form>
            </div>
            <div class="login-footer">
                <hr class="mb-1">
                <p class="text-center text-secondary mb-1 fs-6">Ya tenes una cuenta, ne te preocupes hace click <a @click="logIn()" href="#">Aqui</a> para loguearte con tu usuario y clave</p>
            </div>
        </div>  
    </div>
</template>

<script>
import {mapMutations,mapActions} from 'vuex'
export default {
    name:'RegistryComponent',
    data(){
        return{
            users:Object,
            user:{
                nombre:'',
                nacimiento:'',
                tipo:false,
                email:'',
                pass:''
            },
            chekpass:'',
            errores:[],
        }    
    },
    created(){
        this.getUserApi();
    },
    methods:{
        ...mapMutations('usersModule',['modificarUsuActivo']),
        ...mapActions('usersModule',['getUserApi','postUserApi']),
        regValidate() {
            if(this.user.nombre && this.user.tipo && this.user.email && this.user.pass){  
                if (this.user.pass===this.chekpass){
                    setTimeout(() => {
                        this.postUserApi(this.user)
                        this.getUserApi()
                        document.getElementById("userform").reset();
                        Object.assign(this.$data, this.$options.data());
                    }, 1000);
                    this.$swal.fire('El registro fue exitoso, ya te podes loguear')
                    this.logIn()
                    return true;
                    
                }else{
                    this.errores.push("Las contraseñas no son iguales");
                    return false;
                }
            }
            if(!this.user.nombre){
                this.errores.push("Tu Nombre es necesario para el regustro");
            }
            if(this.user.tipo==""){
                this.errores.push("Falta definir el tipo de Usuario");
            }
            if(!this.user.email){
                this.errores.push("Tu Correo es necesario")
            } 
            if(!this.user.pass){
                this.errores.push("La contraseña no puede esta vacia")
            } 
            setTimeout(() => {
                this.errores=[];
            }, 3000);
        },
        seguirOpcion(op){
            this.logged=op
        },
        logIn(){
            this.$router.push('/')
        }
        
    },
    computed: {
        showErrors() {
            let formErrores=this.errores.join(" <---> ");
            return formErrores;
        }
    }

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
    .registry-container{
        background-color: white;
        border: 1px solid rgb(196, 195, 195);
        padding: 30px;
        box-shadow: 5px 5px 10px #888888;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .registry-header{
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .registry-form{
        padding-left: 50px;
        padding-right: 50px;
    }
    .badlog-container{
        background-color: white;
        border: 1px solid rgb(196, 195, 195);
        padding: 30px;
        box-shadow: 5px 5px 10px #888888;
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>