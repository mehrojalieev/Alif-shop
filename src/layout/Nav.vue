<script>
import Container from '@/utils/Container.vue'
import { RouterLink } from 'vue-router';
export default {
    components:{Container},
    data(){
        return {
            openCategory: false,
            openClearBtn: false,
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
                <img class="logo-image" src="../assets/logo.svg" alt="Nav Logo">
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
                    <RouterLink to="/" class="action-item">
                        <span class="material-symbols-outlined">shopping_cart</span>
                        <p>Savat</p>
                    </RouterLink>
                    <RouterLink to="/" class="action-item favorite-item">
                        <span class="material-symbols-outlined">favorite</span>
                        <p>Saralanganlar</p>
                    </RouterLink>
                    <Router-Link to="/" class="auth-link">Kirish</Router-Link>
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

            </div>
            
            <!-- BOTTOM ACTION  -->
            <div class="tablet__navbar-actions">
                <RouterLink class="item-link" to="/">
                    <span class="material-symbols-outlined">home</span>
                    <p>Asosiy</p>
                </RouterLink>
                <button class="item-link item-link__category">
                    <span class="material-symbols-outlined">manage_search</span>
                    <p>Katalog</p>
                </button>
                <RouterLink class="item-link" to="/">
                    <span class="material-symbols-outlined">shopping_cart</span>
                    <p>Savat</p>
                </RouterLink>
                <RouterLink class="item-link" to="/">
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
            &:hover{
                background-color: var(--warning-hover-color);
                cursor: pointer;
            }
        }
    }

    // RESPONSIVE CONTENT STYLES
    .tablet__navbar-actions{
        display: none ;
        align-items: center;
        justify-content: space-around;
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

    @media only screen and (max-width: 660px){
        .nav-wrapper{
            display: none;
        }
        .tablet__navbar-actions{
            display: flex;
        }
    }
</style>