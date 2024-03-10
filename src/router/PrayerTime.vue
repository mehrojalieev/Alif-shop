
<script>
    import Container from '@/utils/Container.vue'
import axios from 'axios';
import { RouterLink } from 'vue-router';
    export default{
        components:{
            Container   
        },
        data(){
            return {
                time_data: null
            }
        },
       
        methods:{
            loadTimes(value){
                axios.get(`https://islomapi.uz/api/present/day?region=${value ? value : 'Toshkent'}`)
                .then(response => {
                    console.log(response.data);
                    this.time_data = response.data
                })
                .catch(error => console.log(error))
            }
        },
        mounted() {
            this.loadTimes()
            console.log(this.time_data);
        }
    }
</script>
<template>
    <Container>
        <div class="prayer__time-wrapper">
            <h2 class="prayer__time-title">Namoz vaqti</h2>

            <div class="time__content-header">
                <select v-on:change="(e) => loadTimes(e.target.value)">
                    <option value="toshkent">Toshkent</option>
                    <option value="namangan">Namangan</option>
                    <option value="jizzax">Jizzax</option>
                </select>
                <div class="item-content">
                    <span class="material-symbols-outlined">location_on</span>
                    <p>Region:</p>
                    <!-- <h4>{{this.time_data.region }}</h4> -->
                </div>
                <div class="item-content">
                    <span class="material-symbols-outlined">date_range</span>
                    <p>Hafta kuni:</p>
                    <!-- <h4>{{this.time_data.weekday}}</h4> -->
                </div>
                <div class="item-content">
                    <span class="material-symbols-outlined">schedule</span>
                    <p>Sana:</p>
                    <!-- <h4>{{this.time_data.date}}</h4> -->
                </div>

            </div>
            <div class="time__card-wrapper">
                <div class="prayer__time-card">
                        <p>Bomdod</p>
                        <h3>{{ this.time_data.times.tong_saharlik }}</h3>
                </div>
                <div class="prayer__time-card">
                        <p>Peshin</p>
                        <h3>{{ this.time_data.times.peshin }}</h3>
                </div>
                <div class="prayer__time-card">
                        <p>Asr</p>
                        <h3>{{ this.time_data.times.asr }}</h3>
                </div>
                <div class="prayer__time-card">
                        <p>Shom</p>
                        <h3>{{ this.time_data.times.shom_iftor }}</h3>
                </div>
                <div class="prayer__time-card">
                        <p>Xufton</p>
                        <h3>{{ this.time_data.times.hufton }}</h3>
                </div>
            </div>

            <RouterLink class="back-home" to="/">
                <span class="material-symbols-outlined">arrow_back</span>
                <strong>Xaridga qaytish</strong>
            </RouterLink>
        </div>
    </Container>
</template>


<style lang="scss">
        .prayer__time-wrapper{
            width: 100%;
            padding: 1rem;
        }
        .prayer__time-title{
            font-size: 28px;
            font-weight: 500;
        }
        .time__content-header{
            margin-top: 10px;
            display: flex;
            width: 100%;
            column-gap: 70px;
            border-bottom: 1px solid #c4c6c7;
            padding-bottom: 10px;
            select{
                border-radius: 8px;
                padding: 7px 14px;
                font-size: 16px;
                outline-color: var(--warning-color);
                border: 1px solid #c4c6c7;
            }
        }
        .item-content{
            display: flex;
            align-items: center;
            column-gap: 3px;
            span{
                font-size: 23px;
            }
            p{
                font-size: 18px;
                color: var(--secondary-color);
                margin-right: 6px;
            }
            h4{
                font-weight: 500;
                font-size: 22px;
                color: var(--warning-color);
            }
        }

        .time__card-wrapper{
            display: flex;
            align-items: center;
            justify-content: space-around;
            
            width: 100%;
            margin-top: 10px;
        }
        .prayer__time-card{
            display: grid;
            place-items: center;
            padding: 1.2rem ;
            width: 100%;
            max-width: 164px;
            border-radius: 8px;
            border: 1px solid #E3E8EA;
            background-color: #F4F6F7;
            p{
                font-size: 16px;
            }
            h3{
                font-size: 30px;
                font-weight: 500;
            }
        }
</style>