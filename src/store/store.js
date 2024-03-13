import { createStore } from "vuex";


const store = createStore({
    state:{
        cart_data: [],
        liked_data: [],
        search_product: ''
    },
    mutations:{ 
        AddToCart(state, payload){
            console.log(payload);
            state.cart_data = [...state.cart_data, payload]
        },
        AddToLiked(state, payload){
            console.log(payload);
            state.liked_data = [...state.liked_data, payload]
        },
        SearchedProduct(state, payload){
            state.search_product = payload
        }
    }
})


export default store