"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function EventsSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const eventsRef = useRef([]);

  const events = [
    {
      id: 1,
      title: "Annual Medical Symposium 2025",
      date: "March 15, 2025",
      description:
        "Join us for an insightful symposium featuring renowned healthcare professionals discussing latest advancements in paramedical sciences.",
      image: "/Evt/WhatsApp Image 2025-04-24 at 11.54.56 AM.jpeg",
      direction: "left",
    },
    {
      id: 2,
      title: "Nursing Excellence Workshop",
      date: "April 8, 2025",
      description:
        "Hands-on training sessions for nursing students focusing on patient care, emergency response, and clinical skills enhancement.",
      image: "/Evt/WhatsApp Image 2025-04-23 at 10.26.41 AM.jpeg",
      direction: "right",
    },
    {
      id: 3,
      title: "Healthcare Career Fair",
      date: "May 20, 2025",
      description:
        "Connect with top healthcare institutions and explore career opportunities in various paramedical fields and specializations.",
      image: "/Evt/WhatsApp Image 2025-04-12 at 1.55.43 PM.jpeg",
      direction: "top",
    },
    {
      id: 4,
      title: "Community Health Camp",
      date: "June 12, 2025",
      description:
        "Free health checkup camp organized by GIPS students providing medical assistance to the Garhwal community.",
      image: "/Evt/WhatsApp Image 2025-03-18 at 1.57.25 AM (2).jpeg",
      direction: "bottom",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate each event card from different directions
      eventsRef.current.forEach((card, index) => {
        if (!card) return;

        const direction = events[index].direction;
        let fromVars = { opacity: 0, scale: 0.8 };

        switch (direction) {
          case "left":
            fromVars = { ...fromVars, x: -200, rotation: -15 };
            break;
          case "right":
            fromVars = { ...fromVars, x: 200, rotation: 15 };
            break;
          case "top":
            fromVars = { ...fromVars, y: -200, rotation: -10 };
            break;
          case "bottom":
            fromVars = { ...fromVars, y: 200, rotation: 10 };
            break;
        }

        gsap.from(card, {
          ...fromVars,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            y: -10,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 bg-teal-500 rounded-full -top-48 -left-48 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full -bottom-48 -right-48 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Upcoming Events
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay connected with GIPS through our exciting events, workshops, and
            community programs
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              ref={(el) => (eventsRef.current[index] = el)}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-teal-100"
            >
              {/* Event Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  fill
                  src={event.image}
                  alt={event.title}
                  className="object-cover"
                  priority={index < 2}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <p className="text-teal-600 font-semibold text-sm">
                    {event.date}
                  </p>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Action Button */}
                <button className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group">
                  Learn More
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2">
            View All Events
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
