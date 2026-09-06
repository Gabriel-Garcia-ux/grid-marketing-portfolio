"use client";

import React, { useRef, useState } from "react";
import styles from "./VideoBanner.module.css";

export default function VideoBanner() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (!iframeRef.current?.contentWindow) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    iframeRef.current.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: nextMuted ? "mute" : "unMute",
      }),
      "*"
    );
  };

  return (
    <section
      id="banner-video"
      className={styles.banner}
      aria-label="Banner de apresentação Grid Marketing"
    >
      <div className={styles.videoWrapper}>
        <iframe
          ref={iframeRef}
          src="https://www.youtube-nocookie.com/embed/fF3gGSyuxYA?autoplay=1&mute=1&controls=0&loop=0&rel=0&playsinline=1&modestbranding=1&enablejsapi=1&iv_load_policy=3"
          title="Grid Marketing - Apresentação Oficial"
          className={styles.iframe}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

        {/* Botão de áudio opcional para permitir ouvir com som */}
        <button
          className={styles.soundButton}
          onClick={toggleSound}
          aria-label={isMuted ? "Ativar som do banner" : "Mutar som do banner"}
          title={isMuted ? "Ativar áudio" : "Mutar áudio"}
        >
          {isMuted ? "🔇 ÁUDIO" : "🔊 ÁUDIO ATIVO"}
        </button>

        {/* Overlay sutil na base para transição orgânica com a seção seguinte */}
        <div className={styles.overlayBottom} aria-hidden="true" />
      </div>
    </section>
  );
}
