import React from 'react';
import { useAddProductMutation } from '../redux/products/products.api';

const AddProductForm = () => {
    const [addProduct, { isLoading, isSuccess, error }] = useAddProductMutation();

    const handleAddProduct = async () => {
        const newProduct = {
            name: 'Nuevo Producto',
            price: 19.99,
            category: 'electronics',
            // Otros campos según tus necesidades
        };
        
        try {
            await addProduct(newProduct);
            console.log("Producto agregado con éxito");
        } catch (error) {
            console.error("Error al agregar producto:", error);
        }
    };

    return (
        <div>
            <button onClick={handleAddProduct} disabled={isLoading}>
                {isLoading ? 'Agregando...' : 'Agregar Producto'}
            </button>
            {isSuccess && <p>Producto agregado con éxito</p>}
            {error && <p>Error: {error.message}</p>}
        </div>
    );
};

export default AddProductForm;