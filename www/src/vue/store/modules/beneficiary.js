
import id from 'shortid'
import Storage from 'localforage'
import axios from 'axios';


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

                    data.append('pictureName', file )

                    return axios.post('https://e435f59b.ngrok.io/api/v1/beneficiary')
                    .then(res => {
                        console.dir(res)
                        return 'success'
                    })

                    // console.dir(file)

                    // var reader = new FileReader
    
                    // reader.onloadend = function(e){
        
                    //     console.dir(e)
                       
                    //     data.append('pictureName', e.target.result )
        
                    //     return Promise.resolve('success')
                        
                    // }

                    // reader.readAsArrayBuffer[file]
                })


            })

        }
    }
}