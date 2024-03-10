<script>
import Container from '@/utils/Container.vue'
import { RouterLink } from 'vue-router';
import authModal from '@/utils/auth-modal.vue';
export default {
    components:{Container, authModal},
    data(){
        return {
            isOpenModal: false,
            openCategory: false,
            openClearBtn: false,
            isFocosed: false,
            input_value: ""
        }
    },
    methods:{
        clearInput(){
            this.input_value = ''
        }
    }
}
</script>

<template>
    <nav>
        <Container>
            <div class="nav-wrapper">
                <RouterLink to="/">
                    <img class="logo-image" src="../assets/logo.svg" alt="Nav Logo">
                </RouterLink>
                <div @click="openCategory =! openCategory" class="category-action">
                    <span v-if="openCategory" class="material-symbols-outlined">close</span>
                    <span v-else class="material-symbols-outlined">menu</span>
                    <p>Tovarlar katalogi</p>
                </div>
                <form  class="search-form">
                    <input  @focus="openClearBtn=true"  v-model="input_value" type="text" placeholder="Tovarlarni izlash">
                    <span :style="{display: openClearBtn ? 'block' : 'none'}" @click="clearInput"  class="material-symbols-outlined clear__input-btn">close</span>
                    <button type="submit">
                        <span  class="material-symbols-outlined">search</span>
                    </button>
                </form>
                <div class="nav-actions">
                    <RouterLink to="cart" class="action-item">
                        <span class="material-symbols-outlined">shopping_cart</span>
                        <p>Savat</p>
                    </RouterLink>
                    <RouterLink to="favorites" class="action-item favorite-item">
                        <span class="material-symbols-outlined">favorite</span>
                        <p>Saralanganlar</p>
                    </RouterLink>
                    <button type="button" @click="isOpenModal=!isOpenModal"  class="auth-link">Kirish</button>
                    <authModal :isOpenModal="isOpenModal"/>
                </div>
            </div>
            <!-- RESPONSIVE CONTAINER -->
            <div class="responsive__navigation">
                <div class="navigation-header">
                    <img src="../assets/logo.svg" alt="Logo">
                    <select class="language-category">
                    <option value="uzb">UZB</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
                </div>

                <form @focusout="isFocosed=false" :style="{border: isFocosed ? '2px solid #FFBE1F' : '2px solid #eee' }" class="navigation-form">
                    <input @focus="isFocosed=true"  type="text" placeholder="Tovarlarni izlash">
                    <span :style="{display: isFocosed ? 'block' : 'none'}" class="material-symbols-outlined clear__input-icon">close</span>
                    <button :style="{display: isFocosed ? 'block' : 'none'}" class="search-btn">Qidirish</button>
                    <span :style="{display: !isFocosed ? 'block' : 'none'}" class="material-symbols-outlined search-icon">search</span>

                </form>

            </div>
            
            <!-- BOTTOM ACTION  -->
            <div class="tablet__navbar-actions">
                <RouterLink class="item-link" to="/">
                    <span class="material-symbols-outlined">home</span>
                    <p>Asosiy</p>
                </RouterLink>
                <Router to="/" class="item-link item-link__category">
                    <span class="material-symbols-outlined">manage_search</span>
                    <p>Katalog</p>
                </Router>
                <RouterLink class="item-link" to="cart">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <p>Savat</p>
                </RouterLink>
                <RouterLink class="item-link" to="favorites">
                    <span class="material-symbols-outlined">favorite</span>
                    <p>Saralanganlar</p>
                </RouterLink>
                <RouterLink class="item-link" to="/">
                    <span class="material-symbols-outlined">person</span>
                    <p>Profil</p>
                </RouterLink>
                
            </div>
        </Container>
    </nav>
</template>


<style lang="scss">

    .nav-wrapper{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 10px;
    }
    .logo-image{
        width: 110px;
        height: 42px;
    }
    .category-action{
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 5px;
        background-color: var(--warning-color);
        padding:  12px;
        min-width: 200px;
        border-radius: 8px;
        transition: 0.2s;
        &:hover{
            cursor: pointer;
            background-color: var(--warning-hover-color);
        }
        p{
            font-size: 17px;
            color: var(--dark-color);
        }
    }
    .search-form{
        width: 100%;
        max-width: 570px;
        height: 50px;
        display: flex;
        border-radius: 8px;
        align-items: center;
        overflow: hidden;
        position: relative;
        input{
            border: none;
            outline: none;
            text-indent: 15px;
            font-size: 16px;
            height: 100%;
            border-top-left-radius: 8px;
            border-bottom-left-radius: 8px;
         border: 2px solid var(--warning-color);
            flex: 1;
        }
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            height: 100%;
            padding: 0 10px;
            background-color: var(--warning-color);
            transition: .2s;
            &:hover{
                cursor: pointer;
                background-color: var(--warning-hover-color);
            }
            span{
                font-size: 27px;
                color: var(--secondary-color);
            }
        }
        .clear__input-btn{
            position: absolute;
            right: 2em;
            font-size: 28px;
            color: var(--secondary-color);
            cursor: pointer;
            transition: 0.1s;
            &:active{
                transform: scale(0.90);
            }
        }
    }
    .nav-actions{
        display: flex;
        align-items: center;
        column-gap: 28px;
     
        .action-item{
            text-align: center;
            text-decoration: none;
            &:hover span{color: var(--warning-color);}
            span{
                color: var(--dark-color);
                font-size: 26px;
            }
            p{
                font-size: 13px;
                color: var(--secondary-color);
            }
        }
        .auth-link{
            text-decoration: none;
            font-size: 17px;
            color: var(--dark-color);
            padding: 9px 12px;
            border: 2px solid var(--warning-color);
            border-radius: 8px;
            transition: 0.2s;
            background: transparent;
            &:hover{
                background-color: var(--warning-hover-color);
                cursor: pointer;
            }
        }
    }

    // RESPONSIVE CONTENT STYLES

    .responsive__navigation{
        display: none;
    }


    .tablet__navbar-actions{
        display: none ;
        align-items: center;
        justify-content: space-around;
        background-color: var(--light-color);
        padding: .5rem 1rem;
        width: 100%;
        height: 60px;
        position: fixed;
        bottom: 0px;
        left: 0;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        .item-link{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-decoration: none;
            color: var(--secondary-color);
            span{
                font-size: 30px;
            }
            p{
                font-size: 15px;
            }
        }
        .item-link__category{
            background: transparent;
            border: none;
        }
    }

    .navigation-header{
        display: flex;
        justify-content: space-between;
    }
    .navigation-form{
        margin-top: 10px;
        display: flex;
        height: 47px;
        border: 2px solid #eee;
        border-radius: 8px;
        align-items: center;
        padding: 0 .5rem;
        column-gap: 6px;
        input{
            flex: 1;
            border: none;
            height: 100%;
            text-indent: 5px;
            outline: none;
            font-size: 15px;
        }
        .clear__input-icon{
            display: none;
            color: var(--secondary-color);
        }
        .search-btn{
            display: none;
            background-color: var(--warning-color);
            padding: 6px 10px;
            border: none;
            font-weight: 600;
            border-radius: 8px;
        }
        .search-icon{
            color: var(--secondary-color);
        }
    }



    @media only screen and (max-width: 1186px){
        .nav-wrapper{
            column-gap: 20px;
        }
        .category-action{
        padding:  11px 6px;
        p{
            font-size: 15px;
        }
        }
        .search-form{
            max-width: 510px;
        }
        .nav-actions{
            
            .action-item{
                span{
                font-size: 25px;
            }
            p{
                font-size: 13px;
            }
            }
        }
    }
    @media only screen and (max-width: 1070px){
        .nav-wrapper{
            column-gap: 6px;
        }
        .category-action{
            min-width: 10px;
        padding:  10px 5px;
        p{
            font-size: 13px;
        }
        span{
            font-size: 23px;
        }
        }
        .search-form{
            height: 45px;
            max-width: 510px;
            input{
                font-size: 15px;
            }
        }
        .nav-actions{
            .favorite-item{
                display: none;  
            }
            .action-item{
                span{
                font-size: 25px;
            }
            p{
                font-size: 13px;
            }
            }
        }
    }
    @media only screen and (max-width: 996px){
        .nav-wrapper{
            column-gap: 7px;
        }
        .category-action{
            min-width: 10px;
        padding:  10px 18px;
        p{
            display: none;
        }
        span{
            font-size: 22px;
        }
        }
        .search-form{
            height: 45px;
            max-width: 550px;
            input{
                font-size: 15px;
            }
        }
        .nav-actions{
            .action-item{
                span{
                font-size: 25px;
            }
            p{
                font-size: 13px;
            }
            }
        }
    }

    @media only screen and (max-width: 900px){
        .nav-wrapper{
            column-gap: 7px;
        }
        .search-form{
            height: 43px;
            max-width: 450px;
        }
    }
    @media only screen and (max-width: 820px){
        .logo-image{
        width: 95px;
    }
    .category-action{
            min-width: 1px;
        padding:  8px 14px;
        span{
            font-size: 21px;
        }
        }
        .search-form{
            height: 40px;
            max-width: 380px;
            input{
                font-size: 14px;
            }
            button{
            padding: 0 8px;
            span{
                font-size: 23px;
            }
        }
        }
        .nav-actions{
            .action-item{
                span{
                font-size: 22px;
            }
            }
            .auth-link{
            font-size: 15px;
            padding: 8px 10px;

        }
        }
        .clear__input-btn{
            right: 1.9em !important;
            font-size: 24px !important;
        }
    }

    @media only screen and (max-width: 728px){
        .nav-wrapper{
            column-gap: 20px;
        }
        .logo-image{
        width: 95px;
    }
    .category-action{
        padding:  8px 14px;
        span{
            font-size: 22px;
        }
        }
        .search-form{
            height: 40px;
            max-width: 340px;
            input{
                font-size: 14px;
            }
            button{
            padding: 0 8px;
            span{
                font-size: 23px;
            }
        }
        }
        .nav-actions{
            .action-item{
                span{
                font-size: 22px;
            }
            }
            .auth-link{
            font-size: 15px;
            padding: 8px 10px;

        }
        }
        .clear__input-btn{
            right: 1.9em !important;
            font-size: 24px !important;
        }
    }

    @media only screen and (max-width: 680px){
        .nav-wrapper{
            display: none;
        }
        .responsive__navigation{
            display: block;
        }

        .tablet__navbar-actions{
            display: flex;
        }
    }

    @media only screen and (max-width: 538px){
        .tablet__navbar-actions{
            column-gap: 10px;
        }
        .tablet__navbar-actions{
        padding: .5rem 1rem;
        width: 100%;
        height: 60px;
        .item-link{
            span{
                font-size: 25px;
            }
            p{
                font-size: 13px;
            }
        }

    }
    }

    @media only screen and (max-width: 420px){
        .tablet__navbar-actions{
            column-gap: 10px;
        padding: .5rem .4rem;
        height: 55px;
        .item-link{
            span{
                font-size: 24px;
            }
            p{
                font-size: 12px;
            }
        }

    }
    }
    @media only screen and (max-width: 330px){
        .navigation-form{
        height: 47px;
        padding: 0;
        column-gap: 1px;
        input{
            font-size: 12px;
        }
        .clear__input-icon{
            display: none !important;
        }
        .search-btn{
            padding: 6px 5px;
            font-size: 12px;
            }
    }

        .tablet__navbar-actions{
            column-gap: 10px;
        padding: .5rem .2rem;
        height: 51px;
        .item-link{
            span{
                font-size: 23px;
            }
            p{
                font-size: 11px;
            }
        }

    }
    }
    @media only screen and (max-width: 284px){
        .tablet__navbar-actions{
            column-gap: 1px;
        height: 40px;
        .item-link{
            span{
                font-size: 24px;
            }
            p{
                display: none;
            }
        }

    }
    }
</style>