# คู่มือการเพิ่มแบบจำลอง Interactive (How to Add a Simulation)

ระบบนี้มี **Simulation Registry** พร้อม **ErrorBoundary** และ **Lazy Loading** ซึ่งช่วยแยกพื้นที่การทำงานของแบบจำลองออกจากโครงสร้างหลัก หากแบบจำลองมีข้อผิดพลาด หน้าเว็บจะไม่ล่ม

---

## ขั้นตอนการสร้าง React Simulation ใหม่

### 1. สร้างโฟลเดอร์และ Component ของแบบจำลอง
สร้างโฟลเดอร์ใน `src/simulations/demos/<SimulationName>/`
เช่น `src/simulations/demos/PendulumSim/`
- `PendulumSim.tsx`
- `PendulumSim.module.css` (ใช้ CSS Modules ป้องกัน Style ชนกัน)

```tsx
// src/simulations/demos/PendulumSim/PendulumSim.tsx
import React, { useState, useEffect, useRef } from 'react';
import { SimulationContainer } from '../../shared/SimulationContainer';
import styles from './PendulumSim.module.css';

export const PendulumSim: React.FC = () => {
  const [length, setLength] = useState(1.5);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // สำคัญ: Event Listener, Timer, Animation Frame ต้องมี Cleanup เสมอ!
  useEffect(() => {
    let animId: number;
    const animate = () => {
      // Logic วาด Canvas
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId); // Cleanup ป้องกัน Memory Leak
    };
  }, [length]);

  return (
    <SimulationContainer
      title="แบบจำลองลูกตุ้มนาฬิกา (Simple Pendulum Simulation)"
      description="ปรับความยาวเชือกเพื่อสังเกตคาบการแกว่ง"
      onReset={() => setLength(1.5)}
    >
      <div className={styles.wrapper}>
        <canvas ref={canvasRef} className={styles.canvas} />
        <div className={styles.controls}>
          <label>ความยาวเชือก: {length} เมตร</label>
          <input
            type="range"
            min={0.5}
            max={3.0}
            step={0.1}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </div>
      </div>
    </SimulationContainer>
  );
};

export default PendulumSim;
```

### 2. ลงทะเบียนใน `src/simulations/registry.ts`
เปิด `src/simulations/registry.ts` แล้วเพิ่มรหัสแบบจำลอง (ID) ด้วย `lazy`:
```typescript
const registry: Record<string, ComponentType<any>> = {
  'projectile-motion': lazy(() => import('./demos/ProjectileMotionSim/ProjectileMotionSim')),
  'quadratic-grapher': lazy(() => import('./demos/QuadraticGrapherSim/QuadraticGrapherSim')),
  'simple-pendulum': lazy(() => import('./demos/PendulumSim/PendulumSim')), // <-- เพิ่มตรงนี้
};
```

### 3. เรียกใช้ในบทเรียน
ในไฟล์บทเรียน `chapters/*.ts` เพียงเพิ่ม Section ชนิด `simulation`:
```typescript
{
  id: 'sec-pendulum-sim',
  heading: 'ทดลองการแกว่งของลูกตุ้ม',
  type: 'simulation',
  content: {
    simulationId: 'simple-pendulum',
    title: 'แบบจำลองลูกตุ้มอย่างง่าย',
  },
}
```
เท่านี้แบบจำลองจะถูกโหลดมาแสดงผลแบบ Dynamic ทันที!
