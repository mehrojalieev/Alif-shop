<script>
    import Container from "@/utils/Container.vue"
    import ApiInstance from "@/api"
    export default {
        components:{
            Container
        },
        data(){
            return {
                AllProducts: []
            }
        },
        methods:{
           async LoadProduct(){
                try {
                    const response = await ApiInstance.get("/products/trend_categories")
                    this.AllProducts = response.data
                    console.log(response.data);
                } 
                catch (error) {
                console.log(error);    
                }
                
            }
        },
        mounted(){
            this.LoadProduct()
        }
    }
</script>

<template>
    <Container>
        <div class="trending__cateogory-wrapper">
            <div v-for="trending_category in this.AllProducts" class="category-list">
                <RouterLink class="category-link"
                :to="{
                    name: 'Single_Category',
                    params: {category_name: `${trending_category.category}`}
                }"
                
                >
                <img :src="
                trending_category.category === 'telefon' ? 'https://storage2.alifshop.uz/files?k1=9b6d4f3f-9014-4ade-b4d2-4f0631beb048&k2=c9de4b57903405b17451e50987c193a9be8c7ed0913c7ac25a6aacbe2a45b2488c4fbc16784c893ad79f1933315b1ae46164e443d392e5318fc5087ea91846c1' 
                : trending_category.category === 'planshet'? 'https://static.eldorado.ru/img1/p/b/514554000.jpg/resize/700x525/'
                : trending_category.category === 'wifi' ? 'https://avatars.mds.yandex.net/get-mpic/5221216/img_id675124038061804130.jpeg/orig'
                :  trending_category.category === 'noutbuk' ? 'https://storage2.alifshop.uz/files?k1=785e0efa-3888-410d-a513-62f30d109916&k2=6f941bdbc289cea16b3a7d67b0adfa008ba0a81682564973de91580bc694a8cd002318ba37271dd47a546266b067677314ff37622b4e5f4af22c64ac30e1539e'
                : trending_category.category === 'televizor' ? 'https://storage2.alifshop.uz/files?k1=632dd737-d01e-481d-92f5-4ad1b7fa40b7&k2=8f6a6df3c97ca8a78d9d920b4dae9799fc293f854943c1582203e2a0f64db28ca0c366eb543be8d5a8c6d3b367f4fad08d9bf5ddebc08d83419bcc3c75edfab4'
                : trending_category.category === 'muzlatgich' ? 'https://storage2.alifshop.uz/files?k1=5e3c756d-65b1-4cd2-93cb-2e32ac7b82ab&k2=8ba008aa1d8686c4dcad2f77dcb8dfa6687c034e0e7f919257a0f0319cadca4f24e21f531da1807b5bf9520a556ef1467aed2db39b4783555ea3facb22790989' 
                : trending_category.category === 'quloqchin' ? 'https://storage2.alifshop.uz/files?k1=fa54e395-a717-41cb-b0b4-0d9e4605d8c3&k2=e8cce8b1a2d37c629aca806c75864735ba7784e2795a6310f70510100b87130b2bb6ce5af0ea5a100cd33d8183d62edeed635afecea1d8be509945e148f7f9b5'
                : trending_category.category === 'kir_yuvish_mashina' ? 'https://storage2.alifshop.uz/files?k1=05335f34-c90b-4a09-adba-04bab989bdce&k2=6c8ee30632d4477a5275cd50565076b08e5fdae17c5fab794e6d1e380985900850afadc000ce9c6a876def18d3e198aa39209bbf267b451e91c0c56a43a04a91'
                :  trending_category.category === 'smart_soat' ? 'https://storage2.alifshop.uz/files?k1=3b2b6da7-208f-4d6b-bc90-9851da86e702&k2=3aaa40f9dbd166783c4ae1b3a9686ce56aa27ce7870e90bc469d8ea4216e58593719bffc62eac1b7d1ab1bf550a934b0a867e673d154cce5867a3eaa68d24c64' 
                : trending_category.category === 'blender' ? 'https://storage2.alifshop.uz/files?k1=11b2def1-fb99-4523-adda-0d080865a477&k2=ce67b8d55ce782385046eb8c5c88682b9e19e1ae0f5f7308641b9949c875b76735c94be98595913998b63da9c5fd511d0e8dbd39527c39805a91d338ce24ee67' 
                : trending_category.category === 'mikroto`lqinli_pech' ? 'https://storage2.alifshop.uz/files?k1=2e4034f5-bffb-4c5c-9d3b-18e191c1f83f&k2=458cfc636736663d4aeb0d3af6f957fa28e9d180a22119e847ebbf49d657fed47df0f90fdcea08a309bbe47d0a8291a43588d0bb173f274106a3ff4adabd9549'
                : trending_category.category === 'playstation' ? 'https://www.mol777.ru/upload/iblock/53b/x747bdz0gox8kk9zpo7joxoe8euajyzi.jpg'
                : ''
                " >
                <h3>{{
                trending_category.category.split("_").join(" ")}}lar</h3>
            </RouterLink>
            </div>
        </div>
    </Container>
</template>

<style lang="scss">
.trending__cateogory-wrapper{
    margin-top: 2rem;
    width: 100%;
    display: flex;
    column-gap: 80px;
    justify-content: space-between;
    overflow: auto;
    padding: .5rem 0;
    &::-webkit-scrollbar{
        height: 2px !important;
    }
}
.category-list{
    text-align: center;
    .category-link{
        text-decoration: none;
    }
    img{
        width: 100%;
        max-width: 132px;
        height: 72px;
        object-fit: cover;
    }
    h3{
        margin-top: .2rem;
        text-transform: capitalize;
        font-size: 12px;
        font-weight: 500;
        color: #24272c;
    }
}
</style>