import React from 'react';
import { ArrowRight, Droplets } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-32 bg-gradient-to-b from-blue-600 to-blue-400 opacity-20 rotate-45"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-24 bg-gradient-to-b from-blue-400 to-blue-600 opacity-20 -rotate-45"></div>
      </div>

      {/* Premium Product Showcase */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 md:opacity-20">
        <img
          src="https://images.pexels.com/photos/6782432/pexels-photo-6782432.jpeg"
          alt="Premium sanitary ware"
          className="w-full h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left">
            {/* Brand Logo Integration */}
            <div className="flex items-center mb-6">
              <div className="w-3 h-3 bg-blue-600 transform rotate-45 mr-3"></div>
              <span className="text-blue-600 font-light text-lg tracking-wider uppercase">Simplified Luxury</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              ENENCIA
              <span className="block text-3xl md:text-4xl lg:text-5xl text-blue-600 font-normal mt-2">
                Redefining Elegance
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-light text-blue-700 mb-8 max-w-lg leading-relaxed">
              Where premium craftsmanship meets minimalist design. Transform your space with architectural precision.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = '/shop'}
              >
                Explore Collections
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="#about"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Discover More
              </a>
            </div>

            {/* Premium Features */}
            <div className="flex items-center space-x-8 mt-12 text-blue-600">
              <div className="text-center">
                <div className="text-2xl font-light">25+</div>
                <div className="text-sm uppercase tracking-wide">Years Excellence</div>
              </div>
              <div className="w-px h-12 bg-blue-200"></div>
              <div className="text-center">
                <div className="text-2xl font-light">100%</div>
                <div className="text-sm uppercase tracking-wide">Premium Quality</div>
              </div>
              <div className="w-px h-12 bg-blue-200"></div>
              <div className="text-center">
                <Droplets className="w-6 h-6 mx-auto mb-1 text-blue-600" />
                <div className="text-sm uppercase tracking-wide">Eco-Luxury</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Main Product Showcase */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/6782432/pexels-photo-6782432.jpeg"
                  alt="ENENCIA Premium Collection"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-light text-blue-900">Signature Series</h3>
                  <p className="text-blue-600 text-sm">Architectural Precision</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-600 transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Minimalist Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-blue-600">
          <div className="text-xs uppercase tracking-widest font-light">Scroll</div>
          <div className="w-px h-8 bg-blue-300 animate-pulse"></div>
        </div>
      </div>

      {/* Premium Badge */}
      <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full px-6 py-2 shadow-lg">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-blue-600 text-sm font-light">Premium Certified</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;