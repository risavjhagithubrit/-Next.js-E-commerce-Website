// components/Header.js

import Link from 'next/link';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="container mx-auto flex justify-between items-center">
      <Link href="/">
        <a className="text-2xl font-bold">E-commerce</a>
      </Link>
      <Link href="/checkout">
        <a className="bg-blue-500 text-white px-4 py-2 rounded">Cart</a>
      </Link>
    </nav>
  </header>
);

export default Header;
