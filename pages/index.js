// pages/index.js

import ProductList from '../components/ProductList';
import { fetchProducts } from '../utils/api';

export async function getStaticProps() {
  const products = await fetchProducts();
  return {
    props: { products },
  };
}

const Home = ({ products }) => (
  <main className="container mx-auto py-10">
    <h1 className="text-3xl font-bold text-center mb-6">Our Products</h1>
    <ProductList products={products} />
  </main>
);

export default Home;
