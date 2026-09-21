import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SimulationContainer } from '../../shared/SimulationContainer';
import styles from './QuadraticGrapherSim.module.css';

interface QuadraticGrapherProps {
  initialA?: number;
  initialB?: number;
  initialC?: number;
}

export const QuadraticGrapherSim: React.FC<QuadraticGrapherProps> = ({
  initialA = 1,
  initialB = 0,
  initialC = -4,
}) => {
  const [a, setA] = useState(initialA);
  const [b, setB] = useState(initialB);
  const [c, setC] = useState(initialC);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Math calculations
  const discriminant = b * b - 4 * a * c;
  const vertexX = a !== 0 ? -b / (2 * a) : 0;
  const vertexY = a !== 0 ? a * vertexX * vertexX + b * vertexX + c : c;

  let rootsText = 'ไม่มีคำตอบที่เป็นจำนวนจริง (D < 0)';
  if (a !== 0) {
    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      rootsText = `x = ${x1.toFixed(2)}, ${x2.toFixed(2)}`;
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      rootsText = `x = ${x.toFixed(2)} (รากซ้ำ)`;
    }
  }

  const drawGraph = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const originX = width / 2;
    const originY = height / 2;
    const scale = 20; // 20 pixels = 1 unit

    ctx.clearRect(0, 0, width, height);

    // Draw Grid
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.2)';
    ctx.lineWidth = 1;

    for (let x = originX % scale; x < width; x += scale) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = originY % scale; y < height; y += scale) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw Axis lines
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1.5;

    // X Axis
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(width, originY);
    ctx.stroke();

    // Y Axis
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, height);
    ctx.stroke();

    // Parabola Curve
    if (a !== 0) {
      ctx.strokeStyle = '#059669';
      ctx.lineWidth = 3;
      ctx.beginPath();

      const minX = -originX / scale;
      const maxX = (width - originX) / scale;
      const step = 0.05;

      let started = false;
      for (let graphX = minX; graphX <= maxX; graphX += step) {
        const graphY = a * graphX * graphX + b * graphX + c;
        const px = originX + graphX * scale;
        const py = originY - graphY * scale;

        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();

      // Draw Vertex point
      const vPx = originX + vertexX * scale;
      const vPy = originY - vertexY * scale;

      ctx.fillStyle = '#dc2626';
      ctx.beginPath();
      ctx.arc(vPx, vPy, 6, 0, Math.PI * 2);
      ctx.fill();

      // Draw Axis of Symmetry (Dashed Line)
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(vPx, 0);
      ctx.lineTo(vPx, height);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, [a, b, c, vertexX, vertexY]);

  useEffect(() => {
    drawGraph();
  }, [drawGraph]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const handleResize = () => {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      drawGraph();
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawGraph]);

  const handleReset = () => {
    setA(initialA);
    setB(initialB);
    setC(initialC);
  };

  return (
    <SimulationContainer
      title="แบบจำลองกราฟพาราโบลา (Quadratic Parabola Grapher)"
      description="ปรับค่าสัมประสิทธิ์ a, b, c เพื่อสังเกตการเปลี่ยนรูป ทิศทางการหงาย/คว่ำ และจุดยอดของพาราโบลา"
      onReset={handleReset}
    >
      <div className={styles.wrapper}>
        {/* Current Formula Display */}
        <div className={styles.formulaBadge}>
          y = {a === 1 ? '' : a === -1 ? '-' : a}x&sup2; {b >= 0 ? `+ ${b}x` : `- ${Math.abs(b)}x`}{' '}
          {c >= 0 ? `+ ${c}` : `- ${Math.abs(c)}`}
        </div>

        {/* Canvas */}
        <div className={styles.canvasContainer}>
          <canvas ref={canvasRef} className={styles.canvas} />
        </div>

        {/* Sliders */}
        <div className={styles.controls}>
          <div className={styles.controlItem}>
            <div className={styles.label}>
              <span>สัมประสิทธิ์ a (ความกว้าง/ทิศ)</span>
              <span className={styles.value}>{a}</span>
            </div>
            <input
              type="range"
              min={-4}
              max={4}
              step={0.5}
              value={a}
              onChange={(e) => {
                const val = Number(e.target.value);
                setA(val === 0 ? 0.5 : val); // prevent exact 0 to keep it quadratic
              }}
              className={styles.slider}
            />
          </div>

          <div className={styles.controlItem}>
            <div className={styles.label}>
              <span>สัมประสิทธิ์ b (แกนสมมาตร)</span>
              <span className={styles.value}>{b}</span>
            </div>
            <input
              type="range"
              min={-8}
              max={8}
              step={0.5}
              value={b}
              onChange={(e) => setB(Number(e.target.value))}
              className={styles.slider}
            />
          </div>

          <div className={styles.controlItem}>
            <div className={styles.label}>
              <span>ค่าคงที่ c (จุดตัดแกน Y)</span>
              <span className={styles.value}>{c}</span>
            </div>
            <input
              type="range"
              min={-8}
              max={8}
              step={0.5}
              value={c}
              onChange={(e) => setC(Number(e.target.value))}
              className={styles.slider}
            />
          </div>
        </div>

        {/* Mathematical Analysis */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>ลักษณะกราฟ</div>
            <div className={styles.statValue} style={{ color: a > 0 ? 'var(--success)' : 'var(--warning)' }}>
              {a > 0 ? 'พาราโบลาหงาย' : 'พาราโบลาคว่ำ'}
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>จุดยอด Vertex (h, k)</div>
            <div className={styles.statValue}>
              ({vertexX.toFixed(2)}, {vertexY.toFixed(2)})
            </div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>คำตอบของสมการ (จุดตัดแกน X)</div>
            <div className={styles.statValue} style={{ fontSize: '0.875rem' }}>
              {rootsText}
            </div>
          </div>
        </div>
      </div>
    </SimulationContainer>
  );
};

export default QuadraticGrapherSim;

