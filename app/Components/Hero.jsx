"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Garhwal Institute of{" "}
            <span className="text-blue-600">Paramedical Sciences</span>
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            Empowering students with excellence in paramedical education and
            training.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
            Explore Courses
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0">
          <img
            src="/Hero.webp"
            alt="GIPS Students"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}

