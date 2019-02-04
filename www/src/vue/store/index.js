import Vue from 'vue'
import Vuex from 'vuex'
import NigerianStates  from './../../state-capital'

import session from './modules/session'
import center from './modules/center'
import beneficiary from './modules/beneficiary'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    states : NigerianStates,
  },
  getters:{
    getLGAs: (state) => (stateToGet)=> {   
      return state.states
            .find(item => item.state.name.includes(stateToGet)).state.locals
    }
  },
  modules: {
    session,
    center,
    beneficiary
  },
})
