<script>
        import NavbarTop from '@/components/Navbar-top.vue'
        import Nav from '@/layout/Nav.vue';
        import Hero from '@/components/Hero.vue'
        export default{
            components: {
                // NavbarTop,
                // Nav,
                Hero
            }
        }
</script>

<template>
    <div>
        <NavbarTop/>    
        <Nav/>
        <Hero/>
    </div>
</template>