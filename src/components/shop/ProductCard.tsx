import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { api } from '../../api';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden">
        <img
          src={api + product.images[0]}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-[#11B3BC] text-white px-3 py-1 rounded-xl text-sm font-bold">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-sm text-[#11B3BC] font-bold">{product.category.name}</span>
        </div>
        <h3 className="text-xl font-bold text-[#2E59A7] mb-3 group-hover:text-[#11B3BC] transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-[#2E59A7]/80 text-sm mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {product.specifications.slice(0, 2).map((spec, index) => (
              <span key={index} className="text-xs bg-[#11B3BC]/10 text-[#2E59A7] px-2 py-1 rounded-xl">
                {spec.length > 20 ? `${spec.substring(0, 20)}...` : spec}
              </span>
            ))}
          </div>
          
          <Link
            to={`/product/${product.id}`}
            className="inline-flex items-center text-[#11B3BC] hover:text-[#2E59A7] font-bold transition-colors duration-200"
          >
            View Details
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;