<template>
    <div class="modal" :class="{fade: !show}" :style="{display: display}" tabindex="-1" role="dialog" :aria-hidden="!show">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="background bg-140"><img src="src/assets/img/background.png" alt=""></div>

                    <div class="modal-header">
                        <h5 class="text-white">Create New CGS</h5>
                        <button type="button" @click="closeModal" class="close text-white" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <form role="form" action="" method="">
                        <div class="row">
                            <div class="col mt-3">
                                
                                <div class="login-input-content p-3">
                                    <div class="form-group">
                                        <label>State</label>
                                        <select v-model="chosenState" class="form-control">
                                            <option v-for="state in states" :key="state.state.name" :value="state.state.name">{{state.state.name}}</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label>LGA</label>
                                        <select v-model="chosenLGA"  class="form-control">
                                            <option v-for="LGA in availableLGAS" :key="LGA.name" :value="LGA.name">{{LGA.name}}</option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label>Address</label>
                                        <textarea v-model="address" class="form-control" rows="1"></textarea>
                                    </div>

                                    <div class="form-group">
                                        <label>Budget Year</label>
                                        <select v-model="budgetYear" class="form-control">
                                            <option v-for="year in yearOptions" :key="year" :value="year">{{year}}</option>
                                        </select>
                                    </div>

     
                                </div>
                                <div class="row mx-0 justify-content-end no-gutters">
                                    <div class="col">
                                        <button @click.prevent="createCenter" class="btn btn-block gradient border-0 z-3" :disabled="formIsInvalid" >Create</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'NewCenterModal',
    props: {
        show:{
            type: Boolean,
        },
    },
    data(){
        return {
            showModal: this.show,
            chosenState: null,
            chosenLGA: null,
            budgetYear:null,
            address: null,
          yearOptions: [2017, 2018, 2019, 2020]

        }
    },
    computed:{
        display(){
            return this.show? 'block' : 'none'
        },
        states(){
            return this.$store.state.states
        },

        availableLGAS(){
            return this.chosenState ? this.$store.getters.getLGAs(this.chosenState): []
        },
        formIsInvalid(){
            const {chosenState, chosenLGA, budgetYear, address} = this.$data
            return !chosenState || !chosenLGA || !budgetYear || !address
        }
    },
    methods:{
        closeModal(){
            this.$emit('close-modal')
        },

        createCenter(){
            const {chosenState : state, chosenLGA : LGA, budgetYear, address} = this.$data            
            this.$store.dispatch('center/create' ,{state, LGA, budgetYear, address} )
            this.$emit('close-modal')
            this.chosenState = this.chosenLGA = this.budgetYear = this.address = null
        }
    },
}
</script>

<style>
button.btn.btn-block.gradient{
    color: #ffffff;
    background-image: -webkit-linear-gradient( 63deg, rgb(0, 196, 115) 0%,
                     rgb(29, 214, 111) 52%, rgb(58, 231, 107) 100%);

}
</style>
