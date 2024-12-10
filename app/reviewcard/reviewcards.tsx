"use client";

import { cn } from "@/lib/utils";

interface ReviewCardProps {
  img: string;
  name: string;
  kelas: string;
  alpa: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ img, name, kelas, alpa }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full object-cover w-8 h-8" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{kelas}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">Alpa: {alpa}</blockquote>
    </figure>
  );
};

export default ReviewCard;