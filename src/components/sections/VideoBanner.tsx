"use client";

import { useEffect, useRef } from "react";
import styles from "./VideoBanner.module.css";

export default function VideoBanner() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Toca uma vez ao montar (cada carregamento/recarga da página)
    video.currentTime = 0;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay bloqueado pelo browser — tenta com muted
        if (video) {
          video.muted = true;
          video.play().catch(() => {
            // silencia erros de reprodução
          });
        }
      });
    }

    // Para o vídeo quando ele termina (sem loop)
    const handleEnded = () => {
      // Vídeo já pausou sozinho por não ter loop — fica no último frame
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <section
      id="banner-video"
      className={styles.banner}
      aria-label="Banner de apresentação Grid Marketing"
    >
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          src="/videos portfolio/video do banner.mp4"
          className={styles.video}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />

        {/* Overlay sutil com gradiente para integrar com a seção seguinte */}
        <div className={styles.overlayBottom} aria-hidden="true" />
      </div>
    </section>
  );
}
