import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    image: "/toilet1.png",
    name: "BM 1320",
    variant: "Silicon Onepiece Toilet",
    size: "700x360x770mm",
    strap: "S-Trap: 300mm",
  },
  {
    image: "/toilet2.png",
    name: "BM 1450",
    variant: "Glaze Rimless Onepiece",
    size: "710x370x760mm",
    strap: "S-Trap: 220mm",
  },
  {
    image: "/toilet3.png",
    name: "BM 1600",
    variant: "Compact Wall-Hung Toilet",
    size: "680x350x740mm",
    strap: "S-Trap: 250mm",
  },
];

const imageVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "100%",
    opacity: 0,
  },
};

const detailsVariants = {
  enter: {
    x: "100%",
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: "-100%",
    opacity: 0,
  },
};

const ModernHeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    nextSlide();
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const handlePrev = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    prevSlide();
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const product = products[current];

  return (
    <section className="relative min-h-screen bg-white">
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1 bg-white rounded-xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#11B3BC] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">⟐</span>
                  </div>
                  <span className="text-[#11B3BC] text-sm font-bold tracking-wide">SIMPLIFIED LUXURY</span>
                </div>
                <div className="space-y-4">
                  <img src="/enencia-logo-no-luxury.svg" alt="Enencia Logo" className="h-12 w-auto" />
                  <h1 className="text-4xl lg:text-5xl font-bold text-[#2E59A7] leading-tight">
                    Redefining Elegance
                  </h1>
                </div>
                <p className="text-lg text-[#2E59A7]/80   text-[#2E59A7] lg:text-lg leading-relaxed max-w-md">
                  Where premium craftsmanship meets minimalist design. Transform your space with architectural precision.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#11B3BC] hover:bg-[#2E59A7] text-white px-8 py-3 rounded-xl font-bold transition-colors duration-300">
                  Send Message
                </button>
                <button className="border-2 border-[#11B3BC] text-[#11B3BC] hover:bg-[#11B3BC] hover:text-white px-8 py-3 rounded-xl font-bold transition-colors duration-300">
                  Discover More
                </button>
              </div>
              <div className="flex space-x-12 pt-8">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2E59A7]">25+</div>
                  <div className="text-sm text-[#2E59A7]/80 mt-1 font-bold">YEARS EXCELLENCE</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#2E59A7]">100%</div>
                  <div className="text-sm text-[#2E59A7]/80 mt-1 font-bold">PREMIUM QUALITY</div>
                </div>
                <div className="text-center flex flex-col items-center">
                  <div className="w-8 h-8 bg-[#11B3BC]/20 rounded-full flex items-center justify-center mb-1">
                    <span className="text-[#11B3BC] text-xs">♻</span>
                  </div>
                  <div className="text-sm text-[#2E59A7]/80 font-bold">ECO LUXURY</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="bg-gradient-to-br from-[#2E59A7] to-[#11B3BC] rounded-xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={current}
                    className="relative z-10"
                  >
                    <motion.div
                      variants={detailsVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 },
                      }}
                      className="text-right mb-8"
                    >
                      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">{product.name}</h2>
                      <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 opacity-90">{product.variant}</h3>
                      <div className="space-y-1 text-sm lg:text-base text-white/80 font-bold">
                        <p>{product.size}</p>
                        <p>{product.strap}</p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={imageVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 },
                      }}
                      className="flex justify-center"
                    >
                      <div className="relative group">
                        <div className="absolute inset-0 bg-white rounded-xl opacity-10 transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
                        <div className="relative rounded-xl p-6 lg:p-8 shadow-lg">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-56 lg:h-64 object-contain transform group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#2E59A7] bg-opacity-80 hover:bg-opacity-100 rounded-xl shadow-lg flex items-center justify-center text-white hover:text-[#11B3BC] transition-all duration-300 z-20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#2E59A7] bg-opacity-80 hover:bg-opacity-100 rounded-xl shadow-lg flex items-center justify-center text-white hover:text-[#11B3BC] transition-all duration-300 z-20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1);
                      setCurrent(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-[#11B3BC] shadow-md"
                        : "bg-white bg-opacity-50 hover:bg-opacity-75"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernHeroSection;