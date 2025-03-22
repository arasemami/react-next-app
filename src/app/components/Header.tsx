// components/Header.tsx
import Link from "next/link";

const Header = () => {
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
                            <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
