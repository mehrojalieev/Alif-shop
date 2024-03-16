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
                let extraProduct = {...product}
                extraProduct = {...extraProduct, count: 1}
            this.$store.commit('AddToCart', extraProduct)
            if(this.$store.state.cart_data.filter(f => product.id)){
                this.isExict = true
            }
            else{
                console.log(false);
            }
        },
        RemoveProductCart(product){
            let extraProduct = {...product}
            extraProduct = {...product}
            this.$store.commit("RemoveFromCart", extraProduct)
        },
        AddToFavorite(product){
            this.$store.commit('AddToLiked', product)
            if(this.$store.state?.liked_data.findIndex(f => f.id == product.id)!= -1){
            }
        },
        RemoveFromFavorite(product){
            this.$store.commit('RemoveProductFromFavorite', product)
        }
        
       
        },
    }
</script>

<template>
    <div class="product-card">
        <span   v-if="this.$store.state?.liked_data.findIndex(f => f.id == product.id)!= -1" @click="RemoveFromFavorite(product)" class="material-symbols-outlined like-btn liked-btn" >heart_minus</span>
        <span v-else   @click="AddToFavorite(product)" class="material-symbols-outlined like-btn ">heart_plus</span>
                        <router-link onclick.native.stop  :key="product.id" class="product__card-link"
                        :to="{
                            name: 'Single_Product',
                            query: { category: `${product.category}`,mahsulot: `${product.product_name}`},
                             params: {id: `${product.id}`}
                             }" >
                        <img :src="product.image[0]" :alt='product.product_name'>
                        <p class="product-name"> {{product.product_name.slice(0, 30)}} {{product.memory_rom === 1024 ? '1TB' : product.memory_rom === null ? '' : product.memory_rom+'GB'}}</p>
                        <span>dan 200.000 so'm/oyiga</span>
                        <strong class="price old-price">{{product.price - product.price/10 +` so'm`}}</strong>
                        <strong class="price">{{product.price}} so'm</strong>
                        </router-link>
                        <div class="counter-action"  v-if="this.$store.state?.cart_data.findIndex(f => f.id == product.id)!= -1">
                            <button @click="RemoveProductCart(product)" >-</button>
                            <strong>{{this.$store.state.cart_data.find(ind => ind?.id === product?.id).count}}</strong>
                            <button @click="AddProductCart(product)" >+</button>
                        </div>
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
            top: 3px !important;
            right: 1px !important;
            border: none;
            background: transparent;
            border-radius: 30%;
            font-size: 23px;
            cursor: pointer;
            &:active{
                transform: scale(0.95);
            }
        }
        .liked-btn{
            color: var(--danger-color);
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
    .counter-action{
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 10px;
        width: 100%;
        margin-top: 15px;
        max-width: 110px;
        padding: 1px 10px;
        border: 1px solid #a5b1bb;
        border-radius: 8px;
        button{
            background: transparent;
            border: none;
            font-size: 20px;
            cursor: pointer;
            transition: .2s;
            &:hover{
                transform: scale(1.1);
            }
            &:active{
                transform: scale(0.8);
            }
        }
    }
    .product__card-link{
        text-decoration: none;
        color: var(--dark-color)
    }
</style>