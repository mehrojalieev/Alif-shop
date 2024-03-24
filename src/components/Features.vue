<script>
import Container from '@/utils/Container.vue';
export default {
    components: {
        Container
    }
}
</script>

<template>
    <div class="feature">

        <Container>
            <div class="feature-wrapper">
                <img src="../assets/feature.png">
                <div class="feature-content">
                    <h3 class="content-title">Ajoyib takliflar har doim yoningizda</h3>
                    <p class="content-description">alif shop ilovasi orqali buyurtma qiling, va qulay takliflar haqida hammadan tez biling</p>
                    <div class="content-social">
                        <img src="../assets/play-market.svg">
                        <img src="../assets/app-store.svg">
                        <img src="../assets/app-gallery.svg">
                    </div>
                </div>
                <div class="feature-scanner">
                    <img src="../assets/qr-code.webp">
                    <p>Yuklab olish uchun kamerangizni QR kodga qarating</p>
                </div>
            </div>
        </Container>
    </div>
</template>

<style lang="scss">
.feature{
    position: relative;
    height: 250px;
    width: 100%;
    overflow: hidden;
    background-color: #f4f6f7;
}
.feature-wrapper{
    top: -2rem;
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    overflow: hidden;
    img{
        width: 100%;
        max-width: 330px;
        height: 322px;
        object-fit: contain;
    }
}
.feature-content{
    .content-title{
        font-size: 24px;
        color: var(--dark-color);
        font-weight: 500;
        line-height: 2rem;
        max-width: 300px;
    }
    .content-description{
        margin-top: .5rem;
        font-size: 16px;
        color: #505c6a;
        max-width: 448px;
    }
    .content-social{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        column-gap: .4rem;
        img{
            object-fit: contain;
            max-width: 130px;
            height: 35px;
        }
    }
}
.feature-scanner{
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        object-fit: contain;
        max-width: 104px;
        height: 104px;
    }
    p{
        max-width: 110px;
        text-align: center;
        font-size: 14px;
        color: #5d6d7d;
        line-height: 20px;
        margin-top: .3rem;
    }
}
</style>