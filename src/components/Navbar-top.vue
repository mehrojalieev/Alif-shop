<script>
    import Container from "@/utils/Container.vue"
import { RouterLink } from "vue-router";
    export default {
        components: {Container}
    }
</script>
<template>
    <div class="navbar-top">

    <Container>
            <div class="nav__top-navigation">
                <select class="language-category">
                    <option value="uzb">UZB</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
                <div class="top__navigation-actions">
                    <RouterLink class="navigation-link" to='pray-time'>Namoz vaqti</RouterLink>
                    <RouterLink class="navigation-link" to='sell'>alif shopda soting</RouterLink>
                    <RouterLink class="navigation-link" to='pray-time'>Bizga yozing</RouterLink>
                </div>
            </div>
    </Container>
</div>

</template>


<style  lang="scss">
.navbar-top{
    display: flex;
    align-items: center;
    width: 100%;
    height: 47px;
    padding: 1rem;
    background-color: #f4f6f7;
}
    .nav__top-navigation{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
    }
    .language-category{
        color: var(--secondary-color);
        font-size: 20px;
        outline-color: var(--secondary-color);     
        border: none; 
        outline: none; 
        background: transparent;
        width: 70px;
    }
    .top__navigation-actions{
        display: flex;
        align-items: center;
        column-gap: 25px;
        .navigation-link{
            color: var(--secondary-color);
            font-size: 16px;
            border: none;
            text-decoration: none;
            &:hover{
                cursor: pointer;
                color: var(--dark-color);
            }
        }
    }
</style>