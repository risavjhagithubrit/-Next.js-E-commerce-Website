// components/ProductCard.js

import Link from 'next/link';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
  };

  return (
    <div className="border rounded-lg p-4">
      <Link href={`/products/${product.id}`}>
        <a>
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <h2 className="font-bold text-lg mt-4">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
        </a>
      </Link>
      <button
        onClick={addToCart}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
