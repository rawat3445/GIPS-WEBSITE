"use client";

import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          Welcome to Garhwal Institute of Paramedical Sciences (GIPS) — an
          esteemed institution run by Shri Satchandi Jankalyan Samiti, dedicated
          to excellence in paramedical education and healthcare training. Since
          our establishment in 2010, we have been committed to nurturing
          skilled, compassionate, and knowledgeable healthcare professionals.
        </p>
        <div className="mt-6">
          <Link
            href="/about"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
