<script>
    import Container from "@/utils/Container.vue"
import { RouterLink } from "vue-router";
    export default {
        components: {Container}
    }
</script>
<template>
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
</template>


<style  lang="scss">
    .nav__top-navigation{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
    }
    .language-category{
        color: var(--secondary-color);
        font-size: 22px;
        outline-color: var(--secondary-color);     
        border: none; 
        outline: none; 
        width: 70px;
    }
    .top__navigation-actions{
        display: flex;
        align-items: center;
        column-gap: 25px;
        .navigation-link{
            color: var(--secondary-color);
            font-size: 17px;
            border: none;
            text-decoration: none;
            &:hover{
                cursor: pointer;
                color: var(--dark-color);
            }
        }
    }
</style>