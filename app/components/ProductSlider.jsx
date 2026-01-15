'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductSlider({ title, products }) {
  const scrollRef = useRef(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Don't render if no products provided
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white py-12" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-black tracking-wide">
            {title}
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Previous products"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Next products"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Products Slider */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-72 group cursor-pointer"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="relative bg-gray-100 mb-4 aspect-square overflow-hidden">
                  <Image
                    src={hoveredProduct === product.id ? product.imageB : product.imageA}
                    alt={product.name}
                    fill
                    className="object-cover transition-opacity duration-300"
                    sizes="288px"
                  />
                  
                  {/* Product Label */}
                  {product.label && (
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        product.label === 'Exclusive' 
                          ? 'bg-black text-white' 
                          : 'bg-white text-black border border-gray-200'
                      }`}>
                        {product.label}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="space-y-1">
                  <p className="text-sm font-medium text-black uppercase tracking-wide">
                    {product.brand}
                  </p>
                  <h3 className="text-sm text-gray-800 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-black">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}