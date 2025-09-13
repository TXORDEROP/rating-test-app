function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          Top Rated Stores
        </h1>
        <p className="text-gray-700 mb-6">
          Discover the best-rated stores in your area. Click below to view the
          full list.
        </p>
        <a
          href="/show"
          className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Show Rating List →
        </a>
      </div>
    </div>
  );
}

export default Home;
