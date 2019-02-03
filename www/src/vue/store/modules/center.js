export default {
    namespaced: true,

    state: {
        centers: [],
    },

    getters:{},
    
    mutations:{
        add({state}, center){
            console.log('add center to store')
        }
    },
    
    actions:{ 
        createTable({commit, rootState}){
            console.log('creating table ')
            rootState.db.transaction(function(trx) {
                trx.executeSql(`CREATE TABLE IF NOT EXISTS centers (
                    center_id integer PRIMARY KEY,
                    state text NOT NULL
                    LGA text NOT NULL
                    address text NOT NULL
                    budget_year text NOT NULL
                   )`);
            });
        },

        create({commit, rootState }, center){
            console.log('commiting mutation')
            commit('add', center)
        },

    }
}