import type { Chapter } from '../../../../types/content';

export const physiologyRespiratoryGiChapter: Chapter = {
  id: 'physiology-respiratory-gi',
  subjectId: 'physiology',
  title: 'PhysioStudy: รวมคลังแบบจำลองและสรุปสรีรวิทยาครบวงจร (Complete Suite: RS & GI)',
  description:
    'คลังแบบจำลองสรีรวิทยาเต็มรูปแบบจาก Qwen รวมทั้งระบบหายใจและระบบทางเดินอาหาร 27 โมเดล สรุปภาพรวมและแบบทดสอบประเมินผลสัมฤทธิ์ทางการเรียนรู้',
  order: 3,
  estimatedReadingMinutes: 25,
  tags: [
    'สรีรวิทยา',
    'PhysioStudy',
    'RS & GI',
    'Interactive Models',
    'Spirometry',
    'Acid Secretion',
    'Qwen Suite',
  ],
  objectives: [
    'เปรียบเทียบการทำงานประสานกันระหว่างระบบหายใจและระบบทางเดินอาหารในการรักษาสมดุลกรด-ด่างและพลังงาน',
    'ทดลองใช้งานแบบจำลองจำลองสรีรวิทยาทั้ง 27 แบบจำลองเพื่อเห็นการเปลี่ยนแปลงทางพลศาสตร์แบบเรียลไทม์',
    'ทบทวนกลไกฮอร์โมนและสารสื่อประสาทสำคัญในการควบคุมระบบอวัยวะภายใน',
  ],
  sections: [
    {
      id: 'sec-all-intro',
      heading: '1. ภาพรวมสรีรวิทยาทางการแพทย์ (Medical Physiology Integration)',
      type: 'paragraph',
      content:
        'สรีรวิทยาทางการแพทย์เป็นศาสตร์ที่ศึกษาการทำงานของร่างกายในระดับโมเลกุล เซลล์ เนื้อเยื่อ และระบบอวัยวะ โดยระบบทางเดินหายใจและระบบทางเดินอาหารเป็นตัวอย่างที่ชัดเจนของการประสานงานเพื่อรักษาดุลยภาพของร่างกาย ทั้งในการควบคุมก๊าซในกระแสเลือด การรักษาสมดุลกรด-ด่าง (Acid-Base Balance) และการดูดซึมสารอาหารและอิเล็กโทรไลต์เพื่อสร้างพลังงาน',
    },
    {
      id: 'sec-all-qwen-suite',
      heading: '2. PhysioStudy คลังแบบจำลอง Interactive เต็มรูปแบบ 27 โมเดล (Qwen Suite)',
      type: 'legacy-html',
      content: {
        modulePath: '/qwen-modules/biology/physiostudy/index.html',
        title: 'PhysioStudy — คลังสรุปสรีรวิทยา + 27 แบบจำลอง Interactive จาก Qwen',
        description:
          'โมดูลแบบจำลองไฟล์เดียวจาก Qwen ครอบคลุมทั้งระบบทางเดินหายใจ (Physio-RS) และระบบทางเดินอาหาร (GI Tract) สามารถสลับไฟล์และทดลองโมเดลได้เต็มรูปแบบ',
        initialHeight: 880,
      },
    },
    {
      id: 'sec-all-summary-table',
      heading: '3. สรุปเปรียบเทียบกลไกการควบคุมของระบบ RS และ GI',
      type: 'table',
      content: {
        caption: 'เปรียบเทียบระบบประสาทและสารเคมีที่ควบคุมระบบหายใจและทางเดินอาหาร',
        headers: ['มิติการทำงาน', 'ระบบทางเดินหายใจ (RS)', 'ระบบทางเดินอาหาร (GI)'],
        rows: [
          [
            'ศูนย์ควบคุมระบบประสาทหลัก',
            'Medullary respiratory center & Pons (DRG, VRG, PRG)',
            'Enteric Nervous System (ENS) เชื่อมโยงกับ Vagus nerve',
          ],
          [
            'ผลของ Parasympathetic',
            'หลอดลมหดตัว (Bronchoconstriction), เพิ่มการหลั่งเมือก',
            'กระตุ้นการบีบตัว (Motility) และกระตุ้นการหลั่งเอนไซม์-กรด',
          ],
          [
            'ผลของ Sympathetic',
            'หลอดลมขยายตัว (Bronchodilation ผ่าน Beta-2 receptor)',
            'ยับยั้งการบีบตัวและลดการหลั่งสารคัดหลั่ง (Inhibition)',
          ],
          [
            'การรักษาดุลยภาพกรด-ด่าง',
            'ขับหรือกักเก็บ CO2 เพื่อปรับค่า H+ อย่างรวดเร็ว',
            'หลั่ง H+ ในกระเพาะและหลั่ง HCO3- ในลำไส้เล็กเพื่อสะเทินกรด',
          ],
        ],
      },
    },
    {
      id: 'sec-all-quiz',
      heading: '4. แบบทดสอบภาพรวมสรีรวิทยา',
      type: 'quiz',
      content: {
        title: 'ทดสอบความรู้: ภาพรวมสรีรวิทยาทางการแพทย์',
        description: 'เลือกคำตอบที่ถูกต้องที่สุดเพื่อประเมินความพร้อมในการสอบ',
        questions: [
          {
            id: 'all-q1',
            question:
              'เมื่อร่างกายมีภาวะกรดเกินจากกระบวนการเผาผลาญ (Metabolic Acidosis) เช่น กรดสะสมจากเบาหวาน (DKA) ระบบหายใจจะตอบสนองเพื่อชดเชย (Compensate) อย่างไร?',
            options: [
              'หายใจช้าลงและตื้นขึ้น เพื่อกักเก็บ CO2 ไว้ในกระแสเลือด',
              'หายใจเร็วและลึกขึ้น (Kussmaul breathing) เพื่อขับ CO2 ออกจากร่างกาย',
              'หยุดการหายใจชั่วขณะเพื่อเพิ่ม pH',
              'ลดอัตราการระบายอากาศที่ถุงลม (Alveolar ventilation)',
            ],
            correctAnswerIndex: 1,
            explanation:
              'Chemoreceptors ตรวจพบ H+ ที่สูงขึ้นในเลือด จะกระตุ้นศูนย์หายใจให้หายใจเร็วและลึก (Kussmaul breathing) เพื่อขับกรดระเหยได้คือ CO2 ออกจากปอด ช่วยยกระดับ pH เลือดให้กลับสู่ปกติ',
          },
          {
            id: 'all-q2',
            question:
              'สารลดแรงตึงผิว (Surfactant) ในระบบหายใจ และ เกลือน้ำดี (Bile salts) ในระบบทางเดินอาหาร มีคุณสมบัติทางเคมีกายภาพที่เหมือนกันในข้อใด?',
            options: [
              'เป็นสารที่มีคุณสมบัติ Amphipathic (มีทั้งขั้วที่ชอบน้ำและไม่ชอบน้ำ) ช่วยลดแรงตึงผิว',
              'สร้างมาจากเซลล์ชนิดเดียวกันคือ Hepatocytes',
              'เป็นเอนไซม์ย่อยโปรตีนกลุ่ม Protease ทั้งคู่',
              'ทำงานได้ดีที่สุดเฉพาะในสภาวะที่มี pH เป็นกรดจัดเท่านั้น',
            ],
            correctAnswerIndex: 0,
            explanation:
              'ทั้งคู่มีสมบัติเป็นสารลดแรงตึงผิว (Amphipathic molecules) โดย Surfactant ช่วยลดแรงตึงผิวของของเหลวในถุงลม ส่วน Bile salts ช่วยลดแรงตึงผิวของหยดไขมันเพื่อกระจายตัว (Emulsification) ให้เอนไซม์ Lipase ย่อยได้ง่าย',
          },
        ],
      },
    },
  ],
  updatedAt: '2026-09-21',
};

export default physiologyRespiratoryGiChapter;

