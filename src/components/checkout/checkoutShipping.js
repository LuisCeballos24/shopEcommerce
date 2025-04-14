import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import { ubications } from '../../constants/constants';

// Componente individual para cada item en el carrito
const CheckoutItem = ({ item, onRemove, onIncrement, onDecrement }) => {
  const handleIncrement = () => {
    onIncrement(item.producto_id);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onDecrement(item.producto_id);
    }
  };

  const sum = item.price * item.quantity;

  return (
    <div className='py-4 px-2 sm:px-4 border-b'>
      <div className='flex justify-between'>
        <div className='flex'>
          <img className='w-[60px]' src={item.image} alt={item.name} />
          <span className='pl-3 pt-2 text-sm sm:text-lg'>{item.name}</span>
        </div>
        <button 
          className='h-fit pt-2 cursor-pointer text-[#3e77aa] hover:text-red-500 transition' 
          onClick={() => onRemove(item.producto_id)}
        >
          🗑️
        </button>
      </div>
      <div className='flex justify-between items-center relative mt-4 sm:mt-2 sm:justify-end'>
        <div className='relative bottom-0 right-0 text-lg sm:absolute sm:right-[300px]'>
          ${item.price}
        </div>
        <div className='relative right-0 bottom-0 sm:right-[140px] sm:absolute'>
          <button
            className={item.quantity > 1 ? 'text-[#3e77aa]' : 'text-black'}
            disabled={item.quantity <= 1}
            onClick={handleDecrement}
          >
            -
          </button>
          <span className='mx-2 border px-2 py-1 rounded-md sm:px-4 sm:py-2'>
            {item.quantity}
          </span>
          <button
            className='text-[#3e77aa]'
            onClick={handleIncrement}
          >
            +
          </button>
        </div>
        <span className='text-lg'>${sum.toFixed(2)}</span>
      </div>
    </div>
  );
};

export function CheckoutShipping() {
  const location = useLocation();
  const { cart: initialCart } = location.state || {};
  
  const [cartItems, setCartItems] = useState(initialCart || []);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [deliveryFee, setDeliveryFee] = useState(0);

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
    setSelectedDistrict(""); // Resetear distrito cuando cambie provincia
  };

  const selectedProvinceData = ubications[0].provinces.find(
    (province) => province.name === selectedProvince
  );

  // Obtener los datos del distrito seleccionado
  const selectedDistrictData = selectedProvinceData?.districts.find(
    (district) => district.name === selectedDistrict
  );
  // Manejo de cambio de distrito

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    
    if (district === "Panamá") {
      setDeliveryFee(2.00);
    } else if (district === "San Miguelito") {
      setDeliveryFee(2.50);
    } else {
      setDeliveryFee(0);
    }
  };



  const incrementProduct = (producto_id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.producto_id === producto_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementProduct = (producto_id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.producto_id === producto_id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeProduct = (producto_id) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.producto_id !== producto_id)
    );
  };

  const calculateTotal = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return (subtotal + deliveryFee).toFixed(2);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-8">
        {/* Sección de detalles de envío */}
        <div className="w-full sm:w-2/3 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Province</label>
            <select 
              value={selectedProvince} 
              onChange={handleProvinceChange} 
              className="w-full border px-3 py-2 rounded-lg"
            >
              <option>Seleccionar Provincia</option>
                {ubications[0].provinces.map((province) => (
                  <option key={province.name} value={province.name}>
                    {province.name}
                  </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">District</label>
            <select
                className="w-full p-3 border border-gray-300 rounded-lg"
                onChange={handleDistrictChange}
                disabled={!selectedProvince}
                value={selectedDistrict} // Establecer el valor seleccionado
              >
                <option>Seleccionar Distrito</option>
                {selectedProvinceData?.districts.map((districts) => (
                  <option key={districts.name} value={districts.name}>
                    {districts.name}
                  </option>
                ))}
              </select>
          </div>

          <div>
              <label className="block text-gray-700 mb-2">Estacion del metro</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg" disabled={!selectedDistrict}>
                <option>Seleccionar Estacion del metro</option>
                {selectedDistrictData?.metroStations.map((metroStations) => (
                  <option key={metroStations} value={metroStations}>
                    {metroStations}
                  </option>
                ))}
              </select>
            </div>
          <p className="text-gray-700">Delivery Fee: ${deliveryFee.toFixed(2)}</p>
        </div>

        {/* Sección del resumen del pedido */}
        <div className="w-full sm:w-1/3 bg-white p-8 rounded-lg shadow-sm mt-8 sm:mt-0">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div>
            {cartItems.map((item) => (
              <CheckoutItem
                key={item.producto_id}
                item={item}
                onIncrement={incrementProduct}
                onDecrement={decrementProduct}
                onRemove={removeProduct}
              />
            ))}
          </div>
          <div className="space-y-2 mt-4 pt-4 border-t">
            <div className="flex justify-between">
              <span className="text-gray-700">Subtotal</span>
              <span className="text-gray-700">
                ${cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Delivery Fee</span>
              <span className="text-gray-700">${deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold pt-2 border-t">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
