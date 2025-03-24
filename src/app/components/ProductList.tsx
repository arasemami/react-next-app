 "use client"
import React from 'react';
import { useStoreCart } from '../context/StoreContext';

const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
];

const ProductList = () => {
    const { addToCart } = useStoreCart();

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map((product: any) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
