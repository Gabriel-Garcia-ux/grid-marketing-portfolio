"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import PortfolioFrame from "@/components/portfolio/PortfolioFrame";
import SmartVideoPlayer from "@/components/ui/SmartVideoPlayer";
import styles from "./HeroEditionsGrid.module.css";
import modalStyles from "@/components/portfolio/PortfolioModal.module.css";

interface HeroItem {
  id: string;
  title: string;
  category: string;
  poster: string;
  video: string;
  alt: string;
}

const heroEditions: HeroItem[] = [
  {
    id: "E1",
    title: "Nomad eCHIP",
    category: "Tech & Lifestyle",
    poster: "/imagens moldura/Nova pasta/Nomad eCHIP.png",
    video: "/videos portfolio/Nova pasta/Nomad eCHIP.mp4",
    alt: "Moldura do vídeo Nomad eCHIP",
  },
  {
    id: "E2",
    title: "Rayban Meta",
    category: "Produto & Fashion",
    poster: "/imagens moldura/Nova pasta/Rayban Meta.png",
    video: "/videos portfolio/Nova pasta/Rayban Meta.mp4",
    alt: "Moldura do vídeo Rayban Meta",
  },
  {
    id: "E3",
    title: "Do Bruto ao Projeto",
    category: "Bastidores & Processo",
    poster: "/imagens moldura/Nova pasta/do bruto ao projeto.png",
    video: "/videos portfolio/Nova pasta/do bruto ao projeto.mp4",
    alt: "Moldura do vídeo Do Bruto ao Projeto",
  },
  {
    id: "E4",
    title: "Escadaria",
    category: "Motion & Edição",
    poster: "/imagens moldura/escadaria.png",
    video: "https://youtube.com/shorts/mZo0ZE9aKZY?feature=share",
    alt: "Moldura do vídeo Escadaria",
  },
];

// ─── Modal inline para as edições do Hero ────────────────────────────────────
function HeroEditionsModal({
  item,
  items,
  onClose,
  onPrev,
  onNext,
}: {
  item: HeroItem;
  items: HeroItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPlayPulse, setShowPlayPulse] = useState(false);

  const cleanupVideo = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.removeAttribute("src");
    v.load();
  }, []);

  const handleClose = useCallback(() => {
    cleanupVideo();
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) { onClose(); return; }
    gsap.to([overlayRef.current, dialogRef.current], {
      opacity: 0, scale: 0.93, duration: 0.25, onComplete: onClose,
    });
  }, [cleanupVideo, onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) { v.play(); setIsPlaying(true); }
        else { v.pause(); setIsPlaying(false); }
        setShowPlayPulse(true);
        setTimeout(() => setShowPlayPulse(false), 500);
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("modal-open");
    };
  }, [handleClose, onPrev, onNext]);

  useEffect(() => {
    if (item.video && videoRef.current) {
      videoRef.current.currentTime = 0;
      const p = videoRef.current.play();
      if (p !== undefined) {
        p.then(() => setIsPlaying(true)).catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
          }
        });
      }
    }
  }, [item]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set([overlayRef.current, dialogRef.current], { opacity: 1 });
    } else {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.35, ease: "power2.out" });
      gsap.fromTo(dialogRef.current, { scale: 0.9, opacity: 0, y: 15 }, { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.1)" });
    }
  }, [item]);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setIsPlaying(true); }
    else { v.pause(); setIsPlaying(false); }
    setShowPlayPulse(true);
    setTimeout(() => setShowPlayPulse(false), 500);
  };

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <div
      ref={overlayRef}
      className={modalStyles.overlay}
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
      aria-hidden="false"
    >
      <div
        ref={dialogRef}
        className={modalStyles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="hero-modal-title"
      >
        <button
          className={modalStyles.closeBtn}
          onClick={(e) => { e.stopPropagation(); handleClose(); }}
          aria-label="Fechar"
        >
          <span aria-hidden="true">&#x2715;</span>
        </button>

        <div
          className={modalStyles.playerWrapper}
          style={{ aspectRatio: "9 / 16" }}
        >
          <SmartVideoPlayer
            src={item.video}
            poster={item.poster}
            title={item.title}
            autoplay={true}
            controls={true}
            loop={true}
          />
        </div>

        <div className={modalStyles.footerInfo}>
          <div className={modalStyles.infoMetaGroup}>
            <span className={modalStyles.infoNum}>{String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
            <h2 id="hero-modal-title" className={modalStyles.infoTitle}>{item.title}</h2>
            <span className={modalStyles.infoCategory}>{item.category}</span>
          </div>
          <div className={modalStyles.navGroup}>
            <button
              className={modalStyles.navBtn}
              onClick={(e) => { e.stopPropagation(); cleanupVideo(); onPrev(); }}
              aria-label="Edição anterior"
              disabled={currentIndex === 0}
            >
              &larr; ANTERIOR
            </button>
            <button
              className={modalStyles.navBtn}
              onClick={(e) => { e.stopPropagation(); cleanupVideo(); onNext(); }}
              aria-label="Próxima edição"
              disabled={currentIndex === items.length - 1}
            >
              PRÓXIMO &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Grid de 4 cards ─────────────────────────────────────────────────────────
export default function HeroEditionsGrid() {
  const [activeItem, setActiveItem] = useState<HeroItem | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openModal = (item: HeroItem) => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setActiveItem(item);
  };

  const closeModal = () => {
    setActiveItem(null);
    setTimeout(() => { previousFocusRef.current?.focus(); }, 100);
  };

  const activeIndex = activeItem ? heroEditions.findIndex((i) => i.id === activeItem.id) : -1;
  const goNext = () => { if (activeIndex < heroEditions.length - 1) setActiveItem(heroEditions[activeIndex + 1]); };
  const goPrev = () => { if (activeIndex > 0) setActiveItem(heroEditions[activeIndex - 1]); };

  return (
    <>
      <div className={styles.editionsGrid}>
        {heroEditions.map((item, idx) => (
          <button
            key={item.id}
            className={styles.editionCard}
            onClick={() => openModal(item)}
            aria-label={`Assistir ${item.title}`}
            type="button"
          >
            <span className={styles.number}>E{String(idx + 1).padStart(2, "0")}</span>

            <span className={styles.videoIcon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                <rect x="1" y="4" width="13" height="14" stroke="currentColor" strokeWidth="1"/>
                <polygon points="14,11 21,7 21,15" fill="currentColor"/>
                <line x1="4" y1="9" x2="10" y2="9" stroke="currentColor" strokeWidth="0.7"/>
                <line x1="4" y1="11" x2="10" y2="11" stroke="currentColor" strokeWidth="0.7"/>
                <line x1="4" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="0.7"/>
              </svg>
            </span>

            <div className={styles.posterWrapper}>
              <PortfolioFrame>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.poster}
                  alt={item.alt}
                  className={styles.poster}
                  loading="lazy"
                />
              </PortfolioFrame>
            </div>

            <div className={styles.hoverOverlay} aria-hidden="true">
              <span className={styles.watchLabel}>ASSISTIR</span>
            </div>

            <div className={styles.meta}>
              <p className={styles.metaTitle}>{item.title}</p>
              <p className={styles.metaCategory}>{item.category}</p>
            </div>
          </button>
        ))}
      </div>

      {activeItem && (
        <HeroEditionsModal
          item={activeItem}
          items={heroEditions}
          onClose={closeModal}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </>
  );
}
