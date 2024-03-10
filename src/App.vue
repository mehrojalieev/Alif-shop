<script>
import {RouterView} from 'vue-router'
import Home from "@/views/Home.vue"
import NavbarTop from '@/components/Navbar-top.vue'
        import Nav from '@/layout/Nav.vue';
export default {
  components: {Home, NavbarTop, Nav}
}
</script>

<template>
  <div>
    <NavbarTop/>
    <Nav/>
    <RouterView/>
  </div>
</template>


