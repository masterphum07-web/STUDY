import type { Chapter } from '../../../../types/content';

export const quadraticFunctionsChapter: Chapter = {
  id: 'quadratic-functions',
  subjectId: 'mathematics',
  title: 'ฟังก์ชันกำลังสองและกราฟพาราโบลา (Quadratic Functions)',
  description: 'สมการพาราโบลา รูปแบบทั่วไป รูปแบบมาตรฐาน การหาจุดยอด แกนสมมาตร และตัวจำแนกคำตอบ (Discriminant)',
  order: 1,
  estimatedReadingMinutes: 8,
  tags: ['คณิตศาสตร์ ม.ปลาย', 'พีชคณิต', 'ฟังก์ชัน', 'กราฟพาราโบลา'],
  objectives: [
    'บอกลักษณะพาราโบลาหงายหรือคว่ำจากเครื่องหมายของสัมประสิทธิ์ a',
    'หาพิกัดจุดยอด (Vertex) และสมการแกนสมมาตรของฟังก์ชันกำลังสองได้',
    'ใช้ Discriminant D = b^2 - 4ac ในการบอกจำนวนรากของสมการ',
  ],
  simulationIds: ['quadratic-grapher'],
  sections: [
    {
      id: 'sec-intro',
      heading: '1. รูปแบบของฟังก์ชันกำลังสอง',
      type: 'paragraph',
      content:
        'ฟังก์ชันกำลังสอง คือฟังก์ชันที่อยู่ในรูป y = ax² + bx + c โดยที่ a, b, c เป็นจำนวนจริง และ a ≠ 0 กราฟของฟังก์ชันนี้จะมีลักษณะเป็นเส้นโค้งสมมาตรที่เรียกว่า "พาราโบลา" (Parabola)',
    },
    {
      id: 'sec-formulas',
      heading: '2. สูตรการแปลงรูปและหาจุดยอด',
      type: 'formula',
      content: {
        latex: 'y = a(x - h)^2 + k, \\quad h = -\\frac{b}{2a}, \\quad k = c - \\frac{b^2}{4a}',
        explanation: 'จุด (h, k) คือจุดยอด (Vertex) ของพาราโบลา และ x = h คือสมการแกนสมมาตร',
        variables: [
          { symbol: 'a', meaning: 'สัมประสิทธิ์นำ: ถ้า a > 0 หงาย (มีจุดต่ำสุด), ถ้า a < 0 คว่ำ (มีจุดสูงสุด)' },
          { symbol: '(h, k)', meaning: 'พิกัดจุดยอดของพาราโบลา' },
        ],
      },
    },
    {
      id: 'sec-sim-grapher',
      heading: '3. แบบจำลอง Interactive: ปรับค่าดูกราฟพาราโบลา',
      type: 'simulation',
      content: {
        simulationId: 'quadratic-grapher',
        title: 'แบบจำลองกราฟพาราโบลา',
        description: 'เลื่อนสไลเดอร์ปรับค่าสัมประสิทธิ์ a, b และ c เพื่อสังเกตจุดยอดและจุดตัดแกน x',
      },
    },
    {
      id: 'sec-discriminant',
      heading: '4. ตัวจำแนกคำตอบ (Discriminant)',
      type: 'key-points',
      content: {
        title: 'การวิเคราะห์จุดตัดแกน X ด้วย D = b² - 4ac:',
        points: [
          'D > 0: กราฟตัดแกน X จำนวน 2 จุด (สมการมี 2 คำตอบที่เป็นจำนวนจริง)',
          'D = 0: กราฟสัมผัสแกน X จำนวน 1 จุดที่จุดยอด (มีคำตอบเดียวเป็นรากซ้ำ)',
          'D < 0: กราฟไม่ตัดแกน X เลย (ไม่มีคำตอบที่เป็นจำนวนจริง)',
        ],
      },
    },
    {
      id: 'sec-example',
      heading: '5. ตัวอย่างการหาจุดยอด',
      type: 'example',
      content: {
        problem: 'กำหนดฟังก์ชัน f(x) = x² - 6x + 8 จงหาจุดยอด และจุดตัดแกน X',
        given: ['a = 1', 'b = -6', 'c = 8'],
        steps: [
          {
            stepNumber: 1,
            title: 'หาพิกัดจุดยอด (h, k)',
            explanation: 'h = -(-6) / (2 * 1) = 3 และ k = f(3) = 3² - 6(3) + 8 = 9 - 18 + 8 = -1 ดังนั้นจุดยอดคือ (3, -1)',
          },
          {
            stepNumber: 2,
            title: 'หาจุดตัดแกน X โดยให้ y = 0',
            explanation: 'x² - 6x + 8 = 0 แยกตัวประกอบได้ (x - 2)(x - 4) = 0 ดังนั้น x = 2 และ x = 4',
          },
        ],
        answer: 'จุดยอดคือ (3, -1) เป็นจุดต่ำสุด และตัดแกน X ที่ x = 2 และ x = 4',
      },
    },
    {
      id: 'sec-quiz',
      heading: '6. แบบทดสอบท้ายบท',
      type: 'quiz',
      content: {
        title: 'ทดสอบ: ฟังก์ชันกำลังสองและพาราโบลา',
        description: 'เลือกคำตอบที่ถูกต้องที่สุด',
        questions: [
          {
            id: 'qm1',
            question: 'ฟังก์ชัน y = -2(x - 3)² + 5 มีจุดยอดและลักษณะกราฟอย่างไร?',
            options: [
              'พาราโบลาหงาย จุดต่ำสุดอยู่ที่ (3, 5)',
              'พาราโบลาคว่ำ จุดสูงสุดอยู่ที่ (3, 5)',
              'พาราโบลาคว่ำ จุดสูงสุดอยู่ที่ (-3, 5)',
              'พาราโบลาหงาย จุดต่ำสุดอยู่ที่ (-3, 5)',
            ],
            correctAnswerIndex: 1,
            explanation: 'เนื่องจาก a = -2 (น้อยกว่า 0) กราฟจึงเป็นพาราโบลาคว่ำ และจากรูป y = a(x - h)² + k จุดยอด (h, k) คือ (3, 5)',
          },
        ],
      },
    },
  ],
  updatedAt: '2026-09-21',
};

export default quadraticFunctionsChapter;

