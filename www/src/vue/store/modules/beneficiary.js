import id from 'shortid'
import Storage from 'localforage'
import axios from 'axios'

window.axios = axios

export default {
    namespaced: true,

    state: {
        beneficiaries: [],
    },

    getters: {
        stateBeneficiaries: state => (stateToGet) => {
            return state.beneficiaries.filter(ben => ben.center_key === stateToGet && ben.isOffline)
        }
    },

    mutations: {
        add(state, newBenficiary) {
            state.benficiaries.unshift(newBenficiary)
        },

        setBeneficiaries(state, beneficiaries) {
            state.beneficiaries = beneficiaries
        }

    },

    actions: {
        create({ commit, state }, beneficiaryData) {
            let newBeneficiaryData = Object.assign({}, beneficiaryData, { key: id.generate(), isOffline: true })

            Storage.getItem('SMEDAN_BENEFICIARIES')
                .then(savedBeneficiaries => {

                    savedBeneficiaries = savedBeneficiaries || []

                    savedBeneficiaries.push(newBeneficiaryData)

                    return savedBeneficiaries

                }).then(newBeneficiaries => {

                    Storage.setItem('SMEDAN_BENEFICIARIES', newBeneficiaries)
                        .then(savedValues => console.dir('updated storage'))
                })

        },

        fetchBeneficiaries({ commit }) {
            //fetch local
            Storage.getItem('SMEDAN_BENEFICIARIES')
                .then(beneficiaries => {
                    let offline = beneficiaries ? beneficiaries : []

                    //fetch online
                    let online = []

                    //combine and mutate state
                    commit('setBeneficiaries', [...offline, ...online])

                })

        },

        upload({ commit }, beneficiary) {


            let data = new FormData

            for (let [field, value] of Object.entries(beneficiary)) {
                data.append(field, value)
            }


           window.resolveLocalFileSystemURL(beneficiary.pictureName, (fileEntry) => {
                 fileEntry.file((file) => {
                    console.log('got file object')
                    let reader = new FileReader()

                    reader.onload = function(e) {

                        let blob = new Blob([new Uint8Array(reader.result)], { type: 'image/jpg' })

                        console.log('got blob')

                        data.set('pictureName', blob, 'pictureName')

                        console.log('starting upload')

                      return  axios.post('https://www.smedancgs.com.ng/api/v1/beneficiary',
                                data, {
                                    header: {
                                        'Content-Type': 'multipart/form-data'
                                    }
                                })
                            .then(res => {

                                if (res.data.status === 'success') {

                                    Storage.getItem('SMEDAN_BENEFICIARIES')
                                        .then(bens => {

                                            bens = bens.fiter(b => b.key !== beneficiary.key)

                                            bens.push(Object.assign({}, beneficiary, { isOffline: false }))

                                            return bens

                                        })
                                        .then(newBens => {

                                            Storage.setItem('SMEDAN_BENEFICIARIES', newBens)

                                            return 'success'

                                        })

                                }

                                return 'failed'
                            })

                    }

                    reader.onerror = (e) => {
                        console.log(e)
                    }

                    reader.readAsArrayBuffer(file)

                }, (err) => { 
                    'failed to convert to file'
                    return 'failed'
                 })
                }, (err) => { 
                console.dir(err)
                return 'failed'
             })

        }
    }
}