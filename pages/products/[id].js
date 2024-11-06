// pages/products/[id].js

import { useRouter } from 'next/router';
import { fetchProductById } from '../../utils/api';

export async function getServerSideProps({ params }) {
  const product = await fetchProductById(params.id);
  return {
    props: { product },
  };
}

const ProductDetail = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-10">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover" />
      <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
      <p className="text-gray-700">${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
