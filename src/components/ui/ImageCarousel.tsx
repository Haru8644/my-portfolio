"use client";

import Image from "next/image";
import { useCallback, useMemo, useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { ProjectImage } from "@/data/types";
import { useLanguage } from "@/context/LanguageContext";

type Props = {
  images: ProjectImage[];
  intervalMs?: number;
  aspect?: "video" | "square" | "wide";
  fit?: "contain" | "cover";
  className?: string;
};

const aspectClass: Record<NonNullable<Props["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

const normalizeIndex = (value: number, count: number) => {
  if (count <= 0) return 0;
  return ((value % count) + count) % count;
};

export const ImageCarousel = ({
  images,
  intervalMs = 4500,
  aspect = "video",
  fit = "contain",
  className,
}: Props) => {
  const { lang } = useLanguage();

  const safeImages = useMemo(() => images.filter((x) => Boolean(x?.src)), [images]);
  const count = safeImages.length;

  const [index, setIndex] = useState(0);
  const safeIndex = normalizeIndex(index, count);

  const [direction, setDirection] = useState<-1 | 1>(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const timerRef = useRef<number | null>(null);

  const go = useCallback(
    (nextIndex: number, nextDirection: -1 | 1) => {
      if (count <= 1) return;
      setDirection(nextDirection);
      setIndex(nextIndex);
    },
    [count]
  );

  const next = useCallback(() => {
    go(safeIndex + 1, 1);
  }, [go, safeIndex]);

  const prev = useCallback(() => {
    go(safeIndex - 1, -1);
  }, [go, safeIndex]);

  useEffect(() => {
    if (intervalMs <= 0) return;
    if (count <= 1) return;
    if (isHovering) return;
    if (isLightboxOpen) return;

    timerRef.current = window.setInterval(() => {
      setDirection(1);
      setIndex((i) => i + 1);
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [count, intervalMs, isHovering, isLightboxOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;

      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isLightboxOpen, next, prev]);

  if (count === 0) return null;

  const current = safeImages[safeIndex];

  return (
    <div
      className={["w-full", className].filter(Boolean).join(" ")}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className={[
          "relative w-full overflow-hidden rounded-2xl border border-base-200 bg-base-200/40",
          aspectClass[aspect],
        ].join(" ")}
      >
        <AnimatePresence mode="popLayout" initial={false} custom={direction}>
          <motion.div
            key={current.src}
            custom={direction}
            initial={{ x: direction * 40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction * -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="absolute inset-0"
          >
            <Image
              src={current.src}
              alt={current.alt[lang]}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              quality={95}
              className={fit === "cover" ? "object-cover" : "object-contain"}
              onClick={() => setIsLightboxOpen(true)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setIsLightboxOpen(true);
              }}
              role="button"
              tabIndex={0}
              style={{ cursor: "zoom-in" }}
              priority={false}
            />
          </motion.div>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              className="btn btn-sm btn-circle btn-ghost absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/45"
              aria-label={lang === "en" ? "Previous image" : "前の画像"}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="btn btn-sm btn-circle btn-ghost absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/45"
              aria-label={lang === "en" ? "Next image" : "次の画像"}
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5">
              {safeImages.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => go(i, i > safeIndex ? 1 : -1)}
                  className={
                    i === safeIndex
                      ? "h-2.5 w-6 rounded-full bg-white/90"
                      : "h-2.5 w-2.5 rounded-full bg-white/50 hover:bg-white/70"
                  }
                  aria-label={`${lang === "en" ? "Go to image" : "画像へ"} ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <p className="mt-3 text-sm text-gray-500">{current.alt[lang]}</p>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="absolute inset-4 md:inset-10 rounded-2xl bg-black/40 border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
                <button
                  type="button"
                  className="btn btn-sm btn-circle btn-ghost text-white hover:bg-white/10"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label={lang === "en" ? "Close" : "閉じる"}
                >
                  ✕
                </button>
              </div>

              <div className="relative h-full w-full">
                <Image
                  src={current.src}
                  alt={current.alt[lang]}
                  fill
                  sizes="100vw"
                  quality={100}
                  className="object-contain"
                  priority
                />
              </div>

              {count > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prev}
                    className="btn btn-sm btn-circle btn-ghost absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/45"
                    aria-label={lang === "en" ? "Previous image" : "前の画像"}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={next}
                    className="btn btn-sm btn-circle btn-ghost absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/45"
                    aria-label={lang === "en" ? "Next image" : "次の画像"}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-4 py-2 text-xs text-white/80">
                {lang === "en"
                  ? "Click outside or press Esc to close. Use ←/→ to navigate."
                  : "外側クリック / Esc で閉じる。←/→ で移動できます。"}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};