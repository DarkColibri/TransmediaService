import { store } from 'quasar/wrappers'
import Vuex from 'vuex'

// import example from './module-example'
// import exampleState from './module-example/state'

import threads from './threads'
import posts from './posts'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

// export interface StoreInterface {
//   // Define your own store structure, using submodules if needed
//   // example: typeof exampleState;
//   example: unknown;
// }

export default store(function ({ Vue }) {
  Vue.use(Vuex)

  const Store = new Vuex.Store({
    modules: {
      threads,
      posts
    },
    state: {
      tituto: 'Ingeniero Informático'
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: !!process.env.DEV
  })

  return Store
})
