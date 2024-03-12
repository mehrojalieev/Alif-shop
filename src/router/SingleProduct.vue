<script>
    import 'swiper/css';
    import 'swiper/css/navigation';
    import ApiInstance from "@/api/index"
    import { RouterLink } from "vue-router"
    import { Navigation } from 'swiper/modules';
    import Container from "@/utils/Container.vue"
    import { Swiper, SwiperSlide } from 'swiper/vue';

    export default {
        components: {Container, Swiper, SwiperSlide},
        setup() {
            return {
              modules: [Navigation],
            };
        },
        data(){
            return {
                single_product: [],
                main_image: '',
                isFocusVariant: false
            }
        },
        mounted(){
            this.Load_SingleProduct()
            // console.log(this.Variants);
        },
        methods:{
            Load_SingleProduct(){
                ApiInstance.get(`/products/${this.$route.params.id}`)
                .then(response => {
                    console.log(response.data);
                    this.single_product = response.data[0]
                })
            },
            handleAddVariant(variant){
                this.main_image = variant
            }
        }
    }
</script>

<template>
    <Container>
        <RouterLink  to="/" class="redirect-title"> <span class="material-symbols-outlined">arrow_back</span> Barcha mahsulotlar</RouterLink>

        <div class="single__product-wrapper">
            <div class="single__carousel-wrapper">
            <div class="single-carousel">
                <swiper  :modules="modules" class="mySwiper">
                     <swiper-slide  v-for="image_variant in this.single_product.image"> 
                        <img  @click="handleAddVariant(image_variant); this.isFocusVariant=true"  :src="image_variant" alt="Variant Rasmlar">
                     </swiper-slide>
                 </swiper>
            </div>
            <div class="single__carousel-main">
                <swiper  :modules="modules" class="mySwiper">
                 <swiper-slide v-for="variant_image in this.single_product.image">
                    <img :src="this.main_image ? this.main_image : variant_image " alt="Asosiy Rasm">
                 </swiper-slide>
         </swiper>
            </div>
        </div>

        
        <div class="single__product-content">
            <div class="product-feedback">
                <span class="material-symbols-outlined">kid_star</span>
                <span class="material-symbols-outlined">kid_star</span>
                <span class="material-symbols-outlined">kid_star</span>
                <span class="material-symbols-outlined">kid_star</span>
                <span class="material-symbols-outlined">kid_star</span>
                <strong>Baholanmangan</strong>
            </div>
            <strong class="chegirma-foiz">9%</strong>
            <h2 class="product-name"> {{this.single_product.product_name}}</h2>
            <div class="price__info-content">
                <div class="term__price-content">
                    <span>Muddatli to'lovga sotib olish</span>
                    <p>2 000 000 so'm/oyiga</p>
                </div>
                <div class="main__price-content">
                    <span>Narx</span>
                    <p>{{ this.single_product.price }} so'm</p>
                </div>
            </div>
            <div class="monthly-payment">
                <button>3</button>
                <button>6</button>
                <button>12</button>
                <button>18</button>
                <button>24</button>
            </div>
            <div class="content-actions">
                <button class="add__cart-btn">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    Savatga qo'shish
                </button>
                <button class="add__favorite-btn">
                    <span class="material-symbols-outlined">favorite</span>
                </button>
            </div>
        </div>
       
        </div>
    </Container>
</template>


<style >
.redirect-title{
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-weight: 600;
    color: #2020d3a9;
    font-size: 18px;
    text-decoration: none;
}
    .single__product-wrapper{
        display: flex;
        column-gap: 30px;
        /* justify-content: space-evenly; */
        width: 100%;
        height: 500px;
        margin-top: 30px;
        padding: 1rem;
    }


    .single__carousel-wrapper{
        display: flex;
        /* align-items: center; */
        column-gap: 30px;
    }
    .single-carousel{
        max-width: 200px;
        height: 360px;
        padding: 0 10px;
        overflow-y: auto;
        &::-webkit-scrollbar{
            width: 4px;
        }
        &::-webkit-scrollbar-track{
            border-radius: 8px;
        }
        &::-webkit-scrollbar-thumb{
            background-color: var(--warning-color);
            cursor: grab;
        }
    }
    .single-carousel > .swiper .swiper-wrapper{
        display: flex !important;
        flex-direction: column !important; 
        gap: 30px 0;
        .swiper-slide{
            width: 70px !important;
            aspect-ratio: 1/1;
           cursor: pointer;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }

    .single__carousel-main{
        display: flex;
        /* align-items: center; */
        width: 100%;
        max-width: 450px;
        height: 440px;
    }

    .single__carousel-main > .swiper {
        display: grid !important;
        /* place-items: center; */
        width: 100%;
         height: 100%;
    }
    .single__carousel-main > .swiper .swiper-wrapper{
        width: 100%;
        height: 100%;
        .swiper-slide{
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
    }

    .single__product-content{
        .product-feedback{
            display: flex;
            column-gap: 5px;
            align-items: center;
            span{
                color: var(--secondary-color);
                font-size: 16px;
            }
            strong{
                font-weight: 500;
                font-size: 13px;
                color: var(--secondary-color);
            }
        }
        .chegirma-foiz{
            display: inline-block;
            margin-top: 10px;
            background-color: var(--danger-color);
            color: var(--light-color);
            font-size: 15px;
            font-weight: 500;
            padding: 1px 13px;
            border-radius: 20px;
        }
        .product-name{
            margin-top: 20px;
            font-size: 22px;
            font-weight: 500;
        }
    }
    .price__info-content{
        margin-top: 30px;
        display: flex;
        column-gap: 40px;
    }
    .term__price-content{
        span{
            font-size: 14px;
            color: var(--secondary-color);
        }
        p{
            color: var(--dark-color);
            font-size: 20px;
            font-weight: 600;
        }
    }
    .main__price-content{
        span{
            font-size: 14px;
            color: var(--secondary-color);
        }
        p{
            font-weight: 600;
            color: var(--danger-color);
            font-size: 20px;
        }
    }
    .monthly-payment{
        /* max-width: 450px; */
        margin-top: 20px;
        height: 48px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        padding: 2px;
        overflow: hidden;
        button{
            border: 1px solid #d5d8da;
            background-color: transparent;
            width: 100%;
            max-width: 85px;
            height: 100%;
            font-size: 18px;
            font-weight: 600;
            &:last-child{
                border: 2px solid var(--warning-color);
                background-color: #FFEDC2;
            }
            &:hover{
                border: 2px solid var(--warning-color);
                background-color: #FFEDC2;
                cursor: pointer;

            }
        }
    }
    .content-actions{
        margin-top: 1.7rem;
        display: flex;
        column-gap: .6rem;
        .add__cart-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: .4rem;
            width: 100%;
            font-weight: 600;
            font-size: 14px;
            max-width: 360px;
            padding: 1rem 0;
            background-color: var(--warning-color);
            border: none;
            transition: .2s;
            border-radius: 8px;
            &:hover{
                cursor: pointer;
                background-color: var(--warning-hover-color);
            }
            span{
                font-size: 21px;
            }
        }
        .add__favorite-btn{
            display: flex;
            align-items: center;
            justify-content: center;
            padding:  .6rem .7rem;
            background: transparent;
            border: 2px solid #bbbdbe;
            color: #b5b6b8;
            border-radius: 8px;
            transition: .2s;
            &:hover{
                cursor: pointer;
                background-color: #d5d8da3f;
            }
            span{
                font-size: 26px;
            }
        }
    }
</style>