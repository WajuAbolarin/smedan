<template>
    <div>
        <App-Header></App-Header>
        <div class="page">
            <div class="page-content">
                <div class="content-sticky-footer" style="padding-bottom: 50px;">

                    <div class="background bg-170">
                        <img src="src/assets/img/background.png" alt="">
                    </div>

                    <div class="w-100">
                        <h1 class="text-center text-white title-background"> My centers
                            <br>
                            <small>This is a lists of all your centers</small>
                        </h1>
                    </div>

                    <div class="row mx-0">
                        <div class="col py-3">
                            <button 
                                @click="toggleModal"
                                data-toggle="modal"
                                class="btn btn-block gradient border-0 z-3">
                                Add New Center  &plus;
                            </button>
                        </div>
                    </div>

                    <ul class="list-group">

                        <li class="list-group-item" v-for="center in centers" :key="center.key">
                            <router-link to="/" class="media">
                                <div class="media-body">
                                    <h5>{{center.LGA}}, {{center.state}}</h5> 
                                    <p>{{center.address}}</p>
                                    <p>Budget Year: {{center.budgetYear}} </p>
                                    <h2 class="title-number-carousel color-primary"><span class="text-primary">126</span><small> Beneficiaries</small></h2>
                                </div>
                            </router-link>
                            <div class="w-auto"><a href="#" class="media">
                                </a><a href="beneficiaries.html" class="btn btn-sm btn-primary">View Beneficiaries</a>
                                <router-link :to="{name:'create-beneficiary',params:{ center: center.key}, query: { state: center.state } }" class="btn btn-sm btn-info">Add Beneficiaries</router-link>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

        <new-center-modal :show="showModal" @close-modal="closeModal"></new-center-modal>
    </div>
</template>

<script>
import AppHeader from './../shared/AppHeader.vue'
import NewCenterModal from './../shared/NewCenterModal.vue'

export default {
    name: 'Centers',
    components: {'app-header' :AppHeader, 'new-center-modal' : NewCenterModal},
    data(){
        return {
            showModal: false
        }
    },
    computed:{
        centers(){
            return this.$store.getters['center/centers']
        }
    },
    methods:{
        toggleModal(){
            this.showModal = !this.showModal
        },

        closeModal()
        {
            this.showModal = false;
        }
    },
    created(){
        console.log('here in created')
        this.$store.dispatch('center/fetchCenters')
    }

}
</script>

<style scoped>
.page{
    padding-top: 35px;
}
button.btn.btn-block.gradient{
    color: #ffffff;
    background-image: -webkit-linear-gradient( 63deg, rgb(0, 196, 115) 0%,
                     rgb(29, 214, 111) 52%, rgb(58, 231, 107) 100%);
}

</style>
