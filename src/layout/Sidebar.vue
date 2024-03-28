<script>
import { RouterLink } from 'vue-router';

export default {
    data(){
        return  {
            isOpenSidebar: true
        }
    }
}

</script>

<template>
    <div :class="!this.isOpenSidebar ? 'sidebar closed-sidebar':'sidebar'">
        <span v-if="this.isOpenSidebar"  @click="this.isOpenSidebar = false"  class="material-symbols-outlined close-sidebar">arrow_back</span>
        <span v-else @click="this.isOpenSidebar = true" class="material-symbols-outlined close-sidebar">arrow_forward</span>
        <RouterLink class="sidebar-header" to="/">
            <img v-if="this.isOpenSidebar" src="../assets/logo.svg">
            <img v-else src="../assets/aliflogo.jpg">
        </RouterLink>
        <ul class="sidebar__menu">
            <li class="menu-item">
                <span class="material-symbols-outlined">inventory_2</span>
                <RouterLink class="item-link" to="manage-products"> 
                    Product management
                </RouterLink>
            </li>
            <li class="menu-item">
                <span class="material-symbols-outlined">people</span>
                <RouterLink class="item-link" to="manage-products">
                    Users management
                </RouterLink>
            </li>
            <li class="menu-item">
                <span class="material-symbols-outlined">monitoring</span>
                <RouterLink class="item-link" to="/">
                    Analytic
                </RouterLink>
            </li>
            <li  class="menu-item">
                <span class="material-symbols-outlined"> settings</span>
                <RouterLink class="item-link" to="/">
                    Settings
                </RouterLink>
            </li>
            <li class="menu-item">
                <RouterLink class="item-link" to="/">
                    <span class="material-symbols-outlined">
                        headset_mic</span>
                    Get help
                </RouterLink>
            </li>
        </ul>
    </div>
</template>


<style lang="scss">
.sidebar {
    transition: .1s;
    position: relative;
    max-width: 270px;
    width: 100%;
    border-radius: 8px;
    height: calc(100vh - 30px);
    background-color: var(--light-color);
    // background-color: var(--secondary-color);
    padding: 1rem .6rem;
}

.sidebar-header {
    display: flex;
    border-radius: 8px;
    justify-content: flex-start;
    width: 100%;
    padding: .4rem .4rem;
    margin: auto;
    background-color: var(--light-color);

    img {
        width: 100%;
        max-width: 180px;
        height: 50px;
        object-fit: cover;
    }
}

.sidebar__menu {
    margin-top: 2rem;
    list-style-type: none;
    row-gap: 1rem;
    .menu-item{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 14px 10px;
        border-radius: 8px;
        transition: .1s;
        margin-top: 1rem;
        column-gap: 7px;
        span {
            font-size: 24px;
            // margin-top: 13px;
        }
        .item-link {
            width: 100% !important;
            color: var(--secondary-color);
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
        }   
        }
        
}
.sidebar__menu  .menu-item:hover{
    background-color: var(--warning-color);
    
    .item-link, span{
        color: var(--light-color);
    }
}
.close-sidebar{
    position: absolute;
    top: 0px;
    right: -10px;
    padding: .3rem;
    font-size: 20px;
    color: var(--light-color);
    border-radius: 50%;
    transition: .2s;
    cursor: pointer;
    background-color: var(--warning-color);
    &:active{
        transform: scale(0.9);
    }
}
.closed-sidebar{
    max-width: 100px;
    .item-link{
        display: none;
    }
}
</style>