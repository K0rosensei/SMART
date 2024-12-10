"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RetroGrid from "@/components/ui/retro-grid";
import GradualSpacing from "@/components/ui/gradual-spacing";
import TypingAnimation from "@/components/ui/typing-animation";
import ShimmerButton from "@/components/ui/shimmer-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function LandingPage() {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setIsAnimating(true);
    setTimeout(() => {
      router.push("/content");
    }, 500); // Adjust this delay to match your animation duration
  };

  return (
    <>
      <div
        className={`relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:shadow-xl transition-opacity duration-500 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        <ThemeToggle className="absolute top-4 right-4 z-10" />
        <RetroGrid />
        <GradualSpacing
          className="font-display text-center text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]"
          text="S M A R T"
        />
        <TypingAnimation
          className="text-2xl font-bold text-black dark:text-white"
          text="Sistem Manajemen Absensi dan Rekap Terpadu"
        />
        <ShimmerButton className="shadow-2xl mt-4" onClick={handleLogin}>
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Masuk
          </span>
        </ShimmerButton>
      </div>
    </>
  );
}