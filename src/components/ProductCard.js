import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div className="bg-white p-4 rounded shadow" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.title} className="h-48 w-full object-cover" />
      <h2 className="mt-2 text-lg font-bold">{product.title}</h2>
      <p className="mt-1 text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
