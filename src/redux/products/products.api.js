import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: 'productos/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://vercel-api-zeta-lac.vercel.app/api',
    }),
    endpoints: (build) => ({
        getProductsAll: build.query({
            query: () => ({
                url: '/productos',
            }),
        }),
        getProductById: build.query({
            query: (id) => ({
              url: `/productos?id=${id}`,  // Cambiar la URL para incluir el parámetro en la consulta
            }),
          }),
          getProductByCategory: build.query({
            query: (category_id) => ({
                url: `/category?id=${category_id}&type=products` // Nuevo endpoint para productos
            }),
        }),        
        // Endpoint POST para agregar un nuevo producto
        addProduct: build.mutation({
            query: (newProduct) => ({
                url: '/productos',
                method: 'POST',
                body: newProduct,
            }),
        }),
    }),
});

export const {
    useGetProductsAllQuery,
    useGetProductByIdQuery,
    useGetProductByCategoryQuery,
    useAddProductMutation, // Hook para usar el endpoint POST
} = productsApi;
