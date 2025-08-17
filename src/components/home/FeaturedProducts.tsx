import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { api, getProductsByBrand } from "../../api";

const enhanceProduct = (product: any) => ({
  ...product,
  id: product._id,
  shortDescription: product.description
    ? product.description.substring(0, 100) + "..."
    : "No description available",
});

const FeaturedProducts: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const data = await getProductsByBrand("enencia", { featured: "true" });
        setFeaturedProducts(data.slice(0, 4).map(enhanceProduct));
      } catch (error) {
        console.error("Error fetching featured products:", error);
      }
    };
    fetchFeaturedProducts();
  }, []);

  return (
    <section className="py-20 bg-[#2E59A7]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2E59A7] mb-6">
            Featured
            <span className="block font-bold text-[#11B3BC]">Products</span>
          </h2>
          <p className="text-lg text-[#2E59A7]/80 max-w-3xl mx-auto leading-relaxed">
            Discover our most popular and innovative products, chosen by
            architects and designers for their exceptional quality and timeless
            design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={api + product.images[0]}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-1 bg-white/90 px-2 py-1 rounded-xl">
                    <Star className="w-4 h-4 text-[#11B3BC] fill-current" />
                    <span className="text-sm font-bold text-[#2E59A7]">
                      Featured
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-[#11B3BC] font-bold">
                    {product.category.name}
                  </span>
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
                      <span
                        key={index}
                        className="text-xs bg-[#11B3BC]/10 text-[#2E59A7] px-2 py-1 rounded-xl"
                      >
                        {spec.length > 25
                          ? `${spec.substring(0, 25)}...`
                          : spec}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/product/${product.id}`}
                    className="inline-flex items-center text-[#11B3BC] hover:text-[#2E59A7] font-bold transition-colors duration-200"
                  >
                    View Product
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-3 bg-[#11B3BC] text-white font-bold rounded-xl hover:bg-[#2E59A7] transition-colors duration-200"
          >
            View All Products
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;