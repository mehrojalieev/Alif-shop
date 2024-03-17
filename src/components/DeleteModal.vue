<script>
export default {
  props: {
    isOpenModal: {
      type: Boolean,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  },
  methods:{
    // DeleteProductCart(product){
    //     this.$store.commit("DeleteProductCart", product)
    // }
  },
  mounted(){    
    // console.log('Mahsulot', this.product);
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
    <div :style="{transform: isOpenModal ? 'scale(1)' : 'scale(0)'}"  class="modal-overlay-2">
        <form :style="{transform: isOpenModal ? 'scale(1)' : 'scale(0)'}" class="modal-form">
            <p>Ushbu tovarni savatdan aniq o'chirib tashlamoqchimisiz?</p>
            <button :data-product-id="product.id" type="button" class="delete-btn">O'chirish</button>
            <button type="button"  @click="isOpenModal=false" class="cancel-btn">Bekor qilish</button>
        </form>
    </div>
</template>


<style lang="scss">
.modal-overlay-2{
  display: flex;
  align-items: center;
  justify-content: center;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh !important;
    background-color: #ccc7c78f;
}
.modal-form{
    transform-origin: center;
    transition: .3s;
    margin: auto;
    max-width: 384px;
    padding: 1rem;
    border-radius: 8px;

    background-color: var(--light-color);
    p{
        color: #24272c;
        font-size: 18px;
    }
    .delete-btn, .cancel-btn{
        margin-top: 1rem;
        width: 100%;
        padding: .7rem 0;
        font-weight: 500;
        font-size: 14px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: .2s;
        color: var(--dark-color);
    }
    .delete-btn{
        background-color: var(--warning-color);
        &:hover{
            background-color: var(--warning-hover-color);
        }
    }
}
</style>