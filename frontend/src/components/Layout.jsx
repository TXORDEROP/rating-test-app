import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Rating Show App</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/rate" className="text-gray-700 hover:text-blue-500">
            Rate
          </Link>
          <Link to="/show" className="text-gray-700 hover:text-blue-500">
            Show
          </Link>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}

export default Layout;
