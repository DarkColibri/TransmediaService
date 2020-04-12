<template>
  <div id="app">
    <!-- Componente Test 
    <Test msgPadre="Hola desde el padre!"/>-->
    <!-- Componente User -->
    <!-- <User msgPadre="Hola desde el App.vue!"/> -->
    <nav>
      <ul>
        <li><router-link to="/">Test</router-link></li>
        <li><router-link to="/tasks">Tareas</router-link></li>
        <li><router-link to="/users">Usuarios</router-link></li>
        <li><router-link to="/associations">Asociaciones</router-link></li>
        <!-- <li> Fondo: {{this.fondo}}</li> -->
        
      </ul>
    </nav>
    <hr>
    <h1>Este del Hijo {{mensajeHijo}}</h1>
    <hr>
    <!-- msgPadre : Envía mensaje al Hijo -->
    <!-- msgHijo  : Recibe mensaje del Hijo -->
    <router-view :msgPadre="msg" @msgHijo="mensajeHijo = $event"></router-view>
    <hr>
    <h1>Este del Hijo 2 {{mensajeHijo}}</h1>
    <hr>
  </div>
</template>

<script>
  // Componentes
  import Test from  './components/Test.vue';
  import Task from  './components/Tasks.vue';
  import User from  './components/Users.vue';
  import Associations from  './components/Associations.vue';

  export default {
    name: 'App',
    data(){
      return {
        msg: "Mensaje de tu PADRE!!!",
        mensajeHijo: "Msg defecto"
      }
    },
    components: {
      Test,
      Task,
      User,
      Associations,
    }
  }
</script>
<!-- 
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-->