import Vuex from 'vuex'

const store = new Vuex.Store({
  mutations: {
    updateEmail (state, txtEmail) {
      state.txtEmail = txtEmail
    }
  }
})

export default store
