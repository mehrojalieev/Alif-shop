<script>
import {RouterView} from 'vue-router'
import Home from "@/views/Home.vue"
import NavbarTop from '@/components/Navbar-top.vue'
        import Nav from '@/layout/Nav.vue';
        import Footer from '@/components/Footer.vue'
import Features from './components/Features.vue';
export default {
  components: {Home, NavbarTop, Nav, Features, Footer}
}
</script>

<template>
  <div>
    <NavbarTop/>
    <Nav/>
    <RouterView/>
    <Features/> 
    <Footer/>
  </div>
</template>


