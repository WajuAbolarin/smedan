<template>
<div class="wrapper">
<div class="page" style="padding-top:0; margin-top:0;">
    <div class="page-content h-100">
        <div class="background"><img src="src/assets/img/background.png" alt=""></div>
        <div class="row mx-0">
            <div class="col">
                <img src="src/assets/img/logo.png" alt="" class="login-logo">
                <h1 class="login-title"><small>CGS Mobile App</small></h1>
            </div>
        </div>
        <div class="row mx-0">
            <div class="col">
                <ul class="nav nav-tabs login-tabs mt-3" role="tablist">
                    <li class="nav-item">
                        <span class="nav-link border-white text-white active show">Sign in </span>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" role="tabpanel">
                        <div class="row mx-0 justify-content-end no-gutters">
                            <div class="col-12"> 
                                <router-link to="/centers" class="btn btn-danger btn-block gradient border-0 z-3"> <i class="material-icons">account_circle</i> Sign with Google Account</router-link>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        
        <br>

    </div>
    </div>
</div>
</template>
<script>

    export default {
        name: 'Login', 
        data(){
            return {
            
            }
        },
    }
</script>

<style>
</style>
