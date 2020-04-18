<template>
  <div>
    <div class="container">
      <h1> TAREA {{$route.params.id}} </h1>
      <hr>
    </div>  
    <div class="col-md-7">
					<table class="table table-bordered">
						<thead>
							<tr>
                <th>Id</th>
								<th>Task</th>
								<th>Description</th>
							</tr>
						</thead>
						<tbody>
              <td>{{task.id}}</td>
              <td>{{task.title}}</td>
							<td>{{task.description}}</td>
						</tbody>
					</table>
				</div>

  </div>
</template>

<script>
import Vuex from 'vuex';
export default {
	name: 'Task',

  computed: {
    //  STORE
    ...Vuex.mapState(['task'])
  },
}
</script>