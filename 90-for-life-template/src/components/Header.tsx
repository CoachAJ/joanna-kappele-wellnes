import * as React from 'react';
import { useCart } from '../contexts/CartContext';
import { PRODUCT_CODES } from '../utils/cartUtils';

interface HeaderProps {
  setCartOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setCartOpen }) => {
  const { addToCart, getCartCount } = useCart();
  const cartCount = getCartCount();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/images/DwD logo.png" 
              alt="Daily with Doc & Becca Logo" 
              className="h-14 w-auto"
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-proxima">
          <a href="#features" className="text-gray-700 hover:text-health-blue">Features</a>
          <a href="#products" className="text-gray-700 hover:text-health-blue">Products</a>
          <a href="#ingredients" className="text-gray-700 hover:text-health-blue">Ingredients</a>
          <a href="https://blog.dailywithdoc.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-health-blue">Blog</a>
          <a 
            href="#" 
            className="bg-glorious-sunset hover:bg-glorious-sunset/90 text-white px-4 py-2 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              addToCart(PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0);
            }}
          >
            Buy Now
          </a>
          
          {/* Cart Button */}
          <button 
            onClick={() => setCartOpen(true)}
            className="relative p-2 text-gray-700 hover:text-health-blue transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-glorious-sunset text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
        
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button 
            onClick={() => setCartOpen(true)}
            className="relative p-2 mr-2 text-gray-700 hover:text-health-blue transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-glorious-sunset text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
          <button
            type="button"
            className="text-gray-700 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-health-blue hover:bg-gray-50">Features</a>
            <a href="#products" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-health-blue hover:bg-gray-50">Products</a>
            <a href="#ingredients" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-health-blue hover:bg-gray-50">Ingredients</a>
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-glorious-sunset text-white hover:bg-glorious-sunset/90"
              onClick={(e) => {
                e.preventDefault();
                addToCart(PRODUCT_CODES.HEALTHY_BODY_START_PAK_2_0);
              }}
            >
              Buy Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
