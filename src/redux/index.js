// src/redux/index.js o donde tengas tu store
import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./products/products.api";
import { productReducer } from "./products/products.slice";
import { setupListeners } from "@reduxjs/toolkit/query";

// ✅ Cargar el estado guardado en sessionStorage
const loadState = () => {
    try {
        const serializedState = sessionStorage.getItem("reduxState");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Error cargando estado:", e);
        return undefined;
    }
};

// ✅ Guardar el estado en sessionStorage
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify({
            product: state.product // guarda solo tu slice de productos
        });
        sessionStorage.setItem("reduxState", serializedState);
    } catch (e) {
        console.warn("Error guardando estado:", e);
    }
};

// ✅ Usa preloadedState para hidratar desde sessionStorage
export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        product: productReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
    preloadedState: loadState(), // 👈 aquí se hidrata desde sessionStorage
});

// ✅ Escucha cambios y guarda en sessionStorage
store.subscribe(() => {
    saveState(store.getState());
});

setupListeners(store.dispatch);
