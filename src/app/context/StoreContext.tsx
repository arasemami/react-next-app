"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}



interface StoreState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;

    products: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    clearCart: () => void;
}

const StoreContext = createContext<StoreState | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [count, setCount] = useState<number>(0);
    const [products, setProducts] = useState<Product[]>([]);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);
    const reset = () => setCount(0);

    const addToCart = (product: Product) => {
        setProducts((prevProducts) => {
            const existingProduct = prevProducts.find(p => p.id === product.id);
            if (existingProduct) {
                return prevProducts.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prevProducts, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: number) => {
        setProducts((prevProducts) => prevProducts.filter(p => p.id !== productId));
    };
    const clearCart = () => {
        setProducts([]);
    };
    return (
        <StoreContext.Provider value={{
            count, increment, decrement, reset,
            products, addToCart, removeFromCart, clearCart
        }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStoreCart = (): StoreState => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};
