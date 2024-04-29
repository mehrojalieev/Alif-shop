<script>
    export default {
        props:{
            openLogoutModal:{
                type: Boolean,
                // required: true
            }
        },
        methods:{
            LogoutFromAccount(){
                localStorage.removeItem("registered-number")
                openLogoutModal=false
            }
        }
    }
</script>
<template>
    <div :style="{transform: openLogoutModal ? 'scale(1)' : 'scale(0)'}" class="modal-overlay">
        <div :style="{transform: openLogoutModal ? 'scale(1)' : 'scale(0)'}" class="logout__modal-form">
            <span  class="material-symbols-outlined danger-icon">error</span>
            <h3 >Siz haqiqatdan ham hisobingizdan chiqmoqchimisiz ?</h3>
            <div class="modal__btns-action">
                <button @click="openLogoutModal=false" class="cancel-btn">Bekor qilish</button>
                <button @click="LogoutFromAccount" class="logout-btn">Chiqish</button>
            </div>
            <span @click="openLogoutModal=false" id="closing-modal" class="material-symbols-outlined ">close</span>
        </div>
    </div>
</template>



<style scoped lang="scss">
    .modal-overlay{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100%;
        top: -1% !important;
        position: absolute;
        backdrop-filter: blur(10px);
        
    }
    .logout__modal-form{
        position: relative !important;
        width: 100%;
        max-width: 450px;
        border-radius: 8px;
        transition: .3s;
        transform-origin: center;
        padding: 1.5rem .2rem;
        text-align: center;
        background-color: var(--light-color);
        .danger-icon{
            color: #ff0000;
            font-size: 36px;
        }
        h3{
            font-weight: 500;
            font-size: 20px;
            margin-top: .6rem;
            text-align: center;
        }
        #closing-modal{
            position: absolute;
            right: 0px;
            top: 0px;
            cursor: pointer;
            font-size: 1.7rem;
        }
    }
    .modal__btns-action{
        margin-top: 1.5rem;
        width: 100%;
        display: flex;
        column-gap: 1rem;
        align-items: center;
        justify-content: center;
        button{
            font-size: 16px;
            border-radius: 8px;
            border: none;
            transition: .2s;
            color: var(--light-color);
            padding: .5rem 1.5rem;
            &:hover{
                transform: scale(1.05);
                cursor: pointer;
                opacity: 0.8;
            }
        }
        .cancel-btn{
            background-color: var(--secondary-color);
        }
        .logout-btn{

            background-color: var(--danger-color);
        }
    }
</style>