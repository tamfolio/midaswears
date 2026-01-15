'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const categories = [
    {
      title: 'Men',
      image: '/images/men.jpeg',
      href: '/men',
      alt: 'Men\'s Fashion Collection'
    },
    {
      title: 'Women',
      image: '/images/women.jpeg',
      href: '/women',
      alt: 'Women\'s Fashion Collection'
    },
    {
      title: 'Archives',
      image: '/images/archives.jpeg',
      href: '/archives',
      alt: 'Archive Collection'
    }
  ];

  return (
    <section className="w-full px-10">
      {/* Desktop: 3 columns side by side */}
      <div className="hidden lg:grid lg:grid-cols-3 h-screen">
        {categories.map((category, index) => (
          <Link
            key={category.title}
            href={category.href}
            className="relative group overflow-hidden bg-gray-100 cursor-pointer"
          >
            <div className="absolute inset-0">
              <Image
                src={category.image}
                alt={category.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index === 0}
                sizes="33vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-6xl font-normal tracking-wide drop-shadow-lg" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                {category.title}
              </h2>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        ))}
      </div>

      {/* Tablet: 1 column, shorter height */}
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-1 gap-0">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="relative group overflow-hidden bg-gray-100 cursor-pointer h-80"
            >
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-5xl font-bold tracking-wide uppercase drop-shadow-lg" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  {category.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile: 1 column, even shorter height */}
      <div className="block md:hidden">
        <div className="grid grid-cols-1 gap-0">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="relative group overflow-hidden bg-gray-100 active:scale-95 transition-transform duration-150 h-64"
            >
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold tracking-wide uppercase drop-shadow-lg" style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
                  {category.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}