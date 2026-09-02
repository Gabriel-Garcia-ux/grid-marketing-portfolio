"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./PortfolioV2.module.css";
import { portfolioItems } from "@/content/portfolio-items";
import { PortfolioItem } from "@/types";

import SmartVideoPlayer from "@/components/ui/SmartVideoPlayer";

interface PortfolioV2Props {
  selectedProject?: PortfolioItem | null;
  onSelectProject?: (item: PortfolioItem | null) => void;
}

export default function PortfolioV2({ selectedProject: externalSelected, onSelectProject }: PortfolioV2Props) {
  const [internalSelected, setInternalSelected] = useState<PortfolioItem | null>(null);

  const selectedItem = externalSelected !== undefined ? externalSelected : internalSelected;

  const handleOpen = (item: PortfolioItem) => {
    if (onSelectProject) {
      onSelectProject(item);
    } else {
      setInternalSelected(item);
    }
  };

  const handleClose = () => {
    if (onSelectProject) {
      onSelectProject(null);
    } else {
      setInternalSelected(null);
    }
  };

  const currentIndex = selectedItem ? portfolioItems.findIndex((item) => item.id === selectedItem.id) : -1;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === -1) return;
    const prevIdx = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
    handleOpen(portfolioItems[prevIdx]);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === -1) return;
    const nextIdx = (currentIndex + 1) % portfolioItems.length;
    handleOpen(portfolioItems[nextIdx]);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, currentIndex]);

  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.dropCapBox}>P</span>ORTFÓLIO
        </h2>

      </div>

      <div className={styles.grid}>
        {portfolioItems.map((item, index) => {
          const displayNum = String(index + 1).padStart(2, "0");
          return (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => handleOpen(item)}
            >
              <div className={styles.badgeNumber}>{displayNum}</div>
              <div className={styles.playBadge}>▶</div>

              <div className={styles.posterWrapper}>
                <Image
                  src={item.poster}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 220px"
                  className={styles.posterImg}
                />
              </div>

              <div className={styles.cardTitle}>{item.title}</div>
              <div className={styles.cardCategory}>{item.category}</div>
            </div>
          );
        })}
      </div>

      {/* Modal de Vídeo Real */}
      {selectedItem && (
        <div className={styles.modalOverlay} onClick={handleClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={handlePrev}
              aria-label="Vídeo anterior"
            >
              ‹
            </button>

            <button className={styles.closeBtn} onClick={handleClose} aria-label="Fechar vídeo">
              ×
            </button>

            <div className={styles.modalVideoWrapper}>
              <SmartVideoPlayer
                src={selectedItem.video}
                poster={selectedItem.poster}
                title={selectedItem.title}
                autoplay={true}
                controls={true}
                loop={true}
              />
            </div>

            <div className={styles.modalTitle}>{selectedItem.title}</div>
            <div className={styles.modalCategory}>{selectedItem.category}</div>

            <button
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={handleNext}
              aria-label="Próximo vídeo"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

