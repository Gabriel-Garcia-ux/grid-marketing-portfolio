"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./Preloader.module.css";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const completedRef = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      onComplete();
      return;
    }

    // Contador editorial 0 → 100
    const obj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        if (completedRef.current) return;
        completedRef.current = true;
        exitAnimation();
      },
    });

    tl.to(obj, {
      val: 100,
      duration: 1.2,
      ease: "power2.inOut",
      onUpdate: () => {
        setCount(Math.round(obj.val));
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${obj.val / 100})`;
        }
      },
    });

    // Timeout de segurança
    const timeout = setTimeout(() => {
      if (!completedRef.current) {
        completedRef.current = true;
        tl.kill();
        exitAnimation();
      }
    }, 4000);

    function exitAnimation() {
      clearTimeout(timeout);
      gsap.to(containerRef.current, {
        y: "-100%",
        duration: 0.9,
        ease: "expo.inOut",
        onComplete: onComplete,
      });
    }

    return () => {
      clearTimeout(timeout);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className={styles.preloader} role="status" aria-label="Carregando Grid Marketing">
      <div className={styles.inner}>
        <p className={styles.label}>GRID MARKETING</p>
        <p className={styles.sub}>CARREGANDO A EDIÇÃO</p>
        <div className={styles.progressBar}>
          <div ref={progressRef} className={styles.progressFill} />
        </div>
        <p className={styles.count}>{String(count).padStart(2, "0")} — 100</p>
      </div>
    </div>
  );
}
