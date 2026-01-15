'use client';

import { useState } from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    // You can add actual subscription logic here
  };

  return (
    <footer className="bg-white border-t border-gray-200 mt-16" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          
          {/* Men Column */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">
              Men
            </h3>
            <ul className="space-y-3">
              <li><a href="/men/new-arrivals" className="text-sm text-gray-600 hover:text-black transition-colors">New Arrivals</a></li>
              <li><a href="/men/brands" className="text-sm text-gray-600 hover:text-black transition-colors">Brands</a></li>
              <li><a href="/men/clothing" className="text-sm text-gray-600 hover:text-black transition-colors">Clothing</a></li>
              <li><a href="/men/accessories" className="text-sm text-gray-600 hover:text-black transition-colors">Accessories</a></li>
              <li><a href="/men/footwear" className="text-sm text-gray-600 hover:text-black transition-colors">Footwear</a></li>
              <li><a href="/men/life" className="text-sm text-gray-600 hover:text-black transition-colors">Life</a></li>
              <li><a href="/men/sale" className="text-sm text-gray-600 hover:text-black transition-colors">Sale</a></li>
              <li><a href="/men/archives" className="text-sm text-gray-600 hover:text-black transition-colors">Archives</a></li>
              <li><a href="/journal" className="text-sm text-gray-600 hover:text-black transition-colors">Journal</a></li>
            </ul>
          </div>

          {/* Women Column */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">
              Women
            </h3>
            <ul className="space-y-3">
              <li><a href="/women/new-arrivals" className="text-sm text-gray-600 hover:text-black transition-colors">New Arrivals</a></li>
              <li><a href="/women/brands" className="text-sm text-gray-600 hover:text-black transition-colors">Brands</a></li>
              <li><a href="/women/clothing" className="text-sm text-gray-600 hover:text-black transition-colors">Clothing</a></li>
              <li><a href="/women/accessories" className="text-sm text-gray-600 hover:text-black transition-colors">Accessories</a></li>
              <li><a href="/women/footwear" className="text-sm text-gray-600 hover:text-black transition-colors">Footwear</a></li>
              <li><a href="/women/life" className="text-sm text-gray-600 hover:text-black transition-colors">Life</a></li>
              <li><a href="/women/sale" className="text-sm text-gray-600 hover:text-black transition-colors">Sale</a></li>
              <li><a href="/women/archives" className="text-sm text-gray-600 hover:text-black transition-colors">Archives</a></li>
              <li><a href="/journal" className="text-sm text-gray-600 hover:text-black transition-colors">Journal</a></li>
            </ul>
          </div>

          {/* Others Column */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">
              Others
            </h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-sm text-gray-600 hover:text-black transition-colors">About Us</a></li>
              <li><a href="/stores" className="text-sm text-gray-600 hover:text-black transition-colors">Retail Store</a></li>
              <li><a href="/pro" className="text-sm text-gray-600 hover:text-black transition-colors">MidasWears Pro</a></li>
              <li><a href="/affiliates" className="text-sm text-gray-600 hover:text-black transition-colors">Affiliates Program</a></li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">
              Help
            </h3>
            <ul className="space-y-3">
              <li><a href="/faq" className="text-sm text-gray-600 hover:text-black transition-colors">FAQ</a></li>
              <li><a href="/shipping" className="text-sm text-gray-600 hover:text-black transition-colors">Delivery & Shipping</a></li>
              <li><a href="/returns" className="text-sm text-gray-600 hover:text-black transition-colors">Returns</a></li>
              <li><a href="/payment" className="text-sm text-gray-600 hover:text-black transition-colors">Payment</a></li>
              <li><a href="/customs" className="text-sm text-gray-600 hover:text-black transition-colors">Customs Duties & Taxes</a></li>
              <li><a href="/order-status" className="text-sm text-gray-600 hover:text-black transition-colors">Order Status</a></li>
            </ul>
          </div>

          {/* Elsewhere Column */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">
              Elsewhere
            </h3>
            <ul className="space-y-3">
              <li><a href="https://midaswears.blog" className="text-sm text-gray-600 hover:text-black transition-colors">MidasBlog</a></li>
              <li><a href="/style-guide" className="text-sm text-gray-600 hover:text-black transition-colors">Style Guide</a></li>
              <li><a href="/lookbook" className="text-sm text-gray-600 hover:text-black transition-colors">Lookbook</a></li>
              <li><a href="/community" className="text-sm text-gray-600 hover:text-black transition-colors">Community</a></li>
              <li><a href="/midaswears" className="text-sm text-gray-600 hover:text-black transition-colors">MidasWears</a></li>
            </ul>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">
              About Us
            </h3>
            <ul className="space-y-3">
              <li><a href="/company" className="text-sm text-gray-600 hover:text-black transition-colors">MidasWears Group</a></li>
              <li><a href="/newsroom" className="text-sm text-gray-600 hover:text-black transition-colors">Newsroom</a></li>
              <li><a href="/leadership" className="text-sm text-gray-600 hover:text-black transition-colors">Leadership</a></li>
              <li><a href="/careers" className="text-sm text-gray-600 hover:text-black transition-colors">Career Opportunities</a></li>
              <li><a href="/investors" className="text-sm text-gray-600 hover:text-black transition-colors">Investor Relations</a></li>
              <li><a href="/advertising" className="text-sm text-gray-600 hover:text-black transition-colors">Advertising</a></li>
              <li><a href="/legal" className="text-sm text-gray-600 hover:text-black transition-colors">Legal</a></li>
              <li><a href="/contact" className="text-sm text-gray-600 hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Follow Us & Newsletter Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="text-sm font-semibold text-black uppercase tracking-wide mb-4">
              Follow Us
            </h3>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com/midaswears" className="text-gray-600 hover:text-black transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/midaswears" className="text-gray-600 hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/midaswears" className="text-gray-600 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-sm font-medium text-black mb-3">
                Subscribe Now And Enjoy 10% Off Your First Order
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-2">
                By Subscribing, You Agree To Our{' '}
                <a href="/terms" className="underline hover:text-black">Terms Of Use</a>
                {' '}And{' '}
                <a href="/privacy" className="underline hover:text-black">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-xs text-gray-500 mb-4 md:mb-0">
              2026 MidasWears Limited. All Rights Reserved. MidasWears® is a registered trademark of MidasWears Nigeria Ltd.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-4 md:mb-0">
              <a href="/terms" className="hover:text-black transition-colors">Terms & Conditions</a>
              <a href="/privacy" className="hover:text-black transition-colors">Privacy Policy</a>
              <a href="/cookies" className="hover:text-black transition-colors">Cookie Policy</a>
            </div>

            {/* Currency Selector */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-xs">
                <div className="w-4 h-3 bg-green-600 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">₦</span>
                </div>
                <span className="text-gray-600">NGN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}