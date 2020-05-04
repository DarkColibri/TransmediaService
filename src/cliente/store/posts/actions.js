import axios from 'axios'

export async function getAllPosts ({ commit }, id) {
  console.log('ACCTION - http://localhost:8080/api/posts/threads/' + id)
  try {
    const response = await axios.get('http://localhost:8080/api/posts/threads/' + id)
    console.log('[AXIOS RESPONSE]' + JSON.stringify(response.data))
    commit('getAllPostsMutation', response.data)
  } catch (error) {
    console.log(error)
  }
}

export async function postPosts ({ commit }, data) {
  console.log('ACCTION - POST http://localhost:8080/api/posts/')
  try {
    console.log(JSON.stringify(data))
    // POST
    const instert = await axios({
      method: 'post',
      url: 'http://localhost:8080/api/posts/',
      data: data
    })
    console.log('[AXIOS RESPONSE]' + JSON.stringify(instert.data))
    const response = await axios.get('http://localhost:8080/api/posts/thread/' + data.threadId)
    commit('getAllPostsMutation', response.data)
    console.log('[AXIOS RESPONSE]' + JSON.stringify(response.data))
    return response
    // commit('getAllPostsMutation', response.data)
  } catch (error) {
    console.log(error)
  }
}

export async function deletePost ({ commit }, postId) {
  console.log('DELETE http://localhost:8080/api/posts/' + postId)
  try {
    const deleted = await axios.delete('http://localhost:8080/api/posts/' + postId)
    console.log('[AXIOS RESPONSE]')
    console.log(deleted)
    commit('nullMutation')
    return deleted
  } catch (error) {
    console.log(error)
  }
}
