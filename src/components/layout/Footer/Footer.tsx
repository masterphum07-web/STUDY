import React from 'react';
import { BookOpen } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandRow}>
          <span className={styles.brandIcon}>
            <BookOpen size={18} />
          </span>
          <span>ศูนย์รวมสรุปบทเรียนและ Interactive Simulation Hub</span>
        </div>
        <p className={styles.tagline}>
          แพลตฟอร์มการเรียนรู้และสรุปบทเรียนแบบโต้ตอบ ผสานพลัง <strong>Three.js 3D WebGL</strong>, <strong>TypeSafe AI (JEV System One)</strong>, และ Sandboxed HTML จาก Qwen
        </p>
        <div className={styles.statusRow}>
          <span className={styles.statusItem}>
            <span className={styles.dot} />
            TypeSafe AI Jev 1.13 Online
          </span>
          <span className={styles.statusItem}>Three.js r186 Procedural 3D</span>
          <span className={styles.statusItem}>Qwen Sandboxed Suite</span>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} PhysioStudy &amp; Academic Learning Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
