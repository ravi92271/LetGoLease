"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const IMAGES = [
  "/portal/apartment1.jpg",
  "/portal/apartment2.JPG",
  "/portal/apartment3.JPG",
  "/portal/apartment4.JPG",
  "/portal/apartment5.JPG",
  "/portal/apartment6.JPG",
] as const;

function ImageCarousel() {
  const [image, setImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prev) => (prev + 1) % IMAGES.length);
    }, 5300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl aspect-3/2 overflow-hidden rounded-lg shadow-lg">
      {IMAGES.map((src, index) => (
        <div
          key={index + src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === image ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`Carousel Image ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover animate-kenburns"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-mint-cream-50 font-manrope">
      <div className="max-w-1400px mx-auto px-6">
        {/* Header */}
        <header className="flex items-center justify-between py-4">
          <Image
            src="/portal/apartment1.jpg" // TODO: add logo path
            alt="Leaser Logo"
            width={75}
            height={75}
            className="rounded-full"
          />
          <Link href="/login">
            <button className="bg-jungle-teal-500 text-mint-cream-50 font-medium cursor-pointer hover:scale-110 transition-transform duration-200 rounded-full px-4 py-1">
              Login
            </button>
          </Link>
        </header>
        <section className="py-12 md:pt-12 md:pb-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center max-w-[55ch] space-y-5">
              <h1 className="text-4xl font-semibold">
                Student Lease Transfers, Made Simple
              </h1>
              <p className="text-lg">
                Find a subletter or take over a lease in minutes—student-only,
                verified.
              </p>
              <Link href="/main" className="flex space-x-4">
                <button className="font-medium bg-jungle-teal-500 text-mint-cream-50 cursor-pointer hover:scale-105 transition-transform duration-200 rounded-full px-7 py-1">
                  Get Started
                </button>
              </Link>
            </div>
            {/* Image Carousel */}
            <div className="w-full">
              <ImageCarousel />
            </div>
          </div>
        </section>
      </div>
      <footer className="bg-cool-horizon-700 py-13">
        <div className="flex items-center justify-between max-w-1400px mx-auto px-6">
          <div>
            <ul>
              <h3 className="text-mint-cream-50 font-extrabold text-xl">
                LetGoLease
              </h3>
              <p className="text-mint-cream-50">
                Student Lease Transfers, Made Simple
              </p>
              <p className="text-mint-cream-50">
                &copy; 2025 LetGoLease. All rights reserved.
              </p>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-mint-cream-50 mb-2">Legal</h3>
            <ul className="list-disc list-inside marker:text-mint-cream-50">
              <li>
                <Link href="/privacypolicy" className="hover:underline text-mint-cream-50">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/termsofservice" className="hover:underline text-mint-cream-50">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}

//    "http://universities.hipolabs.com/search?country=United+States"
