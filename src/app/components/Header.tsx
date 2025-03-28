"use client"
import Link from "next/link";
import { useStore } from "../store/useStore";
import { useStoreCart } from "../context/StoreContext";

const Header = () => {

    const { count, user } = useStore();
    const { products } = useStoreCart();

    return (
        <header className="bg-blue-500 text-white p-4">
            <nav className="flex justify-between">
                <Link href="/" className="text-2xl font-bold">
                    My App
                </Link>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/home" className="text-white hover:text-gray-200">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-white hover:text-gray-200">About Us</Link>
                        </li>
                        <li>
                            <Link href="/services" className="text-white hover:text-gray-200">Services</Link>
                        </li>
                        <li>
                            <Link href="/counter" className="text-white hover:text-gray-200">Counter</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
                        </li>
                        <li>
                            <Link href="/articles" className="text-white hover:text-gray-200">Articles</Link>
                        </li>
                        <li>
                            <Link href="/cart" className="text-white hover:text-gray-200">Cart {products.length}</Link>
                        </li>
                    </ul>
                </div>

                <div className="text-lg flex flex-row gap-2">
                    <p>Counter: {count}</p>
                    <p>User: {user.name ? user.name : 'Guest'}</p>
                </div>

            </nav>
        </header>
    );
};

export default Header;
