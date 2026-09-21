# คู่มือการเพิ่มบทเรียนใหม่ (How to Add a New Chapter)

ทุกบทเรียนในระบบจะถูกสร้างเป็นไฟล์แยกอิสระในโฟลเดอร์ `chapters/` ของวิชานั้นๆ โดยมี **Content Schema** คอยตรวจสอบความถูกต้อง ทำให้คุณสามารถนำข้อความ สูตร ตาราง หรือแบบจำลองมาวางได้เลยโดยไม่ทำให้บทอื่นพัง

---

## ขั้นตอนการสร้างบทใหม่

### 1. สร้างไฟล์บทเรียน
สร้างไฟล์ `.ts` ภายใต้ `src/content/subjects/<subjectId>/chapters/<chapterId>.ts`
ตัวอย่าง: `src/content/subjects/physics/chapters/energy-work.ts`

```typescript
import type { Chapter } from '../../../../types/content';

export const energyWorkChapter: Chapter = {
  id: 'energy-work',               // Stable ID (ห้ามมีช่องว่าง ใช้ตัวพิมพ์เล็ก)
  subjectId: 'physics',            // ID ของวิชาต้นสังกัด
  title: 'งานและพลังงาน (Work and Energy)',
  description: 'สรุปนิยามของงาน พลังงานจลน์ พลังงานศักย์ และกฎการอนุรักษ์พลังงาน',
  order: 3,                        // ลำดับที่ของบทในวิชานั้น
  estimatedReadingMinutes: 7,      // เวลาอ่านโดยประมาณ
  tags: ['ฟิสิกส์ ม.ปลาย', 'กลศาสตร์', 'งานและพลังงาน'],
  objectives: [
    'คำนวณหางานจากแรงคงที่ W = F * s * cos(theta)',
    'เข้าใจความสัมพันธ์ระหว่างงานและพลังงานจลน์',
  ],
  sections: [
    // 1. หัวข้อและย่อหน้า
    {
      id: 'sec-work-intro',
      heading: '1. นิยามของงานในทางฟิสิกส์',
      type: 'paragraph',
      content: 'งาน (Work) ในทางฟิสิกส์จะเกิดขึ้นเมื่อมีแรงมากระทำต่อวัตถุแล้วทำให้วัตถุเคลื่อนที่ตามแนวแรง...',
    },

    // 2. สูตรคณิตศาสตร์ (KaTeX LaTeX)
    {
      id: 'sec-work-formula',
      heading: '2. สูตรการคำนวณงาน',
      type: 'formula',
      content: {
        latex: 'W = \\vec{F} \\cdot \\vec{s} = F s \\cos(\\theta)',
        explanation: 'เมื่อ F คือแรง s คือการกระจัด และ theta คือมุมระหว่างแรงกับการกระจัด',
      },
    },

    // 3. กล่องความรู้ / ข้อควรระวัง (Callout)
    {
      id: 'sec-work-callout',
      type: 'callout',
      content: {
        variant: 'warning', // 'info' | 'tip' | 'warning' | 'danger'
        title: 'ข้อควรระวังเรื่องทิศทาง',
        text: 'ถ้าแรงตั้งฉากกับการกระจัด (theta = 90 องศา เช่น แบกของเดินในแนวราบ) งานของแรงนั้นจะมีค่าเป็น 0 จูลเสมอ!',
      },
    },

    // 4. ตารางเปรียบเทียบ (Table)
    {
      id: 'sec-energy-table',
      heading: '3. รูปแบบของพลังงานกล',
      type: 'table',
      content: {
        caption: 'ตารางสรุปพลังงานกล',
        headers: ['ประเภทพลังงาน', 'สมการ', 'ปัจจัยที่มีผล'],
        rows: [
          ['พลังงานจลน์ (Ek)', 'Ek = (1/2) * m * v^2', 'มวล (m) และความเร็ว (v)'],
          ['พลังงานศักย์โน้มถ่วง (Ep)', 'Ep = m * g * h', 'มวล (m) และระดับความสูง (h)'],
        ],
      },
    },

    // 5. แบบทดสอบท้ายบท (Quiz)
    {
      id: 'sec-quiz',
      heading: '4. แบบทดสอบวัดความเข้าใจ',
      type: 'quiz',
      content: {
        title: 'แบบทดสอบ: งานและพลังงาน',
        questions: [
          {
            id: 'q-work-1',
            question: 'การกระทำใดต่อไปนี้ "ไม่เกิดงาน" ในทางฟิสิกส์?',
            options: [
              'ผลักกล่องให้ไถลไปตามพื้น',
              'แบกกระเป๋าหนัก 5 kg ยืนนิ่งๆ รอรถเมล์',
              'ยกของขึ้นบันได 10 ขั้น',
              'ลูกมะพร้าวตกจากต้นลงสู่พื้น',
            ],
            correctAnswerIndex: 1,
            explanation: 'การยืนนิ่งๆ ไม่มีการกระจัด (s = 0) ดังนั้น W = F * 0 = 0 จูล จึงไม่เกิดงาน',
          },
        ],
      },
    },
  ],
  updatedAt: '2026-09-21',
};

export default energyWorkChapter;
```

### 2. นำ ID ไปใส่ในไฟล์วิชา (`subject.ts`)
เปิด `src/content/subjects/physics/subject.ts`:
```typescript
chapterIds: ['projectile-motion', 'newton-laws', 'energy-work'], // เพิ่ม ID
```

### 3. ลงทะเบียนใน Registry กลาง
เปิด `src/content/registry.ts`:
```typescript
import energyWorkChapter from './subjects/physics/chapters/energy-work';

const initialChapters = [
  ...
  energyWorkChapter,
];
```

---

## ตรวจสอบผลลัพธ์
* URL: `http://localhost:5173/chapter/physics/energy-work` จะเปิดได้ทันที
* สารบัญในบท (Table of Contents) ด้านขวาจะสร้างหัวข้อให้อัตโนมัติ
* ระบบ Progress, Bookmark, และ Search (Ctrl+K) จะรองรับบทใหม่ทันที!
