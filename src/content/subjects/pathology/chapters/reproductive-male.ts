import type { Chapter } from '../../../../types/content';

export const reproductiveMaleChapter: Chapter = {
  id: 'pathology-reproductive-male',
  subjectId: 'pathology',
  title: 'พยาธิวิทยาระบบสืบพันธุ์เพศชายและโรคติดต่อทางเพศสัมพันธ์ (Male Reproductive Pathology & STIs)',
  description:
    'สรุปพยาธิวิทยาระบบสืบพันธุ์ชาย อัณฑะไม่ลงถุง มะเร็งอัณฑะ Seminoma ต่อมลูกหมากโต BPH มะเร็งต่อมลูกหมาก และโรคติดต่อทางเพศสัมพันธ์ พร้อมระบบวินิจฉัยเคส JEV AI',
  order: 1,
  estimatedReadingMinutes: 20,
  tags: [
    'พยาธิวิทยา',
    'Male Reproductive',
    'Cryptorchidism',
    'Seminoma',
    'BPH',
    'Prostate Cancer',
    'STIs',
    'JEV AI',
  ],
  objectives: [
    'อธิบายกลไกและความเสี่ยงของภาวะอัณฑะไม่ลงถุง (Cryptorchidism) ต่อภาวะมีบุตรยากและมะเร็งลูกอัณฑะ',
    'จำแนกความแตกต่างทางพยาธิสภาพระหว่าง Seminoma และ Non-seminomatous germ cell tumors',
    'แยกความแตกต่างระหว่าง Benign Prostatic Hyperplasia (BPH) และ Prostate Adenocarcinoma ทั้งตำแหน่งที่เกิดและอาการทางคลินิก',
    'วินิจฉัยรอยโรคจากโรคติดต่อทางเพศสัมพันธ์ที่สำคัญ (Syphilis, Genital Herpes, Gonorrhea, Chlamydia)',
  ],
  sections: [
    {
      id: 'sec-male-intro',
      heading: '1. กายวิภาคและพยาธิสภาพพื้นฐานของอัณฑะและถุงอัณฑะ (Testicular Pathology)',
      type: 'paragraph',
      content:
        'ลูกอัณฑะ (Testes) ทำหน้าที่สร้างสเปิร์มและฮอร์โมนเทสโทสเตอโรน ภาวะผิดปกติแต่กำเนิดที่สำคัญคือ Cryptorchidism (อัณฑะไม่ลงถุงอัณฑะ) ซึ่งหากไม่ได้รับการรักษาภายในอายุ 1-2 ปี จะเกิด Tubular atrophy, Fibrosis และเพิ่มความเสี่ยงต่อการเกิดมะเร็งลูกอัณฑะ (Testicular cancer) สูงขึ้นถึง 3-5 เท่า นอกจากนี้ภาวะฉุกเฉินสำคัญคือ Testicular Torsion (การบิดขั้วอัณฑะ) ซึ่งขัดขวาง Venous drainage จนเกิด Hemorrhagic infarction ต้องได้รับการผ่าตัดคลายการบิดภายใน 6 ชั่วโมงเพื่อรักษาเนื้อเยื่ออัณฑะไว้',
    },
    {
      id: 'sec-male-tumors',
      heading: '2. เนื้องอกและมะเร็งลูกอัณฑะ (Testicular Neoplasms)',
      type: 'table',
      content: {
        caption: 'การเปรียบเทียบพยาธิสภาพของเนื้องอกกลุ่ม Germ Cell Tumors ของลูกอัณฑะ',
        headers: ['ชนิดของเนื้องอก (Tumor Type)', 'อายุที่พบบ่อย', 'ลักษณะมหภาค (Gross)', 'ลักษณะจุลทรรศน์ (Microscopic)', 'Tumor Markers'],
        rows: [
          [
            'Seminoma (พบบ่อยที่สุด ~50%)',
            '30–45 ปี',
            'ก้อนเนื้อแน่น สีเทาขาว-ชมพู ขอบเขตชัดเจน ไม่มี hemorrhage/necrosis ชัด',
            'เซลล์รูปหลายเหลี่ยม cytoplasm ใส (glycogen-rich) นิวเคลียสกลมโต กั้นด้วย fibrous septa ที่มี lymphocyte แทรก',
            'Placental alkaline phosphatase (PLAP), hCG ต่ำ (~10%)',
          ],
          [
            'Embryonal Carcinoma',
            '20–30 ปี',
            'ก้อนขอบเขตไม่ชัด มักพบ hemorrhage และ necrosis กว้างขวาง',
            'เซลล์มะเร็งขนาดใหญ่ เรียงตัวเป็นท่อ (tubular) หรือแผ่น (sheets) pleomorphism สูง mitotic figures มาก',
            'AFP และ hCG สูงในบางราย',
          ],
          [
            'Yolk Sac Tumor (Endodermal Sinus)',
            'ทารกและเด็กเล็ก (<3 ปี)',
            'ก้อนเนื้อนุ่ม สีเหลืองขาว มักมีเมือก (mucinous)',
            'พบ Schiller-Duval bodies (โครงสร้างคล้าย glomerulus ล้อมรอบ capillary)',
            'Serum AFP สูงอย่างมีนัยสำคัญ (>90%)',
          ],
          [
            'Choriocarcinoma',
            '20–30 ปี',
            'ก้อนขนาดเล็กมาก มักตรวจพบเมื่อมีการกระจายตัวไปไกลแล้ว เลือดออกรุนแรง',
            'Syncytiotrophoblast (เซลล์หลายนิวเคลียส) ร่วมกับ Cytotrophoblast รุกรานเส้นเลือดสูง',
            'Serum beta-hCG สูงมากเป็นพิเศษ',
          ],
        ],
      },
    },
    {
      id: 'sec-male-prostate',
      heading: '3. พยาธิสภาพของต่อมลูกหมาก: BPH เทียบกับ Prostate Adenocarcinoma',
      type: 'key-points',
      content: {
        title: 'จุดเปรียบเทียบสำคัญทางคลินิกและพยาธิวิทยาของต่อมลูกหมาก',
        points: [
          'Benign Prostatic Hyperplasia (BPH): เกิดการเจริญเกิน (Hyperplasia) ของเซลล์ต่อมและ stroma บริเวณ Transitional / Periurethral Zone ทำให้กดเบียดท่อปัสสาวะ เกิดอาการ LUTS (Hesitancy, Weak stream, Nocturia) เป็นภาวะที่ไม่ใช่มะเร็งและไม่กลายเป็นมะเร็ง',
          'Prostate Adenocarcinoma: มะเร็งต่อมลูกหมากมักเกิดบริเวณ Peripheral Zone (ด้านหลัง) จึงตรวจพบได้จากการตรวจทางทวารหนัก (Digital Rectal Examination: DRE) มักไม่ทำให้ปัสสาวะติดขัดในระยะแรก',
          'Gleason Grading System: ใช้จำแนกความรุนแรงของสถาปัตยกรรมต่อม (Grade 1 ถึง 5) และประเมิน Gleason Score (เช่น 3+4=7 หรือ 4+4=8)',
          'Prostate-Specific Antigen (PSA): สารคัดหลั่งจากเซลล์ต่อมลูกหมาก ค่าปกติ < 4 ng/mL หากเกิน 10 ng/mL ต้องสงสัยภาวะมะเร็งอย่างยิ่ง',
        ],
      },
    },
    {
      id: 'sec-male-sti',
      heading: '4. โรคติดต่อทางเพศสัมพันธ์ (Sexually Transmitted Infections — STIs)',
      type: 'callout',
      content: {
        variant: 'warning',
        title: 'รอยโรคแผลและหนองของอวัยวะสืบพันธุ์ที่ต้องแยกแยะ (Differential Diagnosis of Genital Lesions)',
        text: '• ซิฟิลิส (Syphilis — Treponema pallidum): ระยะแรกพบ Hard Chancre (แผลริมแข็ง ก้นแผลสะอาด ไม่เจ็บ) ปลายทางระยะที่ 3 อาจพบ Gumma\n• เริม (Genital Herpes — HSV-2): ตุ่มน้ำใสแตกออกเป็นแผลตื้น ปวดแสบเจ็บมาก ตรวจชิ้นเนื้อพบ Multinucleated giant cells และ Cowdry A inclusion bodies\n• หนองในแท้ (Gonorrhea — N. gonorrhoeae): ปัสสาวะแสบขัด หนองข้นเขียว ตรวจ Gram stain พบ Gram-negative diplococci ในเซลล์เม็ดเลือดขาว\n• หนองในเทียม (Chlamydia trachomatis): ปัสสาวะแสบขัด หนองใส เป็นสาเหตุสำคัญของ Epididymitis ในชายหนุ่ม',
      },
    },
    {
      id: 'sec-male-jev-evaluator',
      heading: '5. JEV AI Clinical Diagnostic Suite: วิเคราะห์และตรวจเคสผู้ป่วยพยาธิวิทยา (80% AI Decision Engine)',
      type: 'simulation',
      content: {
        simulationId: 'jev-pathology-examiner',
        title: 'TypeSafe JEV 1.13 — ระบบตรวจและวิเคราะห์เคสพยาธิวิทยาทางคลินิก',
        initialParams: { defaultCaseIndex: 3 },
      },
    },
    {
      id: 'sec-male-qwen-reader',
      heading: '6. สไลด์และเนื้อหาฉบับเต็ม: Male Reproductive Pathology (Qwen Interactive Suite)',
      type: 'legacy-html',
      content: {
        modulePath: '/qwen-modules/pathology/reproductive/index.html',
        title: 'พยาธิวิทยาระบบสืบพันธุ์ชาย — Interactive Lecture Reader',
        description: 'อ่านเนื้อหาสไลด์ 1–45 กายวิภาค อัณฑะ ต่อมลูกหมาก เนื้องอก และโรคติดต่อทางเพศสัมพันธ์',
        initialHeight: 820,
      },
    },
  ],
  quiz: [
    {
      id: 'quiz-male-1',
      question: 'ภาวะอัณฑะไม่ลงถุง (Cryptorchidism) ที่ไม่ได้รับการแก้ไข มีความสัมพันธ์กับภาวะใดมากที่สุด?',
      options: [
        'เพิ่มความเสี่ยงต่อการเกิด Testicular Germ Cell Tumor และภาวะมีบุตรยาก',
        'การเกิด Benign Prostatic Hyperplasia อย่างเฉียบพลัน',
        'การลดลงของระดับ PSA ในกระแสเลือด',
        'การเกิด Hydrocele แบบปฐมภูมิเท่านั้น',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Cryptorchidism ทำให้อุณหภูมิในช่องท้องสูงกว่าถุงอัณฑะ ส่งผลให้เกิดการฝ่อของ Seminiferous tubules และเพิ่มความเสี่ยงต่อมะเร็งอัณฑะ (Seminoma) สูงถึง 3-5 เท่า',
    },
    {
      id: 'quiz-male-2',
      question: 'เนื้องอกลูกอัณฑะชนิดใดที่ตรวจพบ Schiller-Duval bodies และมีระดับ Serum AFP สูงเด่นชัด?',
      options: ['Seminoma', 'Yolk Sac Tumor', 'Choriocarcinoma', 'Leydig Cell Tumor'],
      correctAnswerIndex: 1,
      explanation:
        'Yolk Sac Tumor (Endodermal Sinus Tumor) พบบ่อยในเด็กเล็ก มีลักษณะจำเพาะคือ Schiller-Duval bodies และสร้าง Alpha-fetoprotein (AFP)',
    },
    {
      id: 'quiz-male-3',
      question: 'รอยโรคแผลที่อวัยวะเพศภายนอกที่มีลักษณะ "ขอบยก แผลแข็ง ก้นแผลสะอาด และไม่เจ็บ" สัมพันธ์กับโรคใดมากที่สุด?',
      options: ['Genital Herpes (HSV-2)', 'Chancroid (Haemophilus ducreyi)', 'Primary Syphilis (Hard Chancre)', 'Condyloma Acuminata (HPV)'],
      correctAnswerIndex: 2,
      explanation:
        'แผล Hard Chancre ของซิฟิลิสระยะแรก เกิดจากเชื้อ Treponema pallidum มักเป็นแผลเดี่ยว แข็ง ก้นสะอาด และไม่มีอาการเจ็บปวด (Painless)',
    },
  ],
  updatedAt: '2026-09-23',
};

export default reproductiveMaleChapter;
