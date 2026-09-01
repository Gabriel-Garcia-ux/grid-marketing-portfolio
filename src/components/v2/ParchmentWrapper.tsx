import React from "react";
import styles from "./ParchmentWrapper.module.css";

interface ParchmentWrapperProps {
  children: React.ReactNode;
}

export default function ParchmentWrapper({ children }: ParchmentWrapperProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.borderFrame}>
        {/* Marca d'água gigante vertical no lado direito iniciada abaixo do banner */}
        <div className={styles.rightWatermark} aria-hidden="true">
          <span className={styles.watermarkText}>&nbsp;&nbsp;GRID</span>
        </div>


        <div className={styles.contentContainer}>
          {children}
        </div>
      </div>
    </div>
  );
}
