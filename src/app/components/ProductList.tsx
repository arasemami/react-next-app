"use client"
import React from 'react';
import { useStoreCart } from '../context/StoreContext';

const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 }
];

const ProductList = () => {
    const { addToCart } = useStoreCart();

    return (
        <div>
            <h2 className='font-bold mb-4'>Products</h2>
            <ul className='flex flex-col gap-5'>
                {products.map((product: any) => (
                    <li className='flex gap-2 items-center justify-between bg-gray-900 p-5' key={product.id}>
                        {product.name} - ${product.price}
                        <button className='bg-blue-400 p-2 rounded-md cursor-pointer hover:opacity-50' onClick={() => addToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
