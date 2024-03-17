<script>
    import Container from '@/utils/Container.vue'
    import DeleteModal from '@/components/DeleteModal.vue'
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
export default {
    components:{
        Container,
        DeleteModal
    },
    data(){
        return{
            total_price: 0,
            isOpenModal: false,
            single: null
        }
    },
    methods:{
        AddToCart(product){
            let extraProduct = {...product}
            extraProduct = {...product, count:1}
            this.$store.commit("AddToCart", extraProduct)
        },
        RemoveProductCart(product){
            let extraProduct = {...product}
            extraProduct = {...product}
            this.$store.commit("RemoveFromCart", extraProduct)
        },
        // DeleteProductCart(product){
        //     console.log(product);
        //         this.$store.commit("DeleteProductCart", product)
        // }
        click(e, product){
            if(e.target.closest(".delete-action")){
                this.single(product)
            }
        },
        btnclick(e){
            if(e.target.closest(".delete-btn")){
                this.isOpenModal = false;
                
                this.$store.commit("DeleteProductCart", this.single)
                e.target.closest(".delete-btn").dataset.productId
                e.target.parentElement.parentElement.parentElement.dataset.id
            }
        }
    },
   
   
    mounted(){
        this.$store.state.cart_data.filter(product =>  this.total_price += product.price)
    },
    updated(){
        this.$store.state.cart_data.filter(product =>  this.total_price += product.price)

    },
}
</script>

<template>
    <Container>
        <div class="cart">
            <div v-if="this.$store.state.cart_data.length > 0" class="cart__product-wrapper">
                <h3 class="cart-title">Savat </h3>
                <div class="product__cards-container">
                    <div @click="btnclick" class="product__box-container">
                        <div @click="(e)=> click(e, product)"  :data-id="product.id" v-for="product in this.$store.state.cart_data"  class="product-box">
                            <img :src="product.image[0]" :alt="product.product_name">
                            <div class="product-info">
                                <RouterLink class="product-name" to="{name}" >{{product.product_name}}</RouterLink>
                                <strong>Narx:  {{product.price}} so'm</strong>
                                <strong>Brend: {{product.brand}}</strong>
                                <p>Yetkazib berish muddati: Toshkent bo'ylab kun davomida viloyatlar bo'ylab 3 kungacha</p>
                                <div class="box-actions">
                                    <div class="count-action">
                                        <button :disabled="product.count === 1" @click="RemoveProductCart(product)">-</button>
                                        <strong>{{product.count}}</strong>
                                        <button @click="AddToCart(product)">+</button>
                                    </div>
                                    <div @click="isOpenModal=true" class="delete-action">
                                        <span class="material-symbols-outlined">delete</span>
                                        <strong>O'chirish</strong>
                                    </div>
                                </div>
                            </div>
                            <DeleteModal :product="product"  :isOpenModal="this.isOpenModal"/>
                        </div>
                    </div>

                    <div class="product-content-wrapper">
                        <div class="total-item">
                            <h5>Jami</h5>
                            <p>{{this.total_price}} so'm</p>
                        </div>
                        <div class="count-item">
                            <span>Tovarlar soni</span>
                            <p>{{this.$store.state.cart_data.length}} dona</p>
                        </div>
                        <div class="delivery-item">
                            <span>Yetkazib berish</span>
                            <p class="free-text">Bepul</p>
                        </div>
                        <div class="delivery-content">
                            <span>Bepul yetkazib berish</span>
                            <p>Yetkazib berish: Toshkent bo'ylab 24 soat ichida, Respublika bo'ylab 3 kungacha</p>
                        </div>
                        <button class="payment-term">Muddatli to'lovga olish</button>
                        <button class="payment-card">Karta orqali sotib olish</button>
                    </div>
                </div>

            </div>
            <div v-else class="empty__cart-wrapper">
                <div class="empty-content">
                    <h3>Savat hozircha bo'sh</h3>
                    <p>Mahsulotlarni topish uchun katalogni ko'ring yoki qidiruvdan foydalaning</p>
                    <RouterLink class="category-link" to="/">Katalogga o'tish</RouterLink>
                    <RouterLink class="home-link" to="/">Asosiy ekranga</RouterLink>
                </div>
            </div>
        </div>
    </Container>
</template>

<style lang="scss" scoped>
    .cart-title{
        font-size: 30px;
        font-weight: 500;
    }

    .product__cards-container{
        display: flex;
        column-gap: 15px;
        justify-content: space-between;
        width: 100%;
        height: 500px;
    }
    .product__box-container{
        width: 100%;
        height: 400px;
        max-width: 740px;
        margin-top: 1rem;
    }
    .product-box{
        margin-top: 1rem;
        border-top: 1px solid #d5d6d7;
        display: flex;
        align-items: flex-start;
        column-gap: 1.3rem;
        padding: 1rem 0;
        width: 100%;
        // height: 215px;
        img{
            width: 72px;
            object-fit: contain;
            aspect-ratio: 1/1;
        }
        .product-info{
            width: 100%;
            margin-top: 6px;
            .product-name{
                font-weight: 500;
                font: 14px;
                text-decoration: none;
                color: var(--dark-color);
            }
            strong{
                display: block;  
                margin-top: 5px;
                font-weight: 500;
                color: #5d6d7d;
                font-size: 12px;
                letter-spacing: .5px;
            }
            p{
                margin-top: 10px;
                font-size: 12px;
                color: #5d6d7d;
            }
        }
    }
    .box-actions{
        margin-top: 4rem;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        column-gap: 10px;
        .count-action{
            display: flex;
            align-items: center;
            justify-content: space-between;
            column-gap: 14px;
            width: 100%;
            max-width: 100px;
            background-color: #F4F6F7;
            padding: .1rem .8rem;
            border-radius: 8px;
            button{
                border: none;
                background-color: transparent;
                font-size: 24px;
                cursor: pointer;
                &:active{
                    transform: scale(0.95);
                }
            }
            strong{
                margin-top: 0;
                font-size: 18px;
                color: var(--dark-color);
            }
        }
        .delete-action{
            display: flex;
            align-items: center;
            column-gap: 5px;
            cursor: pointer;
            span{
                margin-top: 2px;
                font-size: 21px;
                color: #5d6d7d;
            }
            strong{
                font-size: 14px;
            }
        }
    }
    .product-content-wrapper{
        max-width: 350px;
        width: 100%;
        border-radius: 8px;
        height: fit-content;
        background-color: #F4F6F7;
        padding: 1rem 1.5rem;
        .total-item{
            margin-bottom: .8rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            h5{
                font-size: 20px;
            }
            p{
                font-size: 16px;
            }
        }

        .count-item, .delivery-item{
            margin: 4px 0;
            display: flex;
            justify-content: space-between;
            span{
                color: #788988;
                font-size: 14px;
            }
            p{
                font-size: 14px;
                color: #24272c;
            }
            .free-text{
                color: #39b980;
            }
        }
        .delivery-content{
            margin-top: 1rem;
            padding-top: 5px;
            border-top: 1px solid #d5d6d7;
            span{
                color: #39b980;
                font-size: 12px;
            }
            p{
                font-size: 12px;
                color: #a5b1bb;
            }
        }
        .payment-term, .payment-card{
            margin-top: .8rem;
            width: 100%;
            padding: .8rem 0;
            border-radius: 8px;
            font-size: 15px;
            color: var(--dark-color);
            border: none;
            transition: .2s;
            cursor: pointer;
            font-weight: 500;
        }
        .payment-term{
            background-color: var(--warning-color);
            &:hover{
                background-color: var(--warning-hover-color);
            }
            
        }
        .payment-card{
            background-color: var(--light-color);
            border: 2px solid #d5d6d7;
        }
    }


    // EMPTY PAGE STYLES
    .empty__cart-wrapper{
        width: 100%;
        margin-top: 100px;
    }
    .empty-content{
        margin: auto;
        text-align: center;
        padding: 0 1rem;
        h3{
            font-size: 34px;
            font-weight: 500;
            color: var(--dark-color);
            margin-bottom: 0.5rem;
        }
        p{
            margin: auto;
            font-size: 16px;
            color: var(--secondary-color);
            max-width: 24rem;
            line-height: 29px;
            margin-bottom: 2rem;
        }
        .category-link, .home-link{
            margin: 0 auto 1rem;
            display: block;
            width: 100%;
            max-width: 22rem;
            padding: 11px 0;
            text-decoration: none;
            border-radius: 8px;
            color: var(--dark-color);
            font-weight: 500;
            cursor: pointer;
        }
        .category-link{
            background-color: var(--warning-color);
            &:hover{
                background-color: var(--warning-hover-color);
            }
        }
        .home-link{
            border: 2px solid #cad1d7;
            &:hover{
                background-color: var(--secondary-light-color);
            }
        }
    }


    // RESPONSIVE STYLES
    @media only screen and (max-width: 796px){
        .product__cards-container{
            // display: block;
            flex-direction: column;
            align-items: center;
        }
        .product__box-container{
            margin-bottom: 5rem;
            height: fit-content;
        }
      .product-content-wrapper{
        max-width: 750px;
      }
    }

@media only screen and (max-width: 680px){
    .empty__cart-wrapper{
        margin-top: 10px;
    }
    .empty-content{
        h3{
            font-size: 26px;
        }
        p{
            font-size: 14px;
            max-width: 20rem;
            line-height: 26px;
            margin-bottom: 1.7rem;
        }
        .category-link, .home-link{
            font-size: 15px;
            max-width: 40em;
            padding: 10px 0;
        }
      
    }

}
</style>