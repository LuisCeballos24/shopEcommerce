import React, { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { addProductToCart } from "../../redux/products/products.slice"
import { faCartShopping, faCircleCheck } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { Context } from "../../context/context"
import { AddedToCartModal } from "../cart-shopping/AddedToCartModal";
import { showAddedToCartModal } from "../../redux/products/products.slice"

export function ProductItem({ product }) {
    const { cart } = useSelector(state => state.product)
    const contextId = useContext(Context)
    const isCart = !!cart.find(el => el.id === product.producto_id)
    const dispatch = useDispatch()

    const toggleCart = () => {
        dispatch(showAddedToCartModal(product.name)); // Mostrar el modal
    };

    const addToCart = (event) => {
        event.preventDefault()
        dispatch(addProductToCart(product))
    }

    const clickHandler = (productId) => {
        contextId.id = productId
    }

    return (
        <>
            <Link to={`/products/${product.producto_id}`} onClick={() => clickHandler(product.producto_id)} className='w-[300px] h-[400px] shadow-md mt-[10px] border relative rounded-lg productItem transition-all duration-300 sm:mr-[5px] sm:ml-[5px]'>
                <div className="relative flex flex-col items-center border rounded-md shadow-lg p-4 h-[350px] justify-between">
                    <img className="w-[200px] mt-2" src={product.image} alt={product.name} />

                    <div className="text-center text-base font-semibold mt-4">{product.name}</div>

                    <div className="text-center text-sm mt-1">
                        {product.stock > 0 ? (
                            <span className="text-green-600">Stock disponible: {product.stock}</span>
                        ) : (
                            <span className="text-red-500">Por pedido</span>
                        )}
                    </div>

                    <div className="w-full flex justify-between items-center mt-4">
                        <span className="text-xl ml-2">${product.price}</span>
                        <button
                            onClick={(e) => {
                                addToCart(e);
                                toggleCart();
                            }}
                            disabled={isCart}
                            className="mr-4"
                        >
                            {isCart ? (
                                <div className="relative">
                                    <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
                                    <sup>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            className="absolute right-[10px] top-[-5px] text-[#00a046] bg-white rounded-full"
                                        />
                                    </sup>
                                </div>
                            ) : (
                                <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
                            )}
                        </button>
                    </div>
                </div>
            </Link>
            <AddedToCartModal />
        </>
    )
}
