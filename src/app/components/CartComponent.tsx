"use client"
import React from 'react';
import { useStoreCart } from '../context/StoreContext';

const CartComponent = () => {
    const { products, addToCart, removeFromCart, clearCart } = useStoreCart();

    return (
        <div>
            <h2 className='font-bold mb-4'>Shopping Cart</h2>
            {products.length === 0 ? (
                <p className='p-5'>Your cart is empty.</p>
            ) : (
                <ul className='flex flex-col gap-2'>
                    {products.map(product => (
                        <li className='flex flex-row gap-4 items-center justify-center' key={product.id}>
                            {product.name} - ${product.price} x {product.quantity}
                            <button className='bg-red-500 p-2 rounded-md' onClick={() => removeFromCart(product.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button className='bg-blue-500 p-2 rounded-md' onClick={clearCart}>Clear Cart</button>
        </div>
    );
};


export default CartComponent;
