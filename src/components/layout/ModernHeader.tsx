import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { getCategoriesByBrand } from "../../api";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

// Define the Category interface for type safety
interface Category {
  _id: string;
  name: string;
  slug: string;
}

const ModernHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  // Fetch categories (unchanged)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoriesByBrand("enencia");
        setCategories(data);
        setIsLoading(false);
      } catch (err) {
        setError(err as Error);
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Handle scroll effect (unchanged)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define isActive using location.pathname
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Background gradient overlay (unchanged) */}
      <div
        className="fixed top-0 left-0 right-0 h-24 pointer-events-none z-40"
        style={{
          background:
            "linear-gradient(180deg, rgba(29, 78, 216, 0.1) 0%, transparent 100%)",
        }}
      />

      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
        <div
          className={`transition-all duration-500 ease-out ${
            scrolled ? "scale-95" : "scale-100"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "24px",
            boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.1),
            0 4px 16px rgba(59, 130, 246, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1)
          `,
          }}
        >
          <div className="px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-2 group">
                <div className="transition-transform duration-300 group-hover:scale-105">
                  <img
                    src="/enencia-logo.svg"
                    alt="Enencia Logo"
                    className="w-32 h-32 object-contain filter brightness-0 invert"
                    style={{
                      filter:
                        "brightness(0) invert(1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))",
                    }}
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive("/")
                      ? "text-white bg-white/20 shadow-lg"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  style={{
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Home
                </Link>

                <div className="relative group">
                  <button
                    className={`flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      location.pathname === "/shop"
                        ? "text-white bg-white/20 shadow-lg"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                    style={{
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    }}
                    onMouseEnter={() => setIsCategoriesOpen(true)}
                    onMouseLeave={() => setIsCategoriesOpen(false)}
                  >
                    <span>Products</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isCategoriesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isCategoriesOpen && (
                    <div
                      className="absolute top-full left-0 mt-2 w-72 rounded-2xl py-2 z-50 transform opacity-0 animate-fadeIn"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(20px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
                        animation: "fadeIn 0.3s ease-out forwards",
                      }}
                      onMouseEnter={() => setIsCategoriesOpen(true)}
                      onMouseLeave={() => setIsCategoriesOpen(false)}
                    >
                      {isLoading ? (
                        <div className="px-4 py-3 text-sm text-white/70">
                          Loading categories...
                        </div>
                      ) : error ? (
                        <div className="px-4 py-3 text-sm text-red-300">
                          Error loading categories
                        </div>
                      ) : (
                        <div className="grid grid-cols-1 gap-1 px-2">
                          {categories.map((category) => (
                            <Link
                              key={category._id}
                              to={`/shop?category=${category._id}`}
                              className="px-4 py-3 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                              style={{
                                textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                              }}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <Link
                  to="/shop"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive("/shop")
                      ? "text-white bg-white/20 shadow-lg"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  style={{
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Shop
                </Link>

                <Link
                  to="/about"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive("/about")
                      ? "text-white bg-white/20 shadow-lg"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  style={{
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive("/contact")
                      ? "text-white bg-white/20 shadow-lg"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  style={{
                    textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                  }}
                >
                  Contact
                </Link>
              </nav>

              {/* Mobile menu button (unchanged) */}
              <button
                className="md:hidden p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div
                className="md:hidden py-4 border-t border-white/10 mt-2"
                style={{
                  animation: "fadeInUp 0.3s ease-out",
                }}
              >
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/"
                    className="px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    to="/shop"
                    className="px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    Shop
                  </Link>
                  <Link
                    to="/about"
                    className="px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default ModernHeader;
