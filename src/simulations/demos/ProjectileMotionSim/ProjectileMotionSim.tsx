import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { SimulationContainer } from '../../shared/SimulationContainer';
import styles from './ProjectileMotionSim.module.css';

interface ProjectileMotionProps {
  initialAngle?: number;
  initialSpeed?: number;
}

export const ProjectileMotionSim: React.FC<ProjectileMotionProps> = ({
  initialAngle = 45,
  initialSpeed = 25,
}) => {
  const [angle, setAngle] = useState(initialAngle);
  const [speed, setSpeed] = useState(initialSpeed);
  const [gravity, setGravity] = useState(9.8);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameIdRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);

  // Physics calculation
  const angleRad = (angle * Math.PI) / 180;
  const v0x = speed * Math.cos(angleRad);
  const v0y = speed * Math.sin(angleRad);
  const totalFlightTime = (2 * v0y) / gravity;
  const maxHeight = (v0y * v0y) / (2 * gravity);
  const totalRange = (speed * speed * Math.sin(2 * angleRad)) / gravity;

  // Draw simulation frame
  const drawScene = useCallback(
    (t: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = canvas.width;
      const height = canvas.height;
      const groundY = height - 40;
      const startX = 40;

      // Scale factor to fit trajectory inside canvas
      const scale = Math.min((width - 80) / Math.max(totalRange * 1.2, 50), (groundY - 40) / Math.max(maxHeight * 1.4, 20));

      ctx.clearRect(0, 0, width, height);

      // Draw ground line
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.stroke();

      // Draw launch angle indicator arc
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(startX, groundY, 30, 0, -angleRad, true);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw full theoretical trajectory line (dotted)
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const steps = 60;
      for (let i = 0; i <= steps; i++) {
        const simT = (totalFlightTime * i) / steps;
        const px = startX + v0x * simT * scale;
        const py = groundY - (v0y * simT - 0.5 * gravity * simT * simT) * scale;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Current position of projectile
      const currentSimT = Math.min(t, totalFlightTime);
      const curX = startX + v0x * currentSimT * scale;
      const curY = groundY - (v0y * currentSimT - 0.5 * gravity * currentSimT * currentSimT) * scale;

      // Draw trajectory up to current position (solid)
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 3;
      ctx.beginPath();
      const curSteps = Math.max(2, Math.floor((currentSimT / totalFlightTime) * 60));
      for (let i = 0; i <= curSteps; i++) {
        const simT = (currentSimT * i) / curSteps;
        const px = startX + v0x * simT * scale;
        const py = groundY - (v0y * simT - 0.5 * gravity * simT * simT) * scale;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      // Draw projectile ball
      ctx.fillStyle = '#ef4444';
      ctx.shadowColor = 'rgba(239, 68, 68, 0.5)';
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(curX, curY, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw canon at start
      ctx.fillStyle = '#475569';
      ctx.beginPath();
      ctx.arc(startX, groundY, 12, 0, Math.PI * 2);
      ctx.fill();

      // Draw barrel
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(startX, groundY);
      ctx.lineTo(startX + Math.cos(angleRad) * 22, groundY - Math.sin(angleRad) * 22);
      ctx.stroke();
    },
    [angleRad, gravity, maxHeight, totalFlightTime, totalRange, v0x, v0y]
  );

  // Animation loop with cleanup
  useEffect(() => {
    if (!isPlaying) {
      drawScene(currentTime);
      return;
    }

    const animate = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }
      const deltaSeconds = (timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      setCurrentTime((prevTime) => {
        const nextTime = prevTime + deltaSeconds * 1.2; // simulation speed multiplier
        if (nextTime >= totalFlightTime) {
          setIsPlaying(false);
          lastTimestampRef.current = null;
          drawScene(totalFlightTime);
          return totalFlightTime;
        }
        drawScene(nextTime);
        return nextTime;
      });

      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameIdRef.current !== null) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
      lastTimestampRef.current = null;
    };
  }, [isPlaying, drawScene, totalFlightTime, currentTime]);

  // Handle canvas sizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      drawScene(currentTime);
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [currentTime, drawScene]);

  const handleLaunch = () => {
    if (currentTime >= totalFlightTime) {
      setCurrentTime(0);
    }
    lastTimestampRef.current = null;
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
    lastTimestampRef.current = null;
  };

  const handleReset = () => {
    setIsPlaying(false);
    lastTimestampRef.current = null;
    setCurrentTime(0);
    drawScene(0);
  };

  return (
    <SimulationContainer
      title="แบบจำลองการเคลื่อนที่แบบโพรเจกไทล์ (Projectile Motion Simulator)"
      description="ปรับมุมยิง ความเร็วต้น และแรงโน้มถ่วง เพื่อสังเกตวิถีการโค้งของวัตถุ"
      onReset={handleReset}
    >
      <div className={styles.wrapper}>
        {/* Canvas container */}
        <div className={styles.canvasContainer}>
          <canvas ref={canvasRef} className={styles.canvas} />
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <div className={styles.controlItem}>
            <div className={styles.label}>
              <span>มุมยิง (&theta;)</span>
              <span className={styles.value}>{angle}&deg;</span>
            </div>
            <input
              type="range"
              min={5}
              max={85}
              step={1}
              value={angle}
              disabled={isPlaying}
              onChange={(e) => {
                setAngle(Number(e.target.value));
                handleReset();
              }}
              className={styles.slider}
            />
          </div>

          <div className={styles.controlItem}>
            <div className={styles.label}>
              <span>ความเร็วต้น (u)</span>
              <span className={styles.value}>{speed} m/s</span>
            </div>
            <input
              type="range"
              min={10}
              max={40}
              step={1}
              value={speed}
              disabled={isPlaying}
              onChange={(e) => {
                setSpeed(Number(e.target.value));
                handleReset();
              }}
              className={styles.slider}
            />
          </div>

          <div className={styles.controlItem}>
            <div className={styles.label}>
              <span>ดาว / แรงโน้มถ่วง (g)</span>
              <span className={styles.value}>{gravity} m/s&sup2;</span>
            </div>
            <select
              value={gravity}
              disabled={isPlaying}
              onChange={(e) => {
                setGravity(Number(e.target.value));
                handleReset();
              }}
              className={styles.select}
            >
              <option value={9.8}>โลก (Earth - 9.8 m/s²)</option>
              <option value={1.62}>ดวงจันทร์ (Moon - 1.62 m/s²)</option>
              <option value={3.71}>ดาวอังคาร (Mars - 3.71 m/s²)</option>
            </select>
          </div>
        </div>

        {/* Action buttons */}
        <div className={styles.buttonRow}>
          {isPlaying ? (
            <button onClick={handlePause} className={`${styles.btn} ${styles.btnPrimary}`}>
              <Pause size={16} /> หยุดชั่วคราว
            </button>
          ) : (
            <button onClick={handleLaunch} className={`${styles.btn} ${styles.btnPrimary}`}>
              <Play size={16} /> {currentTime > 0 && currentTime < totalFlightTime ? 'เล่นต่อ' : 'ยิงโพรเจกไทล์'}
            </button>
          )}
          <button onClick={handleReset} className={`${styles.btn} ${styles.btnSecondary}`}>
            <RotateCcw size={16} /> ตั้งค่าใหม่
          </button>
        </div>

        {/* Real-time calculated stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>ระยะตกไกลสุด (Range - R)</div>
            <div className={styles.statValue}>{totalRange.toFixed(2)} m</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>ความสูงสูงสุด (Max Height - H)</div>
            <div className={styles.statValue}>{maxHeight.toFixed(2)} m</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>เวลาลอยในอากาศ (Flight Time - T)</div>
            <div className={styles.statValue}>{totalFlightTime.toFixed(2)} s</div>
          </div>
        </div>
      </div>
    </SimulationContainer>
  );
};

export default ProjectileMotionSim;
