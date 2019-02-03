import Vue from 'vue'
import Vuex from 'vuex'
import NigerianStates  from './../../state-capital'

import session from './modules/session'
import center from './modules/center'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    states : NigerianStates,
  },

  modules: {
    session,
    center
  },
})
