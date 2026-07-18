import React from 'react';

const Footer: React.FC = () => {
  // This distributor ID should be updated for each distributor's page
  const distributorId = "DISTRIBUTOR_ID"; // Replace with actual distributor ID
  
  return (
    <footer className="bg-health-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold font-proxima mb-4">About Us</h3>
            <p className="mb-4 font-montserrat">
              Premium health supplements designed to support your wellness journey with natural ingredients.
            </p>
            <ul className="space-y-2 font-montserrat mb-4">
              <li>
                <a 
                  href="https://blog.dailywithdoc.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tangy-yellow transition-colors"
                >
                  Visit Our Blog
                </a>
              </li>
            </ul>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61574601906559#" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tangy-yellow transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/tangytangerineliving/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-tangy-yellow transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Contact */}
          <div>
            <h3 className="text-xl font-bold font-proxima mb-4">Contact Us</h3>
            <div className="font-montserrat">
              <p className="mb-2">Phone: <a href="tel:+18557777713" className="hover:text-tangy-yellow transition-colors">855.777.7713</a></p>
              <p className="mt-2">Email: <a href="mailto:info@tangytangerineliving.com" className="hover:text-tangy-yellow transition-colors">info@tangytangerineliving.com</a></p>
            </div>
          </div>
          
          {/* Column 3: Legal Links */}
          <div>
            <h3 className="text-xl font-bold font-proxima mb-4">Legal</h3>
            <ul className="space-y-2 font-montserrat">
              <li>
                <a 
                  href={`https://${distributorId}.youngevity.com/us_en/privacy-policy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tangy-yellow transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href={`https://${distributorId}.youngevity.com/us_en/terms-of-use`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tangy-yellow transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a 
                  href={`https://${distributorId}.youngevity.com/us_en/youngevity-data-protection-policy`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tangy-yellow transition-colors"
                >
                  Data Protection Policy
                </a>
              </li>
              <li>
                <a 
                  href={`https://${distributorId}.youngevity.com/us_en/customer-care#returns`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tangy-yellow transition-colors"
                >
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-blue-sky text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/images/Independent YGY Distributor.png" 
              alt="Independent YGY Distributor" 
              className="h-12 w-auto"
            />
          </div>
          <p className="mb-4 font-montserrat">
            Independent YGY Distributor ID: {distributorId}
          </p>
          <p className="text-sm font-montserrat">
            &copy; {new Date().getFullYear()} Daily with Doc & Becca. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
