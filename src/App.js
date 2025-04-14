import React from "react";
import { Context } from "./context/context";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ProductOverView } from "./pages/ProductOverView";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { BtnScroll } from "./components/btn-scroll/BtnScroll";
import {CheckoutShipping} from "./components/checkout/CheckoutShipping";
import AddProductForm from "./pages/addProduct";

export default function App() {
    const productId = { id: 4 };

    return (
        <div className="min-h-screen flex flex-col">
            <Context.Provider value={productId}>
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products/:id" element={<ProductOverView />} />
                        <Route path="/agregar" element={<AddProductForm />} />
                        <Route path="/checkoutshipping" element={<CheckoutShipping />} />
                    </Routes>
                </main>
                <BtnScroll />
                <Footer />
            </Context.Provider>
        </div>
    );
}
