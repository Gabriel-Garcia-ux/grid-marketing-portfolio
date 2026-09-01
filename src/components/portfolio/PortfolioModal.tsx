"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { PortfolioItem } from "@/types";
import styles from "./PortfolioModal.module.css";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  items: PortfolioItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function PortfolioModal({
  item,
  items,
  onClose,
  onPrev,
  onNext,
}: PortfolioModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [showPlayPulse, setShowPlayPulse] = useState<boolean>(false);

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
    if (prefersReduced) {
      onClose();
      return;
    }
    gsap.to([overlayRef.current, dialogRef.current], {
      opacity: 0,
      scale: 0.93,
      duration: 0.25,
      onComplete: onClose,
    });
  }, [cleanupVideo, onClose]);

  // Teclado (Esc, setas, barra de espaço)
  useEffect(() => {
    if (!item) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === " " || e.code === "Space") {
        e.preventDefault();
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) {
          v.play();
          setIsPlaying(true);
        } else {
          v.pause();
          setIsPlaying(false);
        }
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
  }, [item, handleClose, onPrev, onNext]);

  // Tentar dar Play automaticamente quando o item mudar
  useEffect(() => {
    if (item && item.video && videoRef.current) {
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
            }
          });
      }
    }
  }, [item]);

  // Animação de entrada
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!item) return;

    if (prefersReduced) {
      gsap.set([overlayRef.current, dialogRef.current], { opacity: 1 });
    } else {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" }
      );
      gsap.fromTo(
        dialogRef.current,
        { scale: 0.9, opacity: 0, y: 15 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.1)" }
      );
    }
  }, [item]);

  // Clique em cima do vídeo = Pausa ou Dá Play
  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }

    setShowPlayPulse(true);
    setTimeout(() => setShowPlayPulse(false), 500);
  };

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const hasVideo = !!item.video;

  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      onClick={(e) => {
        // Clicar fora da área do vídeo (no fundo escuro) fecha o modal
        if (e.target === overlayRef.current) {
          handleClose();
        }
      }}
      aria-hidden="false"
    >
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Botão de Fechar */}
        <button
          ref={closeRef}
          className={styles.closeBtn}
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          aria-label="Fechar"
        >
          <span aria-hidden="true">✕</span>
        </button>

        {/* Container do Player 9:16 (Reels Vertical) Centralizado */}
        <div
          className={styles.playerWrapper}
          style={{ aspectRatio: item.videoAspectRatio || "9 / 16" }}
          onClick={hasVideo ? togglePlayPause : undefined}
          title={hasVideo ? (isPlaying ? "Clique para pausar" : "Clique para dar play") : undefined}
        >
          {hasVideo ? (
            <>
              <video
                ref={videoRef}
                src={item.video}
                poster={item.poster}
                className={styles.video}
                playsInline
                loop
                aria-label={`Vídeo: ${item.title}`}
              />

              {/* Overlay de Play / Pause animado quando clica ou quando está pausado */}
              {(!isPlaying || showPlayPulse) && (
                <div className={`${styles.playPulseOverlay} ${showPlayPulse ? styles.pulseAnim : ""}`}>
                  <div className={styles.playPulseBadge}>
                    {isPlaying ? (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: "4px" }}>
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    )}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className={styles.noVideo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.poster}
                alt={item.alt}
                className={styles.posterBg}
              />
              <div className={styles.noVideoMsg}>
                <p className={styles.noVideoTitle}>REEL #{item.id} — EM BREVE</p>
                <p className={styles.noVideoSub}>
                  Moldura no formato 4:5. O vídeo em 9:16 será carregado assim que for publicado.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Rodapé do Modal com Informações e Botões de Navegação */}
        <div className={styles.footerInfo}>
          <div className={styles.infoMetaGroup}>
            <span className={styles.infoNum}>{item.id} / {String(items.length).padStart(2, "0")}</span>
            <h2 id="modal-title" className={styles.infoTitle}>{item.title}</h2>
            {item.category && <span className={styles.infoCategory}>{item.category}</span>}
          </div>

          <div className={styles.navGroup}>
            <button
              className={styles.navBtn}
              onClick={(e) => {
                e.stopPropagation();
                cleanupVideo();
                onPrev();
              }}
              aria-label="Projeto anterior"
              disabled={currentIndex === 0}
            >
              ← ANTERIOR
            </button>
            <button
              className={styles.navBtn}
              onClick={(e) => {
                e.stopPropagation();
                cleanupVideo();
                onNext();
              }}
              aria-label="Próximo projeto"
              disabled={currentIndex === items.length - 1}
            >
              PRÓXIMO →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

