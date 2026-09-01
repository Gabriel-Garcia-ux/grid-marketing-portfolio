import styles from "./PortfolioFrame.module.css";

interface PortfolioFrameProps {
  children: React.ReactNode;
  frameOverlay?: string; // caminho para SVG/PNG de moldura externa
}

export default function PortfolioFrame({
  children,
  frameOverlay,
}: PortfolioFrameProps) {
  return (
    <div className={styles.frame}>
      {children}
      {frameOverlay ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={frameOverlay}
          alt=""
          aria-hidden="true"
          className={styles.overlay}
        />
      ) : (
        /* Moldura editorial via CSS */
        <div className={styles.cssFrame} aria-hidden="true">
          <span className={styles.corner} data-pos="tl" />
          <span className={styles.corner} data-pos="tr" />
          <span className={styles.corner} data-pos="bl" />
          <span className={styles.corner} data-pos="br" />
        </div>
      )}
    </div>
  );
}
