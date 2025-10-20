import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const title = searchParams.get("title");
        const url = title
          ? `https://api.escuelajs.co/api/v1/products/?title=${title}`
          : "https://api.escuelajs.co/api/v1/products";

        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchParams]);

  const handleSearch = (event) => {
    const title = event.target.value;
    title ? setSearchParams({ title }) : setSearchParams({});
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-yellow-400 text-xl">
        Loading products...
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white p-10 pt-20">
      <motion.h1
        className="text-4xl font-bold text-center text-yellow-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Koleksi Produk r_xanz
      </motion.h1>

      <div className="max-w-3xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Cari produk berdasarkan nama..."
          onChange={handleSearch}
          className="w-full px-4 py-3 rounded-lg bg-[#1e293b] border border-yellow-500/30 text-white focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
        />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-[#1e293b] rounded-2xl shadow-lg border border-yellow-500/20 overflow-hidden hover:scale-105 transition-transform"
            whileHover={{ y: -5 }}
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-yellow-400 mb-2 line-clamp-1">
                {product.title}
              </h2>
              <p className="text-gray-300 mb-4 line-clamp-2">
                {product.description || "Deskripsi tidak tersedia."}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-yellow-400">
                  ${product.price}
                </span>
                <Link
                  to={`/products/${product.id}`}
                  className="bg-yellow-400 text-[#0f172a] px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductList;
