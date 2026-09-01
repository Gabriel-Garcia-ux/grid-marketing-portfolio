"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Marquee.module.css";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 40 }: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const allItems = [...items, ...items];
  const separator = " • ";
  const text = allItems.join(separator) + separator;

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !trackRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -totalWidth,
      duration: totalWidth / speed,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, [speed]);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.resume();

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <div ref={trackRef} className={styles.track}>
        <span className={styles.text}>{text}</span>
        <span className={styles.text} aria-hidden="true">{text}</span>
      </div>
    </div>
  );
}
