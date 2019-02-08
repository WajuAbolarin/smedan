import Vue from 'vue'
import Vuex from 'vuex'
import NigerianStates  from './../../state-capital'

import session from './modules/session'
import center from './modules/center'
import beneficiary from './modules/beneficiary'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    states : NigerianStates.sort((a, b ) => {
      return a.state.name > b.state.name ? 1 : -1
    }),
  },
  getters:{
    getLGAs: (state) => (stateToGet)=> {   
      return state.states
            .find(item => item.state.name.includes(stateToGet))
            .state
            .locals
            .sort((a, b ) => {
              return a.name > b.name ? 1 : -1
            })
    }
  },
  modules: {
    session,
    center,
    beneficiary
  },
})
