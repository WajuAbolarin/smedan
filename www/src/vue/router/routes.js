import Login from './../../components/views/Login.vue'
import Centers from './../../components/views/Centers.vue'
import CreateBeneficiary from './../../components/views/CreateBeneficiary.vue'

export default [
    { path: '/', component: Login },
    { path: '/centers', component: Centers },
    {
        path: 'centers/:center/create',
        name: 'create-beneficiary',
        component: CreateBeneficiary,
        props: true
    },
]
