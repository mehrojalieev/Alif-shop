<script>
import ApiInstance from '@/api';

export default {
    props: {
        openModal: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            memoryRAM: [4, 6, 8, 12, 16, 24, 32, 64],
            memoryuROM: [16, 32, 64, 128, 256, 512, 1024, 2048],
            ImagesData: ['', ''],
            // New Product Data
            product_category: "",
            product_name: "",
            product_brend: "",
            product_price: 0,
            product_date: 0,
            product_memory_ram: 0,
            product_memory_rom: 0,
            product_in_stock: 0,
            product_color: ""
        }
    },
    methods: {
        handleCreateProduct() {
          
            ApiInstance('http://localhost:10000/api/products/add-product', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_name: this.product_name,
                    category: this.product_category,
                    brand: this.product_brend,
                    price: this.product_price,
                    in_stock: this.product_in_stock,
                    memory_rom: this.product_memory_rom,
                    memory_ram: this.product_memory_ram,
                    color: this.product_color,
                    image: this.ImagesData
                })
            })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
        },

        addInputLink() {
            this.ImagesData.push('');
        },
        removeInputLink() {
            if (this.ImagesData.length > 1) {
                this.ImagesData.pop();
            }
        }
    },
    updated() {
        console.log(this.product_category);
    }
}

</script>

<template>
    <div :style="{ transform: openModal ? 'scale(1)' : 'scale(0)' }" class="addproduct__modal-overlay">
        <form @submit.prevent="this.handleCreateProduct" :style="{ transform: openModal ? 'scale(1)' : 'scale(0)' }" class="addproduct__modal-form">
            <span @click="openModal = false" class="material-symbols-outlined close-modal">close</span>
            <h2 class="add__product-title">Yangi mahsulot qo'shish</h2>
            <div class="product-categories">
                <label for="category">
                    Mahsulot Katalogini tanlang
                    <select v-model="this.product_category" id="category" class="category-select">
                        <option disabled value="category">Kataloglar</option>
                        <option value="telefon">Telefon</option>
                        <option value="televizor">Televizor</option>
                    </select>
                </label>
            </div>
            <div class="product__item-input__wrapper">
                <label for="product_name">
                    Mahsulot nomi
                    <input  v-model="this.product_name"  id="product_name" type="text" placeholder="Nomi...">

                </label>
                <label for="brend">
                    Mahsulot brendi
                    <input v-model="this.product_brend" id="brend" type="text" placeholder=" Brend...">
                </label>
            </div>
            <div class="product__item-input__wrapper">
                <label for="price">
                    Mahsulot narxi
                    <input v-model="this.product_price" id="price" type="text" placeholder="Narx...">

                </label>
                <label for="brend">
                    Ishlab chiqarilgan sana
                    <input v-model="this.product_date" id="brend" type="date" placeholder=" Sana...">
                </label>
            </div>
            <div :style="{display: this.selectedCategory === 'telefon' || this.selectedCategory === 'noutbuk' ? 'flex' : 'none'}" class="product__memories-wrapper">
                <label for="ram">
                    Operativ xotira
                    <select v-model="this.product_memory_ram" class="memory-select">
                        <option :value="ram" v-for="ram in this.memoryRAM" value="">{{ ram }} GB</option>
                    </select>

                </label>
                <label for="rom">
                    Tezkor xotira
                    <select v-model="this.product_memory_rom" class="memory-select">
                        <option :value="rom" v-for="rom in this.memoryuROM" value="">{{ rom }} GB</option>
                    </select>

                </label>

            </div>
            <div class="product__item-input__wrapper">
                <label for="in_stock">
                    Zaxirada
                    <input v-model="this.product_in_stock" id="in_stock" type="tenumbert" placeholder="Zaxirada...">

                </label>
                <label for="color">
                    Mahsulot rangi
                    <input v-model="this.product_color" id="color" type="text" placeholder=" Rangi...">
                </label>
            </div>

            <div class="product__upload-images__wrapper">
                    <div class="upload__images-header">
                        <label for="">Mahsulot rasmlarini yuklang</label>
                        <div class="images-action">
                            <button :disabled="this.ImagesData.length === 2" class="remove__link-btn" @click="this.ImagesData.pop()" type="button">Linkni o'chirish -</button>
                            <button class="add__link-btn" @click="this.ImagesData.push('')" type="button">Link qo'shish +</button>
                        </div>
                    </div>
                <div class="product__upload-images">
                    <input v-model="this.ImagesData[index]" v-for="(input, index) in this.ImagesData" type="text" placeholder="Rasm linki..." :key="index">
                </div>
            </div>

            <button type="submit"class="add__product-btn">Mahsulot qo'shish</button>



        </form>
    </div>
</template>

<style lang="scss">
.addproduct__modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw ;
    height: 100vh;
left: 0;
    top: 0;
    z-index: 10;
    position: absolute;
    background-color: #8080808c;
    backdrop-filter: blur(8px);
}

.add__product-title {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 26px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc9c9;
    color: var(--warning-color);
    margin-bottom: 1.2rem;
    text-shadow: 0 0 3px var(--warning-color);
}


// FORM STYLES
.addproduct__modal-form {
    padding: .8rem 1.5rem;
    position: relative;
    transition: .2s;
    transform-origin: center;
    width: 100%;
    max-width: 750px;
    border-radius: 8px;
    background-color: var(--light-color);

    .close-modal {
        position: absolute;
        top: 1%;
        right: 1%;
        font-size: 32px;
        cursor: pointer;
    }

    .product-categories{
        label{
            font-size: 14px;
        }
        .category-select {
            margin-top: 5px;
            width: 100%;
            height: 30px;
            border-radius: 8px;
            border: 1px solid var(--warning-color);
            outline-color: var(--warning-color);
            text-indent: 15px;
            font-size: 14px;
            text-transform: capitalize;
            cursor: pointer;
    
        }
    }


    .product__item-input__wrapper {
        margin-top: 1.2rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        column-gap: 1.5rem;

        label {
            width: 100%;
            font-size: 14px;
        }

        input {
            margin-top: 5px;
            width: 100%;
            height: 30px;
            border-radius: 8px;
            font-size: 14px;
            text-indent: 10px;
            border: 1px solid var(--warning-color);
            outline-color: var(--warning-color);
        }
    }
}


.product__memories-wrapper {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    column-gap: 1.5rem;

    label {
        font-size: 14px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .memory-select {
        margin-top: 5px;
        width: 100%;
        height: 30px;
        padding: 0 10px;
        border-radius: 5px;
        border: 1px solid var(--warning-color);
        outline-color: var(--warning-color);
        cursor: pointer;
    }
}
.product__upload-images__wrapper{
    margin-top: 2rem;
    label{
        font-size: 14px;
    }
}
.upload__images-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .images-action{
        display: flex;
        column-gap: 5px;
        .remove__link-btn, .add__link-btn{
            border: none;
            border-radius: 8px;
            padding: 4px 10px;
            font-size: 12px;
            transition: .1s;
            &:hover{
                cursor: pointer;
                opacity: 0.8;
            }
            &:active{
                transform: scale(0.95);
            }
        }
        .remove__link-btn{
            background-color: var(--danger-color);
            color: var(--light-color);
        }
        .add__link-btn{
            background-color: var(--success-color);
            color: var(--light-color)
        }
    }
}
.product__upload-images{
    margin-top: 10px;
    border-radius: 8px;
    padding: 6px 3px;
    box-shadow: 0 0 3px  gray;
    max-height: 78px;
    overflow-y: auto;
    display: grid;
    gap: .5rem 1rem;    
    grid-template-columns: repeat(2, 1fr);
    &::-webkit-scrollbar{
        width: 0;
    }
    input{
            width: 100%;
            height: 28px;
            border-radius: 8px;
            font-size: 13px;
            text-indent: 10px;
            border: 1px solid var(--warning-color);
            outline-color: var(--warning-color);
    }
}
.add__product-btn{
    width: 100%;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    color: var(--light-color);
    padding: .5rem 0;
    background-color: var(--warning-color);
    transition: .2s;
    margin-top: 1.5rem;
    font-size: 15px;
    &:hover{
        cursor: pointer;
        background-color: var(--warning-hover-color);
    }
    &:active{
        transform: scale(0.9);
    }
}
</style>