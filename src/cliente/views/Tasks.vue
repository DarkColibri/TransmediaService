<!-- Este es el punto donde pide los datos al servidor -->
<template>
  <div>
    <div class="container"><h1> TODAS LAS TAREAS </h1><hr>
    </div>
  	<div class="container">
			<!-- 1º Fila -->
			<div class="row pt-5">
				<!-- 1ª Columna --> 
				<div class="col-md-5">
					<div class="card">
						<div class="card-body">
							<form @submit.prevent="sendTask">
								<div class="form-group">
                  <input v-model="task.id" type="text" placeholder="ID Tarea" class="form-control">
									<input v-model="task.title" type="text" placeholder="Insertar Tarea" class="form-control">
								</div>
								<div class="form-group">
									<textarea v-model="task.description" name="" id="" cols="30" rows="10" class="form-control" placeholder="Inserta una descripción"></textarea>
								</div>
								<template v-if="edit === false">
									<button class="btn btn-primary btn-block">Send</button>
								</template>
								<template v-else>
									<button class="btn btn-primary btn-block">Updadte</button>
								</template>
							</form>
						</div>
					</div>
				</div>
				<!-- 2ª Columna -->
				<div class="col-md-7">
					<table class="table table-bordered">
						<thead><tr><th>id</th><th>Task</th><th>Description</th></tr></thead>
						<tbody>
							<tr v-for="item of tasks">
                <!-- <td><a :href="task.id"> {{task.title}} </a></td> -->
                <!-- <td> <router-link :to="'/tasks/'+ task.id">{{task.title}}</router-link></td> -->
                <!-- <td> <router-link :to="{ name: 'tasks', params:{id: task.id}}" >{{task.title}}</router-link></td> -->
                <!-- <td> <router-link :to="{ name: 'tasks', params:{id: task.id}}" >{{task.title}}</router-link></td> -->
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
								<td>{{item.description}}</td>
								<td>
									<button @click="delTask(item.id)" class="btn btn-danger">Delete</button>
									<button @click="modificTask(item.id)" class="btn btn-secondary">Edit</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
    <hr>
    </div>
    <div class="container">
      <TaskComponent />
    </div>
  </div>
</template>

<script>
  import Vuex from 'vuex';
  import TaskComponent from "../components/Task.vue";
  export default {
    name: 'Tasks',
    // Datos de la máquina
    data() {
      return {
        edit: false,
      }	
    },
    created() {
      this.getAllTasks();
      // this.getTask(this.$route.params.id);
      // console.log(this.$route.params.id)
    },
    computed: {
      //  STORE
      ...Vuex.mapState(['task', 'tasks'])
    },
    methods: {
      // ...Vuex.mapMutations([]),
      ...Vuex.mapActions(['getAllTasks', 'getTask', 'postTask', 'putTask' , 'deleteTask']),
      
      // Botón del Formulario
      sendTask() {
        if(this.edit === false){
          this.postTask();
          this.getAllTasks();
        } else {
          this.putTask(),
          this.getAllTasks();	
        }
        this.edit = false;
      },
      delTask(id){
        this.deleteTask(id);
        this.getAllTasks();	
        this.edit = false;
      },
      modificTask(id) {
        this.getTask(id);
        this.edit = true;
      }
    },
    components: {
      TaskComponent
    }

  }
</script>