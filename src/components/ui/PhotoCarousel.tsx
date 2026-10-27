"use client";

import Image from "next/image";
import { useRef } from "react";

type Photo = { src: string; alt: string };

export default function PhotoCarousel({ photos }: { photos: Photo[] }) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) =>
    track.current?.scrollBy({
      left: dir * track.current.clientWidth,
      behavior: "smooth",
    });

  return (
    <div className="relative">
      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-2xl [scrollbar-width:none]"
      >
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[4/3] w-full flex-none snap-center overflow-hidden rounded-2xl sm:aspect-[16/9]"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 72rem, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {[-1, 1].map((dir) => (
        <button
          key={dir}
          type="button"
          onClick={() => scroll(dir as 1 | -1)}
          aria-label={dir < 0 ? "Previous photo" : "Next photo"}
          className={`absolute top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-primary shadow-md transition hover:bg-white ${dir < 0 ? "left-4" : "right-4"}`}
        >
          <span aria-hidden>{dir < 0 ? "←" : "→"}</span>
        </button>
      ))}
    </div>
  );
}
