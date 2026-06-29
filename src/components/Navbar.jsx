import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            MyLogo
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </a>

            <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 py-4" : "max-h-0"
          } md:hidden`}
        >
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Blog
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>

            <button className="w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;