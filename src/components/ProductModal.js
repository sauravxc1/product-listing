import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
        <button onClick={onClose} className="text-gray-600">Close</button>
        <img src={product.image} alt={product.title} className="h-64 w-full object-cover mt-4" />
        <h2 className="mt-4 text-2xl font-bold">{product.title}</h2>
        <p className="mt-2 text-gray-800">{product.description}</p>
        <p className="mt-2 text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductModal;
