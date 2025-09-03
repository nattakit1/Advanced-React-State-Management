import { Link } from "react-router-dom";

function ProductCard({ product }) {
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
        onClick={() => alert(`เพิ่ม ${product.title} ไปที่ตะกร้าแล้ว!`)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
