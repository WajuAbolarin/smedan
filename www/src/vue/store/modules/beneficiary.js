
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
            
            debugger

            let data = new FormData

            for(let[field, value] of Object.entries(beneficiary) ){
                data.append(field, value)
            }


          return window.resolveLocalFileSystemURL(beneficiary.pictureName, (fileEntry)=>{
                return fileEntry.file((file)=>{
                     console.log('got file object')
                     var reader = new FileReader
    
                        reader.onloadend = function(e){
                    
                        let blob = new Blob([ new Uint8Array(e.target.result)], {type: 'image/jpg'})
                        
                        console.log('got blob')

                        data.set('pictureName', blob, 'pictureName' )
                    
                        console.log('starting upload')
                    
                        return axios.post('https://971c568d.ngrok.io/api/v1/beneficiary',
                            data,
                            {
                                header:{
                                'Content-Type': 'multipart/form-data'
                                }
                            })
                            .then(res => {
                                console.dir(res)
                                return 'success'
                        })
                        
                    }

                    reader.onerror = (e)=>{
                        console.log(e)
                    }

                    reader.readAsArrayBuffer[file]


                }, (err) =>{'failed to convert to file'} )
            }, (err)=> {console.log('failed to resolve filesystem' + err)})

        }
    }
}