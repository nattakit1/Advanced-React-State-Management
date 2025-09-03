import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mini E-commerce</h1>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:underline">Products</Link>
          </li>
          <li>
            <Link to="/cart" className="hover:underline">Cart</Link>
          </li>
        </ul>
      </nav>

      {/* ✅ Main Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet /> {/* ตรงนี้จะแสดง Page ตาม Route */}
      </main>

      {/* ✅ Footer */}
      <footer className="bg-gray-200 text-center py-3">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Mini E-commerce
        </p>
      </footer>
    </div>
  );
}

export default Layout;
