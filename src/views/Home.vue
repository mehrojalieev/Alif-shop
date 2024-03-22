<script>
        import Hero from '@/components/Hero.vue'
        import AllProducts from "@/components/AllProducts.vue"
        import TrendingCategory from "@/components/TrendingCategory.vue"
        export default{
            components: {
                Hero,
                AllProducts,
                TrendingCategory
            },
        }
</script>

<template>
    <div>
        <Hero/>
        <TrendingCategory/>
        <AllProducts/>
    </div>
</template>