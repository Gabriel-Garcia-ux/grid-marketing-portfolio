"use client";

import { useRef } from "react";
import { PortfolioItem } from "@/types";
import PortfolioFrame from "./PortfolioFrame";
import styles from "./PortfolioCard.module.css";

interface PortfolioCardProps {
  item: PortfolioItem;
  onClick: (item: PortfolioItem, rect: DOMRect) => void;
}

export default function PortfolioCard({ item, onClick }: PortfolioCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    onClick(item, rect);
  };

  const hasVideo = !!item.video;

  return (
    <button
      ref={cardRef}
      className={styles.card}
      onClick={handleClick}
      aria-label={`Abrir ${item.title} — ${item.category ?? "portfólio"}`}
      type="button"
    >
      {/* Número do projeto */}
      <span className={styles.number}>{item.id}</span>

      {/* Ícone de vídeo — canto superior direito */}
      <span className={styles.videoIcon} aria-hidden="true">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="1" y="4" width="13" height="14" stroke="currentColor" strokeWidth="1"/>
          <rect x="1" y="6" width="13" height="10" fill="none"/>
          <polygon points="14,11 21,7 21,15" fill="currentColor"/>
          <line x1="4" y1="9" x2="10" y2="9" stroke="currentColor" strokeWidth="0.7"/>
          <line x1="4" y1="11" x2="10" y2="11" stroke="currentColor" strokeWidth="0.7"/>
          <line x1="4" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="0.7"/>
        </svg>
      </span>

      {/* Moldura / Poster 4:5 */}
      <div 
        className={styles.posterWrapper}
        style={{ aspectRatio: item.thumbnailAspectRatio || "4 / 5" }}
      >
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

      {/* Hover overlay */}
      <div className={styles.hoverOverlay} aria-hidden="true">
        <span className={styles.watchLabel}>
          {hasVideo ? "ASSISTIR" : "EM BREVE"}
        </span>
      </div>

      {/* Metadados */}
      <div className={styles.meta}>
        <p className={styles.metaTitle}>{item.title}</p>
        {item.category && (
          <p className={styles.metaCategory}>{item.category}</p>
        )}
      </div>
    </button>
  );
}

