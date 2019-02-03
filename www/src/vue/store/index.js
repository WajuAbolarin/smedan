import Vue from 'vue'
import Vuex from 'vuex'
import NigerianStates  from './../../state-capital'

import session from './modules/session'
import center from './modules/center'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    states : NigerianStates,
    db: null,
  },

  modules: {
    session,
    center
  },
  mutations:{
    setDB(state, db){
      state.db = db
      console.log('db set')
    }
  },
  actions:{
      getDb({commit}){
      const db = (window.cordova.platformId === 'browser') ?
        window.openDatabase('smedan.db', '1.0', 'Data', 2*1024*1024) :
        window.sqlitePlugin.openDatabase({name: 'smedan.db', location: 'default'});
        
        commit('setDB', db)
    }
  }
})
