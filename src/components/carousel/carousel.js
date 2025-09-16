import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart, showAddedToCartModal } from "../../redux/products/products.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export function ProductCarousel({ products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.product);
  const currentProduct = products[currentIndex];
  const isInCart = !!cart.find(p => p.id === currentProduct.producto_id);

  const handleDotClick = (index) => setCurrentIndex(index);

  const handleAddToCart = () => {
    dispatch(addProductToCart(currentProduct));
    dispatch(showAddedToCartModal(currentProduct.name));
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
};

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  if (!products || products.length === 0) return null;
  

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-10 px-4">
      {/* Contenedor principal del carrusel */}
      <div className="bg-white rounded-xl shadow-md flex flex-col xl:flex-row overflow-hidden min-h-[450px]">
        {/* Texto + botón (izquierda en xl, abajo en móvil) */}
        <div className="p-6 xl:w-1/2 flex flex-col justify-center items-start text-center xl:text-left order-2 xl:order-1">
          <h2 className="text-2xl font-bold mb-2">{currentProduct.name}</h2>
          <p className="text-gray-700 mb-4">{currentProduct.description || "Sin descripción disponible."}</p>
          <h2 className="text-base font-bold mb-2">${currentProduct.price}</h2>
          <div className="w-full flex justify-center xl:justify-start">
            <button
              onClick={handleAddToCart}
              disabled={isInCart}
              className={`w-fit px-4 py-2 rounded text-white font-semibold transition duration-300 ${isInCart ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                }`}
            >
              {isInCart ? (
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCartShopping} />
                  <FontAwesomeIcon icon={faCircleCheck} className="text-white bg-green-600 rounded-full" />
                  Agregado
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Agregar al carrito
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Imagen (derecha en xl, arriba en móvil) */}
        <div className="xl:w-1/2 flex items-center justify-center bg-gray-100 p-4 min-h-[300px] order-1 xl:order-2">
          <img src={currentProduct.image} alt={currentProduct.name} className="max-h-[300px] object-contain" />
        </div>
      </div>

       {/* Flechas */}
       <button
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow"
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
                onClick={goToNext}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow"
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-black scale-110" : "bg-gray-400"
              } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
}
