<script>
// import RouterLink
    export default {
        props:{
            product:{
                type: Object,
                required: true
            }
        },
        data(){
            return {
                isExict: false
            }
        },
        methods:{
            AddProductCart(product){
            this.$store.commit('AddToCart', product)
            if(this.$store.state.cart_data.filter(f => product.id)){
                this.isExict = true
            }
            else{
                console.log(false);
            }
        },
        AddToFavorite(product){
            this.$store.commit('AddToLiked', product)
            console.log(this.$store.state.liked_data)
            if(this.$store.state?.liked_data.findIndex(f => f.id == product.id)!= -1){
                console.log(product);
                console.log('Qizil');
            }
        },
        
        // handleButtonClick(event){
        //     event.stopPropogation()
        // }
        },
    }
</script>

<template>
    <div class="product-card">
                        <!-- <router-link onclick.native.stop  :key="product.id" class="product__card-link"
                        :to="{
                            name: 'Single_Product',
                            query: { category: `${product.category}`,mahsulot: `${product.product_name}`},
                             params: {id: `${product.id}`}
                             }" > -->
                        <img :src="product.image[0]" :alt='product.product_name'>
                        <span  v-if="this.$store.state?.liked_data.findIndex(f => f.id == product.id)!= -1" class="material-symbols-outlined like-btn liked-btn" >favorite</span>
                        <span v-else   @click="AddToFavorite(product)" class="material-symbols-outlined like-btn ">favorite</span>
                        <p class="product-name"> {{product.product_name.slice(0, 30)}} {{product.memory_rom === 1024 ? '1TB' : product.memory_rom === null ? '' : product.memory_rom+'GB'}}</p>
                        <span>dan 200.000 so'm/oyiga</span>
                        <strong class="price old-price">{{product.price - product.price/10 +` so'm`}}</strong>
                        <strong class="price">{{product.price}} so'm</strong>
                        <!-- </router-link> -->
                        <button v-if="isExict">Count +</button>
                        <button v-else @click="AddProductCart(product)" type="button" class="add__cart-btn">
                            <span class="material-symbols-outlined">shopping_cart</span>
                            Savatga
                        </button>

                    </div>
</template>


<style>
     .product-card{
        position: relative;
        max-width: 220px;
        border-radius: 8px;
        text-align: left;
        padding: 1rem .8rem;
        box-shadow: #959da533 0px 8px 24px;

        img{
            width: 100%;
            height: 175px;
            object-fit: contain;
        }
        .like-btn{
            position: absolute;
            top: .6rem;
            right: .6rem;
            border: none;
            background: transparent;
            border-radius: 30%;
            font-size: 23px;
        }
        .liked-btn{
            color: red;
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
                border: none;
                background-color: transparent;
            }
        }
    }
    .product__card-link{
        text-decoration: none;
        color: var(--dark-color)
    }
</style>