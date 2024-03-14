import { createStore } from "vuex";


const store = createStore({
    state:{
        cart_data: [],
        liked_data: [],
        search_product: ''
    },
    mutations:{ 
        AddToCart(state, payload){
            state.cart_data = [...state.cart_data, payload]
        },
        AddToLiked(state, payload){
            console.log(payload);
            state.liked_data = [...state.liked_data, payload]
        },
        SearchedProduct(state, payload){
            state.search_product = payload
        },

        RemoveProductFromFavorite(state, payload){
                console.log('Id true');
                state.liked_data = state.liked_data.filter(f => f.id !== payload.id)
        }
    }
})


export default store