import React from "react";
import styles from "./ExperienciaV2.module.css";
import { siteContent } from "@/content/site-content";

export default function ExperienciaV2() {
  const { experience } = siteContent;

  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.dropCapBox}>E</span>XPERIÊNCIA
        </h2>

      </div>


      <div className={styles.grid}>
        {experience.map((item, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.company}>
              <span>{item.company}</span>
              {item.isCurrent && <span className={styles.badgeCurrent}>ATUAL</span>}
            </div>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
