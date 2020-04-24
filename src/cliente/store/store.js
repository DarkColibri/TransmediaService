import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Class
// class Association {
//   constructor(name = '', link = '', description = '') {
//     this.name = name;
//     this.link = link;
//     this.description = description;
//   }
// }
class Task {
  constructor(id = 0 ,title = '', description = '') {
    this.id = id;
    this.title = title;
    this.description = description;
  }
}
export default new Vuex.Store({
  state:{
    associations: [],
    // TASKs
    tasks: [],
    task: new Task(),
    // taskToEdit: 0,
    // isEditTask: false,
    numeroVuex: 10
  },
  mutations:{
    fillAssociations(state, asociationsAccion) {
      state.associations = asociationsAccion
    },
    setArrayTasks(state, tasksAccion) {
      state.tasks = tasksAccion
    },
    setTask(state, taskAction){
      state.task = taskAction 
    },
    aumentar(state){state.numeroVuex ++},
    disminuir(state, n){state.numeroVuex -= n}
  },
  actions:{
    // ASOCIACIONES  
    getAllAssociations({commit}){
      fetch('/api/associations/')
			.then(res => res.json())
			.then(data => {
        console.log('STORE ASO: ' + JSON.stringify(data))
        // HACEMOS LA MUTACION
        commit('fillAssociations', data)
      })
    },
    // TASKS ALL TASK
    getAllTasks({commit}){
      fetch('/api/tasks/')
			.then(res => res.json())
			.then(data => {
        console.log('TAREAS: ' + JSON.stringify(data))
        // HACEMOS LA MUTACION
        commit('setArrayTasks', data)
      })
    },
    // GET TASK
    getTask({commit}, id){
      fetch('/api/tasks/' + id )
      .then(res => res.json())
      .then(data => {
        commit('setTask', new Task(data.id, data.title, data.description)) ;
      })
    },
    // NEW TASK
    postTask({commit}){
      fetch('/api/tasks/', { 
        method: 'POST',
        body: JSON.stringify(this.state.task),
        headers: {'Accept': 'application/json','Content-type': 'application/json'}
      })
      .then(res => res.json())  // Convierte respuesta a un objeto JSON
      .then(data => {           // Obtenemos el objeto JSON 
        commit('setTask', new Task()) ; // Reinicia datos Tarea
        console.log('FIN DEL POST.')
      })
    },
    // MODIFICACION
    putTask({commit}){
      console.log()
      fetch('/api/tasks/' + this.state.task.id, {
        method: 'PUT',
        body: JSON.stringify(this.state.task),
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      })
      .then(res => res.json())	// Convierte respuesta a un objeto JSON
      .then(data => { 					// Obtenemos el objeto JSON 
        // Reinicia datos formulario
        commit('setTask', new Task()) ; // Reinicia datos Tarea
      })
    },
    // DELETE
    deleteTask({commit}, id){	
      fetch('/api/tasks/' + id, {
        method: 'DELETE',
        headers: { 'Accept': 'application/json', 'Content-type': 'application/json'}
      })
      .then(res => res.json())
      .then(data => {
        // HACEMOS LA MUTACION
        // Reseteamos task
        commit('setTask', new Task()) ;
      })
    },
    
  }
});