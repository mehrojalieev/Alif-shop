<script>
import Sidebar from "@/layout/Sidebar.vue"
import routes from "@/router";
import { RouterView } from "vue-router";
export default {
    components:{
        Sidebar
    },
    data(){
        return {
            RegisteredNumber: localStorage.getItem("registered-number") && localStorage.getItem("registered-number")
        }
    },
    updated(){
        if(!this.RegisteredNumber){
                routes.push("/")
        }
    }
}
</script>

<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="dashboard-content">
            <RouterView/>
        </div>
    </div>
</template>

<style lang="scss">
    .dashboard{
        display: flex;
        column-gap: 1rem;
        padding: 10px;
        height: 100vh;
        background-color: #FAFAFA;
    }
    .dashboard-content{
        width: 100%;
        padding: 1rem;
    }
</style>