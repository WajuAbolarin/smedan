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
                        <h1 class="text-center text-white title-background"> Beneficiaries from {{center.state.replace('State', '')}}
                            <br>
                            <small>Address: {{center.address}}</small>
                        </h1>
                    </div>
                    <!-- <h2 class="" style="color: #ffffff;">Top On Going Projects</h2> -->
                    <h5 v-if="!beneficiaries.length" class="no-beneficiaries">There are no offline beneficiaries for this center!</h5>
                    
                    <ul class="list-group" v-else>
                    
                        <Single-Beneficiary
                            tag="li"  
                            v-for="beneficiary in beneficiaries" 
                            :key="beneficiary.key" 
                            :beneficiary="beneficiary">

                        </Single-Beneficiary>
                    </ul>
                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from './../shared/AppHeader.vue'
import SingleBeneficiary from './../shared/SingleBeneficiary.vue'


export default {
    name: 'CenterBeneficiaries',
    
    components: {'app-header' :AppHeader, 'single-beneficiary' : SingleBeneficiary},

    props: {
        centerKey:{
            type: String,
            required: true
        }
    },
    computed:{
        center(){
             return  this.$store.state.center.centers.find(center => center.key === this.centerKey)
        },

        beneficiaries(){
            return this.$store.getters['beneficiary/stateBeneficiaries'](this.centerKey)
        }

    },

}
</script>

<style>

.page{
    padding-top: 40px;
}
button.btn.btn-block.gradient{
    color: #ffffff;
    background-image: -webkit-linear-gradient( 63deg, rgb(0, 196, 115) 0%,
                     rgb(29, 214, 111) 52%, rgb(58, 231, 107) 100%);
}
.no-beneficiaries{   
    margin: 145px auto;
    text-align: center;
    font-weight: 300;
    line-height: 1.8;
}

</style>
