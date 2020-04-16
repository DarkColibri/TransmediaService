<template>
  <div id="app">
    <!-- Componente Test 
    <Test msgPadre="Hola desde el padre!"/>-->
    <!-- Componente User -->
    <!-- <User msgPadre="Hola desde el App.vue!"/> -->
    <div class="container mt-5">
      <nav>
        <router-link to="/">Test</router-link> |
        <!-- <router-link to="/tasks">Tareas</router-link> | -->
        <router-link to="/users">Usuarios</router-link> |
        <router-link to="/associations">Asociaciones</router-link> |
        <router-link to="/tasks/1">Tareas 1</router-link> |
      </nav>
    </div>
    <!-- Show Component                     -->
    <!-- msgPadre : Envía mensaje al Hijo   -->
    <!-- msgHijo  : Recibe mensaje del Hijo -->
    <router-view :msgPadre="msg" @msgHijo="mensajeHijo = $event"></router-view>
    <hr>
  <!--
    <hr>
    <h3>Mensaje del Hijo {{mensajeHijo}}</h3>
    <hr>
  -->
  <!-- Store -->
  <!--
    <h3>APP.vue : Número de Vuex (variable global) : {{$store.state.numeroVuex}} </h3>
    <button @click="$store.commit('aumentar')">+</button>
    <h3>APP.vue : Número de Vuex (variable global): {{numeroVuex}} </h3>
    <button @click="aumentar">+++</button>
    <hr>
  --> 
   
  </div>
</template>

<script>
  // import { mapState } from 'vuex';
  // import Vue from 'vue';
  import Vuex from 'vuex';

  // Componentes
  // import Test from  './components/Test.vue';
  // import Task from  './components/Tasks.vue';
  // import User from  './components/Users.vue';
  // import Associations from  './components/Associations.vue';

  export default {
    name: 'App',
    data(){
      return {
        msg: "Mensaje de tu PADRE!!!",
        mensajeHijo: "Msg defecto"
      }
    },
    // components: {
    //   Test,
    //   Task,
    //   User,
    //   Associations,
    // },
    computed: {
      ...Vuex.mapState(['numeroVuex'])
    }
    ,methods: {
      ...Vuex.mapMutations(['aumentar'])
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