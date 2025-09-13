import { useState } from "react";

export default function RateStore() {
  const [form, setForm] = useState({ storeId: "", rating: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/stores/rate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 to-orange-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Rate a Store
        </h2>
        <input
          name="storeId"
          type="text"
          placeholder="Store ID"
          value={form.storeId}
          onChange={handleChange}
          className="w-full mb-4 p-3 border rounded"
        />
        <input
          name="rating"
          type="number"
          placeholder="Rating (1-5)"
          value={form.rating}
          onChange={handleChange}
          className="w-full mb-6 p-3 border rounded"
        />
        <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
          Submit Rating
        </button>
      </form>
    </div>
  );
}
