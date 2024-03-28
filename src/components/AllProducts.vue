<script>
import Container from '@/utils/Container.vue'
import ApiInstance from '@/api'
import Card from '@/utils/Card.vue'
export default {
    components:{Container, Card},
    data(){
        return {
            products_data:[],
            isExict: false,
            inputValue: ''
        }
    },
   
    methods: {
        async loadProducts() {
      try {
        const searchParam = this.$store.state.search_product ? '/search/' + this.$store.state.search_product : '';
        const response = await ApiInstance.get(`/products${searchParam}`);
        this.products_data = response?.data || [];
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    }
    },
    mounted(){
        this.inputValue = this.$store.state.search_product
        this.loadProducts()
    },
    watch: {
    '$store.state.search_product': {
      handler(newValue) {
        this.inputValue = newValue;
        this.loadProducts();
      },
      immediate: true
    }
},
}
</script>


<template>
    <Container>
        <div class="all__products-wrapper">
            <h2 class="products-title">Sizni qiziqtirishi mumkin</h2>
            <div class="product__card-container">
                <Card :product="product" v-for="product in this.products_data"/>
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
        gap: 1.2rem;
    }

    .product-card{
        position: relative;
        max-width: 250px !important;
        border-radius: 8px;
        text-align: left;
        padding: 1rem .8rem;
        box-shadow: #959da533 0px 8px 24px;

        img{
            width: 100%;
            height: 185px !important;
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
    // RESPONSIVE STYLES

    @media only screen and (max-width: 1444px){
        .product-card{
        max-width: 220px;
        padding: .7rem .7rem;

        img{
            height: 162px;
        }
        .like-btn{
            top: .6rem;
            right: .6rem;
            font-size: 23px;
        }
        .product-name{
            margin:8px 0;
            font-size: 13px;
        }
        span{
            font-size: 12px;
            padding: 2px 6px;
            margin-bottom: 5px;
        }
        .old-price{
            font-size: 12px;
        }
        .price{
            font-size: 13px;
        }
        .add__cart-btn{
            max-width: 115px;
            height: 36px;
            margin-top: 15px;
            font-size: 13px;
            span{
                margin-top: 3px;
                font-size: 19px;
            }
        }
    }
    }
    @media only screen and (max-width: 1144px){
        .product__card-container{
            gap: 20px 8px;
            grid-template-columns: repeat(4, 1fr);
        }
        .product-card{
        max-width: 250px;
        padding: 1rem .7rem;

        img{
            height: 180px;
        }
        .like-btn{
            top: .6rem;
            right: .6rem;
            font-size: 25px;
        }
        .product-name{
            margin:13px 0;
            font-size: 15px;
        }
        span{
            font-size: 12px;
            padding: 3px 7px;
            margin-bottom: 10px;
        }
        .price{
            font-size: 15px;
        }
        .old-price{
            font-size: 13px;
        }
        .add__cart-btn{
            max-width: 220px;
            height: 38px;
            margin: 15px auto 0;
            font-size: 15px;
            span{
                margin-top: 8px;
                font-size: 20px;
            }
        }
    }
    }

    @media only screen and (max-width: 1055px){
        .product__card-container{
            gap: 30px 20px;
            grid-template-columns: repeat(4, 1fr);
        }
        .product-card{
        max-width: 240px;
        padding: .8rem .6rem;

        img{
            height: 150px;
        }
        .like-btn{
            font-size: 23px;
        }
        .product-name{
            margin:13px 0;
            font-size: 13px;
        }
        span{
            font-size: 11px;
            padding: 3px 6px;
            margin-bottom: 10px;
        }
        .price{
            font-size: 15px;
        }
        .old-price{
            font-size: 13px;
        }
        .add__cart-btn{
            max-width: 220px;
            height: 34px;
            margin: 15px auto 0;
            font-size: 14px;
            span{
                margin-top: 8px;
                font-size: 18px;
            }
        }
    }
    }
    @media only screen and (max-width: 940px){
        .product__card-container{
            gap: 30px 20px;
            grid-template-columns: repeat(4, 1fr);
        }
        .product-card{
        max-width: 240px;
        padding: .7rem .5rem;

        img{
            height: 145px;
        }
        .like-btn{
            font-size: 22px;
        }
        .product-name{
            margin:5px 0;
            font-size: 12px;
        }
        span{
            font-size: 10px;
            padding: 3px 6px;
            margin-bottom: 8px;
        }
        .price{
            font-size: 14px;
        }
        .old-price{
            font-size: 12px;
        }
        .add__cart-btn{
            max-width: 220px;
            height: 31px;
            margin: 10px auto 0;
            font-size: 13px;
            span{
                margin-top: 8px;
                font-size: 16px;
            }
        }
    }
    }
    @media only screen and (max-width: 840px){
        .product__card-container{
            gap: 30px 20px;
            grid-template-columns: repeat(3, 1fr);
        }
        .product-card{
        max-width: 270px;
        padding: .6rem .5rem;

        img{
            height: 190px;
        }
        .like-btn{
            font-size: 24px;
        }
        .product-name{
            margin:12px 0;
            font-size: 13px;
        }
        span{
            font-size: 12px;
            padding: 3px 6px;
            margin-bottom: 8px;
        }
        .price{
            font-size: 15px;
        }
        .old-price{
            font-size: 13px;
        }
        .add__cart-btn{
            height: 35px;
            margin: 10px auto 0;
            font-size: 13px;
            span{
                margin-top: 8px;
                font-size: 16px;
            }
        }
    }
    }
    @media only screen and (max-width: 720px){
        .product__card-container{
            gap: 25px 17px;
            grid-template-columns: repeat(3, 1fr);
        }
        .product-card{
        max-width: 230px;
        padding: .6rem .5rem;

        img{
            height: 155px;
        }
        .like-btn{
            font-size: 24px;
        }
        .product-name{
            margin:12px 0;
            font-size: 12px;
        }
        span{
            font-size: 11px;
            padding: 3px 6px;
            margin-bottom: 8px;
        }
        .price{
            font-size: 14px;
        }
        .old-price{
            font-size: 12px;
        }
        .add__cart-btn{
            height: 30px;
            margin: 10px auto 0;
            font-size: 13px;
            span{
                margin-top: 8px;
                font-size: 16px;
            }
        }
    }
    }
    @media only screen and (max-width: 654px){
        .product__card-container{
            gap: 25px 17px;
            grid-template-columns: repeat(3, 1fr);
        }
        .product-card{
        max-width: 230px;
        padding: .6rem .5rem;

        img{
            height: 135px;
        }
        .like-btn{
            top: .2rem;
            right: .3rem;
            font-size: 22px;
        }
        .product-name{
            margin:3px 0;
            font-size: 12px;
        }
        span{
            font-size: 11px;
            padding: 2px 5px;
            margin-bottom: 8px;
        }
        .price{
            font-size: 13px;
        }
        .old-price{
            font-size: 11px;
        }
        .add__cart-btn{
            height: 30px;
            margin: 10px auto 0;
            font-size: 12px;
            span{
                margin-top: 8px;
                font-size: 16px;
            }
        }
    }
    }

    @media only screen and (max-width: 598px){
        .products-title{
            font-size: 26px;
        }
        .product__card-container{
            gap: 25px 10px;
            grid-template-columns: repeat(2, 1fr);
        }
        .product-card{
        max-width: 255px;
        padding: .6rem .5rem;

        img{
            height: 160px;
        }
        .like-btn{
            top: .5rem;
            right: .5rem;
            font-size: 24px;
        }
        .product-name{
            margin:7px 0;
            font-size: 13px;
        }
        span{
            font-size: 12px;
            padding: 3px 8px;
            margin-bottom: 8px;
        }
        .price{
            font-size: 14px;
        }
        .old-price{
            font-size: 12px;
        }
        .add__cart-btn{
            height: 35px;
            margin: 10px auto 0;
            font-size: 13px;
            span{
                margin-top: 8px;
                font-size: 18px;
            }
        }
    }
    }
    @media only screen and (max-width: 492px){
        .products-title{
            font-size: 24px;
        }
        .product__card-container{
            gap: 25px 8px;
            grid-template-columns: repeat(2, 1fr);
        }
        .product-card{
        max-width: 205px;
        padding: .6rem .5rem;

        img{
            height: 135px;
        }
        .like-btn{
            top: .2rem;
            right: .4rem;
            font-size: 23px;
        }
        .product-name{
            margin:5px 0;
            font-size: 13px;
        }
        span{
            font-size: 11px;
            padding: 3px 8px;
            margin-bottom: 6px;
        }
        .price{
            font-size: 13px;
        }
        .old-price{
            font-size: 11px;
        }
        .add__cart-btn{
            height: 30px;
            margin: 10px auto 0;
            font-size: 12px;
            span{
                margin-top: 6px;
                font-size: 18px;
            }
        }
    }
    }

    @media only screen and (max-width: 400px){
        .products-title{
            font-size: 22px;
        }
        .product__card-container{
            gap: 22px 10px;
            grid-template-columns: repeat(2, 1fr);
        }
        .product-card{
        max-width: 205px;
        padding: .6rem .5rem;

        img{
            height: 112px;
        }
        .like-btn{
            top: .2rem;
            right: .4rem;
            font-size: 21px;
        }
        .product-name{
            margin:5px 0;
            font-size: 12px;
        }
        span{
            font-size: 10px;
            padding: 2px 7px;
            margin-bottom: 6px;
        }
        .price{
            font-size: 13px;
        }
        .old-price{
            font-size: 11px;
        }
        .add__cart-btn{
            height: 30px;
            margin: 10px auto 0;
            font-size: 12px;
            span{
                margin-top: 6px;
                font-size: 18px;
            }
        }
    }
    }
    @media only screen and (max-width: 352px){
        .products-title{
            font-size: 22px;
        }
        .product__card-container{
            gap: 22px 0px;
            padding: 0;
            place-items: center;
            grid-template-columns:  1fr;
        }
        .product-card{
            width: 100%;
        max-width: 260px;
        padding: .6rem .8rem;

        img{
            height: 145px;
        }
        .like-btn{
            top: .2rem;
            right: .4rem;
            font-size: 25px;
        }
        .product-name{
            margin:15px 0;
            font-size: 14px;
        }
        span{
            font-size: 12px;
            padding: 3px 8px;
            margin-bottom: 6px;
        }
        .price{
            font-size: 14px;
        }
        .old-price{
            font-size: 12px;
        }
        .add__cart-btn{
            height: 35px;
            margin: 10px auto 0;
            font-size: 14px;
            span{
                margin-top: 6px;
                font-size: 22px;
            }
        }
    }
    }

    
</style>