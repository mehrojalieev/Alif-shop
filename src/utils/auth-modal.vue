<script>
export default {
    props: {
        isOpenModal: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            user_number: '+'+998,
            random__verify_code: 0,
            user__verify_code: 0,
            isVerify: false,
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
    },
    methods: {

        RegisterUser() {
            if (this.user_number.length === 13) {
                setTimeout(() => {
                    this.isVerify = true
                }, 2000)

                
                let randomNumber = ''
                for (let i = 0; i <  4; i++) {
                    this.random__verify_code += Math.floor(Math.random() * 10);
 
                }
                console.log(this.random__verify_code);
                setTimeout(() => {
                    alert('Kod '+ this.random__verify_code)
                },5000)
            } else {
                alert("Ro'yxatdan o'tish uchun Telefon raqamingizni to'gri kiriting !")
            }
        },
        VerifyUser(){
            if(this.random__verify_code === this.user__verify_code){
                setTimeout(() => {
                    alert("Ro'yxatdan o'tdingiz ✅")
                    localStorage.setItem("registered-number", this.user_number)
                   this.isOpenModal = false
                },3000)
            }
            else{
                alert('Kodni tekshirib, qaytadan kiriting !')
            }
        }
    }
}
</script>

<template>
    <div @click="isOpenModal = false" :style="{ transform: isOpenModal ? 'scale(1)' : 'scale(0)' }" class="modal-overlay">
        <div v-if="isVerify" :style="{ transform:  isOpenModal ? 'scale(1)' : 'scale(0)' }" @click.stop="isOpenModal" class="auth-form">
            <div class="form-header">
                <h3 class="form__header-title">SMS kodni kiriting <span>Kod {{ this.user_number }} raqamiga
                        yuborildi</span></h3>
                <span @click="isOpenModal = false" class="material-symbols-outlined">close</span>
            </div>
            <label for="number">SMS kod
                <input v-model="this.user__verify_code" placeholder="____" id="number" maxlength="4" name="number" type="number" inputmode="numeric">
            </label>
            <button @click="VerifyUser" class="register-btn" type="submit">Ro'yxatdan o'tish</button>
            <button @click="this.isVerify = false" class="cancel-btn " type="button">Raqamni o'zgartirish</button>
        </div>
        <div v-else :style="{ transform: isOpenModal ? 'scale(1)' : 'scale(0)' }" @click.stop="isOpenModal"
            class="auth-form">
            <div class="form-header">
                <h3>Avtorizatsiya alif shop</h3>
                <span @click="isOpenModal = false" class="material-symbols-outlined">close</span>
            </div>
            <label for="number">Telefon raqam
                <input v-model="this.user_number" :placeholder="this.user_number" id="number" name="number" type="tel"
                    inputmode="numeric">
            </label>
            <button @click="RegisterUser" class="register-btn" type="submit">Davom etish</button>
            <button @click="isOpenModal = false" class="cancel-btn " type="button">Bekor qilish</button>
        </div>
    </div>
</template>


<style scoped lang="scss">
.modal-overlay {

    display: flex;
    align-items: center !important;
    justify-content: center;
    position: absolute !important;
    width: 100vw;
    height: 100vh !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 30 !important;
    background-color: #dad7d769;
    backdrop-filter: blur(10px);
}

.auth-form {
    transition: .3s;
    transform-origin: center;
    width: 100%;
    max-width: 450px;
    border-radius: 8px;
    padding: 1.7rem 1rem;
    background-color: var(--light-color);

    label {
        margin: 1rem 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        font-size: 14px;
        color: #24272c;

        input {
            margin-top: .5rem;
            width: 100%;
            height: 48px;
            border-radius: 8px;
            border: 2px solid #A8B3BD;
            text-indent: 10px;
            outline: none;
        }
    }

    .register-btn,
    .cancel-btn {
        width: 100%;
        padding: 11px 0;
        border-radius: 8px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        transition: .2s;
    }

    .register-btn {
        background-color: var(--warning-color);

        &:hover {
            background-color: var(--warning-hover-color);
        }
    }

    .cancel-btn {
        margin-top: .5rem;
        border: 2px solid #cad1d7;
        background: transparent;

        &:hover {
            background-color: #f4f6f7;
        }
    }
}

.form-header {
    display: flex;
    justify-content: space-between;

    h3 {
        font-weight: 500;
        font-size: 17px;
        color: #24272c;

        span {
            margin-top: 14px;
            display: block;
            font-size: 14px;
        }

    }

    span {
        font-size: 26px;
        color: #788988;
        cursor: pointer;
    }
}
</style>