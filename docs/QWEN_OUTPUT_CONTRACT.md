# สัญญาการส่งมอบโค้ดจาก Qwen (Qwen Output Contract)

เอกสารนี้เป็นข้อกำหนดและ **Prompt Template** สำหรับนำไปใช้สั่งงาน Qwen เพื่อให้ผลลัพธ์ที่ได้เข้ากับระบบเว็บนี้ได้ทันที 100% โดยไม่ทำให้ระบบเดิมพัง

---

## 1. กฎเหล็กสำหรับ Qwen (Strict Rules)

1. **ห้ามแตะต้องโครงสร้างหลัก:** ห้ามแก้ไข `App.tsx`, `router.tsx`, `global.css` หรือลบไฟล์เดิมในระบบ
2. **สร้างเฉพาะสิ่งใหม่:** ให้ Qwen ส่งออกเฉพาะ "เนื้อหาบทเรียนใหม่ (Chapter Data File)" หรือ "แบบจำลองใหม่ (Simulation Module)"
3. **การแยกส่วน CSS:**
   * หากเป็น React Component **ต้องใช้ CSS Modules เท่านั้น** (`*.module.css`) ห้ามใช้ Global Class ที่อาจไปชนกับหน้าเว็บหลัก
   * หากเป็น HTML เดี่ยว **ต้องบรรจุสไตล์ไว้ในแท็ก `<style>` ภายในไฟล์นั้นเท่านั้น**
4. **การ Cleanup ทรัพยากร:** หากมีการใช้ `setInterval`, `setTimeout`, `addEventListener` หรือ `requestAnimationFrame` จะต้องมีคำสั่ง Cleanup คืนหน่วยความจำเสมอ
5. **ห้ามใช้ Global Variable:** ห้ามประกาศตัวแปรใน `window.*` เว้นแต่การสื่อสารผ่าน `window.parent.postMessage`

---

## 2. โครงสร้าง Props สำหรับ React Component จาก Qwen

หากให้ Qwen สร้าง React Component ตัว Component ต้องรับ Props ตามนี้:

```typescript
export interface QwenReactModuleProps {
  subjectId: string;
  chapterId: string;
  theme?: 'light' | 'dark';
  onProgress?: (percent: number) => void;
  onComplete?: () => void;
  initialParams?: Record<string, unknown>;
}
```

---

## 3. Checklist ตรวจสอบโค้ดก่อนนำเข้าโปรเจกต์

- [ ] ไม่มีการเขียนทับ `App.tsx` หรือ `router.tsx`
- [ ] มีการ Export Component เป็น `default`
- [ ] ใช้ CSS Modules หรือสไตล์แบบ Scoped
- [ ] มี Cleanup Function ใน `useEffect`
- [ ] สำหรับ Single-File HTML มีฟังก์ชันส่ง `QWEN_MODULE_RESIZE` ผ่าน `window.parent.postMessage`

---

## 4. Prompt Template สำหรับสั่ง Qwen

คุณสามารถคัดลอกข้อความด้านล่างนี้ไปสั่ง Qwen ได้ทันที:

### เทมเพลต A: สั่ง Qwen สร้าง "แบบจำลอง Interactive แบบ Single-File HTML" (แนะนำที่สุด!)

```text
คุณคือ Senior Interactive Simulation Developer
เป้าหมาย: สร้างแบบจำลอง Interactive สำหรับเรื่อง [ใส่หัวข้อ เช่น: การหักเหของแสง / วงจรอิเล็กทรอนิกส์]
ข้อกำหนดทางเทคนิค:
1. เขียนเป็น Single-File HTML ไฟล์เดียวที่มีทั้ง HTML, CSS และ JavaScript ในไฟล์เดียวกัน
2. มีหน้าตาที่ทันสมัย สวยงาม มี Slider/ปุ่มให้ผู้ใช้ปรับค่าและเห็นผลลัพธ์แบบเรียลไทม์
3. มีคำอธิบายและสูตรที่เกี่ยวข้อง
4. รองรับ Responsive ทั้งบนจอมือถือและคอมพิวเตอร์
5. รองรับทั้ง Light Mode และ Dark Mode ผ่าน @media (prefers-color-scheme: dark)
6. ที่ส่วนท้ายของสคริปต์ ให้ใส่ฟังก์ชันนี้เพื่อส่งขนาดความสูงไปยัง Parent Window:
   function sendHeight() {
     window.parent.postMessage({
       type: 'QWEN_MODULE_RESIZE',
       height: document.body.scrollHeight + 40
     }, '*');
   }
   window.addEventListener('load', sendHeight);
   window.addEventListener('resize', sendHeight);
7. ส่งออกโค้ดเป็นไฟล์ index.html สมบูรณ์เพียงไฟล์เดียว ห้ามสร้างไฟล์อื่น
```

---

### เทมเพลต B: สั่ง Qwen สร้าง "ไฟล์ข้อมูลบทเรียนใหม่ (Chapter Schema)"

```text
คุณคือ Curriculum Architect และ Front-End Content Designer
เป้าหมาย: สร้างเนื้อหาสรุปบทเรียนวิชา [ใส่วิชา เช่น: ฟิสิกส์] เรื่อง [ใส่ชื่อบท เช่น: ไฟฟ้ากระแสตรง]
ข้อกำหนดทางเทคนิค:
1. สร้างเป็นไฟล์ TypeScript (.ts) สำหรับระบบ Lesson Summary Hub โดยใช้ Schema ต่อไปนี้:

import type { Chapter } from '../../../../types/content';

export const myChapter: Chapter = {
  id: '[รหัสบทภาษาอังกฤษ เช่น: direct-current]',
  subjectId: '[รหัสวิชา เช่น: physics]',
  title: '[ชื่อบทภาษาไทย]',
  description: '[คำอธิบายสรุป 1-2 ประโยค]',
  order: [ลำดับที่],
  estimatedReadingMinutes: [เวลาอ่านโดยประมาณ เช่น: 8],
  tags: ['[แท็ก1]', '[แท็ก2]'],
  objectives: [
    '[วัตถุประสงค์ข้อที่ 1]',
    '[วัตถุประสงค์ข้อที่ 2]',
  ],
  sections: [
    // สามารถใช้ Section Type เหล่านี้ได้:
    // 'paragraph', 'heading', 'formula', 'callout', 'table', 'example', 'key-points', 'quiz'
  ],
  updatedAt: '2026-09-21',
};

export default myChapter;

2. เนื้อหาต้องเข้มข้น มีทั้งการอธิบาย มโนทัศน์ สูตรในรูปแบบ LaTeX และแบบทดสอบ Quiz 2-3 ข้อท้ายบท
3. ส่งออกเฉพาะโค้ดของไฟล์บทเรียนนี้เท่านั้น ห้ามสร้างไฟล์อื่น และห้ามแก้ระบบหลัก
```
