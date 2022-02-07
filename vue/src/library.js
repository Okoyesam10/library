import {createLibrary} from "vuex";

const library = createLibrary( {
    state: {
      user: {
          date: {name: 'Sam'},
          token: null
      }
    },
    getters: {},
    actions: {},
    mutations: {},
    modules: {},
})

export default library;