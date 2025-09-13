import { useEffect, useState } from "react";

export default function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/stores")
      .then((res) => res.json())
      .then((data) => setStores(data));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Top Rated Stores</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div key={store.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{store.name}</h2>
            <p className="text-gray-600">Rating: {store.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
