import type { Chapter } from '../../../../types/content';

export const trigonometryChapter: Chapter = {
  id: 'trigonometry',
  subjectId: 'mathematics',
  title: 'อัตราส่วนตรีโกณมิติและเอกลักษณ์ (Trigonometry Fundamentals)',
  description: 'สรุปอัตราส่วนตรีโกณมิติพื้นฐาน ตารางค่ามุมยอดฮิต และเอกลักษณ์ตรีโกณมิติที่ใช้สอบบ่อยที่สุด',
  order: 2,
  estimatedReadingMinutes: 7,
  tags: ['คณิตศาสตร์ ม.ปลาย', 'ตรีโกณมิติ', 'มุม', 'สูตรเอกลักษณ์'],
  objectives: [
    'จำอัตราส่วน ข้าม/ฉาก, ชิด/ฉาก, ข้าม/ชิด ได้แม่นยำ',
    'จำค่าฟังก์ชันตรีโกณมิติของมุมมาตรฐาน 0, 30, 45, 60, 90 องศาได้',
    'นำเอกลักษณ์ตรีโกณมิติไปประยุกต์จัดรูปสมการได้',
  ],
  sections: [
    {
      id: 'sec-intro',
      heading: '1. อัตราส่วนตรีโกณมิติในสามเหลี่ยมมุมฉาก',
      type: 'paragraph',
      content:
        'ตรีโกณมิติ คือการศึกษาความสัมพันธ์ระหว่างด้านและมุมของรูปสามเหลี่ยม โดยมีอัตราส่วนหลัก 3 ตัวที่ทุกคนต้องจำได้ขึ้นใจ ได้แก่ ไซน์ (Sine), โคไซน์ (Cosine) และแทนเจนต์ (Tangent)',
    },
    {
      id: 'sec-definition-formula',
      heading: '2. นิยามอัตราส่วนตรีโกณมิติ',
      type: 'formula',
      content: {
        latex: '\\sin(\\theta) = \\frac{\\text{ข้าม}}{\\text{ฉาก}}, \\quad \\cos(\\theta) = \\frac{\\text{ชิด}}{\\text{ฉาก}}, \\quad \\tan(\\theta) = \\frac{\\text{ข้าม}}{\\text{ชิด}} = \\frac{\\sin(\\theta)}{\\cos(\\theta)}',
        explanation: 'ด้านข้าม = ด้านตรงข้ามมุม theta, ด้านประชิด = ด้านประชิดมุม theta, ด้านฉาก = ด้านตรงข้ามมุมฉาก',
      },
    },
    {
      id: 'sec-angle-table',
      heading: '3. ตารางค่ามุมมาตรฐานที่ออกสอบบ่อยที่สุด',
      type: 'table',
      content: {
        caption: 'ตารางค่ามุมมาตรฐาน 0° ถึง 90°',
        headers: ['ฟังก์ชัน', '0° (0 rad)', '30° (pi/6)', '45° (pi/4)', '60° (pi/3)', '90° (pi/2)'],
        rows: [
          ['sin(θ)', '0', '1/2', '√2 / 2', '√3 / 2', '1'],
          ['cos(θ)', '1', '√3 / 2', '√2 / 2', '1/2', '0'],
          ['tan(θ)', '0', '1 / √3', '1', '√3', 'หาค่าไม่ได้ (Infinity)'],
        ],
      },
    },
    {
      id: 'sec-identities',
      heading: '4. เอกลักษณ์ตรีโกณมิติพื้นฐาน (Pythagorean Identity)',
      type: 'formula',
      content: {
        latex: '\\sin^2(\\theta) + \\cos^2(\\theta) = 1, \\quad 1 + \\tan^2(\\theta) = \\sec^2(\\theta)',
        explanation: 'เอกลักษณ์นี้เป็นจริงสำหรับทุกค่ามุม theta ซึ่งต่อยอดมาจากทฤษฎีบทพีทาโกรัส a² + b² = c²',
      },
    },
    {
      id: 'sec-callout-trick',
      type: 'callout',
      content: {
        variant: 'tip',
        title: 'เทคนิคการจำด้วยนิ้วมือซ้าย',
        text: 'กางมือซ้าย หงายฝ่ามือเข้าหาตัวเอง นิ้วโป้ง=0°, ชี้=30°, กลาง=45°, นาง=60°, ก้อย=90° เมื่อต้องการหามุมใด ให้พับนิ้วนั้น ค่า sin = √(นิ้วด้านซ้าย)/2 และค่า cos = √(นิ้วด้านขวา)/2',
      },
    },
    {
      id: 'sec-quiz',
      heading: '5. แบบทดสอบวัดความจำค่ามุม',
      type: 'quiz',
      content: {
        title: 'ทดสอบ: อัตราส่วนตรีโกณมิติ',
        description: 'เลือกคำตอบที่ถูกต้องที่สุด',
        questions: [
          {
            id: 'qt1',
            question: 'ค่าของ sin(30°) + cos(60°) มีค่าเท่าใด?',
            options: ['0', '1/2', '1', '√3'],
            correctAnswerIndex: 2,
            explanation: 'sin(30°) = 1/2 และ cos(60°) = 1/2 ดังนั้น 1/2 + 1/2 = 1',
          },
        ],
      },
    },
  ],
  updatedAt: '2026-09-21',
};

export default trigonometryChapter;

