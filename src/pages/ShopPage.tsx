import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import ProductCard from '../components/shop/ProductCard';
import FilterSidebar from '../components/shop/FilterSidebar';
import { getProductsByBrand, getCategoriesByBrand } from '../api';
import { FilterState } from '../types';

const enhanceProduct = (product) => ({
  ...product,
  id: product._id,
  shortDescription: product.description
    ? product.description.substring(0, 100) + '...'
    : 'No description available',
});

const enhanceCategory = (category) => ({
  ...category,
  id: category._id,
});

const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: searchParams.get('category') || '',
    search: searchParams.get('search') || ''
  });
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategoriesByBrand('enencia');
        setCategories(data.map(enhanceCategory));
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const filtersObj = {};
        if (filters.category) filtersObj.category = filters.category;
        if (filters.search) filtersObj.search = filters.search;
        const data = await getProductsByBrand('enencia', filtersObj);
        setProducts(data.map(enhanceProduct));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [filters]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.category) params.set('category', filters.category);
    if (filters.search) params.set('search', filters.search);
    setSearchParams(params);
  }, [filters, setSearchParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      search: e.target.value
    });
  };

  const getCurrentCategoryName = () => {
    if (!filters.category) return null;
    const category = categories.find(cat => cat.id === filters.category);
    return category?.name;
  };

  return (
    <div className="min-h-screen bg-[#2E59A7]/5 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#2E59A7] mb-4">
            {getCurrentCategoryName() ? (
              <>
                <span className="text-[#11B3BC]">{getCurrentCategoryName()}</span>
                <span className="block text-xl font-bold text-[#2E59A7]/80 mt-2">
                  Premium Sanitary Ware Collection
                </span>
              </>
            ) : (
              <>
                Shop All Products
                <span className="block text-xl font-bold text-[#2E59A7]/80 mt-2">
                  Discover Our Complete Range
                </span>
              </>
            )}
          </h1>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2E59A7]/80 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={filters.search}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-4 py-3 border border-[#2E59A7]/20 rounded-xl focus:ring-2 focus:ring-[#11B3BC] focus:border-transparent"
            />
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              isOpen={isFilterOpen}
              onToggle={() => setIsFilterOpen(!isFilterOpen)}
              categories={categories}
            />
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <p className="text-[#2E59A7]/80">
                {products.length} {products.length === 1 ? 'product' : 'products'} found
              </p>
              
              {/* <select className="border border-[#2E59A7]/20 rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-[#11B3BC] focus:border-transparent">
                <option>Sort by: Featured</option>
                <option>Name: A to Z</option>
                <option>Name: Z to A</option>
                <option>Newest First</option>
              </select> */}
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-4 bg-[#11B3BC]/10 rounded-xl flex items-center justify-center">
                  <Search className="w-8 h-8 text-[#2E59A7]/80" />
                </div>
                <h3 className="text-lg font-bold text-[#2E59A7] mb-2">No products found</h3>
                <p className="text-[#2E59A7]/80 mb-4">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => setFilters({ category: '', search: '' })}
                  className="px-6 py-2 bg-[#11B3BC] text-white rounded-xl hover:bg-[#2E59A7] transition-colors duration-200 font-bold"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;