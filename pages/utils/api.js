// utils/api.js

export async function fetchProducts() {
    const res = await fetch('https://fakestoreapi.com/products');
    return await res.json();
  }
  
  export async function fetchProductById(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await res.json();
  }
  