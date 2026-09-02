"use client";

import React, { useMemo } from "react";
import { parseVideoSource } from "@/utils/videoHelper";
import styles from "./SmartVideoPlayer.module.css";

interface SmartVideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function SmartVideoPlayer({
  src,
  poster,
  title = "Vídeo",
  autoplay = true,
  muted = false,
  loop = true,
  controls = true,
  className,
  style,
}: SmartVideoPlayerProps) {
  const parsed = useMemo(() => {
    return parseVideoSource(src, { autoplay, muted, loop, controls });
  }, [src, autoplay, muted, loop, controls]);

  if (parsed.type === "youtube" || parsed.type === "vimeo") {
    return (
      <div className={`${styles.container} ${className || ""}`} style={style}>
        <iframe
          src={parsed.embedUrl}
          title={title}
          className={styles.iframe}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  if (parsed.type === "direct" && parsed.directSrc) {
    return (
      <div className={`${styles.container} ${className || ""}`} style={style}>
        <video
          src={parsed.directSrc}
          poster={poster}
          className={styles.video}
          autoPlay={autoplay}
          muted={muted}
          loop={loop}
          controls={controls}
          playsInline
          aria-label={title}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.container} ${className || ""}`} style={style}>
      {poster && (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={poster}
          alt={title}
          className={styles.posterFallback}
        />
      )}
    </div>
  );
}
