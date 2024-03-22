<script>
import {RouterView} from 'vue-router'
import Home from "@/views/Home.vue"
import NavbarTop from '@/components/Navbar-top.vue'
        import Nav from '@/layout/Nav.vue';
        import Footer from '@/components/Footer.vue'
export default {
  components: {Home, NavbarTop, Nav,Footer}
}
</script>

<template>
  <div>
    <NavbarTop/>
    <Nav/>
    <RouterView/>
    <Footer/>
  </div>
</template>


