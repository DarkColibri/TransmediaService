import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    numeroVuex: 10,
    asociaciones: []
  },
  mutations:{
    aumentar(state){state.numeroVuex ++},
    disminuir(state, n){state.numeroVuex -= n},
    llenarAsociaciones(state, asociacionAccion) {
      state.asociaciones = asociacionAccion
    }
  },
   actions:{
    obtenerAsociaciones({commit}){
      fetch('/api/associations/')
			.then(res => res.json())
			.then(data => {
        console.log(1)
        console.log(JSON.stringify(data))
        commit('llenarAsociaciones', data)
      })
    }
  }
});