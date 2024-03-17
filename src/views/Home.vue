<script>
        import NavbarTop from '@/components/Navbar-top.vue'
        import Nav from '@/layout/Nav.vue';
        import Hero from '@/components/Hero.vue'
        import AllProducts from "@/components/AllProducts.vue"
        import TrendingCategory from "@/components/TrendingCategory.vue"
        export default{
            components: {
                Hero,
                AllProducts,
                NavbarTop,
                TrendingCategory
            },
        }
</script>

<template>
    <div>
        <!-- <NavbarTop/>     -->
        <Nav/>
        <Hero/>
        <TrendingCategory/>
        <AllProducts/>
    </div>
</template>