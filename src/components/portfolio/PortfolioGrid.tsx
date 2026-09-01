"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolioItems } from "@/content/portfolio-items";
import { PortfolioItem } from "@/types";
import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";
import styles from "./PortfolioGrid.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioGrid() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Animação de entrada dos cards
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !gridRef.current) return;

    const cards = Array.from(gridRef.current.querySelectorAll(`.${styles.cardWrapper}`));

    // Garante que todos os cards são visíveis por padrão (fallback)
    cards.forEach((card) => {
      (card as HTMLElement).style.opacity = "1";
    });

    gsap.fromTo(
      cards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "opacity,transform", // remove inline styles ao terminar
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 90%",
          once: true,
        },
      }
    );
  }, []);

  const openModal = (item: PortfolioItem, _rect: DOMRect) => {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setActiveItem(item);
  };

  const closeModal = () => {
    setActiveItem(null);
    // Retorna foco ao card correspondente
    setTimeout(() => {
      previousFocusRef.current?.focus();
    }, 100);
  };

  const activeIndex = activeItem
    ? portfolioItems.findIndex((i) => i.id === activeItem.id)
    : -1;

  const goNext = () => {
    if (activeIndex < portfolioItems.length - 1)
      setActiveItem(portfolioItems[activeIndex + 1]);
  };

  const goPrev = () => {
    if (activeIndex > 0) setActiveItem(portfolioItems[activeIndex - 1]);
  };

  return (
    <>
      <div ref={gridRef} className={styles.grid}>
        {portfolioItems.map((item) => (
          <div key={item.id} className={styles.cardWrapper}>
            <PortfolioCard item={item} onClick={openModal} />
          </div>
        ))}
      </div>

      {activeItem && (
        <PortfolioModal
          item={activeItem}
          items={portfolioItems}
          onClose={closeModal}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </>
  );
}
