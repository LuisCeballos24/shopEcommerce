import React, { useState } from "react";
import { inputsCategory } from "../constants/constants";
import { useAddProductMutation } from "../redux/products/products.api";

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: inputsCategory[0].id, // Default to first category
    images: "",
    rating: "",
  });

  const [addProduct, { isLoading, isSuccess, isError }] = useAddProductMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryId =
      inputsCategory.find((cat) => cat.textContext === product.category)
        ? inputsCategory.indexOf(inputsCategory.find((cat) => cat.textContext === product.category)) + 1
        : 1;

    const images = product.images ? product.images.split(",").map((url) => url.trim()) : [];

console.log(product)
console.log(images)
console.log(categoryId)
const newProduct = {
    name: product.name,
    description: product.description,
    price: parseFloat(product.price),
    stock: parseInt(product.stock),
    image: images,  // Este es el array de imágenes, ya serializado
    category_id: categoryId,
    rating: {
      rate: parseFloat(product.rating),
      count: 2 + Math.floor(Math.random() * 2),
    },
  };
    console.log(newProduct)
    try {
      await addProduct(newProduct).unwrap();
      alert("Producto agregado exitosamente.");
    } catch (error) {
      console.error("Error al agregar producto:", error);
      alert("Hubo un problema al agregar el producto.");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
        {/* Formulario */}
        <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Agregar Producto</h2>
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Nombre del producto</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg bg-gray-100"
                placeholder="Ingrese el nombre"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Descripción</label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg bg-gray-100"
                placeholder="Ingrese la descripción"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Precio</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg bg-gray-100"
                placeholder="Ingrese el precio"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Stock</label>
              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg bg-gray-100"
                placeholder="Ingrese el stock disponible"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Categoría</label>
              <select
                name="category"
                value={product.category}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg bg-gray-100"
              >
                {inputsCategory.map((cat, index) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.textContext}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Imágenes (URLs separadas por coma)</label>
              <input
                type="text"
                name="images"
                value={product.images}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg bg-gray-100"
                placeholder="URL de las imágenes"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Rating</label>
              <input
                type="number"
                step="0.1"
                name="rating"
                value={product.rating}
                onChange={handleInputChange}
                className="w-full p-3 border rounded-lg bg-gray-100"
                placeholder="Calificación (1-5)"
                required
              />
            </div>
            <button
              type="submit"
              className={`w-full py-3 rounded-lg ${isLoading ? "bg-gray-400" : "bg-blue-600 text-white"}`}
              disabled={isLoading}
            >
              {isLoading ? "Guardando..." : "Guardar Producto"}
            </button>
          </form>
          {isSuccess && <p className="text-green-600 mt-4">¡Producto agregado exitosamente!</p>}
          {isError && <p className="text-red-600 mt-4">Hubo un error al agregar el producto.</p>}
        </div>

        {/* Vista Previa */}
        <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Vista Previa del Producto</h2>
          <div>
            {product.images ? (
              product.images.split(',').map((image, index) => (
                <img
                  key={index}
                  src={image.trim()}
                  alt={`Vista previa ${index + 1}`}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              ))
            ) : (
              <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg mb-4">
                <span className="text-gray-500">Sin imagen</span>
              </div>
            )}
            <h3 className="text-lg font-bold">{product.name || "Nombre"}</h3>
            <p className="text-gray-600">{product.description || "Descripción"}</p>
            <p className="text-lg font-bold text-gray-900 mt-2">
              {product.price ? `$${product.price}` : "Precio"}
            </p>
            <p className="text-gray-600">
              Stock: {product.stock || "Cantidad no especificada"}
            </p>
            <p className="text-gray-600">
              Categoría:{" "}
              {
                inputsCategory.find((cat) => cat.id === product.category)?.textContext ||
                "Seleccione una categoría"
              }
            </p>
            <p className="text-gray-600">
              Calificación: {product.rating || "Sin rating"}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductForm;
