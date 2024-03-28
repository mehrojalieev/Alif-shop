<script>
import Sidebar from "@/layout/Sidebar.vue"
import { RouterView } from "vue-router";
export default {
    components:{
        Sidebar
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
        padding: 1rem;
    }
</style>