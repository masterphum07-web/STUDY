import type { Chapter } from '../../../../types/content';

export const respiratoryPhysiologyChapter: Chapter = {
  id: 'respiratory-physiology',
  subjectId: 'physiology',
  title: 'สรีรวิทยาระบบทางเดินหายใจ (Respiratory Physiology — Physio-RS)',
  description:
    'สรุปสรีรวิทยาระบบหายใจเชิงลึก กลศาสตร์การหายใจ กฎของบอยล์ กราฟการแตกตัวของฮีโมโกลบิน และ 12 แบบจำลอง Interactive จาก Physio-RS',
  order: 1,
  estimatedReadingMinutes: 18,
  tags: [
    'สรีรวิทยา',
    'ระบบทางเดินหายใจ',
    'Physio-RS',
    'Boyle Law',
    'Spirometry',
    'Oxyhemoglobin',
    'Interactive Models',
  ],
  objectives: [
    'เข้าใจกลศาสตร์การหายใจเข้า-ออก และการเปลี่ยนแปลงของ Intrapleural Pressure (Pip) และ Alveolar Pressure (Palv)',
    'อธิบายความสำคัญของ Pulmonary Surfactant ตามกฎของ Laplace ในการป้องกันภาวะถุงลมแฟบ',
    'วิเคราะห์กราฟ Spirogram และจำแนกความแตกต่างระหว่าง Lung Volumes (TV, IRV, ERV, RV) และ Lung Capacities (VC, FRC, TLC)',
    'เข้าใจปัจจัยที่มีผลต่อการเลื่อนซ้าย-ขวาของ Oxyhemoglobin Dissociation Curve (Bohr Effect และ 2,3-BPG)',
  ],
  sections: [
    {
      id: 'sec-rs-intro',
      heading: '1. บทนำและโครงสร้างการทำงานของระบบทางเดินหายใจ (Organization of Respiratory System)',
      type: 'paragraph',
      content:
        'ระบบทางเดินหายใจแบ่งออกเป็น 2 โซนหลักตามหน้าที่: (1) Conducting Zone ตั้งแต่จมูกจนถึง Terminal bronchioles ทำหน้าที่เป็นทางผ่าน ปรับอุณหภูมิและความชื้น และกรองสิ่งแปลกปลอม (เกิด Anatomic dead space ~150 mL) และ (2) Respiratory Zone ตั้งแต่ Respiratory bronchioles จนถึง Alveoli ซึ่งเป็นบริเวณที่มีการแลกเปลี่ยนก๊าซออกซิเจนและคาร์บอนไดออกไซด์ผ่าน Respiratory membrane',
    },
    {
      id: 'sec-rs-qwen-sim',
      heading: '2. คลังแบบจำลอง Interactive ระบบหายใจ (Physio-RS 12 โมเดล)',
      type: 'legacy-html',
      content: {
        modulePath: '/qwen-modules/biology/physiostudy/index.html?file=rs',
        title: 'Physio-RS — แบบจำลองกลศาสตร์การหายใจและกราฟ Spirogram (Qwen Interactive Suite)',
        description:
          '12 แบบจำลองเชิงโต้ตอบ: กลศาสตร์ลูกสูบปอดตามกฎบอยล์, การทำงานของ Surfactant, กราฟ Spirometry สด, กราฟ Oxyhemoglobin ปรับค่า pH ได้แบบเรียลไทม์',
        initialHeight: 880,
      },
    },
    {
      id: 'sec-rs-mechanics',
      heading: '3. กลศาสตร์การหายใจและการเปลี่ยนแปลงความดัน (Mechanics of Breathing)',
      type: 'key-points',
      content: {
        title: 'สรุปหัวใจสำคัญของกลศาสตร์การหายใจ',
        points: [
          'กฎของบอยล์ (Boyle’s Law: P1V1 = P2V2): ที่อุณหภูมิคงที่ ความดันจะแปรผกผันกับปริมาตร',
          'Inspiration (หายใจเข้า): กะบังลมหดตัวต่ำลงและกล้ามเนื้อ External intercostal ยกซี่โครงขึ้น -> ปริมาตรช่องอกเพิ่ม -> Palv ลดลงเป็น -1 mmHg -> อากาศภายนอกไหลเข้าสู่ปอด',
          'Quiet Expiration (หายใจออกปกติ): กล้ามเนื้อคลายตัว ปอดหดตัวกลับด้วยแรง Elastic recoil -> ปริมาตรช่องอกลดลง -> Palv เพิ่มเป็น +1 mmHg -> ขับอากาศออกจากปอด (เป็น Passive process ไม่ต้องใช้พลังงาน)',
          'Intrapleural Pressure (Pip): ความดันในช่องเยื่อหุ้มปอดต้องมีค่าเป็นลบเสมอ (-4 ถึง -7 mmHg) เพื่อยึดเหนี่ยวให้ปอดขยายตัวตามผนังทรวงอก หากผนังทะลุ (Pneumothorax) Pip จะกลายเป็นศูนย์และปอดจะยุบตัวทันที',
          'กฎของลาปลาซ (Law of Laplace: P = 2T/r): ถุงลมขนาดเล็กมีแนวโน้มจะแฟบง่ายกว่าถุงลมใหญ่ แต่ร่างกายมี Pulmonary Surfactant (สร้างจาก Type II Alveolar cell) ช่วยลดแรงตึงผิวในถุงลมขนาดเล็ก ทำให้ถุงลมทุกขนาดคงรูปอยู่ได้',
        ],
      },
    },
    {
      id: 'sec-rs-formula',
      heading: '4. สูตรและสมการคำนวณทางสรีรวิทยาระบบหายใจ',
      type: 'formula',
      content: {
        latex: 'P_{tp} = P_{alv} - P_{ip} \\quad , \\quad V_A = RR \\times (V_T - V_D)',
        explanation:
          'สมการ Transpulmonary pressure และสมการคำนวณอัตราการระบายอากาศที่ถุงลมจริง (Alveolar ventilation)',
        variables: [
          { symbol: 'P_{tp}', meaning: 'Transpulmonary pressure (แรงดึงให้เนื้อปอดขยายตัว)', unit: 'mmHg' },
          { symbol: 'P_{alv}', meaning: 'Intra-alveolar pressure (ความดันในถุงลม)', unit: 'mmHg' },
          { symbol: 'P_{ip}', meaning: 'Intrapleural pressure (ความดันในช่องเยื่อหุ้มปอด)', unit: 'mmHg' },
          { symbol: 'V_A', meaning: 'Alveolar ventilation rate (อัตราการระบายอากาศที่ถุงลม)', unit: 'mL/min' },
          { symbol: 'V_T', meaning: 'Tidal volume (ปริมาตรหายใจเข้าออกปกติ ~500 mL)', unit: 'mL' },
          { symbol: 'V_D', meaning: 'Dead space volume (ปริมาตรในทางเดินหายใจส่วน Conducting zone ~150 mL)', unit: 'mL' },
          { symbol: 'RR', meaning: 'Respiratory rate (อัตราการหายใจ ~12-16 ครั้ง/นาที)', unit: 'ครั้ง/นาที' },
        ],
        displayMode: true,
      },
    },
    {
      id: 'sec-rs-oxy-curve',
      heading: '5. กราฟการแตกตัวของออกซีฮีโมโกลบิน และ Bohr Effect (Gas Transport)',
      type: 'key-points',
      content: {
        title: 'พฤติกรรมของกราฟ Oxyhemoglobin Dissociation Curve (Sigmoidal Curve)',
        points: [
          'Shift to the Right (กราฟเลื่อนขวา - ปล่อย O2 ง่ายขึ้น): เกิดเมื่อเนื้อเยื่อต้องการออกซิเจนสูง เช่น ขณะออกกำลังกาย -> pH ลดลง (เป็นกรด), PCO2 สูงขึ้น, อุณหภูมิสูงขึ้น, 2,3-BPG สูงขึ้น (เรียกว่า Bohr Effect)',
          'Shift to the Left (กราฟเลื่อนซ้าย - จับ O2 แน่นขึ้น): เกิดที่ปอดหรือสภาวะอุณหภูมิต่ำ -> pH สูงขึ้น (เป็นด่าง), PCO2 ลดลง, อุณหภูมิต่ำลง, 2,3-BPG ต่ำลง, หรือมี HbF (Fetal hemoglobin)',
          'Haldane Effect: การที่ Hb ปล่อย O2 จะเพิ่มความสามารถในการจับและขนส่ง CO2 และ H+ กลับไปยังปอด',
        ],
      },
    },
    {
      id: 'sec-rs-quiz',
      heading: '6. แบบทดสอบสรีรวิทยาระบบหายใจ (Physio-RS Quiz)',
      type: 'quiz',
      content: {
        title: 'ทดสอบความรู้: สรีรวิทยาระบบทางเดินหายใจ',
        description: 'เลือกคำตอบที่ถูกต้องที่สุดตามหลักการสรีรวิทยา',
        questions: [
          {
            id: 'rs-q1',
            question:
              'ในสภาวะหายใจเข้าปกติ (Quiet Inspiration) ความดันภายในช่องเยื่อหุ้มปอด (Intrapleural Pressure: Pip) จะเปลี่ยนแปลงไปในทิศทางใด?',
            options: [
              'มีความเป็นลบมากขึ้น (เช่น จาก -4 mmHg เป็น -7 mmHg)',
              'มีความเป็นบวกมากขึ้น (เช่น จาก -4 mmHg เป็น +2 mmHg)',
              'กลายเป็นศูนย์เท่ากับความดันบรรยากาศ',
              'ไม่เปลี่ยนแปลง มีค่าคงที่เสมอ',
            ],
            correctAnswerIndex: 0,
            explanation:
              'เมื่อกะบังลมหดตัวเคลื่อนลงล่างและทรวงอกขยาย ปริมาตรช่องเยื่อหุ้มปอดจะขยายออก ทำให้ Pip ยิ่งเป็นลบมากขึ้น (จากราว -4 เป็น -7 mmHg) ดึงให้เนื้อปอดขยายตาม',
          },
          {
            id: 'rs-q2',
            question:
              'สารลดแรงตึงผิวในปอด (Pulmonary Surfactant) ถูกหลั่งมาจากเซลล์ชนิดใด และมีหน้าที่หลักอย่างไร?',
            options: [
              'หลั่งจาก Type I alveolar cells ช่วยเพิ่มอัตราการแพร่ของก๊าซ',
              'หลั่งจาก Type II alveolar cells ช่วยลดแรงตึงผิวป้องกันถุงลมแฟบ',
              'หลั่งจาก Alveolar macrophages ช่วยดักจับเชื้อโรค',
              'หลั่งจาก Goblet cells ช่วยสร้างเมือกเคลือบท่อลม',
            ],
            correctAnswerIndex: 1,
            explanation:
              'Type II alveolar cells หลั่ง Surfactant (DPPC) เพื่อลด surface tension ตามกฎของ Laplace (P = 2T/r) ป้องกันไม่ให้ถุงลมขนาดเล็กแฟบเข้าหาถุงลมใหญ่',
          },
          {
            id: 'rs-q3',
            question:
              'สภาวะใดต่อไปนี้จะส่งผลให้กราฟ Oxyhemoglobin Dissociation Curve เกิดการเบี่ยงเบนไปทางขวา (Shift to the right)?',
            options: [
              'pH ในเลือดเพิ่มขึ้น (ด่าง) และอุณหภูมิลดลง',
              'ความเข้มข้นของ 2,3-BPG ลดลง',
              'PCO2 ในเนื้อเยื่อสูงขึ้น, pH ลดลง (กรด) และอุณหภูมิร่างกายสูงขึ้น',
              'การมีอยู่ของ Fetal hemoglobin (HbF)',
            ],
            correctAnswerIndex: 2,
            explanation:
              'การเพิ่มขึ้นของ PCO2, ความเป็นกรด (pH ต่ำ), อุณหภูมิ และ 2,3-BPG แสดงถึงสภาวะที่เนื้อเยื่อมี metabolism สูง กราฟจะเลื่อนไปทางขวา (Bohr Effect) เพื่อให้ Hb ปล่อย O2 ให้เซลล์ได้ง่ายขึ้น',
          },
        ],
      },
    },
  ],
  updatedAt: '2026-09-21',
};

export default respiratoryPhysiologyChapter;

