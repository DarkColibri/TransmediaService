<template>
  <div class="container mt-5">
    <hr>
  <!-- Store -->
    <h3>Test.vue : Número de Vuex (variable global) : {{$store.state.numeroVuex}} </h3>
    <button @click="$store.commit('aumentar')">+</button>
  <!-- Store con mapState y mapMutations --> 
    <h3>Test.vue : Número de Vuex (variable global): {{numeroVuex}} </h3>
    <button @click="aumentar">+++</button>
    <button @click="disminuir(2)">---</button>
    <hr>
   
    <button @click="getAllAssociations">Obtener Asos</button>
   
    <ul v-for = "item of associations">
      <li>{{item.name}}</li>
    </ul>
 <!--  -->
    <hr>
  <!-- -->
    <button class="btn p-3 btn-danger" @click="destruir">Destruir VUE</button>
    <div :class="['p-3', fondo]">
      <p> Escribe [bg-success, bg-info, bg-warning, bg-danger] para cambiar de color</p>
    </div>
    <input type="text" class="form-control my-3" v-model="fondo">
    <hr>  
    <div class="p-3" :class="{'bg-info' : mostrar, 'bg-success': !mostrar}">
      <p> Pulsa el botón para cambiar</p>
    </div>
    <button class="btn btn-primary" @click="mostrar = !mostrar">cambiar</button>
    <hr>
    <button class="btn btn-primary" @click="contador++">+</button>
    <button class="btn btn-danger" @click="contador--">-</button>
    <h3> {{anchoBarra}}</h3>
    <div class="progress">
      <div class="progress-bar" role="progressbar" :style="{'width':contador + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
      :class="color"></div>
    </div>
    <hr>
    <div>
      <input type="text" v-model="user.firstName">
      <button type="button" v-on:click="saludar(user.firstName)">Click me</button>
      <!-- Linkeamos un metodo a un evento -->
      <input type="text" v-on:keyup="typing">
      <input type="text" v-on:keyup.enter="typingEnter">
    </div>
    <hr>
    <div>
      <!-- Propiedades computadas -->
      {{ fullName }}
    </div>
    <div class='test'>
      <!-- Propiedades del componente                       -->
      <!-- Datos que vienen de fuera o del componente padre -->
      {{ msgPadre }}
    </div>
    <hr>
 
  </div>
    
</template>

<script>
  import Vuex from 'vuex';
  export default {
    name: 'Test',
    // Objetos que tendremos en esta plantilla.
    data(){
      return{
        title: 'Hola Vue',
        user:{ firstName: 'Javier', lastName: 'Ortega'},
        myHtml: '<h3> Esto es HTML Copón </h3>',
        showName: false,
        tasks: [{title: 'comer'}, {title: 'dormir'}],
        fondo: 'bg-info',
        mostrar: true,
        contador: 0
      }
    },
    created() {
      console.log("CREATE TEST- CARGAMOS ASOCIACIONES");
      this.getAllAssociations();
      console.log("FIN DE CARGA")
    },
    mounted() { // Se lanza cuando se caga el DOM del HTML
      this.$emit('msgHijo', this.user.firstName + ' ' + this.user.lastName);
    },
    beforeUpdate: () => console.log("beforeUpdate... "),
    updated: () => console.log('¡¡¡ Updated !!!'),
    destroyed: () => console.log('KABOOOOM, distroyed.'),
    computed: {
      //  STORE
      ...Vuex.mapState(['numeroVuex','associations']),
      //
      fullName(){return this.user.firstName + ' ' + this.user.lastName;},
      anchoBarra(){return this.contador + '%';},
      color(){return{
          'bg-success' : this.contador <= 10,
          'bg-warning' : this.contador > 10 && this.contador <= 20,
          'bg-danger'  : this.contador >= 20
        }
      }
    },
    methods: {
      //  STORE
      ...Vuex.mapMutations(['aumentar','disminuir']),
      ...Vuex.mapActions(['getAllAssociations']),
      //
      saludar(name) {alert('Ke tal ' + name);},
      typing(event){console.log(event.target.value)},
      typingEnter(event){console.log(event.target.value)},
      destruir() {this.$destroy()}
    },
    props: {
      msgPadre: {
        type: String,
        default: 'msg por defecto'
      }
    }
  }
</script>

