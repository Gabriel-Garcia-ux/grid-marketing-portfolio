"use client";

import React, { useState, useEffect } from "react";
import styles from "./ServicosV2.module.css";

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  items: string[];
  gallery?: {
    src: string;
    title: string;
  }[];
}

export default function ServicosV2() {
  const [activeGallery, setActiveGallery] = useState<{
    serviceTitle: string;
    items?: string[];
    images: { src: string; title: string }[];
    currentIndex: number;
  } | null>(null);

  const servicesData: ServiceItem[] = [
    {
      id: "formula-3s",
      title: "A FÓRMULA DE 3 SEGUNDOS",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M2 8h20" />
          <path d="M6 4v4" />
          <path d="M10 4v4" />
          <path d="M14 4v4" />
          <path d="M18 4v4" />
        </svg>
      ),
      items: [
        "EDIÇÃO DINÂMICA DE VÍDEOS",
        "CRIAÇÃO DE ROTEIROS",
        "CONTEÚDO DINÂMICO & CRIATIVO",
      ],
      gallery: [
        { src: "/serviço/3 seg/1.png", title: "A Fórmula de 3 Segundos • Imagem 01" },
        { src: "/serviço/3 seg/2.png", title: "A Fórmula de 3 Segundos • Imagem 02" },
        { src: "/serviço/3 seg/3.png", title: "A Fórmula de 3 Segundos • Imagem 03" },
        { src: "/serviço/3 seg/4.png", title: "A Fórmula de 3 Segundos • Imagem 04" },
      ],
    },
    {
      id: "tunel-conversao",
      title: "O TÚNEL DE CONVERSÃO",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      ),
      items: [
        "CRIAÇÃO DE SITES & LANDING PAGES",
        "ANÁLISE DE DADOS & ROI",
        "IMAGENS ESTÁTICAS DE ALTA PERFORMANCE",
      ],
      gallery: [
        { src: "/serviço/tunel/1 (1).png", title: "O Túnel de Conversão • Imagem 01" },
        { src: "/serviço/tunel/1 (4).png", title: "O Túnel de Conversão • Imagem 02" },
        { src: "/serviço/tunel/1 (3).png", title: "O Túnel de Conversão • Imagem 03" },
        { src: "/serviço/tunel/1 (2).png", title: "O Túnel de Conversão • Imagem 04" },
      ],
    },
    {
      id: "dna-marca",
      title: "DNA DE MARCA & IMPACTO VISUAL",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="22" y1="12" x2="18" y2="12" />
          <line x1="6" y1="12" x2="2" y2="12" />
          <line x1="12" y1="6" x2="12" y2="2" />
          <line x1="12" y1="22" x2="12" y2="18" />
        </svg>
      ),
      items: [
        "CRIAÇÃO DE BRANDING & MARCA",
        "IMAGENS ESTÁTICAS",
      ],
      gallery: [
        { src: "/serviço/imagem 1.png", title: "DNA de Marca & Impacto Visual • Imagem 01" },
        { src: "/serviço/imagem 2.png", title: "DNA de Marca & Impacto Visual • Imagem 02" },
        { src: "/serviço/imagem 3.png", title: "DNA de Marca & Impacto Visual • Imagem 03" },
        { src: "/serviço/imagem 4.png", title: "DNA de Marca & Impacto Visual • Imagem 04" },
      ],
    },
    {
      id: "eficiencia-ia",
      title: "EFICIÊNCIA SINTÉTICA (IA)",
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      items: [
        "VÍDEOS E SITES COM IA",
        "CREATIVE CODING ACELERADO",
      ],
      gallery: [
        { src: "/serviço/eficiencia sintetica.png", title: "Eficiência Sintética (IA)" },
      ],
    },
  ];

  const handleOpenGallery = (service: ServiceItem) => {
    if (service.gallery && service.gallery.length > 0) {
      setActiveGallery({
        serviceTitle: service.title,
        items: service.items,
        images: service.gallery,
        currentIndex: 0,
      });
    }
  };

  const handleClose = () => {
    setActiveGallery(null);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeGallery) return;
    const len = activeGallery.images.length;
    setActiveGallery({
      ...activeGallery,
      currentIndex: (activeGallery.currentIndex - 1 + len) % len,
    });
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeGallery) return;
    const len = activeGallery.images.length;
    setActiveGallery({
      ...activeGallery,
      currentIndex: (activeGallery.currentIndex + 1) % len,
    });
  };

  const handleSelectIndex = (idx: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeGallery) return;
    setActiveGallery({
      ...activeGallery,
      currentIndex: idx,
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeGallery) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeGallery]);

  return (
    <section id="servicos" className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.dropCapBox}>S</span>ERVIÇOS
        </h2>
      </div>

      <div className={styles.cardsGrid}>
        {servicesData.map((service) => {
          const hasGallery = !!service.gallery && service.gallery.length > 0;
          return (
            <div key={service.id} className={styles.card}>
              <div>
                <div className={styles.cardHeader}>
                  <div className={styles.iconWrapper}>{service.icon}</div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>

                <ul className={styles.itemList}>
                  {service.items.map((item, idx) => (
                    <li key={idx} className={styles.item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {hasGallery ? (
                <button
                  type="button"
                  onClick={() => handleOpenGallery(service)}
                  className={styles.saibaMaisBtn}
                >
                  SAIBA MAIS
                </button>
              ) : (
                <a href="#contato" className={styles.saibaMaisBtn}>
                  SAIBA MAIS
                </a>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal / Sobreposição de Imagens de Serviço */}
      {activeGallery && (
        <div className={styles.modalOverlay} onClick={handleClose}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {activeGallery.images.length > 1 && (
              <button
                className={`${styles.navBtn} ${styles.prevBtn}`}
                onClick={handlePrev}
                aria-label="Imagem anterior"
              >
                ‹
              </button>
            )}

            <button
              className={styles.closeBtn}
              onClick={handleClose}
              aria-label="Fechar galeria"
            >
              ×
            </button>

            <div className={styles.modalHeaderInfo}>
              <span className={styles.modalBadge}>
                {String(activeGallery.currentIndex + 1).padStart(2, "0")} /{" "}
                {String(activeGallery.images.length).padStart(2, "0")}
              </span>
              <span className={styles.modalCategoryTitle}>
                {activeGallery.serviceTitle}
              </span>
            </div>

            {activeGallery.items && activeGallery.items.length > 0 && (
              <ul className={styles.modalItemList}>
                {activeGallery.items.map((item, idx) => (
                  <li key={idx} className={styles.modalItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.modalImageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={activeGallery.images[activeGallery.currentIndex].src}
                src={encodeURI(activeGallery.images[activeGallery.currentIndex].src)}
                alt={activeGallery.images[activeGallery.currentIndex].title}
                className={styles.modalImage}
              />
            </div>

            {/* Miniaturas / Indicadores para trocar direto */}
            {activeGallery.images.length > 1 && (
              <div className={styles.thumbnailsContainer}>
                {activeGallery.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.thumbBtn} ${
                      idx === activeGallery.currentIndex ? styles.activeThumb : ""
                    }`}
                    onClick={(e) => handleSelectIndex(idx, e)}
                    aria-label={`Ver imagem ${idx + 1}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={encodeURI(img.src)}
                      alt={`Thumbnail ${idx + 1}`}
                      className={styles.thumbImage}
                    />
                    <span className={styles.thumbNumber}>{idx + 1}</span>
                  </button>
                ))}
              </div>
            )}

            <div className={styles.modalFooterText}>
              {activeGallery.images[activeGallery.currentIndex].title}
            </div>

            {activeGallery.images.length > 1 && (
              <button
                className={`${styles.navBtn} ${styles.nextBtn}`}
                onClick={handleNext}
                aria-label="Próxima imagem"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

