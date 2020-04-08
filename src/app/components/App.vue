<!-- Este es el punto donde pide los datos al servidor -->
<template>
  <div>
    <!-- Cabecera de Navegación -->
    <nav class="navabar navbar-ligth bg-ligth">
      <a href="/" class="navbar-brand">Proyecto WEB</a>
    </nav>

  	<div class="container">
			<!-- 1º Fila -->
			<div class="row pt-5">
				<!-- 1ª Columna --> 
				<div class="col-md-5">
					<div class="card">
						<div class="card-body">
							<form @submit.prevent="sendTask">
								<div class="form-group">
									<!-- Tarea -->
									<input v-model="task.title" type="text" placeholder="Insertar Tarea" class="form-control">
								</div>
								<div class="form-group">
									<!-- Descripcion -->
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
						<thead>
							<tr>
								<th>Task</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="task of tasks">
								<td>{{task.title}}</td>
								<td>{{task.description}}</td>
								<td>
									<button @click="deleteTask(task.id)" class="btn btn-danger">Delete</button>
									<button @click="editTask(task.id)" class="btn btn-secondary">Edit</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
	class Task {
		constructor(title = '', description = '') {
			this.title = title;
			this.description = description;
		}
	}
export default {
	// Datos de la máquina
	data() {
		return {
			task: new Task(),
			tasks: [],
      edit: false,
      taskToEdit: ''
		}	
	},
	created() {
		this.getTasks();
	},
	methods: {
		// Botón del Formulario
		sendTask() {
      if(this.edit === false){
        // Envía los datos a la API del servidor POST http://localhost:8080/api/tasks/
        fetch('/api/tasks/', {
          method: 'POST',
          body: JSON.stringify(this.task),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())  // Convierte respuesta a un objeto JSON
        .then(data => {           // Obtenemos el objeto JSON 
          this.getTasks();
          // Reinicia datos formulario
			    this.task = new Task();
        })
      } else {
        fetch('/api/tasks/' + this.taskToEdit, {
          method: 'PUT',
          body: JSON.stringify(this.task),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())	// Convierte respuesta a un objeto JSON
        .then(data => { 					// Obtenemos el objeto JSON 
          this.getTasks();
          // Reinicia datos formulario
			    this.task = new Task();
        })	
      }
      this.edit = false;
      this.editTask = '';
		},
		// GET http://localhost:8080/api/tasks/
		getTasks() {
      console.log('GET ASSOCIATION');
      // fetch('/api/tasks/')
      fetch('https://localhost:8081/associations/')
			.then(res => res.json())
			.then(data => {
        this.tasks = data
      } )
		},
		deleteTask(id){	
			fetch('/api/tasks/' + id, {
				method: 'DELETE',
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json'
				}
			})
			.then(res => res.json())
			.then(data => {
				this.getTasks();
			})
		},
		editTask(id) {
			console.log(id);
			// Envía los datos a la API del servidor POST http://localhost:8080/api/tasks/:id
			fetch('/api/tasks/' + id )
			.then(res => res.json())
			.then(data => {

        this.task = new Task(data.title, data.description);
        this.taskToEdit = id;
				this.edit = true;
			})


			// // Reinicia datos formulario
			// this.task = new Task();
		}
	}
}
</script>