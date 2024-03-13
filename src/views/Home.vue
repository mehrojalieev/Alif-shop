<script>
        import NavbarTop from '@/components/Navbar-top.vue'
        import Nav from '@/layout/Nav.vue';
        import Hero from '@/components/Hero.vue'
        import AllProducts from "@/components/AllProducts.vue"
        export default{
            components: {
                Hero,
                AllProducts,
                NavbarTop
            },
        }
</script>

<template>
    <div>
        <!-- <NavbarTop/>     -->
        <Nav/>
        <Hero/>
        <AllProducts/>
    </div>
</template>