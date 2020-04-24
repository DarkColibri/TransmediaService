<template lang="html">
  <div class="container mt-5 "> 
    <h1> USUARIOS </h1>
    <hr>
    <h2> Mensaje del padre App.vue: {{ msgPadre }}</h2>
    <ul>
      <li v-for="user in users">
        {{user.name}}  - {{user.email}} 
        <button v-on:click="deleteUser(user)">X</button>
      </li>
    </ul>
    <form v-on:submit.prevent="addUser">
      <input type="text" v-model="newUser.name" placeholder="Name">
      <input type="email" v-model="newUser.email" placeholder="Email">
      <button type="submit"> Add </button>
    </form>
  </div>
</template> 

<script>
  const axios = require("axios");
  export default {
    name: 'Users',
    data() {
      return {
        users: [],
        newUser: {}
      }
    },
    created(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(res);
        this.users = res.data;
      });
      // this.$http.get('https://jsonplaceholder.typicode.com/users')
      // .then(res => this.users = res.body)
      // .catch(err => console.log(err));
    },
    methods: {
      addUser() {
        this.users.push(this.newUser);
      },
      deleteUser(user) {
        this.users.splice(this.users.indexOf(user), 1)
      }
    },
    props: {
      msgPadre: {
        type: String,
        default: 'msg por defecto'
      }
    }    
  }
</script>

<!-- 
<style lang="css">
  .users {
    background: darkgray;
  }
</style>
-->