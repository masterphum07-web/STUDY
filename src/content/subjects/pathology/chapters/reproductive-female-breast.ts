import type { Chapter } from '../../../../types/content';

export const reproductiveFemaleBreastChapter: Chapter = {
  id: 'pathology-reproductive-female-breast',
  subjectId: 'pathology',
  title: 'พยาธิวิทยาระบบสืบพันธุ์เพศหญิงและเต้านม (Female Reproductive & Breast Pathology)',
  description:
    'ศึกษาพยาธิสภาพมดลูก ปากมดลูก รังไข่ และเต้านม: เนื้องอก Leiomyoma, ช็อกโกแลตซีสต์ Endometriosis, ท้องนอกมดลูก Ectopic Pregnancy และมะเร็งเต้านม พร้อมโมเดล 3D แบบโต้ตอบได้และ JEV AI',
  order: 2,
  estimatedReadingMinutes: 24,
  tags: [
    'พยาธิวิทยา',
    'Female Reproductive',
    'Leiomyoma',
    'Endometriosis',
    'Ectopic Pregnancy',
    'Dermoid Cyst',
    'Breast Cancer',
    '3D Model',
    'JEV AI',
  ],
  objectives: [
    'อธิบายพยาธิกำเนิดของเนื้องอกกล้ามเนื้อมดลูก (Leiomyoma) และลักษณะชิ้นเนื้อ Spindle-shaped cells ใน Fascicular pattern',
    'วิเคราะห์ความแตกต่างระหว่าง Endometriosis (ช็อกโกแลตซีสต์) และ Adenomyosis',
    'ประเมินความเสี่ยงและภาวะฉุกเฉินของการตั้งครรภ์นอกมดลูก (Ectopic Tubal Pregnancy)',
    'จำแนกประเภทถุงน้ำรังไข่ (Functional cyst vs Dermoid cyst / Mature teratoma)',
    'เข้าใจพยาธิสภาพของ Invasive Ductal Carcinoma (IDC) ของเต้านม, Desmoplastic reaction และอาการ Peau d’orange',
  ],
  sections: [
    {
      id: 'sec-female-intro',
      heading: '1. ภาพรวมพยาธิสภาพของระบบสืบพันธุ์เพศหญิง (Overview of Female Genital Tract)',
      type: 'paragraph',
      content:
        'ระบบสืบพันธุ์เพศหญิงประกอบด้วย อวัยวะเพศภายนอก (Vulva), ช่องคลอด (Vagina), ปากมดลูก (Cervix), มดลูก (Uterus), ปีกมดลูกและท่อนำไข่ (Fallopian tubes) และรังไข่ (Ovaries) ความผิดปกติทางพยาธิวิทยามีตั้งแต่การติดเชื้อเรื้อรัง (Pelvic Inflammatory Disease: PID) ที่อาจนำไปสู่พังผืดและภาวะมีบุตรยาก ไปจนถึงเนื้องอกกล้ามเนื้อเรียบ (Leiomyoma), ภาวะเยื่อบุโพรงมดลูกเจริญผิดที่ (Endometriosis), ภาวะตั้งครรภ์นอกมดลูก และมะเร็งปากมดลูก/เยื่อบุโพรงมดลูก/เต้านม',
    },
    {
      id: 'sec-female-3d-model',
      heading: '2. แบบจำลอง 3D กายวิภาคและรอยโรคพยาธิสภาพระบบสืบพันธุ์สตรี (Interactive 3D Female Pathology Model)',
      type: 'simulation',
      content: {
        simulationId: 'realistic-pathology-3d',
        title: 'Three.js 3D Procedural Pathology Sim — จำลองมดลูก รังไข่ และรอยโรคพยาธิสภาพสมจริง',
        description:
          'หมุนสำรวจ 360° รอยโรค Leiomyoma, ช็อกโกแลตซีสต์ Endometriosis, ท้องนอกมดลูกที่ท่อนำไข่, เดอร์มอยด์ซีสต์ และการผ่าตรวจหน้าตัด Cross-section',
      },
    },
    {
      id: 'sec-female-pathology-table',
      heading: '3. สรุปลักษณะมหภาคและจุลทรรศน์ของรอยโรคสำคัญ (Pathology Comparison Matrix)',
      type: 'table',
      content: {
        caption: 'ตารางเปรียบเทียบลักษณะทางพยาธิวิทยาของโรคระบบสืบพันธุ์สตรี',
        headers: ['ชื่อโรค (Disease)', 'ตำแหน่งเกิด (Location)', 'ลักษณะมหภาค (Gross)', 'ลักษณะจุลทรรศน์ (Microscopic)', 'อาการทางคลินิก (Clinical Presentation)'],
        rows: [
          [
            'Leiomyoma (Uterine Fibroid)',
            'Myometrium (Submucosal, Intramural, Subserosal)',
            'ก้อนกลมแน่น ผิวเรียบ ขอบเขตชัด หน้าตัดสีขาวอมชมพู ลายเกลียวคล้ายก้นหอย (Whorled appearance)',
            'เซลล์กล้ามเนื้อเรียบรูปกระสวย (Spindle-shaped cells) เรียงขนานเป็นมัด (Fascicular growth pattern) ไม่มี nuclear atypia',
            'ประจำเดือนมามาก (Menorrhagia), เลือดออกกะปริบกะปรอย, ปวดท้องน้อย, คลำพบก้อน',
          ],
          [
            'Endometriosis',
            'รังไข่, ท่อนำไข่, Pouch of Douglas, ผนังช่องท้อง',
            'ถุงน้ำสีน้ำตาลเข้มคล้ายช็อกโกแลตเหลว (Chocolate cyst / Endometrioma) หรือจุดสีสนิมดำ',
            'พบ Endometrial glands + Endometrial stroma ร่วมกับ Hemosiderin-laden macrophages อยู่นอกโพรงมดลูก',
            'ปวดประจำเดือนรุนแรง (Severe dysmenorrhea), ปวดขณะมีเพศสัมพันธ์ (Dyspareunia), ภาวะมีบุตรยาก',
          ],
          [
            'Ectopic Pregnancy',
            'ท่อนำไข่บริเวณ Ampulla (~80-90%)',
            'ท่อนำไข่บวมโป่งตึง ผนังบาง มี Gestational sac, Foetus และลิ่มเลือดอุดตัน',
            'พบ Chorionic villi, Trophoblastic tissue และ Decidualized stromal cells ในท่อนำไข่',
            'ขาดประจำเดือน (Amenorrhea), ปวดท้องน้อยเฉียบพลันข้างเดียว, เลือดออกทางช่องคลอด, ช็อกหากท่อแตก',
          ],
          [
            'Dermoid Cyst (Mature Teratoma)',
            'รังไข่ (Ovary)',
            'ถุงซีสต์ผนังหนา ภายในบรรจุไขมันเหลว เส้นผม ฟัน กระดูก หรือกระดูกอ่อน',
            'เนื้อเยื่อเจริญเต็มที่จาก Germ layers ทั้ง 3 ชั้น: Ectoderm (ผิวหนัง ขน), Mesoderm (ไขมัน กระดูก), Endoderm (เยื่อเมือกทางเดินหายใจ/อาหาร)',
            'มักไม่มีอาการ หรือคลำพบก้อน มีความเสี่ยงต่อการเกิด Ovarian torsion (บิดขั้ว)',
          ],
          [
            'Invasive Ductal Carcinoma (IDC)',
            'เต้านม (Breast)',
            'ก้อนเนื้อแข็ง ขอบเขตไม่เรียบ แทรกซึม (Infiltrative) ผิวหนังบุ๋มหรือคล้ายเปลือกส้ม (Peau d’orange)',
            'เซลล์มะเร็งเรียงตัวเป็นท่อ (Tubular pattern) ล้อมรอบด้วย Desmoplastic reaction (พังผืดหนาแน่นสะท้อนการต่อต้าน)',
            'คลำพบก้อนแข็งที่เต้านม ดึงรั้งหัวนมบุ๋ม หรือมีเลือดออกทางหัวนม',
          ],
        ],
      },
    },
    {
      id: 'sec-female-breast',
      heading: '4. พยาธิสภาพของมะเร็งเต้านม: Invasive Ductal Carcinoma',
      type: 'key-points',
      content: {
        title: 'หัวใจสำคัญทางพยาธิวิทยาของมะเร็งเต้านมชนิดลุกลาม',
        points: [
          'Infiltrative Growth Pattern: เซลล์มะเร็งแทรกซึมทำลายสถาปัตยกรรมของเนื้อเยื่อเต้านมเดิม และลุกลามเข้าสู่เนื้อเยื่อไขมันและผนังหน้าอก',
          'Desmoplastic Stroma Reaction: การที่เนื้อเยื่อรอบเซลล์มะเร็งสร้างคอลลาเจนและไฟโบรบลาสต์อย่างหนาแน่น ทำให้ก้อนแข็งตัวมาก (Scirrhous consistency)',
          'Peau d’orange Mechanism: เกิดจากการที่เซลล์มะเร็งอุดตันในท่อน้ำเหลืองบริเวณใต้ผิวหนัง (Dermal lymphatic obstruction) ทำให้ผิวหนังบวมและมีรูขุมขนบุ๋มคล้ายผิวเปลือกส้ม',
          'Estrogen / Progesterone / HER2 Receptors: เป็นตัวกำหนดชนิดย่อยและแนวทางการรักษา (Luminal A, Luminal B, HER2-enriched, Triple-negative)',
        ],
      },
    },
    {
      id: 'sec-female-jev-evaluator',
      heading: '5. JEV AI Pathology Case Evaluator: ตรวจวินิจฉัยเคสพยาธิวิทยาเพศหญิง (80% Clinical AI Engine)',
      type: 'simulation',
      content: {
        simulationId: 'jev-pathology-examiner',
        title: 'TypeSafe JEV 1.13 — ระบบตรวจและวิเคราะห์เคสพยาธิวิทยาทางนรีเวช',
        initialParams: { defaultCaseIndex: 0 },
      },
    },
    {
      id: 'sec-female-qwen-reader',
      heading: '6. สไลด์และเนื้อหาฉบับเต็ม: Female Reproductive & Breast Pathology (Qwen Reader)',
      type: 'legacy-html',
      content: {
        modulePath: '/qwen-modules/pathology/reproductive/index.html',
        title: 'พยาธิวิทยาระบบสืบพันธุ์หญิงและเต้านม — Interactive Lecture Reader',
        description: 'อ่านเนื้อหาสไลด์ 46–121 ปากมดลูก มดลูก ท่อนำไข่ รังไข่ ถุงน้ำ และมะเร็งเต้านม',
        initialHeight: 820,
      },
    },
  ],
  quiz: [
    {
      id: 'quiz-female-1',
      question: 'ลักษณะทางจุลพยาธิวิทยาที่จำเพาะเจาะจงของเนื้องอกมดลูก Leiomyoma คือข้อใด?',
      options: [
        'เซลล์กล้ามเนื้อเรียบรูปกระสวย (Spindle-shaped cells) เรียงตัวขนานกันเป็นมัด (Fascicular growth pattern)',
        'เซลล์เยื่อบุผิวมีลักษณะหลายนิวเคลียสและสร้าง Keratin pearls หนาแน่น',
        'พบ Schiller-Duval bodies ล้อมรอบหลอดเลือดฝอย',
        'พบ Signet ring cells ที่มีเมือกดันนิวเคลียสไปขอบเซลล์',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Leiomyoma เป็น Benign smooth muscle tumor ซึ่งตรวจพบ Spindle-shaped smooth muscle cells เรียงเป็นมัด (Fascicles) ขอบเขตชัดเจน และไม่มี mitotic figures มากผิดปกติ',
    },
    {
      id: 'quiz-female-2',
      question: 'ภาวะผิวหนังเต้านมมีลักษณะคล้ายเปลือกส้ม (Peau d’orange) ในมะเร็งเต้านม เกิดจากกลไกทางพยาธิสภาพใด?',
      options: [
        'การอุดตันของท่อน้ำนม (Lactiferous duct obstruction)',
        'การอุดตันของท่อน้ำเหลืองใต้ผิวหนังโดยเซลล์มะเร็ง (Dermal lymphatic obstruction)',
        'การเกิดแคลเซียมเกาะในเนื้อเยื่อไขมัน (Fat necrosis)',
        'การหดเกร็งของกล้ามเนื้อ Pectoralis major',
      ],
      correctAnswerIndex: 1,
      explanation:
        'Peau d’orange เกิดจากการที่เซลล์มะเร็งลุกลามเข้าไปอุดตันทางเดินน้ำเหลืองที่ผิวหนัง (Dermal lymphatics) ทำให้น้ำเหลืองคั่งบวมและรูขุมขนถูกดึงรั้งจนดูคล้ายผิวเปลือกส้ม',
    },
    {
      id: 'quiz-female-3',
      question: 'การตรวจพบเนื้อเยื่อผิวหนัง ขน ฟัน และกระดูกอ่อนภายในถุงน้ำรังไข่ สอดคล้องกับพยาธิสภาพของโรคใด?',
      options: ['Corpus luteum cyst', 'Endometrioma', 'Mature Cystic Teratoma (Dermoid Cyst)', 'Follicular cyst'],
      correctAnswerIndex: 2,
      explanation:
        'Dermoid cyst หรือ Mature cystic teratoma เป็นเนื้องอกกลุ่ม Germ cell tumor ที่พัฒนาเนื้อเยื่อสมบูรณ์มาจากเซลล์ต้นกำเนิดทั้ง 3 ชั้น (Ectoderm, Mesoderm, Endoderm)',
    },
  ],
  updatedAt: '2026-09-23',
};

export default reproductiveFemaleBreastChapter;
