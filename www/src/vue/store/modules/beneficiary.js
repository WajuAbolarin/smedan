
import id from 'shortid'
import Storage from 'localforage'


export default {
    namespaced: true,

    state: {
        beneficiaries : [],
    },

    getters: {
        stateBeneficiaries: state => (stateToGet) =>{
            return state.beneficiaries.filter( ben => ben.center_key === stateToGet)
        }
    },
    
    mutations:{
        add(state, newBenficiary){
            state.benficiaries.unshift(newBenficiary)
        },

        setBeneficiaries(state, beneficiaries){
            state.beneficiaries = beneficiaries
        }

    },
    
    actions: { 
        create({commit, state}, beneficiaryData){
            let newBeneficiaryData =  Object.assign({}, beneficiaryData, {key: id.generate(), isOffline: true})
            
            Storage.getItem('SMEDAN_BENEFICIARIES')
            .then( savedBeneficiaries => {
                
                savedBeneficiaries = savedBeneficiaries || []

                savedBeneficiaries.push(newBeneficiaryData)

                return savedBeneficiaries

            }).then(newBeneficiaries => {
                
                Storage.setItem('SMEDAN_BENEFICIARIES', newBeneficiaries)
                        .then(savedValues => console.dir('updated storage'))
            })

        },

        fetchBeneficiaries({commit}){
            //fetch local
            Storage.getItem('SMEDAN_BENEFICIARIES')
            .then( beneficiaries => {
                let offline = beneficiaries ? beneficiaries : []

                //fetch online
                let online = []
    
                //combine and mutate state
                commit('setBeneficiaries', [...offline, ...online] )
                
            })
            
        },

        upload({commit}, beneficiary){
            
            
            let data = new FormData

            for(let[field, value] of Object.entries(beneficiary) ){
                data.append(field, value)
            }

            window.resolveLocalFileSystemURL(beneficiary.pictureName, (fileEntry)=>{
               
                fileEntry.file(function(file){

                    console.dir(file)

                    var reader = new FileReader
    
                    reader.onloadend = function(e){
                        console.dir(e)
                        // data.append('pictureName', e.target.result )
                    }

                    reader.readAsArrayBuffer[file]
                })

                return Promise.resolve('success')

            })

        }
    }
}