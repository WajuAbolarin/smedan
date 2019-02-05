<template>
    <li class="list-group-item h-100">
        <div href="#" class="d-flex justify-content-between py-2">
            <div>
                <h5>{{fullname(beneficiary)}}</h5> 
                <p>Gender: {{beneficiary.gender}} </p>
                <small class="text-muted text-primary">{{status}}</small>

            </div> 
            <div class="w-auto align-self-end">
                <!-- <a href="view-beneficiary.html" class="btn btn-sm btn-primary">View</a> -->
                <button @click="upload"  class="btn btn-sm btn-primary">Upload</button>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'SingleBeneficiary',
    props: {
        beneficiary: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            isUploading: false,
            status: '',
        }
    },
    methods:{
        fullname(person){
            return person.surname + ' ' + person.otherNames
        },
    
       upload(){

            this.isUploading = true
            this.status = 'Uploading...'

            return new Promise( (res, rej) => {
            
            this.$store
                .dispatch('beneficiary/upload', this.beneficiary)
                .then( uploadStatus =>{
                    this.isUploading = false            
                    
                    if(uploadStatus === 'failed'){
                        this.status = 'Upload failed!'
                       return res('done')
                    }
                    console.log(uploadStatus)
                    // this.status = 'Upload Successful!'
                    return res()
                
                })

            })
            
        }
    },
    

}
</script>

<style>

</style>
