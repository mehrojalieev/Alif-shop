<script>
import Container from '@/utils/Container.vue'
import ApiInstance from '@/api'
export default {
    components:{Container},
    data(){
        return {
            products_data:[]
        }
    },
   
    methods: {
        LoadPRoducts(){
            ApiInstance.get('/products')
            .then(response => {
                console.log(response);
                this.products_data = response?.data
            })
        }
    },
    mounted(){
        this.LoadPRoducts()
        console.log(this.products_data && this.products_data);
    }
}
</script>


<template>
    <Container>
        <div class="all__products-wrapper">
            <h2 class="products-title">Sizni qiziqtirishi mumkin</h2>
            <div class="product__card-container">
                    <div v-for="(product, index) in this.products_data" class="product-card" :key="index">
                        <img :src="product.image[0]" :alt='product.product_name'>
                        <span class="material-symbols-outlined like-btn">favorite</span>
                        <p class="product-name">Telefon {{product.product_name}} {{product.memory_rom === 1024 ? '1TB' : product.memory_rom+'GB'}}</p>
                        <span>dan 200.000 so'm/oyiga</span>
                        <strong class="price old-price">{{product.price - product.price/10 +` so'm`}}</strong>
                        <strong class="price">{{product.price}} so'm</strong>
                        <button class="add__cart-btn">
                            <span class="material-symbols-outlined">shopping_cart</span>
                            Savatga
                        </button>
                    </div>
            </div>
        </div>
    </Container>
</template>


<style lang="scss">
    .all__products-wrapper{
        width: 100%;
        margin-top: 40px;
    }
    .products-title{
        font-size: 34px;
        font-weight: 500;
    }
    .product__card-container{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        margin-top: 30px;
        gap: 18px 20px;
    }
    .product-card{
        position: relative;
        max-width: 220px;
        border-radius: 8px;
        text-align: left;
        padding: 1rem .8rem;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        img{
            width: 100%;
            height: 175px;
            object-fit: contain;
        }
        .like-btn{
            position: absolute;
            top: .8rem;
            right: .7rem;
            // background-color: #a5b1bb;
            border: none;
            background: transparent;
            border-radius: 30%;
            font-size: 23px;
        }
        .product-name{
            margin:8px 0;
            height: 40px;
            font-size: 14px;
            color: var(--secondary-color)
        }
        span{
            display: inline-block;
            border-radius: 10px;
            font-size: 12px;
            background-color: #FFEDC2;
            border: 1px solid var(--warning-color);
            padding: 3px 7px;
            margin-bottom: 5px;
        }
        .price{
            display: inline-block;
            color: var(--danger-color);
            font-weight: 500;
            font-size: 14px;
        }
        .old-price{
            display: block;
            text-decoration: line-through;
            font-size: 13px;
            color: #a5b1bb;
        }
        .add__cart-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            max-width: 115px;
            height: 40px;
            border-radius: 8px;
            background-color: var(--warning-color);
            border: none;
            margin-top: 15px;
            font-size: 14px;
            &:hover{
                background-color: var(--warning-hover-color);
                cursor: pointer;
            }
            span{
                margin-top: 3px;
                font-size: 20px;
                background-color: transparent;
            }
        }
    }
</style>