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
                                    <form role="form" method="post" action="">                       
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Surname</label>
                                                        <input type="text" class="form-control" name="surname" equired="">
                                                    </div>
                                                </div>
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Other Name</label>
                                                        <input type="text" class="form-control" name="other_name" equired="">
                                                    </div>
                                                </div>
                                            
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Email</label>
                                                        <input type="email" class="form-control" name="email">
                                                    </div>
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Phone Number</label>
                                                        <input type="text" class="form-control" name="phone_number">
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <div class="form-group ">
                                                        <label>Age</label>
                                                        <select name="age" id="" class="form-control" equired="">
                                                            <option value="10">10</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-6">
                                                    <div class="form-group ">
                                                        <label>Gender</label>
                                                        <select name="gender" id="" class="form-control" equired="">
                                                            <option value="Female">Female</option>
                                                            <option value="Male">Male</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>LGA</label>
                                                        <select name="lga" id="" class="form-control">
                                                            <option value="">Local Gov A</option>
                                                            <option value="">Local Gov B</option>
                                                            <option value="">Local Gov C</option>
                                                            <option value="">Local Gov D</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Ward</label>
                                                        <input type="text" name="ward" class="form-control">
                                                    </div> 
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Address</label>
                                                        <input type="text" name="address" class="form-control">
                                                    </div> 
                                                </div>
                                        
                                                <div class="col-12 mb-2">
                                                    <h5 class="mb-3">Business Details</h5>
                                                </div>
                                                
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Is Business Registered?</label>
                                                        <label class="radio-inline">
                                                            <input type="radio" name="business_registered" id="yes" value="yes"> Yes
                                                        </label>
                                                        <label class="radio-inline">
                                                            <input type="radio" name="business_registered" id="no" value="No"> No
                                                        </label>                    
                                                    </div>
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Business Name</label>
                                                        <input type="text" name="business_name" class="form-control">
                                                    </div> 
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Type</label>
                                                        <select name="business_type" class="form-control" id="business_type">
                                                            <option>Agriculture</option>
                                                            <option>ICT</option>
                                                            <option>Trading</option>
                                                        </select>
                                                    </div> 
                                                </div>
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                            <label>Business LGA</label>
                                                        <select name="business_lga" id="" class="form-control">
                                                            <option value="">Local Gov A</option>
                                                            <option value="">Local Gov B</option>
                                                            <option value="">Local Gov C</option>
                                                            <option value="">Local Gov D</option>
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group">
                                                        <label for="Business Address">Business Address</label>
                                                        <textarea name="business_name" id="" class="form-control" rows="1"></textarea>
                                                    </div>
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>RC/BN</label>
                                                        <input type="text" name="business_number" class="form-control">
                                                    </div> 
                                                </div>
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Year</label>
                                                        <input type="number" name="business_year" class="form-control">
                                                    </div> 
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Mode of Identification</label>
                                                        <select name="mode_id" id="" class="form-control">
                                                            <option value="">National Voters Card</option>
                                                            <option value="">National Identity Card</option>
                                                            <option value="">Others</option>
                                                            <option value="">None</option>
                                                        </select>
                                                    </div> 
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>ID number</label>
                                                        <input type="text" name="business_type" class="form-control">
                                                    </div> 
                                                </div>

                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Bank Name</label>
                                                        <select name="Bank Name" id="" class="form-control">
                                                            <option value="">Bank A</option>
                                                            <option value="">Bank B</option>
                                                            <option value="">Bank C</option>
                                                            <option value="">Bank D</option>
                                                        </select>
                                                    </div> 
                                                </div>
                                        
                                                <div class="col-12 mb-2">
                                                    <div class="form-group ">
                                                        <label>Account number</label>
                                                        <input type="text" name="account_number" class="form-control">
                                                    </div> 
                                                </div>
                                            </div>                            
                                            <!-- /.row -->
                                            <div class="row">
                                                <div class="col-12 mb-2">
                                                    <button class="btn btn-block btn-infow">Capture Beneficiary</button>
                                                </div>
                                                <div class="col-12 mb-2">
                                                    <button class="btn btn-block btn-success">Save &plus;</button>
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
    props: {
        center: {
            type: String,
            required: true,
        }
    },
    components: {
        'app-header' :AppHeader
    },

}
</script>

<style>
.page{
    padding-top: 35px;
}
</style>
