// app/components/Header.jsx
import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300">
                Contact
              </Link>
            </li>
            {/* <li>
              <Link to="/blogs" className="hover:text-blue-300">
                blogs
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
