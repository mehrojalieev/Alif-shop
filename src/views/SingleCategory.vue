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
            CategoryData: [],
            CategoryBrand: [],
            selected_brand: false,
            BrandsList: '',
            min_price: 50000, 
            max_price: 3210000
        }
    },
    methods:{
        LoadSingleCategory(){
            ApiInstance(`/products/category/${this.$route.params.category_name}`)
            .then(response =>{ 
                this.CategoryBrand = response?.data           
                this.CategoryData = response.data?.filter(br => br.price == this.max_price ? br  : this.BrandsList ? br.brand.toLowerCase().includes(this.BrandsList.toLowerCase()) : br)
            })
        },
        BrandValue(value){
            this.selected_brand =! this.selected_brand
            if(this.BrandsList == ""){
                this.BrandsList = value
                this.LoadSingleCategory();
            } else{
                this.LoadSingleCategory();
                this.BrandsList = ''

            }
            console.log(this.BrandsList)
        },
        AdaptPrice(){
        console.log(this.min_price, this.max_price);
        }
    },
    mounted(){
        this.LoadSingleCategory()
    },
    updated(){
        this.AdaptPrice()
        this.LoadSingleCategory()
    }
} 

</script>


<template>
    <Container>
        <div class="single__category-wrapper">
                <div class="category__breakgrump">
                    <RouterLink to="/categories" class="category-link">Tovarlar katalogi</RouterLink>
                    <p>{{this.$route.params.category_name}}lar</p>
                </div>
                <h2 class="category-title">{{this.$route.params.category_name}}lar</h2>
                <div class="category__render-wrapper">


                    <div class="category__actions-wrapper">
                        <div class="manage__price-action">
                            <h4>Narx</h4>
                            <div class="range__inputs"> 
                                <input @input="this.AdaptPrice" type="number" v-model="this.min_price" placeholder="dan"/>
                                <input @input="this.AdaptPrice" type="number" v-model="this.max_price" placeholder="gacha"/>
                            </div>
                        </div>
                        <div class="brand-action">
                            <h5 class="brand-title">Brend</h5>
                            <div class="brands-box">
                                <div v-for="brand in this.CategoryBrand " class="brand-item">
                                    <input :selected="selected_brand" @click="(e) => BrandValue(e.target.value)" :value="brand.brand"   :id="brand.brand"  type="checkbox"/>
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
    margin-top: 1rem;
}
.category__actions-wrapper{
    width: 100%;
    max-width: 236px;
    padding: .8rem;

}

.brand-action{
    margin-top: 1rem;
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
// PRICE ACTION STYLES
.manage__price-action{
    .range__inputs{
        margin-top: 1rem;
        width: 100%;
        input{
            outline: none;
            margin-top: 5px;
            border: 1px solid #E3E8EA;
            border-radius: 8px;
            text-indent: 10px;
            font-size: 16px;
            height: 48px;
            width: 100%;
            &:focus{
                border: 2px solid var(--warning-color);
            }
        }
    }
}


//CATEGORY CARD STYLES
.category__card-wrapper{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem .5rem ;
    width: 100%;
}

@media only screen and (max-width: 996px) {
        .category__card-wrapper{
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem .7rem;
            .product-card{
                img{
                    height: 160px;
                }
                .product-name{
                    margin: 3px 0;
                }
              
            }
        }
}
@media only screen and (max-width: 850px){
    .category__render-wrapper{
        column-gap: 1rem;
    }
    .category__actions-wrapper{
        max-width: 210px;
    }
    .category__card-wrapper{
        .product-card{
                img{
                    height: 160px;
                }
                .product-name{
                    font-size: 12px;
                    margin: 3px 0;
                }
                span{
                    font-size: 18px;
                }
                .monthly-price{
                    font-size: 11px;
                }
              
            }
    }
}

@media only screen and (max-width: 769px){
    .category__card-wrapper{
    grid-template-columns: repeat(2, 1fr);
    .product-card{
        max-width: 230px;
                img{
                    height: 170px;
                }
                .product-name{
                    font-size: 14px;
                    margin: 3px 0;
                }
                span{
                    font-size: 18px;
                }
                .monthly-price{
                    font-size: 11px;
                }
              
            }
}
}
@media only screen and (max-width: 700px){
    .category__render-wrapper{
        flex-direction: column;
    }
    .category__actions-wrapper{
        width: 100%;
        max-width: 100%;
    }
    .range__inputs{
        display: flex;
        column-gap: 10px;
        input{width: 100%;}
    }
    .brands-box{
        display: flex;
        align-items: flex-start;
        height: fit-content;
        gap: 1rem 1.5rem;
        flex-wrap: wrap;
        .brand-item{
            label{
                font-size: 16px;
                margin-left: 1px;
            }
        }
    }
    .category__card-wrapper{
        margin-top: 3rem;
        .product-card{
            max-width: 280px;
            .product-name{
                margin: 10px 0;
                font-size: 15px;
            }
            .like-btn{
                top: 5px !important;
                font-size: 22px;
                right: 4px !important;
            }
            .price{
                font-size: 15px;
            }
            .old-price{
                font-size: 15px;
            }
            span{
                font-size: 20px;
            }
            
            img{
                height: 160px;
            }
            .add__cart-btn{
                max-width: 280px;
                height: 34px;
                font-size: 14px;
            }
        }
    }
}
@media only screen and (max-width: 504px){
    .range__inputs{
        display: flex;
        column-gap: 10px;
    }
    .brands-box{
  
        gap: 1rem 1.5rem;
        flex-wrap: wrap;
        .brand-item{
            label{
                font-size: 15px;
            }
        }
    }
    .category__card-wrapper{
        .product-card{
            max-width: 240px;
            .product-name{
                margin: 10px 0;
                font-size: 15px;
            }
            .price{
                font-size: 15px;
            }
            .old-price{
                font-size: 15px;
            }
            span{
                font-size: 20px;
            }
            
            img{
                height: 160px;
            }
            .add__cart-btn{
                max-width: 280px;
                height: 34px;
                font-size: 14px;
            }
        }
    }
}
@media only screen and (max-width: 412px){
    .brands-box{
          .brand-item{
            label{
                font-size: 15px;
            }
        }
    }
    .category__card-wrapper{
        .product-card{
            .product-name{
                font-size: 14px;
            }
           
            .price{
                font-size: 15px;
            }
            .old-price{
                font-size: 13px;
            }
            span{
                font-size: 20px;
            }
            .monthly-price{
                font-size: 10px;
            }
            img{
                height: 140px;
            }
            .add__cart-btn{
                height: 30px;
                font-size: 14px;
            }
        }
    }
}
@media only screen and (max-width: 356px){
    .brands-box{
  
        .brand-item{
            label{
                font-size: 14px;
            }
        }
    }
    .category__card-wrapper{
        .product-card{
            .product-name{
                font-size: 13px;
            }
            .price{
                font-size: 15px;
            }
            .old-price{
                font-size: 13px;
            }
           
            .monthly-price{
                display: none;
            }
            img{
                height: 135px;
            }
            .add__cart-btn{
                height: 27px;
                font-size: 13px;
            }
        }
    }
}

@media only screen and (max-width: 316px){
    .category__breakgrump{
        .category-link{
            font-size: 12px;
        }
    }
    .range__inputs{
        input{
            font-size: 13px !important;
        }
    }
    .brands-box{
        .brand-item{
            label{
                font-size: 14px;
            }
        }
    }
    .category__card-wrapper{
        .product-card{
            padding: 2px 5px;
            .product-name{
                font-size: 12px;
            }
            .price{
                font-size: 13px;
            }
            .old-price{
                font-size: 12px;
            }
           
            img{
                height: 135px;
            }
            .add__cart-btn{
                height: 27px;
                font-size: 12px;
                span{font-size: 17px;}
            }
        }
    }
}
</style>