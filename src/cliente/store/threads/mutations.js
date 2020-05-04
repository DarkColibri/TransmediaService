export function getThreadMutation (state, data) {
  console.log('getThreadMutation')
  state.threadState = data
  console.log('state.threadState = ' + JSON.stringify(state.threadState))
}

export function getAllThreadMutation (state, data) {
  console.log('getAllThreadMutation')
  state.threadsState = data
  console.log('STATE.threadsState ' + state.threadsState)
}
