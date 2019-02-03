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

                        <li class="list-group-item">
                            <a href="#" class="media">
                                <div class="media-body">
                                    <h5>Ikoyi, Lagos</h5> 
                                    <p>Address: Lagos, Ikeja, 3rd avenue hall 4</p>
                                    <p>Budget Year: 2019 </p>
                                    <h2 class="title-number-carousel color-primary"><span class="text-primary">126</span><small> Beneficiaries</small></h2>
                                </div>
                            </a>
                            <div class="w-auto"><a href="#" class="media">
                                </a><a href="beneficiaries.html" class="btn btn-sm btn-primary">View Beneficiaries</a>
                                <a href="new-beneficiary.html" class="btn btn-sm btn-primary">Add Beneficiaries</a>
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
    methods:{
        toggleModal(){
            this.showModal = !this.showModal
        },

        closeModal()
        {
            this.showModal = false;
        }
    }

}
</script>

<style scoped>
.page{
    margin-top: 35px;
}
button.btn.btn-block.gradient{
    color: #ffffff;
    background-image: -webkit-linear-gradient( 63deg, rgb(0, 196, 115) 0%,
                     rgb(29, 214, 111) 52%, rgb(58, 231, 107) 100%);
}
</style>
