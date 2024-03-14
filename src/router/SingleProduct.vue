<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Card from '@/utils/Card.vue';
import Container from '@/utils/Container.vue'; 
import ApiInstance from '@/api';
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
export default {
  components: { Container, Swiper, SwiperSlide, Card },
  setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
      thumbsSwiper.value = swiper; 
    };
    return {
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    };
  },
  data() {
    return {
      isExist: false, 
      main_image: '',
      single_product: {},
      trending_products: [],
    //   focusedIndex: null
    };
  },
  methods: {
    scrollToTop () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
    },
    async loadSingleProduct() { 
      try {
        const response = await ApiInstance.get(`/products/${this.$route.params.id}`);
        this.single_product = response.data[0];
      } catch (error) {
        console.error('Error loading single product:', error);
      }
    },
    async loadTrendingProducts() { 
      try {
        const response = await ApiInstance.get(`/products/category/${this.$route.query.category}`);
        this.trending_products = response.data;
      } catch (error) {
        console.error('Error loading trending products:', error);
      }
    },
    addProductCart(product) {
      this.$store.commit('AddToCart', product);
      this.isExist = this.$store.state.cart_data.some(item => item.id === product.id);
    },
    AddToFavorite(product){
            this.$store.commit('AddToLiked', product)
            if(this.$store.state?.liked_data.findIndex(f => f.id == product.id)!= -1){
            }
        },
    RemoveFromFavorite(){
            this.$store.commit('RemoveProductFromFavorite', this.single_product)
        }
  },
  mounted() {
    this.scrollToTop()
    this.loadSingleProduct();
    this.loadTrendingProducts();
  },
  updated(){
    this.loadSingleProduct()
  }
};
</script>


<template>
    <Container>
        <RouterLink to="/" class="redirect-title"> <span class="material-symbols-outlined">arrow_back</span> Barcha mahsulotlar</RouterLink>

        <div class="single__product-wrapper">

            <div class="single__carousel-wrapper">
                <!-- VARIANTS SWIPER -->
                <div class="variants__swiper-carousel">    
                    <Swiper
                           @swiper="setThumbsSwiper"
                           :spaceBetween="10"
                           :slidesPerView="4"
                           :freeMode="true"
                           :watchSlidesProgress="true"
                           :modules = "modules"
                           class="mySwiper variants-carousel"
                     >
                       <SwiperSlide v-for="(variants, index) in single_product.image" :key="index"> 
                        <img :src="variants"  />
                    </SwiperSlide>
                       
                   
                     </Swiper>
                </div>

                <!-- MAIN SWIPER IMAGE -->
                <div class="main__swiper-carousel">

             <Swiper
                  :style="{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff', }"
                  :slides-per-view="1"
                  :spaceBetween="10"
                  :navigation="true"
                  :thumbs="{ swiper: thumbsSwiper }" 
                  :modules="modules"
                  class="mySwiper2"
                >
        	    <SwiperSlide v-for="(main_image, index) in single_product.image" :key="index">
        	        <img :src="main_image" />
        	    </SwiperSlide>
    
             </Swiper>
        </div>

 
         </div>
      
  
        
        <div class="single__product-content">
            <div class="product-feedback">
                <span class="material-symbols-outlined">kid_star</span>
                <span class="material-symbols-outlined">kid_star</span>
                <span class="material-symbols-outlined">kid_star</span>
                <span class="material-symbols-outlined">kid_star</span>
                <span class="material-symbols-outlined">kid_star</span>
                <strong>Baholanmagan</strong>
            </div>
            <strong class="chegirma-foiz">9%</strong>
            <h2 class="product-name"> {{single_product.product_name}}</h2>
            <div class="price__info-content">
                <div class="term__price-content">
                    <span>Muddatli to'lovga sotib olish</span>
                    <p>2 000 000 so'm/oyiga</p>
                </div>
                <div class="main__price-content">
                    <span>Narx</span>
                    <p>{{ single_product.price }} so'm</p>
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
                <button class="add__cart-btn" @click="addProductCart(single_product)">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    Savatga qo'shish
                </button>
                <button  class="add__favorite-btn">
                    <span   v-if="this.$store.state?.liked_data.findIndex(f => f.id == this.single_product.id)!= -1" @click="RemoveFromFavorite" class="material-symbols-outlined like-btn liked-btn" >heart_minus</span>
                        <span v-else   @click="AddToFavorite(this.single_product)" class="material-symbols-outlined like-btn ">heart_plus</span>
                </button>
            </div>
        </div>
       
        </div>

        <div class="trending__category-wrapper">
            <h3 class="category-title">Sizni qiziqtirishi mumkin</h3>
            <Swiper :space-between="30" :navigation="true" class="mySwiper category-swiper">
                <SwiperSlide @click="scrollToTop" v-for="(category_item, index) in trending_products" :key="index" class="category__card-slide">
                    <Card :product="category_item"/>
                </SwiperSlide>
            </Swiper>
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
    margin-top: 1rem;
    font-size: 18px;
    text-decoration: none;
}

.category-title{
    font-weight: 600;
    color: var(--dark-color);
    font-size: 28px;
    text-decoration: none;
}
    .single__product-wrapper{
        display: flex;
        column-gap: 10px;
        justify-content: space-evenly;
        width: 100%;
        margin-top: 3rem;
     }
    .single__carousel-wrapper{
        display: flex;
        max-width: 600px;
        max-height: 450px;
    }
    /* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */

    .variants__swiper-carousel{
        width: 110px;
        height: 350px;
        overflow: auto;
    }

  
    .variants__swiper-carousel .swiper .swiper-wrapper{
        width: auto;
        height: fit-content;
        display: flex;
        flex-direction: column;
        row-gap: 25px;
        .swiper-slide{
            display: flex;
            width: 100% !important;
            height: 80px;
            cursor: pointer;
            img{
                padding: 5px;
            /* border: 2px solid var(--warning-color); */
            border-radius: 8px;
                width: 72px !important;
                height: 72px;
                object-fit: contain;
            }
        }
    }

    .main__swiper-carousel{
        max-width: 450px;
        max-height: 450px !important;
    }
    .main__swiper-carousel .swiper{
        width: 100%;
    }
    .main__swiper-carousel .swiper .swiper-wrapper{
        width: 100%;
        height: 100%;
        .swiper-slide{
            height: 100%;
            img{
                padding: 0 2rem;
                width: 100%;
                height: 100%;
            }
        }
    }

    /* -------------------------- */

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
            .like-btn{
                color: var(--danger-color);
            }
        }
    }
}
    /* TRENDING CATEGORIES SWIPER STYLES */

    .category-swiper{
        margin-top: 40px;
    }
    .trending__category-wrapper{
        margin-top: 100px;
    }
    .category__card-slide{
        max-width: 220px;
    }


    /* !!!!    RESPONSIVE STYLES */

    @media only screen and (max-width: 1000px){
        .variants__swiper-carousel{
        width: 90px;
        height: 350px;
    }
    .variants__swiper-carousel .swiper .swiper-wrapper .swiper-slide{
        img{
            width: 60px;
            height: 60px;
            padding: 0;
        }
    }
        
        .main__swiper-carousel{
        max-width: 420px;
        max-height: 410px !important;
    }
    .main__swiper-carousel .swiper .swiper-wrapper{
        .swiper-slide{
            img{
                padding: 0 .6rem;
                width: 100%;
                height: 100%;
            }
        }
    }
        .single__product-content{  
        .product-name{
            margin-top: 15px;
            font-size: 22px;
        }
    .price__info-content{
        margin-top: 26px;
        column-gap: 20px;
    }
    .term__price-content{
        span{
            font-size: 13px;
        }
        p{
            font-size: 19px;
        }
    }
    .main__price-content{
        span{
            font-size: 13px;
        }
        p{
            font-size: 19px;
        }
    }
    .monthly-payment{
        margin-top: 18px;
        height: 45px;
        padding: 2px;
        button{
            max-width: 70px;
            font-size: 16px;
         
        }
    }
    .content-actions{
        margin-top: 1.6rem;
        column-gap: .6rem;
        .add__cart-btn{
            column-gap: .4rem;
            font-size: 14px;
            max-width: 280px;
            padding: .8rem 0;
           
            span{
                font-size: 20px;
            }
        }
        .add__favorite-btn{
            padding:  .2rem .6rem;
          
            span{
                font-size: 24px;
            }
        }
    }
}
    }
    @media only screen and (max-width: 911px){
        .variants__swiper-carousel{
        width: 80px;
        height: 310px;
    }
    .variants__swiper-carousel .swiper .swiper-wrapper .swiper-slide{
        img{
            width: 55px;
            height: 55px;
            padding: 0;
        }
    }
        
        .main__swiper-carousel{
        max-width: 350px;
        max-height: 410px !important;
    }
    .main__swiper-carousel .swiper .swiper-wrapper{
        .swiper-slide{
            img{
                padding: 0 .7rem;
            }
        }
    }
        .single__product-content{  
        .product-name{
            margin-top: 15px;
            font-size: 22px;
        }
    .price__info-content{
        margin-top: 26px;
        column-gap: 20px;
    }
    .term__price-content, .main__price-content{
        span{
            font-size: 12px;
        }
        p{
            font-size: 17px;
        }
    }
   
}
    }

    @media only screen and (max-width: 840px){
        .category__card-slide{
            margin-right: 10px !important;
        }
        .category__card-slide > .product-card{
            max-width: 200px;
        padding: .5rem .6rem;
            img{
            width: 100%;
            height: 135px;
        }
        .like-btn{
            top: .4rem;
            right: .6rem;
            font-size: 21px;
        }
        .product-name{
            margin:12px 0;
            height: 40px;
            font-size: 13px;
        }
        span{
            font-size: 11px;
            padding: 2px 6px;
        }
        .old-price{
            font-size: 12px !important;
        }
        .price{
            font-size: 14px;
            font-weight: 400;
        }
        .add__cart-btn{
            height: 32px;
            span{
                font-size: 20px;
            }
        }
        }
    }

    @media only screen and (max-width: 819px){
            .main__swiper-carousel{
        max-width: 330px;
        max-height: 410px !important;
     }
        .single__product-content{
        .term__price-content, .main__price-content{
        span{
            font-size: 11px;
        }
        p{
            font-size: 15px;
        }
    }
        }
       
    }

    @media only screen and (max-width: 767px){

        .redirect-title{    
            display: none;
        }
        .variants__swiper-carousel{
            display: none;
        }
        .single__product-wrapper{
            flex-direction: column;
        }
        .main__swiper-carousel{
        max-width: 930px;
        max-height: 410px !important;
    }
    .single__carousel-wrapper{
        margin: auto;
    }
    .main__swiper-carousel > .swiper .swiper-wrapper{
        max-width: 400px;
        margin: auto;
    }
    .main__swiper-carousel > .swiper .swiper-wrapper .swiper-slide{
        max-width: 450px;
        img{
            padding: 1rem;
        }
    }
    .single__product-content{
        .price__info-content{
            max-width: 500px;
            column-gap: 10px;
            justify-content: space-between;
            .term__price-content, .main__price-content{
                span{
                    font-size: 14px;
                }
                p{
                    margin-top: 5px;
                    font-size: 20px;
                }
            }
        }
        .monthly-payment{
        margin-top: 18px;
        height: 48px;
        padding: 2px;
        button{
            max-width: 270px;
            font-size: 16px;
         
        }
    }
        .content-actions{
            width: 100%;
            padding: .8rem 1rem;
            background-color:var(--light-color) !important;
            position: fixed;
            left: 0;
            bottom: 1px;
            z-index: 1000 !important; 
            .add__cart-btn{
            z-index: 1000 !important;
                padding: .7rem 0;
             margin: auto;
             font-size: 16px;
             max-width: 700px;
            span{
                font-size: 22px;
            }
        }
        .add__favorite-btn{
            display: none;
            padding:  .2rem .6rem;
          
            span{
                font-size: 24px;
            }
        }
    }
    }
    }

    @media only screen and (max-width:500px){
        .main__swiper-carousel{
        max-width: 350px;
        max-height: 440px !important;
    }
    .main__swiper-carousel > .swiper .swiper-wrapper{
        max-width: 370px;
        margin: auto;
    }
    .main__swiper-carousel > .swiper .swiper-wrapper .swiper-slide{
        max-width: 450px;
        img{
            padding: 1rem;
        }
    }
    .single__product-content{
        margin-top: 1rem;
        .price__info-content{
            max-width: 500px;
            column-gap: 10px;
            justify-content: space-between;
            .term__price-content, .main__price-content{
                span{
                    font-size: 13px;
                }
                p{
                    margin-top: 5px;
                    font-size: 18px;
                }
            }
        }
        .monthly-payment{
        margin-top: 18px;
        height: 48px;
        padding: 2px;
        button{
            max-width: 270px;
            font-size: 16px;
         
        }
    }
        .content-actions{
            padding: .8rem 1rem;
    
    }
    }
    .category-title{
        font-size: 24px;
    }
    }
    @media only screen and (max-width:382px){
        .main__swiper-carousel{
        max-width: 300px;
        max-height: 400px !important;
    }
    .main__swiper-carousel > .swiper .swiper-wrapper{
        max-width: 370px;
        margin: auto;
    }
    .main__swiper-carousel > .swiper .swiper-wrapper .swiper-slide{
        max-width: 450px;
        img{
            padding: 1rem;
        }
    }
    .single__product-content{
        .price__info-content{
            column-gap: 10px;
            justify-content: space-between;
            .term__price-content, .main__price-content{
                span{
                    font-size: 12px;
                }
                p{
                    margin-top: 5px;
                    font-size: 16px;
                }
            }
        }
        .monthly-payment{
        margin-top: 18px;
        height: 42px;
        padding: 2px;
        button{
            max-width: 270px;
            font-size: 15px;
         
        }
    }
        .content-actions{
            padding: .8rem 1rem;
    
    }
    }
    .category-title{
        font-size: 24px;
    }
    }
    @media only screen and (max-width: 338px){
        .single__product-content{
            .product-name{
                font-size: 19px;
            }
        .price__info-content{
            column-gap: 10px;
            justify-content: space-between;
            .term__price-content, .main__price-content{
                span{
                    font-size: 12px;
                }
                p{
                    margin-top: 1px;
                    font-size: 15px;
                }
            }
        }
        .monthly-payment{
        margin-top: 18px;
        height: 42px;
        padding: 2px;
        button{
            max-width: 270px;
            font-size: 15px;
         
        }
    }
        .content-actions{
            padding: .8rem 1rem;
    
    }
    }
    .category-title{
        font-size: 18px;
    }
    }
</style>