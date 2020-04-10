import Vue  from 'vue';
// Component APP
// import App from './components/App.vue';
import App from './components/Associations.vue';

new Vue({
  render: h => h(App)
}).$mount('#app'); // Le indicamos la etiqueta <div> va a montar el componente