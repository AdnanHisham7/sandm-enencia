import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { api, getCategoriesByBrand } from '../../api';

const enhanceCategory = (category: any) => ({
  ...category,
  id: category._id,
});

const ProductCategoriesGrid: React.FC = () => {
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

  return (
    <section className="py-20 bg-[#2E59A7]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2E59A7] mb-6">
            Our Product
            <span className="block font-bold text-[#11B3BC]">Collections</span>
          </h2>
          <p className="text-lg text-[#2E59A7]/80 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of premium sanitary ware, each collection 
            crafted to meet the highest standards of design and functionality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/shop?category=${category.id}`}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={api+category.image || 'https://images.pexels.com/photos/6782432/pexels-photo-6782432.jpeg'}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2E59A7]/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-bold text-lg mb-2 group-hover:text-[#11B3BC] transition-colors duration-200">
                  {category.name}
                </h3>
                <div className="flex items-center text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-200">
                  <span>View Collection</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoriesGrid;