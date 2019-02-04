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
                        <h1 class="text-center text-white title-background"><small><br></small> <span id="display-title"> Participant details</span></h1>
                    </div>

                    <br>
                    <div class="row mx-0">
                        <div class="col-12 mb-2">
                            <div class="card rounded-0 border-0 mb-3">
                                <div class="card-header">
                                    <div class="row">
                                        <div class="col-12 mb-2">
                                            <h5 class="card-title">Conditional Grant Scheme form</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <form role="form" @submit.prevent="createBeneficiary">                       
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Surname</label>
                                                        <input type="text" v-model="surname" class="form-control"  equired="">
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Other Name</label>
                                                        <input type="text" v-model="otherNames" class="form-control"  equired="">
                                                    </div>
                                                </div>
                                            
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Email</label>
                                                        <input v-model="email" type="email" class="form-control" >
                                                    </div>
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Phone Number</label>
                                                        <input v-model="phone" type="tel" class="form-control">
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <div class="form-group ">
                                                        <label>Age</label>
                                                        <select v-model="age"  class="form-control" equired="">
                                                            <option v-for="age in ageValues" :key="age" :value="age"> {{age}} </option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <div class="form-group ">
                                                        <label>Gender</label>
                                                        <select v-model="gender" equired="" class="form-control">
                                                            <option value="Female">Female</option>
                                                            <option value="Male">Male</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>LGA</label>
                                                        <select v-model="LGA"  class="form-control">
                                                            <option v-for="LGA in availableLGAs" :key="LGA.id" :value="LGA.name" > {{LGA.name}}</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Ward</label>
                                                        <input v-model="ward" type="text"  class="form-control">
                                                    </div> 
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Address</label>
                                                        <input v-model="address" type="text"  class="form-control">
                                                    </div> 
                                                </div>
                                        
                                                <div class="col-12 mb-2">
                                                    <h5 class="mb-3">Business Details</h5>
                                                </div>
                                                
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Is Business Registered?</label>
                                                        <label class="radio-inline">
                                                            <input type="radio" v-model="isRegistered" :value="true"> Yes
                                                        </label>
                                                        <label class="radio-inline">
                                                            <input type="radio" v-model="isRegistered" :value="false"> No
                                                        </label>                    
                                                    </div>
                                                </div>

                                                <template v-if="!isRegistered">
                                                    <div class="col-12 mb-2">
                                                        <div class="form-group ">
                                                            <label>Business Name 1</label>
                                                            <input v-model="businessName1" type="text"  class="form-control">
                                                        </div> 
                                                    </div>

                                                    <div class="col-12 mb-2">
                                                        <div class="form-group ">
                                                            <label>Business Name 2</label>
                                                            <input v-model="businessName2"  type="text"  class="form-control">
                                                        </div> 
                                                    </div>

                                                    <div class="col-12 mb-2">
                                                        <div class="form-group ">
                                                            <label>Business Name 3</label>
                                                            <input v-model="businessName3" type="text"  class="form-control">
                                                        </div> 
                                                    </div>
                                                </template>

                                                <div class="col-12 mb-2" v-else>
                                                    <div class="form-group ">
                                                        <label>Business Name</label>
                                                        <input v-model="businessName" type="text"  class="form-control">
                                                    </div> 
                                                </div>
                                                
                                                
                                                
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Business Type</label>
                                                        <select class="form-control" v-model="businessType">
                                                            <option>Agriculture</option>
                                                            <option>ICT</option>
                                                            <option>Trading</option>
                                                        </select>
                                                    </div> 
                                                </div>
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Business LGA</label>
                                                        <select v-model="businessLGA" class="form-control">
                                                            <option v-for="LGA in availableLGAs" :key="LGA.id" :value="LGA.name">{{LGA.name}}</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group">
                                                        <label for="Business Address">Business Address</label>
                                                        <textarea class="form-control" v-model="businessAddress" rows="1"></textarea>
                                                    </div>
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>RC/BN</label>
                                                        <input v-model="RCBN" type="text"  class="form-control">
                                                    </div> 
                                                </div>
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Year</label>
                                                        <input v-model="yearOfRegistration" type="tel"  class="form-control">
                                                    </div> 
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Mode of Identification</label>
                                                        <select v-model="modeOfIdentification" class="form-control">
                                                            <option value="Permanent Voters Card(PVC)">Permanent Voters Card(PVC)</option>
                                                            <option value="National Identity Card">National Identity Card</option>
                                                            <option value="International Passport">International Passport</option>
                                                            <option value="Driver's License">Driver's License</option>
                                                            <option value="Others">Others</option>
                                                            <option value="None">None</option>
                                                        </select>
                                                    </div> 
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>ID number</label>
                                                        <input type="text" v-model="IDnumber" class="form-control">
                                                    </div> 
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Bank Name</label>
                                                        <select v-model="bankName" class="form-control">
                                                            <option v-for="bank in bankList" :key="bank" :value="bank">{{bank}}</option>
                                                        </select>
                                                    </div> 
                                                </div>
                                                
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Account number</label>
                                                        <input type="tel" v-model="accountNumber" class="form-control">
                                                    </div> 
                                                </div>
                                            </div>           
                                            <!-- /.row -->
                                            <div class="row">
                                                <div class="col-12">
                                                    <ul>
                                                        <li> {{ pictureName }} </li>
                                                        <!-- <li> {{file.fullPath()}} </li> -->
                                                    </ul>
                                                </div>
                                                <div class="col-12 mb-2 d-flex flex-column">
                                                     <div class="preview-wrapper">
                                                        <img v-if="pictureName" :src="pictureName" alt="">
                                                     </div>
                                                    <button class="btn btn-block btn-info" ref="capture">Capture Beneficiary</button>
                                                </div>
                                                <div class="col-12 mb-2">
                                                    <button class="btn btn-block btn-success" ref="status" :disabled="isSubmitting">Save &plus;</button>
                                                </div>
                                            </div>
                                        </div>                    
                                        <!--/.card-body  -->
                                    </form>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <br>
                </div>
            </div>
       
        </div>
    </div>
</template>

<script>
import AppHeader from './../shared/AppHeader.vue'


export default {
    name: 'CreateBeneficiary',
    components: {
        'app-header' :AppHeader
    },
    props: {
        center: {
            type: String,
            required: true,
        }
    },
    data(){
        return {
            surname: '',
            otherNames: '',
            email: '',
            phone: '',
            age: '',
            gender:'',
            LGA: '',
            ward: '',
            address: '',

            isRegistered: false,
            businessName: '',
            businessName1: '',
            businessName2: '',
            businessName3: '',
            businessType: '',
            businessLGA: '',
            businessAddress: '',
            RCBN: '',
            yearOfRegistration: '',
            modeOfIdentification: '',
            IDnumber: '',
            bankName: '',
            accountNumber: '',

            pictureName: '',

            bankList:[
                'Access Bank Plc',
                'Citibank Nigeria Limited',
                'Diamond Bank Plc',
                'Ecobank Nigeria Plc',
                'Fidelity Bank Plc',
                'First Bank Plc',
                'First City Monument Bank Plc',
                'Guaranty Trust Bank Plc',
                'Heritage Bank',
                'Key Stone Bank',
                'Polaris Bank',
                'Providus Bank',
                'Stanbic IBTC Bank Ltd',
                'Standard Chattered Bank Nigeria Ltd',
                'Sterling Bank Plc',
                'SunTrust Bank Nigeria Limited',
                'Union Bank of Nigeria Plc',
                'United Bank for Africa Plc',
                'Unity Bank Plc',
                'Wema bank Plc',
                'Zenith Bank Plc'
            ],

            isSubmitting: false
        }
    },
    computed:{
        ageValues(){
            return [ ...Array(81-18)].map((_, i)=> i + 18 )
        },

        availableLGAs(){
            return this.$store.getters.getLGAs(this.$route.query.state)
        },
    },
    
    methods:{
        createBeneficiary(){
            this.isSubmitting = true;
            let uneeded = ['bankList', 'isSubmitting']
            let beneficiaryData = JSON.parse(JSON.stringify(this.$data))

            for(let prop of uneeded)
            {
             delete beneficiaryData[prop]   
            }
            
            this.$store.dispatch('beneficiary/create', beneficiaryData)
           
           this.$router.push('/centers')
        }
    },
    mounted(){
        window.document.addEventListener('deviceready', ()=>{
            let trigger = this.$refs.capture
            let self = this

            let  options = {
                quality: 30,
                destinationType: Camera.DestinationType.FILE_URI,
                // In this app, dynamically set the picture source, Camera or photo gallery
                sourceType: Camera.PictureSourceType.PICTURE,
                encodingType: Camera.EncodingType.JPEG,
                mediaType: Camera.MediaType.PICTURE,
                correctOrientation: true  //Corrects Android orientation quirks
            }

            trigger.addEventListener('click', (e)=>{

                e.preventDefault()

                navigator.camera.getPicture((imgUri)=>{
                        
                    self.pictureName = imgUri

                    // alert(imgUri)
                }, 
                
                (err)=>{
                    console.dir(err)
                },
                
                options)
            })
        })

        },
        watch: {
            isRegistered(val){
                if(val){
                    this.businessName1 = this.businessName2 = this.businessName3 = ''
                    return
                }
                this.businessName =''
            }
        }
}
</script>

<style>
.page{
    padding-top: 35px;
}
.preview-wrapper img{
    max-width: 100%;
    height: 200px;
    object-fit: contain;
}
</style>
