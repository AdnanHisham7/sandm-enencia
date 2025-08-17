import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Download, Share2, CheckCircle } from "lucide-react";
import ImageGallery from "../components/product/ImageGallery";
import ProductCard from "../components/shop/ProductCard";
import { api, getProductById, getProductsByBrand } from "../api";

const enhanceProduct = (product: any) => ({
  ...product,
  id: product._id,
  shortDescription: product.description
    ? product.description.substring(0, 100) + "..."
    : "No description available",
});

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        if (data) {
          const enhancedProduct = enhanceProduct(data);
          setProduct(enhancedProduct);

          const relatedData = await getProductsByBrand("enencia", {
            category: data.category._id,
          });
          const related = relatedData
            .filter((p) => p._id !== id)
            .slice(0, 3)
            .map(enhanceProduct);
          setRelatedProducts(related);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/enencia-catalogue.pdf";
    link.download = "enencia-catalogue.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#2E59A7]/5 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2E59A7] mb-4">
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="inline-flex items-center px-6 py-3 bg-[#11B3BC] text-white rounded-xl hover:bg-[#2E59A7] transition-colors duration-200 font-bold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2E59A7]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-sm text-[#2E59A7]/80 mb-8">
          <Link
            to="/"
            className="hover:text-[#11B3BC] transition-colors duration-200 font-bold"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            to="/shop"
            className="hover:text-[#11B3BC] transition-colors duration-200 font-bold"
          >
            Shop
          </Link>
          <span>/</span>
          <Link
            to={`/shop?category=${product.category._id}`}
            className="hover:text-[#11B3BC] transition-colors duration-200 font-bold"
          >
            {product.category.name}
          </Link>
          <span>/</span>
          <span className="text-[#2E59A7] font-bold">{product.name}</span>
        </nav>

        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center text-[#11B3BC] hover:text-[#2E59A7] mb-8 transition-colors duration-200 font-bold"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Shop
        </button>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <ImageGallery images={product.images} productName={product.name} />
          </div>

          <div className="space-y-6 bg-white rounded-xl shadow-lg p-8">
            <div>
              <span className="inline-block px-3 py-1 bg-[#11B3BC]/10 text-[#11B3BC] text-sm font-bold rounded-xl mb-4">
                {product.category.name}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-[#2E59A7] mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-[#2E59A7]/80 leading-relaxed font-bold">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#2E59A7] mb-4">
                Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#11B3BC] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2E59A7]/80 font-bold">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {product.sketchImages && product.sketchImages.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-bold text-[#2E59A7] mb-4">
                  Technical Drawings
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {product.sketchImages.map((image, index) => (
                    <img
                      key={index}
                      src={api + image}
                      alt={`Technical drawing ${index + 1}`}
                      className="w-full h-auto rounded-xl shadow-md"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#2E59A7]/20">
              <a
                href={`https://wa.me/9544449849?text=${encodeURIComponent(
                  `Hello, I’m interested in receiving a quote for the product: "${product.name}". Could you please share the pricing and any additional details?

Thank you.
@Enencia`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#11B3BC] text-white px-6 py-3 rounded-xl hover:bg-[#2E59A7] transition-colors duration-200 font-bold text-center"
              >
                Request Quote
              </a>
              <button
              onClick={handleDownload}
              className="flex-1 border-2 border-[#11B3BC] text-[#11B3BC] px-6 py-3 rounded-xl hover:bg-[#11B3BC] hover:text-white transition-colors duration-200 font-bold flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download Catalogue
              </button>
            </div>

            <div className="bg-[#11B3BC]/10 p-6 rounded-xl">
              <h4 className="font-bold text-[#2E59A7] mb-2">
                Professional Installation Available
              </h4>
              <p className="text-[#2E59A7]/80 text-sm font-bold">
                Our certified installation team ensures perfect setup and
                optimal performance. Contact us for installation quotes and
                scheduling.
              </p>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#2E59A7] mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
