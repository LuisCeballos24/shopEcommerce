import { useLocation } from "react-router-dom";
import React, { useState } from "react";

export function CheckoutPayment() {
  const location = useLocation();
  const { cart, shippingDetails, total } = location.state || {};
  const [ready, setReady] = useState(false);

  const executives = [
    { number: "50768729697", name: "Ejecutivo 1" },
    { number: "50762269474", name: "Ejecutivo 2" }
  ];

  const handleRedirect = () => {
    if (!cart || cart.length === 0) return;

    const itemsMessage = cart.map(item =>
      `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join("%0A");

    const shippingMessage = shippingDetails ?
      `%0A%0A*Provincia:* ${shippingDetails.province}%0A*Distrito:* ${shippingDetails.district}%0A*Costo de envío:* $${shippingDetails.deliveryFee.toFixed(2)}` : '';

    const totalMessage = `%0A%0A*Total a pagar:* $${total}`;
    const baseMessage = `*Pedido realizado*%0A%0A*Productos:*%0A${itemsMessage}${shippingMessage}${totalMessage}%0A%0A¡Hola! Quiero confirmar mi pedido.`;

    window.open(`https://wa.me/${executives[0].number}?text=${baseMessage}`, '_blank');
    setTimeout(() => {
      window.open(`https://wa.me/${executives[1].number}?text=${baseMessage}`, '_blank');
    }, 1000);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm text-center">
        <h2 className="text-2xl font-bold mb-4">Procesando tu pago</h2>
        <p className="text-gray-700 mb-6">
          Presiona el botón abajo para confirmar tu pedido por WhatsApp con nuestros ejecutivos de ventas.
        </p>
        <button
          onClick={handleRedirect}
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition"
        >
          Confirmar pedido por WhatsApp
        </button>
      </div>
    </main>
  );
}
