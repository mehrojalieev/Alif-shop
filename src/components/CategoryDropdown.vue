<script>
import Container from '@/utils/Container.vue';
import ApiInstance from '@/api';
    export default {
        props:{
            openCategory:{
                type: Boolean,
                required:true
            }
        },
        data(){
            return  {
                CategoryData: []
            }
        },
        components:{
            Container
        },
        methods:{
           async LoadCategoryProducts(){
                try {
                 const response =  await ApiInstance.get('/products/categories')
                    console.log(response.data);
                }
                catch (error) {
                    console.log(error);
                }
            }
        },
        mounted(){
            this.LoadCategoryProducts()
        }
    }
</script>

<template>
    <div :style="{display: openCategory ? 'block' : 'none'}" class="category-dropdown">
            <div class="category__dropdown-wrapper">
                <div class="category__menu-title">
                    
                </div>
            </div>
    </div>
</template>

<style lang="scss">
    .category-dropdown{
        position: absolute;
        width: 100vw;
        background-color: var(--light-color);
        height: calc(100vh - 110px);
        top: 100%;
        z-index: 3;
        left: calc(-6% + 8px);
    }
    .category__dropdown-wrapper{
        display: flex;
        width: 100%;
    }
    .category__menu-title{
        max-width: 300px;
        width: 100%;
        height: 500px;
        background-color: #f5f7f8;
    }
</style>