<script>
    export default{
        props:{
            isOpenModal:{
                type: Boolean,
                required: true
            }
        },
        watch: {
    isOpenModal(newVal) {
      if (newVal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }
    }
</script>
    
<template>
    <div @click="isOpenModal=false" :style="{transform: isOpenModal ? 'scale(1)' : 'scale(0)'}"  class="modal-overlay">
            <div :style="{transform: isOpenModal ? 'scale(1)' : 'scale(0)'}" @click.stop="isOpenModal" class="auth-form">
                <div class="form-header">
                    <h3>Avtorizatsiya alif shop</h3>
                    <span @click="isOpenModal=false" class="material-symbols-outlined">close</span>
                </div>
                <label for="number">Telefon raqam
                    <input placeholder="+998" id="number" name="number" type="tel" inputmode="numeric">
                </label>
                <button class="register-btn" type="submit">Davom etish</button>
                <button @click="isOpenModal=false"  class="cancel-btn " type="button">Bekor qilish</button>
            </div>
    </div>
</template>


<style lang="scss">

    .modal-overlay{
        
       display: flex;
       align-items: center !important;
       justify-content: center ;
        position: absolute;
        width: 100vw;
        height: 100vh !important;
        top: 0px;
        left: 0;
        z-index: 3;
        background-color: #dad7d769;
    }
    .auth-form{
        transition: .3s;
        transform-origin: center;
        width: 100%;
        max-width: 450px;
        border-radius: 8px;
        padding: 1.7rem 1rem;
        background-color: var(--light-color);
        label{
            margin: 1rem 0;
            width: 100%;
            display: flex;
            flex-direction: column;
            font-size: 14px;
            color: #24272c;
            input{
                margin-top: .5rem;
                width: 100%;
                height: 48px;
                border-radius: 8px;
                border: 2px solid #A8B3BD;
                text-indent: 10px;
                outline: none;
            }
        }
        .register-btn, .cancel-btn{
            width: 100%;
            padding: 11px 0;
            border-radius: 8px;
            font-size: 16px;
            border: none;
            cursor: pointer;
            transition: .2s;
        }
        .register-btn{
            background-color: var(--warning-color);
            &:hover{
                background-color: var(--warning-hover-color);
            }
        }
        .cancel-btn{
            margin-top: .5rem;
            border: 2px solid #cad1d7;
            background: transparent;
            &:hover{
                background-color: #f4f6f7;
            }
        }
    }
    .form-header{
        display: flex;
        justify-content: space-between;
        h3{
            font-weight: 500;
            font-size: 17px;
            color: #24272c;
        }
        span{
            font-size: 26px;
            color: #788988;
            cursor: pointer;
        }
    }
    
</style>