import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-yellow-400 text-xl">
        Loading product details...
      </div>
    );
  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f172a] text-red-400 text-xl">
        Produk tidak ditemukan.
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white p-10 ">
      <motion.div
        className="max-w-5xl mx-auto bg-[#1e293b] p-8 rounded-2xl shadow-lg border border-yellow-500/30"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row gap-10">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full md:w-1/2 h-96 object-cover rounded-xl shadow-md border border-yellow-500/20"
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-yellow-400 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {product.description || "Tidak ada deskripsi untuk produk ini."}
            </p>
            <p className="text-4xl font-extrabold text-yellow-400 mb-8">
              ${product.price}
            </p>
            <Link
              to="/products"
              className="bg-yellow-400 text-[#0f172a] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              ← Kembali ke Daftar Produk
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetail;
