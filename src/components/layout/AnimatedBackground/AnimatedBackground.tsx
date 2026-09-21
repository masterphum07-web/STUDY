import React, { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

/**
 * Ambient, GPU-friendly "3D" scene rendered behind the whole app.
 *
 * Layers:
 *  - Aurora orbs   : soft colour fields that slowly drift
 *  - Perspective   : an infinite receding grid floor (rotateX)
 *  - Floating cubes: real CSS 3D cubes slowly tumbling in space
 *  - Vignette      : keeps foreground content legible
 *
 * The scene reacts to the pointer via CSS custom properties (--px / --py),
 * so the movement is composited on the GPU without React re-renders.
 */
export const AnimatedBackground: React.FC = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (event: PointerEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = (event.clientY / window.innerHeight - 0.5) * 2;

      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        root.style.setProperty('--px', targetX.toFixed(3));
        root.style.setProperty('--py', targetY.toFixed(3));
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.root} aria-hidden="true">
      <div className={styles.aurora}>
        <span className={styles.orb} data-orb="1" />
        <span className={styles.orb} data-orb="2" />
        <span className={styles.orb} data-orb="3" />
        <span className={styles.orb} data-orb="4" />
      </div>

      <div className={styles.grid} />

      <div className={styles.cubes}>
        <span className={styles.cubeWrap} style={{ '--x': '8%', '--y': '16%', '--size': '62px', '--dur': '9s', '--delay': '-1s' } as React.CSSProperties}>
          <span className={styles.cube} style={{ '--spin': '26s' } as React.CSSProperties}>
            <i /><i /><i /><i /><i /><i />
          </span>
        </span>
        <span className={styles.cubeWrap} style={{ '--x': '82%', '--y': '10%', '--size': '44px', '--dur': '11s', '--delay': '-3s' } as React.CSSProperties}>
          <span className={styles.cube} style={{ '--spin': '20s' } as React.CSSProperties}>
            <i /><i /><i /><i /><i /><i />
          </span>
        </span>
        <span className={styles.cubeWrap} style={{ '--x': '72%', '--y': '62%', '--size': '78px', '--dur': '13s', '--delay': '-5s' } as React.CSSProperties}>
          <span className={styles.cube} style={{ '--spin': '34s' } as React.CSSProperties}>
            <i /><i /><i /><i /><i /><i />
          </span>
        </span>
        <span className={styles.cubeWrap} style={{ '--x': '16%', '--y': '72%', '--size': '36px', '--dur': '10s', '--delay': '-2s' } as React.CSSProperties}>
          <span className={styles.cube} style={{ '--spin': '18s' } as React.CSSProperties}>
            <i /><i /><i /><i /><i /><i />
          </span>
        </span>
      </div>

      <div className={styles.vignette} />
    </div>
  );
};

export default AnimatedBackground;
