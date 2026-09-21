# 📚 ศูนย์รวมสรุปบทเรียน & Interactive Simulation Hub

> แพลตฟอร์มอ่านสรุปบทเรียนมัธยมปลาย พร้อมแบบจำลอง Interactive เสมือนจริง และระบบแยกส่วนรองรับโค้ดจาก Qwen ได้อย่างปลอดภัย 100% โดยไม่ทำให้ระบบเดิมพัง

[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vitest](https://img.shields.io/badge/Vitest-Tested-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deploy-success)](https://masterphum07-web.github.io/STUDY/)

---

## 🌟 จุดเด่นของระบบ (Key Features)

1. **โครงสร้างแบบแยกส่วน (Modular Registry-Driven Architecture):**
   * ข้อมูลวิชาและบทเรียนถูกแยกออกจากโค้ดหลักของเว็บไซต์ (`App.tsx`, `router.tsx`) โดยสิ้นเชิง
   * การเพิ่มวิชาใหม่หรือบทใหม่ ทำได้เพียงแค่เพิ่มไฟล์ข้อมูล 1 ไฟล์แล้วลงทะเบียนใน Registry กลาง
2. **แก้ปัญหาโค้ดพังจาก Qwen (Qwen Integration):**
   * **Single-File HTML จาก Qwen:** รองรับการนำเข้าไฟล์ HTML เดี่ยว (HTML+CSS+JS) วางใน `public/qwen-modules/` แล้วเรนเดอร์ในโหมด Sandboxed `<iframe>` สไตล์และสคริปต์ของ Qwen จะถูกกักบริเวณไว้ 100% ไม่มีทางรั่วไหลออกมากวนระบบหลัก
   * **React Component:** รองรับคอมโพเนนต์ React พร้อมครอบด้วย `SimulationErrorBoundary` ป้องกันจุดใดจุดหนึ่งล่มแล้วดึงทั้งหน้าพัง
3. **แบบจำลอง Interactive ที่ใช้งานได้จริง:**
   * **ฟิสิกส์:** แบบจำลองการเคลื่อนที่แบบโพรเจกไทล์ (ปรับมุมยิง, ความเร็วต้น, แรงโน้มถ่วง พร้อมคำนวณวิถีและระยะตกจริง)
   * **คณิตศาสตร์:** แบบจำลองกราฟพาราโบลา $y = ax^2 + bx + c$ (ปรับค่า $a, b, c$ ดูกราฟ จุดยอด และคำตอบของสมการแบบ Real-time)
   * **ชีววิทยา:** แบบจำลองกล้องจุลทรรศน์ส่องสำรวจออร์แกเนลล์เซลล์พืชและเซลล์สัตว์ (สาธิตโมดูลจาก Qwen ใน Sandbox)
4. **ประสบการณ์การอ่านระดับพรีเมียม (Reader UX/UI):**
   * รองรับทั้ง **Light Mode** และ **Dark Mode**
   * สารบัญในบทเรียน (Table of Contents) พร้อม ScrollSpy เลื่อนตามอัตโนมัติ
   * แถบ Reading Progress Bar ด้านบน
   * สูตรคณิตศาสตร์/ฟิสิกส์เรนเดอร์ด้วย KaTeX คมชัดและโหลดเร็ว
   * กล่องความรู้ (Callouts), โจทย์ตัวอย่างพร้อมวิธีทำทีละขั้นตอน และแบบทดสอบท้ายบท (Quiz) ตรวจคำตอบได้ทันที
   * ระบบค้นหาอัจฉริยะ (Real-time Search Modal กด `Ctrl + K`)
   * ระบบบุ๊กมาร์ก (Bookmarks) และบันทึกประวัติความคืบหน้าการอ่านลง `localStorage`

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
├── docs/                     # คู่มือและเอกสารสัญญาสำหรับสั่ง Qwen
│   ├── ADD_SUBJECT.md        # วิธีเพิ่มวิชาใหม่
│   ├── ADD_CHAPTER.md        # วิธีเพิ่มบทเรียนใหม่
│   ├── ADD_SIMULATION.md     # วิธีเพิ่มแบบจำลอง Interactive
│   ├── IMPORT_QWEN_CODE.md   # ขั้นตอนนำเข้าโค้ดจาก Qwen ทั้ง 2 รูปแบบ
│   └── QWEN_OUTPUT_CONTRACT.md # สัญญาและ Prompt Template สำหรับสั่ง Qwen
├── public/
│   ├── favicon.svg           # ไอคอนของเว็บ
│   └── qwen-modules/         # โฟลเดอร์วางไฟล์ HTML จาก Qwen
├── src/
│   ├── app/                  # App shell, Router, Providers
│   ├── components/           # UI Components (Layout, Reader, Navigation, Search)
│   ├── content/              # ข้อมูลวิชาและบทเรียน (Subjects & Chapters)
│   ├── simulations/          # Simulation Registry และ Interactive Demos
│   ├── integrations/qwen/    # Qwen React Adapter & Sandboxed HTML Renderer
│   ├── hooks/                # Custom React Hooks
│   ├── storage/              # LocalStorage wrapper
│   └── styles/               # CSS Variables, Design Tokens, Global CSS
├── tests/                    # Vitest Automated Test Suite
└── .github/workflows/        # CI/CD Workflow สำหรับ GitHub Pages
```

---

## 🚀 เริ่มต้นใช้งานในเครื่อง (Local Development)

1. ติดตั้ง Dependencies:
   ```bash
   npm install
   ```

2. รันโหมด Development:
   ```bash
   npm run dev
   ```
   เปิดเบราว์เซอร์ไปที่ `http://localhost:5173`

3. ทดสอบ Unit Tests:
   ```bash
   npm test
   ```

4. ตรวจสอบโค้ดด้วย Linter:
   ```bash
   npm run lint
   ```

5. บิลด์สำหรับ Production:
   ```bash
   npm run build
   ```

---

## 🤖 วิธีสั่ง Qwen สร้างบทใหม่ไม่ให้พัง

ดูคำสั่ง Prompt และสัญญาแบบเต็มได้ที่ [`docs/QWEN_OUTPUT_CONTRACT.md`](docs/QWEN_OUTPUT_CONTRACT.md)

* **สั่งทำแบบจำลอง:** ใช้เทมเพลตสั่งให้ Qwen สร้างเป็นไฟล์เดี่ยว `index.html` แล้วนำไปใส่ใน `public/qwen-modules/<subject>/<chapter>/index.html`
* **สั่งทำเนื้อหาบทเรียน:** ใช้เทมเพลต Chapter Schema แล้วนำไฟล์ไปวางใน `src/content/subjects/<subject>/chapters/<chapter>.ts`

---

## 📄 ใบอนุญาต (License)

MIT License © 2026 MasterPhum
