import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        cart: [],
        btnCart: null,
        filters: {},
        search: false,
        searchFilterProducts: null,
        showModal: false, // NUEVO
        addedToCartModal: {
            visible: false,
            productName: ""
        }
    },
    reducers: {
        clearCart(state, action) {
            state.cart = state.cart.slice(0, action.payload)
        },
        addProductToCart(state, action) {
            const existingProduct = state.cart.find((item) => item.producto_id === action.payload.producto_id);

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                state.cart.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },
        incrementProductInCart(state, action) {
            const item = state.cart.find(item => item.producto_id === action.payload);
            item.quantity++;
        },
        decrementProductInCart(state, action) {
            const item = state.cart.find(item => item.producto_id === action.payload);
            if (item.quantity > 1) {
                item.quantity--;
            }
        },
        toggleBtnCart(state, action) {
            state.btnCart = action.payload;
        },
        removeItemFromCart(state, action) {
            state.cart = state.cart.filter(el => el.producto_id !== action.payload);
        },
        filtersProductsByCategory(state, action) {
            state.filters = action.payload;
        },
        toggleSearchForm(state, action) {
            state.search = action.payload;
        },
        setSearchFilterProducts(state, action) {
            state.searchFilterProducts = action.payload;
        },

        // 🎉 NUEVOS REDUCERS PARA EL MODAL
        showAddedToCartModal(state, action) {
            state.addedToCartModal = {
                visible: true,
                productName: action.payload
            };
        },
        hideAddedToCartModal(state) {
            state.addedToCartModal = {
                visible: false,
                productName: ""
            };
        }
    }
});

export const productReducer = productsSlice.reducer;

export const {
    clearCart,
    addProductToCart,
    incrementProductInCart,
    decrementProductInCart,
    toggleBtnCart,
    removeItemFromCart,
    filtersProductsByCategory,
    toggleSearchForm,
    setSearchFilterProducts,
    showAddedToCartModal,
    hideAddedToCartModal,
    toggleCartModal // NUEVO
} = productsSlice.actions;
