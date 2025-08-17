import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { getCategoriesByBrand } from "../../api";

interface Category {
  _id: string;
  name: string;
  slug: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const location = useLocation();

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

  const isActive = (path: string) => location.pathname === path;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/enencia-catalogue.pdf';
    link.download = 'enencia-catalogue.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-white shadow-md border-b border-[#11B3BC]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/enencia-logo.svg"
              alt="Enencia Logo"
              className="w-32 h-8 object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link
                to="/"
                className={`text-sm font-bold transition-colors duration-200 ${
                  isActive("/") ? "text-[#11B3BC]" : "text-[#2E59A7] hover:text-[#11B3BC]"
                }`}
              >
                Home
              </Link>

              <div className="relative group">
                <button
                  className={`flex items-center space-x-1 text-sm font-bold transition-colors duration-200 ${
                    location.pathname.includes("/shop") ? "text-[#11B3BC]" : "text-[#2E59A7] hover:text-[#11B3BC]"
                  }`}
                  onMouseEnter={() => setIsCategoriesOpen(true)}
                  onMouseLeave={() => setIsCategoriesOpen(false)}
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isCategoriesOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 w-72 bg-white shadow-lg border border-[#11B3BC]/20 rounded-xl py-2 z-50"
                    onMouseEnter={() => setIsCategoriesOpen(true)}
                    onMouseLeave={() => setIsCategoriesOpen(false)}
                  >
                    {isLoading ? (
                      <div className="px-4 py-2 text-sm text-[#2E59A7]/60">
                        Loading categories...
                      </div>
                    ) : error ? (
                      <div className="px-4 py-2 text-sm text-red-400">
                        Error loading categories
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-1">
                        {categories.map((category) => (
                          <Link
                            key={category._id}
                            to={`/shop?category=${category._id}`}
                            className="px-4 py-2 text-sm text-[#2E59A7] hover:bg-[#11B3BC]/10 hover:text-[#11B3BC] font-bold transition-colors duration-200"
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
                className={`text-sm font-bold transition-colors duration-200 ${
                  isActive("/shop") ? "text-[#11B3BC]" : "text-[#2E59A7] hover:text-[#11B3BC]"
                }`}
              >
                Shop
              </Link>

              <Link
                to="/about"
                className={`text-sm font-bold transition-colors duration-200 ${
                  isActive("/about") ? "text-[#11B3BC]" : "text-[#2E59A7] hover:text-[#11B3BC]"
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`text-sm font-bold transition-colors duration-200 ${
                  isActive("/contact") ? "text-[#11B3BC]" : "text-[#2E59A7] hover:text-[#11B3BC]"
                }`}
              >
                Contact
              </Link>
            </nav>

            <button
              onClick={handleDownload}
              className="text-sm font-bold text-white bg-[#11B3BC] hover:bg-[#2E59A7] px-4 py-2 rounded-xl transition-colors duration-200"
            >
              Download Catalogue
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-xl text-[#2E59A7] hover:text-[#11B3BC] hover:bg-[#11B3BC]/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#11B3BC]/20 bg-white rounded-xl">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-bold text-[#2E59A7] hover:text-[#11B3BC] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-sm font-bold text-[#2E59A7] hover:text-[#11B3BC] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-sm font-bold text-[#2E59A7] hover:text-[#11B3BC] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm font-bold text-[#2E59A7] hover:text-[#11B3BC] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  handleDownload();
                  setIsMenuOpen(false);
                }}
                className="text-sm font-bold text-white bg-[#11B3BC] hover:bg-[#2E59A7] px-4 py-2 rounded-xl transition-colors duration-200 text-left"
              >
                Download Catalogue
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;