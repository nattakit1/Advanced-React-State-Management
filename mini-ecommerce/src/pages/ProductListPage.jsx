import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { addItem } from "../features/cart/cartSlice";

import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  // ✅ useCallback สำหรับเพิ่มสินค้า
  const handleAddToCart = useCallback(
    (product) => {
      dispatch(
        addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        })
      );
    },
    [dispatch, navigate]
  );

  // ✅ Fetch products จาก API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (err) {
        setError("Failed to fetch products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">รายการสินค้า</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
