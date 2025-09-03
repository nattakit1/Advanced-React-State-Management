import { Link } from "react-router-dom";
import React, { memo } from 'react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="border rounded-lg shadow p-4 flex flex-col bg-white">
      {/* รูปสินค้า */}
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mx-auto mb-3"
        />
      </Link>

      {/* ชื่อสินค้า */}
      <h2 className="font-semibold text-sm line-clamp-2 mb-2">
        {product.title}
      </h2>

      {/* ราคา */}
      <p className="text-lg font-bold text-green-600 mb-3">
        ${product.price}
      </p>

      {/* ปุ่ม Add to Cart */}
      <button
        className="mt-auto bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={onAddToCart} // รับ callback จาก parent
      >
        Add to Cart
      </button>
    </div>
  );
}

// ห่อด้วย React.memo เพื่อป้องกัน re-render ถ้า props ไม่เปลี่ยน
export default memo(ProductCard);
