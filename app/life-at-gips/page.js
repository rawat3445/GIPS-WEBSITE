"use client";
import Link from "next/link";

export default function LifeAtGips() {
  const sections = [
    {
      title: "Sports",
      description:
        "At GIPS, sports are more than just games — they build teamwork, leadership, and a spirit of healthy competition. The college organizes annual sports meets and inter-college tournaments.",
      href: "/life-at-gips/sports",
    },
    {
      title: "Cultural",
      description:
        "Our cultural events celebrate diversity and creativity. From annual fests to talent showcases, students get a platform to express their artistic side.",
      href: "/life-at-gips/cultural",
    },
    {
      title: "Accommodation",
      description:
        "GIPS provides safe, hygienic, and comfortable hostel accommodation for both boys and girls, ensuring a home-like environment on campus.",
      href: "/life-at-gips/accommodation",
    },
    {
      title: "Campus Life",
      description:
        "Life at GIPS is dynamic and engaging. From clubs and societies to academic excellence, every student experiences holistic growth.",
      href: "/life-at-gips/campus-life",
    },
    {
      title: "Anti-Ragging",
      description:
        "We maintain a zero-tolerance policy towards ragging. The institute ensures a safe and respectful environment for every student.",
      href: "/life-at-gips/anti-ragging",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-pink-700">
        Life at GIPS
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section) => (
          <div
            key={section.title}
            className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-all bg-white"
          >
            <h2 className="text-2xl font-semibold mb-2 text-green-700">
              {section.title}
            </h2>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <Link
              href={section.href}
              className="text-pink-600 font-medium hover:underline"
            >
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
