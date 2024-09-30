// app/components/Footer.jsx
import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 My Website. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link to="/privacy" className="hover:text-blue-300">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-blue-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
