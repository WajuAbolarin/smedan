
import id from 'shortid'
import Storage from 'localforage'


export default {
    namespaced: true,

    state: {
        centers: [],
    },

    getters:{
        centers(state, rootState){
            return state.centers
        }
    },
    
    mutations:{
        setCenters(state, centers){
            state.centers = centers
        },

        add(state, newCenter){
            state.centers.unshift(newCenter) 
        }
    },
    
    actions: { 
        create({commit, state}, center){
            let newCenter =  Object.assign({}, center, {key: id.generate(), isOffline: true})
            
            Storage.getItem('SMEDAN_CENTERS')
            .then( savedCenters => {
                savedCenters = savedCenters ? savedCenters : []
                savedCenters.push(newCenter)
                commit('add', newCenter)
                return savedCenters

            }).then(newCenters => {
                Storage.setItem('SMEDAN_CENTERS', newCenters)
                .then(savedValues => console.dir('updated storage'))
            })

        },

        fetchCenters({commit}){
            //fetch local
            Storage.getItem('SMEDAN_CENTERS')
            .then( centers => {
                let offlineCenters = centers ? centers : []

                //fetch online
                let onlineCenters = []
    
                //combine and mutate state
                commit('setCenters', [...offlineCenters, ...onlineCenters] )
                
            })
            
        }
    }
}