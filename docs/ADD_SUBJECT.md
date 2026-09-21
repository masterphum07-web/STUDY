# คู่มือการเพิ่มวิชาใหม่ (How to Add a New Subject)

ระบบถูกออกแบบด้วยสถาปัตยกรรม **Data-Driven Central Registry** ทำให้การเพิ่มวิชาใหม่ทำได้อย่างง่ายดายและปลอดภัย 100% โดย **ไม่ต้องแก้ไข `App.tsx` หรือ Router หลัก** เลยแม้แต่น้อย

---

## ขั้นตอนการเพิ่มวิชาใหม่ใน 3 นาที

### 1. สร้างโฟลเดอร์และไฟล์นิยามวิชา
สร้างโฟลเดอร์ใหม่ภายใต้ `src/content/subjects/<subject-id>/` เช่น วิชาเคมี (`chemistry`):
```text
src/content/subjects/chemistry/
├── subject.ts
└── chapters/
```

### 2. กำหนดรายละเอียดของวิชาใน `subject.ts`
สร้างไฟล์ `src/content/subjects/chemistry/subject.ts`:
```typescript
import type { Subject } from '../../../types/content';

export const chemistrySubject: Subject = {
  id: 'chemistry',                        // Stable ID (ห้ามมีช่องว่าง ใช้ตัวพิมพ์เล็ก)
  title: 'เคมี (Chemistry)',              // ชื่อเต็มที่จะแสดงในหน้าเว็บ
  shortTitle: 'เคมี',                     // ชื่อย่อสำหรับ Badge และ Breadcrumb
  description: 'โครงสร้างอะตอม ตารางธาตุ พันธะเคมี และปฏิกิริยาเคมี',
  icon: 'FlaskConical',                   // ชื่อไอคอน (Lucide icon) เช่น Atom, Calculator, Dna, FlaskConical
  color: 'var(--subject-chemistry, #f59e0b)', // สีประจำวิชา
  bgGradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)', // Gradient การ์ด
  order: 4,                               // ลำดับการแสดงผลในหน้าแรก
  chapterIds: ['atomic-structure'],       // รายชื่อ ID ของบทเรียนในวิชานี้
};

export default chemistrySubject;
```

### 3. ลงทะเบียนวิชาใน Registry กลาง
เปิดไฟล์ `src/content/registry.ts`:
1. นำเข้า `chemistrySubject`:
   ```typescript
   import chemistrySubject from './subjects/chemistry/subject';
   ```
2. ใส่ลงในอาร์เรย์ `initialSubjects`:
   ```typescript
   const initialSubjects = [
     physicsSubject,
     mathematicsSubject,
     biologySubject,
     chemistrySubject, // <-- เพิ่มตรงนี้
   ];
   ```

---

## ผลลัพธ์
* วิชาใหม่จะปรากฏบน **หน้าแรก (HomePage)** โดยอัตโนมัติ พร้อมการ์ดสีประจำวิชาและแถบความคืบหน้า
* Route URL `http://localhost:5173/subject/chemistry` จะถูกสร้างขึ้นและเปิดได้ทันที
* ระบบค้นหา (Ctrl+K) จะค้นพบวิชานี้และบทเรียนภายในได้ทันที
