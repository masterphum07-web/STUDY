import type { Chapter } from '../../../../types/content';

export const geneticsDnaChapter: Chapter = {
  id: 'genetics-dna',
  subjectId: 'biology',
  title: 'สารพันธุกรรม DNA และกฎของเมนเดล (Genetics & DNA)',
  description: 'โครงสร้างเกลียวคู่ของ DNA การจับคู่เบสที่สมมูลกัน และกฎการถ่ายทอดลักษณะทางพันธุกรรมของเมนเดล',
  order: 2,
  estimatedReadingMinutes: 8,
  tags: ['ชีววิทยา ม.ปลาย', 'พันธุศาสตร์', 'DNA', 'เมนเดล', 'จีโนไทป์', 'ฟีโนไทป์'],
  objectives: [
    'อธิบายโครงสร้างเบื้องต้นของ DNA และการจับคู่เบสไนโตรเจนัสได้',
    'เข้าใจกฎแห่งการแยกตัวและกฎแห่งการรวมกลุ่มอย่างอิสระของเมนเดล',
    'เขียนตารางพุนเน็ตต์ (Punnett Square) คำนวณอัตราส่วนจีโนไทป์และฟีโนไทป์ได้',
  ],
  sections: [
    {
      id: 'sec-intro',
      heading: '1. โครงสร้างของ DNA (Deoxyribonucleic Acid)',
      type: 'paragraph',
      content:
        'DNA คือสารโมเลกุลขนาดใหญ่ที่ทำหน้าที่เก็บรหัสพันธุกรรมของสิ่งมีชีวิต ค้นพบโครงสร้างเป็นเกลียวคู่ (Double Helix) เวียนขวาโดย James Watson และ Francis Crick โดยหน่วยย่อยคือ "นิวคลีโอไทด์" ซึ่งประกอบด้วยน้ำตาลดีออกซีไรโบส หมู่ฟอสเฟต และเบสไนโตรเจนัส',
    },
    {
      id: 'sec-base-pairing',
      heading: '2. กฎการจับคู่เบสสมมูล (Complementary Base Pairing)',
      type: 'key-points',
      content: {
        title: 'การเข้าคู่กันของเบสไนโตรเจนด้วยพันธะไฮโดรเจน:',
        points: [
          'อะดีนีน (A) จับคู่กับ ไทมีน (T) ด้วยพันธะไฮโดรเจน 2 พันธะ (A = T)',
          'กวานีน (G) จับคู่กับ ไซโทซีน (C) ด้วยพันธะไฮโดรเจน 3 พันธะ (G ≡ C)',
          'กฎของชาร์กาฟฟ์ (Chargaff\'s rule): ปริมาณ A = T และ G = C เสมอ',
        ],
      },
    },
    {
      id: 'sec-punnett-table',
      heading: '3. การถ่ายทอดลักษณะตามกฎของเมนเดล (ตาราง Punnett Square)',
      type: 'table',
      content: {
        caption: 'ตัวอย่างการผสมตัวเองของเฮเทอโรไซกัส (Aa x Aa)',
        headers: ['เซลล์สืบพันธุ์', 'เซลล์ไข่ A (50%)', 'เซลล์ไข่ a (50%)'],
        rows: [
          ['สเปิร์ม A (50%)', 'AA (เด่นแท้ 25%)', 'Aa (เด่นทางพันธุกรรม 25%)'],
          ['สเปิร์ม a (50%)', 'Aa (เด่นทางพันธุกรรม 25%)', 'aa (ด้อยแท้ 25%)'],
        ],
      },
    },
    {
      id: 'sec-ratio-callout',
      type: 'callout',
      content: {
        variant: 'tip',
        title: 'อัตราส่วนทองคำที่ต้องจำ (Mendelian Ratios)',
        text: 'สำหรับการผสมแบบลักษณะเดียว (Monohybrid Cross) ระหว่างพันธุ์ทาง Aa x Aa จะได้อัตราส่วนจีโนไทป์ AA : Aa : aa = 1 : 2 : 1 และอัตราส่วนฟีโนไทป์ (ลักษณะเด่น : ด้อย) = 3 : 1 เสมอ',
      },
    },
    {
      id: 'sec-quiz',
      heading: '4. แบบทดสอบพันธุศาสตร์',
      type: 'quiz',
      content: {
        title: 'ทดสอบ: สารพันธุกรรมและพันธุศาสตร์เมนเดล',
        description: 'เลือกคำตอบที่ถูกต้องที่สุด',
        questions: [
          {
            id: 'qg1',
            question: 'หากโมเลกุล DNA สายคู่มีเบส A อยู่ 30% จะมีเบส G อยู่กี่เปอร์เซ็นต์?',
            options: ['20%', '30%', '40%', '70%'],
            correctAnswerIndex: 0,
            explanation: 'ตามกฎชาร์กาฟฟ์ A = T = 30% รวมกันได้ 60% ดังนั้นส่วนที่เหลือ 40% ต้องเป็น G และ C เท่าๆ กัน จึงมีเบส G = 40% / 2 = 20%',
          },
        ],
      },
    },
  ],
  updatedAt: '2026-09-21',
};

export default geneticsDnaChapter;

