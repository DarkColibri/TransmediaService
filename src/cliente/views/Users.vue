<!-- Este es el punto donde pide los datos al servidor -->
<template>
  <div>
  	<div class="container">
      <h1> USUARIOS </h1>
      <hr>
			<!-- 1º Fila -->
			<div class="row pt-5">
				<!-- 1ª Columna --> 
				<div class="col-md-5">
					<div class="card">
						<div class="card-body">
							<form @submit.prevent="sendUser">
								<div class="form-group">
									<input v-model="user.name" @keyup.enter="sendUser" type="text" placeholder="Insertar Nombre" class="form-control">
								</div>
                <div class="form-group">
									<input v-model="user.password" @keyup.enter="sendUser" type="text" placeholder="Insertar password" class="form-control">
								</div>
								<div class="form-group">
									<input v-model="user.age" @keyup.enter="sendUser" type="text" placeholder="Insertar age" class="form-control">
								</div>
                <div class="form-group">
									<input v-model="user.email" @keyup.enter="sendUser" type="text" placeholder="Insertar email" class="form-control">
								</div>
                <div class="form-group">
									<input v-model="user.roleId" @keyup.enter="sendUser" type="text" placeholder="Insertar roleId" class="form-control">
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
								<th>Usuario</th>
                <th>Password</th>
								<th>Edad</th>
                <th>Rol</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for = "user of users">
								<td>{{user.name}}</td>
                <td>{{user.password}}</td>
                <td>{{user.age}}</td>
                <td>{{user.roleId}}</td>
								<td><button @click="deleteUser(user.id)" class="btn btn-danger">Delete</button></td>
								<td><button @click="editUser(user.id)" class="btn btn-secondary">Edit</button>
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

	class User {
		constructor(name = '', password = '', age = 0, email = '', roleId = 0) {
      this.name = name;
      this.password = password;
      this.age = age;
      this.email = email;
      this.roleId = roleId;
		}
  }

  export default {
    name: 'Users', 
    data() {
      return {
        user: new User(),
        users: [],
        edit: false,
        userToEdit: ''
      }	
    },
    created() {
      this.getUsers();
    },
    methods: {
      // Botón del Formulario
      // Envía los datos a la API del servidor
      sendUser() {
        if(this.edit === false){
          // POST http://localhost:8080/api/tasks/
          fetch('/api/users/', { 
            method: 'POST',
            body: JSON.stringify(this.user),
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
            }
          })
          .then(res => res.json())  // Convierte respuesta a un objeto JSON
          .then(data => {           // Obtenemos el objeto JSON 
            this.getUsers();
            this.user = new User(); // Reinicia datos formulario
          })
        } else {
          // PUT http://localhost:8080/api/tasks/
          fetch('/api/users/' + this.userToEdit, {
            method: 'PUT',
            body: JSON.stringify(this.user),
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
            }
          })
          .then(res => res.json())	// Convierte respuesta a un objeto JSON
          .then(data => { 					// Obtenemos el objeto JSON 
            this.getUsers();
            // Reinicia datos formulario
            this.user = new User();
          })	
        }
        this.edit = false;
        this.userToEdit = '';
      },
      // GET http://localhost:8080/api/tasks/
      getUsers() {
        fetch('/api/users/')
        .then(res => res.json())
        .then(data => {
          this.users = data
        })
      },
      // DELETE http://localhost:8080/api/tasks/
      deleteUser(id){	
        fetch('/api/users/' + id, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
          }
        })
        // .then(res => res.json())
        .then(res => {
          this.getUsers();
        })
      },
      editUser(id) {
        // Envía los datos a la API del servidor POST http://localhost:8080/api/tasks/:id
        fetch('/api/users/' + id )
        .then(res => res.json())
        .then(data => {
          this.user = new User(data.name, data.password, data.age, data.email, data.roleId);
          this.userToEdit = id;
          this.edit = true;
        })
        // // Reinicia datos formulario
        // this.task = new Task();
      }
    }
  }
</script>