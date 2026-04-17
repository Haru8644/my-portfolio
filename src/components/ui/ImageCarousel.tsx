"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";

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
    if (intervalMs <= 0 || count <= 1 || isHovering || isLightboxOpen) return;

    timerRef.current = window.setInterval(() => {
      setDirection(1);
      setIndex((currentIndex) => currentIndex + 1);
    }, intervalMs);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [count, intervalMs, isHovering, isLightboxOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (event.key === "Escape") setIsLightboxOpen(false);
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
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
      <div className="glass-panel overflow-hidden rounded-[2rem] p-3 md:p-4">
        <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950 shadow-[0_28px_70px_-36px_rgba(15,23,42,0.72)]">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="truncate px-4 text-xs font-medium text-white/55">
              {current.alt[lang]}
            </div>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition hover:bg-white/10 hover:text-white"
              aria-label={lang === "en" ? "Open fullscreen" : "全画面で開く"}
            >
              <Expand className="h-4 w-4" />
            </button>
          </div>

          <div className={["relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.18),transparent_30%),linear-gradient(180deg,#020617_0%,#020617_100%)]", aspectClass[aspect]].join(" ")}>
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              <motion.div
                key={current.src}
                custom={direction}
                initial={{ x: direction * 56, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction * -56, opacity: 0 }}
                transition={{ type: "spring", stiffness: 230, damping: 28 }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 p-4 md:p-6">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-900/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                    <Image
                      src={current.src}
                      alt={current.alt[lang]}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1100px"
                      quality={96}
                      className={[
                        fit === "cover" ? "object-cover" : "object-contain",
                        "p-3 md:p-5",
                      ].join(" ")}
                      onClick={() => setIsLightboxOpen(true)}
                      onKeyDown={(event: ReactKeyboardEvent<HTMLImageElement>) => {
                        if (event.key === "Enter" || event.key === " ") setIsLightboxOpen(true);
                      }}
                      role="button"
                      tabIndex={0}
                      style={{ cursor: "zoom-in" }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white transition hover:bg-black/45"
                  aria-label={lang === "en" ? "Previous image" : "前の画像"}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white transition hover:bg-black/45"
                  aria-label={lang === "en" ? "Next image" : "次の画像"}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/35 px-3 py-2 backdrop-blur-sm">
                  {safeImages.map((image, itemIndex) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => go(itemIndex, itemIndex > safeIndex ? 1 : -1)}
                      className={
                        itemIndex === safeIndex
                          ? "h-2.5 w-7 rounded-full bg-white"
                          : "h-2.5 w-2.5 rounded-full bg-white/45 transition hover:bg-white/70"
                      }
                      aria-label={`${lang === "en" ? "Go to image" : "画像へ"} ${itemIndex + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-3 px-1 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-500">{current.alt[lang]}</p>
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-slate-400">
            {count > 1 ? `${safeIndex + 1} / ${count}` : lang === "en" ? "Single shot" : "Single shot"}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/76 backdrop-blur-md"
            onClick={() => setIsLightboxOpen(false)}
            aria-modal="true"
            role="dialog"
          >
            <motion.div
              initial={{ scale: 0.985, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.985, opacity: 0 }}
              transition={{ type: "spring", stiffness: 230, damping: 28 }}
              className="absolute inset-4 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 md:inset-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
                <p className="truncate pr-6 text-sm font-medium text-white/75">{current.alt[lang]}</p>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label={lang === "en" ? "Close" : "閉じる"}
                >
                  ✕
                </button>
              </div>

              <div className="relative h-[calc(100%-4.5rem)] w-full">
                <Image
                  src={current.src}
                  alt={current.alt[lang]}
                  fill
                  sizes="100vw"
                  quality={100}
                  className="object-contain p-4 md:p-8"
                  priority
                />

                {count > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prev}
                      className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white transition hover:bg-black/45"
                      aria-label={lang === "en" ? "Previous image" : "前の画像"}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 text-white transition hover:bg-black/45"
                      aria-label={lang === "en" ? "Next image" : "次の画像"}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
