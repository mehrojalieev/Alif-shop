<script>
    import Container from '@/utils/Container.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
    <Container>
        <div class="cart">
            <div class="empty__cart-wrapper">
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