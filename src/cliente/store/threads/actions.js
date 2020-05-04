import axios from 'axios'

export async function getThread ({ commit }, id) {
  console.log('ACCTION - http://localhost:8080/api/threads/' + id)
  try {
    const response = await axios.get('http://localhost:8080/api/threads/' + id)
    console.log(JSON.stringify(response.data))
    commit('getThreadMutation', response.data)
  } catch (error) {
    console.error(error.data)
  }
}

export async function getAllThreads ({ commit }) {
  console.log('ACCTION - http://localhost:8080/api/threads/')
  try {
    const response = await axios.get('http://localhost:8080/api/threads/')
    console.log(JSON.stringify(response.data))
    commit('getAllThreadMutation', response.data)
  } catch (error) {
    console.error(error.data)
  }
}
