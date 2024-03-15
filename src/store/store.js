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
            const productExist = state.cart_data.findIndex(product => product.id === payload.id)
            if(productExist === -1){
                state.cart_data = [...state.cart_data, payload]
            }
            else{
                state.cart_data[productExist].count += 1
            }
        },
        RemoveFromCart(state, payload){
            const productExist = state.cart_data.findIndex(product => product.id === payload.id)
            state.cart_data[productExist].count -= 1
            if(state.cart_data[productExist].count === 0){
                state.cart_data.splice(productExist, 1)
            }

        },
        DeleteProductCart(state, payload){
                state.cart_data = state.cart_data?.filter(f => f.id !== payload.id)
        },
        AddToLiked(state, payload){
            state.liked_data = [...state.liked_data, payload]
        },
        SearchedProduct(state, payload){
            state.search_product = payload
        },

        RemoveProductFromFavorite(state, payload){
                state.liked_data = state.liked_data.filter(f => f.id !== payload.id)
        }
    }
})


export default store