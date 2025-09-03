import { Link } from "react-router-dom";

function ProductListPage() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Smartphone" },
    { id: 3, name: "Headphones" },
  ];

  useEffect(() => {
  const fetchProducts = async () => {
    try {
      setLoading(true);
      // ✅ TODO 2: ดึงข้อมูลสินค้าจาก API
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
    } catch (err) {
      setError('Failed to fetch products.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, []);


  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">รายการสินค้า</h1>
      <ul className="space-y-2">
        {products.map((p) => (
          <li key={p.id}>
            <Link
              to={`/products/${p.id}`}
              className="text-blue-600 hover:underline"
            >
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;
