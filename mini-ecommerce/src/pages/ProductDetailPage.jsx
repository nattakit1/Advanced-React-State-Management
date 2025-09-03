import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductDetailPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(res.data);
      } catch (err) {
        setError("Failed to fetch product detail.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center">Product not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <div className="flex flex-col md:flex-row gap-6">
        {/* รูปสินค้า */}
        <img
          src={product.image}
          alt={product.title}
          className="w-60 h-60 object-contain mx-auto"
        />

        {/* รายละเอียดสินค้า */}
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-green-600 mb-6">${product.price}</p>

          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
