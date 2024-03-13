import { createStore } from "vuex";


const store = createStore({
    state:{
        cart_data: [],
        liked_data: []
    },
    mutations:{
        AddToCart(state, payload){
            console.log(payload);
            state.cart_data = [...state.cart_data, payload]
        }
    }
})


export default store