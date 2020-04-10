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
							<form @submit.prevent="sendAssociation">
								<div class="form-group">
									<!-- Name -->
									<input v-model="association.name" type="text" placeholder="Insertar Nombre" class="form-control">
								</div>
                <div class="form-group">
									<!--  -->
									<input v-model="association.link" type="text" placeholder="Insertar Link" class="form-control">
								</div>
								<div class="form-group">
									<!--  -->
									<textarea v-model="association.description" name="" id="" cols="30" rows="10" class="form-control" placeholder="Inserta una descripción"></textarea>
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
								<th>Asociación</th>
                <th>Link</th>
								<th>Descripción</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="association of associations">
								<td>{{association.name}}</td>
								<td>{{association.link}}</td>
                <td>{{association.description}}</td>
								<td>
									<button @click="deleteAssociation(association.id)" class="btn btn-danger">Delete</button>
									<button @click="editAssociation(association.id)" class="btn btn-secondary">Edit</button>
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
	class Association {
		constructor(name = '', link = '', description = '') {
      this.name = name;
      this.link = link;
			this.description = description;
		}
	}
export default {

	data() {
		return {
			association: new Association(),
			associations: [],
      edit: false,
      associationToEdit: ''
		}	
	},
	created() {
		this.getAssociations();
	},
	methods: {
    // Botón del Formulario
    // Envía los datos a la API del servidor
		sendAssociation() {
      if(this.edit === false){
        // POST http://localhost:8080/api/tasks/
        fetch('/api/associations/', { 
          method: 'POST',
          body: JSON.stringify(this.association),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())  // Convierte respuesta a un objeto JSON
        .then(data => {           // Obtenemos el objeto JSON 
          this.getAssociations();
			    this.association = new Association(); // Reinicia datos formulario
        })
      } else {
        // PUT http://localhost:8080/api/tasks/
        fetch('/api/associations/' + this.associationToEdit, {
          method: 'PUT',
          body: JSON.stringify(this.association),
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())	// Convierte respuesta a un objeto JSON
        .then(data => { 					// Obtenemos el objeto JSON 
          this.getAssociations();
          // Reinicia datos formulario
			    this.association = new Association();
        })	
      }
      this.edit = false;
      this.associationToEdit = '';
		},
		// GET http://localhost:8080/api/tasks/
		getAssociations() {
      fetch('/api/associations/')
			.then(res => res.json())
			.then(data => {
        this.associations = data
      })
    },
    // DELETE http://localhost:8080/api/tasks/
		deleteAssociation(id){	
			fetch('/api/associations/' + id, {
				method: 'DELETE',
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json'
				}
			})
			.then(res => res.json())
			.then(data => {
				this.getAssociations();
			})
		},
		editAssociation(id) {
			// Envía los datos a la API del servidor POST http://localhost:8080/api/tasks/:id
			fetch('/api/associations/' + id )
			.then(res => res.json())
			.then(data => {
        this.association = new Association(data.name, data.link, data.description);
        this.associationToEdit = id;
				this.edit = true;
			})
			// // Reinicia datos formulario
			// this.task = new Task();
		}
	}
}
</script>