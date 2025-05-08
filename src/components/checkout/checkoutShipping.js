import { useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
  const navigate = useNavigate();
  const { cart: initialCart } = location.state || {};
  
  const [cartItems, setCartItems] = useState(initialCart || []);
  const [selectedProvince, setSelectedProvince] = useState("Panamá"); // Default value
  const [selectedDistrict, setSelectedDistrict] = useState("Panamá"); // Default value
  const [deliveryFee, setDeliveryFee] = useState(2.00); // Default fee
  const [showMinAmountError, setShowMinAmountError] = useState(false);
  const [pickupLocation, setPickupLocation] = useState("Estación del Ingenio"); // Default pickup

  useEffect(() => {
    if (!selectedProvince) {
      setSelectedProvince("Panamá");
      setSelectedDistrict("Panamá");
      setDeliveryFee(2.00);
      setPickupLocation("Estación del Ingenio");
    }
  }, []);

   const handleProvinceChange = (event) => {
    const province = event.target.value;
    setSelectedProvince(province);
    
    // Reset district when province changes
    if (province === "Panamá") {
      setSelectedDistrict("Panamá");
      setDeliveryFee(2.00);
    } else if (province === "San Miguelito") {
      setSelectedDistrict("San Miguelito");
      setDeliveryFee(2.50);
    } else {
      setSelectedDistrict("");
      setDeliveryFee(0);
    }
  };

  const selectedProvinceData = ubications[0].provinces.find(
    (province) => province.name === selectedProvince
  );

  const selectedDistrictData = selectedProvinceData?.districts.find(
    (district) => district.name === selectedDistrict
  );

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

  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  const calculateTotal = () => {
    return (calculateSubtotal() + deliveryFee).toFixed(2);
  };

  const handleProceedToPayment = () => {
    const subtotal = calculateSubtotal();
    
    if (subtotal < 10) {
      setShowMinAmountError(true);
      
      // Scroll to error message
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      return;
    }
  
    navigate('/checkoutpayment', {
      state: {
        cart: cartItems,
        shippingDetails: {
          province: selectedProvince,
          district: selectedDistrict,
          deliveryFee: deliveryFee,
          pickupLocation: pickupLocation
        },
        total: calculateTotal()
      }
    });
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-8">
        {/* Sección de detalles de envío */}
        <div className="w-full sm:w-2/3 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Shipping Details</h2>
          
          {showMinAmountError && (
            <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-500">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">
                    El monto mínimo para completar la compra es de $10.00. 
                    Agrega más productos para continuar.
                  </p>
                </div>
              </div>
            </div>
          )}

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
              value={selectedDistrict}
            >
              <option>Seleccionar Distrito</option>
              {selectedProvinceData?.districts.map((district) => (
                <option key={district.name} value={district.name}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Estacion del metro</label>
            <select className="w-full p-3 border border-gray-300 rounded-lg" disabled={!selectedDistrict}>
              <option>Seleccionar Estacion del metro</option>
              {selectedDistrictData?.metroStations.map((station) => (
                <option key={station} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </div>
          
          <p className="text-gray-700 mt-4">Delivery Fee: ${deliveryFee.toFixed(2)}</p>
          
          <button 
            onClick={handleProceedToPayment}
            className={`mt-6 w-full text-white py-3 px-4 rounded-lg font-medium transition duration-200 ${
              cartItems.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            }`}
            disabled={cartItems.length === 0}
          >
            Siguiente
          </button>
        </div>

        {/* Sección del resumen del pedido */}
        <div className="w-full sm:w-1/3 bg-white p-8 rounded-lg shadow-sm mt-8 sm:mt-0">
          <h2 className="text-xl font-bold mb-4">Total Orden</h2>
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
                ${calculateSubtotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Precio entrega</span>
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