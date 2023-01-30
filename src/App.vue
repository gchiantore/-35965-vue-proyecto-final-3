<template>
  <div id="app">
    <div v-if="!getUsuActivo===false">
      <HeaderComponent />
      <div v-if="getUsuActivo.tipo">
        <NavAdmComponent />
      </div>
      <div v-else>  
        <NavCustomerComponent />
      </div>  
    </div> 
    <router-view />
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import HeaderComponent from './components/HeaderComponent.vue';
  import NavAdmComponent from './components/NavAdmComponent.vue';
  import NavCustomerComponent from './components/NavCustomerComponent.vue';
  export default {
      name:'App',
      components:{
        NavAdmComponent,
        NavCustomerComponent,
        HeaderComponent
    },
    computed:{
      ...mapGetters('usersModule',['getUsuActivo'])
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Sriracha&display=swap');
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");
  #app {
    font-family: 'Roboto Mono', monospace;
    margin:0;
    padding: 0;
    background-color: rgb(235, 232, 232);;
        background-image: url("@/assets/fondo.png");
        background-repeat: repeat;
  }
  
  body{
        background-color: blanchedalmond;
    }
    .contenedor{
        width: 100vw;
        height: 100vh;
        display: flex;
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
    .badlog-icon{
      font-size: 106px;
      color: red;      
    }
    .badlog-text{
      text-align: center;
    }
</style>
