<script>
import ApiInstance from '@/api';
import Container from '@/utils/Container.vue'
import { RouterLink } from 'vue-router';
import Card from '@/utils/Card.vue'
export default {
    components:{
        Container,
        Card
    },
    data(){
        return {
            CategoryData: []
        }
    },
    methods:{
        LoadSingleCategory(){
            ApiInstance(`/products/category/${this.$route.params.category_name}`)
            .then(response =>{
                console.log(response.data)
                this.CategoryData = response.data
            })
        },
        BrandValue(value){
            console.log(value);
        }
    },
    mounted(){
        this.LoadSingleCategory()
    }
} 

</script>


<template>
    <Container>
        <div class="single__category-wrapper">
                <div class="category__breakgrump">
                    <RouterLink to="/" class="category-link">Tovarlar katalogi</RouterLink>
                    <p>{{this.$route.params.category_name}}lar</p>
                </div>
                <h2 class="category-title">{{this.$route.params.category_name}}lar</h2>
                <div class="category__render-wrapper">


                    <div class="category__actions-wrapper">
                        <h5 class="brand-title">Brend</h5>
                        <div class="brand-action">
                            <div class="brands-box">
                                <div v-for="brand in this.CategoryData" class="brand-item">
                                    <input @click="(e) => BrandValue(e.target.value)" :value="brand.brand"   :id="brand.brand"  type="checkbox"/>
                                    <label :for="brand.brand">{{brand.brand}}</label>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="category__card-wrapper">
                        <Card :product="product" v-for="product in this.CategoryData"/>
                    </div>
                </div>
        </div>
    </Container>
</template>


<style lang="scss">
.single__category-wrapper{
    width: 100%;
}
.category__breakgrump{
    margin-top: 1rem;
    display: flex;
    align-items: center;
    column-gap: 30px;
    .category-link{
        font-size: 14px;
        color: #2a8be7;
        text-decoration: none;
        cursor: pointer;
        position: relative;
        &::after{
            position: absolute;
            content: '';
            top: 15%;
            transform: rotate(20deg);
            right: calc(-12%);
            height: 60%;
            background-color: var(--secondary-color);
            width: 1px;
        }
    }
    p{
        @extend .category-link;
        text-transform: capitalize;
        color: var(--secondary-color);
        &::after{display: none;}
    }
}
.category-title{
    margin: .5rem 0;
    font-size: 30px;
    text-transform: capitalize;
    font-weight: 550;

}
.category__render-wrapper{
    width: 100%;
    display: flex;
    column-gap: 2rem;
    align-items: center;
    margin-top: 1rem;
}
.category__actions-wrapper{
    width: 100%;
    max-width: 236px;
    padding: .8rem;

}

.brand-action{
    width: 100%;
    .brand-title{
        font-size: 16px;
        font-weight: 550;
    }
}
.brands-box{
    height: 270px;
    width: 100%;
    overflow-y: auto;
}
.brand-item{
    margin-top: .7rem;
    display: flex;
    column-gap: 10px;
    input{
        width: 16px;
        aspect-ratio: 1/1;
        font-size: 40px;
        accent-color: var(--warning-color);
    }
    label{
        font-size: 14px;
    }
}



//CATEGORY CARD STYLES
.category__card-wrapper{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: .8rem ,5rem ;
    width: 100%;
    height: 500px;
}
</style>