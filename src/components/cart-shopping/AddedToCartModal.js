import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideAddedToCartModal } from '../../redux/products/products.slice';

export function AddedToCartModal() {
    const dispatch = useDispatch();
    const { visible, productName } = useSelector(state => state.product.addedToCartModal);

    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => dispatch(hideAddedToCartModal()), 3000);
            return () => clearTimeout(timer);
        }
    }, [visible, dispatch]);

    if (!visible) return null;

    return (
        <div className="fixed top-20 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50 transition">
            <p><strong>{productName}</strong> fue agregado al carrito.</p>
        </div>
    );
}
