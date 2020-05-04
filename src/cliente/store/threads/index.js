import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

export default {
  // True: Hay que llamar al 'forum' del index.ts
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
