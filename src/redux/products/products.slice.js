import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        cart: [],
        btnCart: null,
        filters: {},
        search: false,
        searchFilterProducts: null
    },
    reducers: {
        clearCart(state, action) {
            state.cart = state.cart.slice(0, action.payload)
        },
        addProductToCart(state, action) {
            // Genera un uniqueId basado en las propiedades relevantes del producto
            const existingProduct = state.cart.find((item) => item.producto_id === action.payload.producto_id);

            if (existingProduct) {
                // Si el producto ya existe, incrementa la cantidad
                existingProduct.quantity++;
            } else {
                // Si el producto no existe, lo agrega al carrito con cantidad 1
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        incrementProductInCart(state, action) {
            const item = state.cart.find(item => item.producto_id === action.payload)
            item.quantity++
        },
        decrementProductInCart(state, action) {
            const item = state.cart.find(item => item.producto_id === action.payload)
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }
        },
        toggleBtnCart(state, action) {
            state.btnCart = action.payload
        },
        removeItemFromCart(state, action) {
            state.cart = state.cart.filter(el => el.producto_id !== action.payload)
            console.log(state.cart)
        },
        filtersProductsByCategory(state, action) {
            state.filters = action.payload
        },
        toggleSearchForm(state, action) {
            state.search = action.payload
        },
        setSearchFilterProducts(state, action) {
            state.searchFilterProducts = action.payload
        }
    },
})

export const productReducer = productsSlice.reducer
export const {
    clearCart,
    addProductToCart,
    incrementProductInCart,
    decrementProductInCart,
    toggleBtnCart,
    removeItemFromCart,
    filtersProductsByCategory,
    toggleSearchForm,
    setSearchFilterProducts
} = productsSlice.actions
