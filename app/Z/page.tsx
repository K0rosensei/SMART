"use client";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Marquee from "@/components/ui/marquee";
import BlurIn from "@/components/ui/blur-in";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import presensi from "@/data/rekappresensi.json";
import { filterReviews } from "@/utils/filterreviews";
import ReviewCard from "@/app/reviewcard/reviewcards";

const reviews = filterReviews(presensi.RekapPresensi);
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export default function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(white, transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />

      <div
        className="flex flex-col items-center gap-4 mb-8"
        style={{ marginTop: "-10rem" }}
      >
        <BlurIn
          word="S M A R T"
          className="text-4xl font-bold text-black dark:text-white"
        />

        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Masukkan Nama Siswa" />
          <Button type="button">Cari</Button>
        </div>
      </div>

      {/* Review Card */}
      <div className="fixed bottom-0 left-0 w-full flex h-[200px] flex-col items-center justify-center overflow-hidden z-50">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </div>
  );
}