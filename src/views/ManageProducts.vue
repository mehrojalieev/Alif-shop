<script>
import ApiInstance from "@/api/index.js"
import AddProductModal from "@/components/AddProductModal.vue"
    export default {
        components:{AddProductModal},
        data(){
            return {
                All_Product_Categories: [],
                All_Products: [],
                openModal: false,
                category_value: "",
                input_value: '',
                registeredNumber: localStorage.getItem("registered-number") && localStorage.getItem("registered-number")
            }
        },
        methods:{
           async LoadProductCategories(){
                try {
                  const response =  await ApiInstance.get('/products/categories')
                   this.All_Product_Categories = response.data
                    
                } 
                catch (error) {
                    console.log(error);    
                }

            },
           async LoadProducts(){
                try { 
                  const response =  await ApiInstance.get(`/products/${this.category_value ? 'category/'+this.category_value : ''}`)
                   this.All_Products = this.input_value ? this.All_Products.filter(product => product.product_name.toLowerCase().includes(this.input_value.toLowerCase() )) :  response.data
                    
                }
                catch (error) {
                    console.log(error);    
                }
            },
            
        },
        updated(){
            this.LoadProducts()
        },
        mounted(){
            this.LoadProductCategories()
        }
    }
</script>
<template>
    <div class="manage-products">
        <div class="product__top-navigation">
            <h2 class="">Products List</h2>
            <div class="top__navigation-content">
                <img src="../assets/User-avatar.svg.png" alt="User default avatar">
                <p>{{this.registeredNumber}}</p>
            </div>
        </div>
        <div class="product__actions-wrapper">
            <form v-on:submit.prevent="this.LoadProducts" class="product__search-form">
                <span @click="this.input_value = ''" :style="{display: this.input_value ? 'block' : 'none'}"  class="material-symbols-outlined clear__input-btn">close</span>
                <input v-model="this.input_value" type="text" placeholder="Qidirish...">
                <button type="submit" ><span class="material-symbols-outlined">search</span></button>
            </form>
            <div class="manage__btns-action">
                <button @click="this.openModal =! this.openModal" class="add-btn">+ ADD</button>
                <select v-model="this.category_value" @change="LoadProducts" class="categories-select">
                    <option disabled value="">Kataloglar</option>
                    <option :value="categoryItem.category"  v-for="categoryItem in this.All_Product_Categories">
                        {{ categoryItem.category.split("_") .join(" ")}}
                    </option>
                </select>
            </div>
            <AddProductModal :openModal="this.openModal"/>
            
        </div>
        <div class="table-wrapper">

        <table class="products-table">
            <thead class="table-header">
                <tr>
                    <th>Rasmi</th>
                    <th>Mahsulot nomi</th>
                    <th>Narxi</th>
                    <th>Zaxirada</th>
                    <th>Rangi</th>
                    <th>O'zgartirish</th>
                </tr>
            </thead>
            <tbody class="table-body">
                <tr v-for="product in this.All_Products" :key="product.id">

                    <td>
                        <img class="product-image" :src="product.image[0]">
                    </td>
                    <td>{{ product.product_name.slice(0,20) }}...</td>
                    <td>{{ product.price }} so'm</td>
                    <td>{{ product.in_stock }} dona</td>
                    <td>{{ product.color.split("_").join(" ") }}</td>
                    <td class="product__manage-action">
                        <span class="material-symbols-outlined edit-btn">edit</span>
                        <span class="material-symbols-outlined delete-btn">delete</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    </div>
</template>

<style lang="scss">
.manage-products{
    height: 100%
}
    .product__top-navigation{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        border-radius: 8px;
        background-color: var(--light-color);
        width: 100%;
        h2{
            font-size: 26px;
            letter-spacing: .5px;
            font-weight: 500;
            color: var(--secondary-color);
        }
    }
    .top__navigation-content{
        display: flex;
        align-items: center;
        column-gap: 1rem;
        p{
            font-size: 15px;
            color: var(--secondary-color);
            &:hover{
                cursor: pointer;
                color: var(--dark-color);
            }
        }
        img{
            width: 24px;
            aspect-ratio: 1/1;
            object-fit: cover;
        }
    }

    .product__actions-wrapper{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
        border-radius: 8px;
        background-color: var(--light-color);
    }
    .product__search-form{
    position: relative;
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 500px;
        height: 39px;
        border-radius: 8px;
        overflow: hidden;
        border: 2.9px solid var(--warning-color);
        .clear__input-btn{
            position: absolute;
            right: 8%;
            font-size: 23px;
            cursor: pointer;
            &:active{
                transform: scale(0.9);
            }
        }
       
        input{
            flex: 1;
            height: 100%;
            font-size: 14px;
            text-indent: 10px;
            outline: none;
            border: none;
        }
        button{
            display: grid;
            background-color: var(--warning-color);
            transition: .1s;
            place-items: center;
            height: 100%;
            padding: 0 8px;
            border: none;
            &:hover{
                cursor: pointer;
                background-color: var(--warning-hover-color);
            }
            span{
                color: var(--light-color);
                font-size: 22px;
            }
        }
    }

    .manage__btns-action{
        display: flex;
        column-gap: .6rem;
        .add-btn{
            padding: .3rem .9rem;
            border-radius: 8px;
            font-weight: 500;
            font-size: 15px;
            cursor: pointer;
            color: var(--success-color);
            border: 2px solid var(--success-color);
            background-color: var(--success-light-color);
            transition: .2s;
            &:hover{
                color: var(--success-light-color);
                    background-color: var(--success-color);
            }
        }
    }
    .categories-select{
        outline-color: var(--warning-color);
        height: 38px;
        border-radius: 8px;
        cursor: pointer;
        text-transform: capitalize;
        font-size: 15px;
        max-width: 170px;
        border: 2px solid var(--warning-color);
    }

    .table-wrapper{
        margin-top: 1rem;
        height: 500px;
        overflow: auto;
    }


    .products-table{
        margin-top: 1.5rem;
        width: 100%;
   
        text-align: center;
        border-collapse: collapse;
    }
    .table-header{
        background-color: #e4e3e3;
        height: 58px;
        position: sticky;
        top: 0;
        tr{
            
            th{
                font-size: 17px;
                font-weight: 500;
            }
        }
    }
    .products-table > .table-body{
        overflow-y: auto;
        tr{
            vertical-align: middle;
            height: 100%;
            height: 75px !important;
            transition: .2s;
           
            td{
                font-size: 13px;
                font-weight: 500;
            }
        }
        .product-image{
        width: 44px;
        aspect-ratio: 1/1;
        object-fit: contain;
        }
    }
    .table-body > tr:hover{
                 cursor: default;
                background-color: var(--warning-hover-color);
                color: var(--light-color);
                .edit-btn{
                    color: var(--light-color);
                }
              
    }

    .product__manage-action{
        display: flex;
        justify-content: center;
        align-items: center !important;
        column-gap: .7rem;
        margin-top: 1.8rem;
        .edit-btn{
            font-size: 21px;
            transition: .1s;
            color: var(--secondary-color);
            &:hover{
                cursor: pointer;
            }
            &:active{
                transform: scale(0.9);
            }
        }
        .delete-btn{
           @extend .edit-btn;
            color: var(--danger-color) !important;
        }
    }
</style>