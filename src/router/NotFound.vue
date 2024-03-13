<script>
    import Container from '@/utils/Container.vue'
    export default {
        components:{Container}
    }
</script>


<template>
    <Container>
        <div class="not__found-wrapper">
            <div class="not__found-image">
                <img src="https://alifshop.uz/_ipx/_/images/illustrations/404.svg" alt="">
            </div>
            <div class="not__found-content">
                <p>Balki noto'g'ri manzil ko'rsatilgan</p>
                <RouterLink to="/" class="home-link">Asosiy ekranga</RouterLink>
            </div>
        </div>
    </Container>
</template>

<style lang="scss">
    .not__found-wrapper{
        margin-top: 4rem;
       display: flex;
       align-items: center;
       justify-content: center;
       column-gap: 40px;
        width: 100%;
        display: flex;
    }
    .not__found-image{
        width: 100%;
        height: 100%; 
        max-width: 512px;
        max-height: 380px;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    .not__found-content{
        p{
            font-size: 18px;
        }
        .home-link{
            text-align: center;
            font-size: 15px;
            font-weight: 500;
            display: block;
            border-radius: 8px;
            color: var(--dark-color);
            text-decoration: none;
            max-width: 156px;
            width: 100%;
            margin-top: 1rem;
            padding: .6rem 1rem;
            background-color: var(--warning-color);
            transition: .2s;
            &:hover{
                cursor: pointer;
                background-color: var(--warning-hover-color);
            }
        }
    }
    @media only screen and (max-width: 770px){
        .not__found-wrapper{
            margin-top: 2rem;
            flex-direction: column;
            align-items: center;
        }
        .not__found-content{
            margin-top: 2rem;
            .home-link{
                max-width: 270px;
                margin: 1.5rem auto 0;
            }
        }
    }
</style>