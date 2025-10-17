"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const images = [
    "/Hero.webp",
    "/2025-04-22.webp",
    "/entrance.webp",
    "/2025-04-22 (2).webp",
  ];

  const [current, setCurrent] = useState(0);

  // Refs for GSAP animation
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  // Animation on load
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
    tl.fromTo(
      leftTextRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1 }
    )
      .fromTo(
        rightTextRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1 },
        "-=0.7"
      )
      .fromTo(
        [paragraphRef.current, buttonRef.current],
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.3 },
        "-=0.4"
      );
  }, []);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`GIPS Banner ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />{" "}
            {/* dark overlay */}
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col mt-55 items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white m-6 drop-shadow-lg gap-1">
          <span ref={leftTextRef} className="inline-block">
            Garhwal Institute of{" "}
          </span>
          <span ref={rightTextRef} className="text-cyan-300 inline-block ml-3">
            Paramedical Sciences
          </span>
        </h1>
        <p
          ref={paragraphRef}
          className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
        >
          Empowering students with excellence in paramedical education,
          research, and clinical training.
        </p>
        <Link
          ref={buttonRef}
          href="/programs"
          className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all"
        >
          Explore Courses
        </Link>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
