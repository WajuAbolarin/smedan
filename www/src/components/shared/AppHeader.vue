<template>
    <header class="row m-0 fixed-header">
        <div class="sidebar sidebar-left">
        <div class="profile-link">
            <a href="#" class="media">
                <div class="w-auto h-100">
                    <figure class="avatar avatar-40"><img src="src/assets/img/logo.png" alt=""> </figure>
                </div>
                <div class="media-body">
                    <h5> SMEDAN-CGS </h5>
                </div>
            </a>
            <div>
                meyanbefemi97@gmail.com<span class="status-online bg-success"></span>
            </div>
        </div>
        <nav class="navbar">
            <ul class="navbar-nav">
                
                <li class="nav-item">
                    <router-link to="/centers" class="sidebar-close">
                        <div class="item-title">
                            <i class="material-icons">add_shopping_cart</i>My Centers
                        </div>
                    </router-link>
                </li>
            </ul>
        </nav>
        <div class="profile-link text-center">
            <router-link to="/" class="btn btn-outline-white btn-block px-3">Logout</router-link>
        </div>
    </div><div class="left">
            <a @click="handleClick" class="menu-left"><i class="material-icons">menu</i></a>
        </div>
        <div class="col center">
            <a href="" class="logo">
                <figure><img src="src/assets/img/logo.png" alt=""></figure> SMEDAN</a>
        </div>        
    </header>
</template>

<script>
export default {
    name: 'AppHeader',

    methods:{
        handleClick(e){
            document.body.classList.add('menu-left-open')
        }
    },
    created(){
        document.body.addEventListener('click', function(e){
            if(e.target.className !== 'material-icons'){
                document.body.classList.remove('menu-left-open') 
            }
        })
    }

}
</script>

<style>
header{
    background:#009f5d;
}

/* added */
.sidebar {
    background: #009f5d;
}
.btn-outline-white{
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: #ffffff;
}
i{
    color:#ffffff;
}
</style>
