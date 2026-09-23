import type { Chapter } from '../../../../types/content';

export const reproductiveAtlasChapter: Chapter = {
  id: 'pathology-reproductive-atlas',
  subjectId: 'pathology',
  title: 'คลังสรุปและสไลด์พยาธิวิทยาระบบสืบพันธุ์ 32 หัวข้อฉบับสมบูรณ์ (Pathology Interactive Reader & Atlas)',
  description:
    'คลังสื่อการสอนพยาธิวิทยาระบบสืบพันธุ์ ชาย-หญิง 32 Sections ฉบับเต็มจากอาจารย์ ดร.รัตนาวรรณ ทับเทศ พร้อมระบบค้นหา สไลด์ต้นฉบับ บันทึกบุ๊กมาร์ก และระบบวิเคราะห์เคส JEV AI',
  order: 3,
  estimatedReadingMinutes: 30,
  tags: [
    'พยาธิวิทยา',
    'Interactive Reader',
    'Disease of Reproductive System',
    'Atlas',
    'Histopathology',
    '32 Sections',
    'JEV AI',
  ],
  objectives: [
    'ทบทวนพยาธิวิทยาระบบสืบพันธุ์ทั้ง 32 หัวข้อหลักแบบ Interactive ครบทุกสไลด์',
    'ใช้งานระบบค้นหาคำสำคัญ บันทึกบุ๊กมาร์ก และตรวจสอบความก้าวหน้าการอ่านรายหัวข้อ',
    'ประยุกต์ใช้ความรู้ทางพยาธิสภาพร่วมกับ JEV AI System One ในการวิเคราะห์เคสผู้ป่วยจริง',
  ],
  sections: [
    {
      id: 'sec-atlas-intro',
      heading: '1. คลังบทเรียนพยาธิวิทยาฉบับเต็ม 32 หัวข้อ (Disease of Reproductive System Full Suite)',
      type: 'paragraph',
      content:
        'คลังสื่อการเรียนรู้นี้ประมวลผลจากเอกสารคำสอนวิชาพยาธิวิทยาเรื่อง "Disease of reproductive system" โดย Dr. Rattanawan Thubthed, Ph.D ครอบคลุม 121 สไลด์ต้นฉบับ แบ่งออกเป็น 32 หมวดหมู่ย่อยอย่างสมบูรณ์แบบ รองรับการปรับขนาดตัวอักษร สลับธีมสีขาว/มืด/ซีเปีย และค้นหาดัชนีคำศัพท์ทางการแพทย์ได้ทันที',
    },
    {
      id: 'sec-atlas-qwen-app',
      heading: '2. แอพพลิเคชัน Interactive Pathology Reader (Qwen Suite เต็มจอ)',
      type: 'legacy-html',
      content: {
        modulePath: '/qwen-modules/pathology/reproductive/index.html',
        title: 'Disease of Reproductive System — Interactive Reader & Slide Atlas',
        description: '32 Sections, 121 Slides, Slide Navigator, Key Terms Glossary & Source Inspector',
        initialHeight: 900,
      },
    },
    {
      id: 'sec-atlas-sections-guide',
      heading: '3. ดัชนีสารบัญ 32 หัวข้อพยาธิวิทยา (Complete Pathology Topic Guide)',
      type: 'key-points',
      content: {
        title: 'โครงสร้างเนื้อหาทั้ง 32 หัวข้อในคลังบทเรียน',
        points: [
          'Section 01–05: Introduction, Male Reproductive Anatomy, Testicular Atrophy, Cryptorchidism, Orchitis & Epididymitis',
          'Section 06–10: Testicular Torsion, Hydrocele & Hematocele, Seminoma, Non-seminomatous Tumors, Prostate Gland Anatomy',
          'Section 11–15: Benign Prostatic Hyperplasia (BPH), Prostate Adenocarcinoma, Penis & Condyloma Acuminata, Syphilis & Genital Herpes, Gonorrhea & Chlamydia',
          'Section 16–20: Female Reproductive Organs Anatomy, Bartholin Gland Cyst, Cervical Intraepithelial Neoplasia (CIN), Endometritis & PID, Endometriosis & Adenomyosis',
          'Section 21–25: Endometrial Hyperplasia & Carcinoma, Leiomyoma (Uterine Fibroids), Genital Tuberculosis, Ectopic Pregnancy, Ovarian Cysts',
          'Section 26–32: Mature Cystic Teratoma (Dermoid Cyst), Breast Anatomy, Invasive Ductal Carcinoma, Desmoplastic Reaction, Peau d’orange & Final Clinical Summary',
        ],
      },
    },
  ],
  updatedAt: '2026-09-23',
};

export default reproductiveAtlasChapter;
