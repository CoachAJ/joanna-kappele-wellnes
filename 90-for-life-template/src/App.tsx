import * as React from 'react';
import { CartProvider } from './contexts/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import NinetyForLife from './NinetyForLife';

/**
 * Main App component that includes the header, footer, and 90 for Life section
 * This provides a complete template with brand identity elements
 */
function App() {
  const [cartOpen, setCartOpen] = React.useState(false);
  
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header setCartOpen={setCartOpen} />
        
        <main role="main" className="flex-grow">
          {/* Hero Section Placeholder - Can be customized or removed */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2 space-y-6">
                  <div className="max-w-3xl">
                    <h1 className="font-proxima font-bold text-4xl md:text-5xl lg:text-5xl mb-4">
                      <span className="text-health-blue">Embrace the Power of</span><br/>
                      <span className="text-glorious-sunset">90 Essential Nutrients</span>
                    </h1>
                    <h2 className="text-blue-sky text-2xl md:text-3xl font-proxima font-medium mb-4">
                      A New Gold Standard for Wellness
                    </h2>
                    <p className="font-montserrat text-xl mb-8 text-gray-700">
                      <strong>Support your body at the cellular level with our unique blend of high-antioxidant nutrients including 16 essential vitamins, 60 essential minerals, and 12 amino acids.</strong>
                    </p>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src="/images/healthy-body-pak-2.0.png" 
                    alt="Healthy Body Start Pak" 
                    className="rounded-lg shadow-xl w-full max-w-md h-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* 90 For Life Section */}
          <NinetyForLife />
        </main>
        
        <Footer />
        <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
