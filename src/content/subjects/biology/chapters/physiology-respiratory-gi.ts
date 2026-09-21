import type { Chapter } from '../../../../types/content';

export const physiologyRespiratoryGiChapter: Chapter = {
  id: 'physiology-respiratory-gi',
  subjectId: 'biology',
  title: 'สรีรวิทยา: ระบบทางเดินหายใจและทางเดินอาหาร (Human Physiology: RS & GI)',
  description:
    'สรุปสรีรวิทยาเชิงลึกจากชีท Physio-RS และ GI Tract พร้อม 19 แบบจำลอง Interactive จาก Qwen, กราฟกลศาสตร์การหายใจ และการหลั่งกรด-ฮอร์โมนครบชุด',
  order: 3,
  estimatedReadingMinutes: 25,
  tags: [
    'ชีววิทยา',
    'สรีรวิทยา',
    'Physiology',
    'ระบบหายใจ',
    'ทางเดินอาหาร',
    'Respiratory System',
    'GI Tract',
    'Interactive Model',
    'Qwen',
  ],
  objectives: [
    'เข้าใจกลศาสตร์การหายใจ (Mechanics of Breathing), กฎของบอยล์ (Boyle’s Law) และการเปลี่ยนแปลงความดัน Ptp, Palv, Pip',
    'จำแนกปริมาตรและความจุปอด (TLC, VC, TV, FRC, RV) จากกราฟ Spirogram ได้อย่างแม่นยำ',
    'อธิบายกราฟ Oxyhemoglobin Dissociation Curve ปรากฏการณ์ Bohr Effect และ Haldane Effect',
    'เข้าใจเนื้อเยื่อผนังทางเดินอาหาร 4 ชั้น และบทบาทของระบบประสาทลำไส้ (Enteric Nervous System: ENS)',
    'วิเคราะห์กลไกการหลั่งกรดของ Parietal cell, หน้าที่ของเอนไซม์ตับอ่อน-น้ำดี และบทบาทของฮอร์โมน Gastrin, CCK, Secretin',
  ],
  sections: [
    {
      id: 'sec-intro',
      heading: '1. บทนำ: ระบบหายใจและทางเดินอาหารในการรักษาสมดุลร่างกาย (Homeostasis)',
      type: 'paragraph',
      content:
        'สรีรวิทยา (Physiology) ศึกษาเกี่ยวกับกลไกการทำงานและการควบคุมการทำงานของระบบต่างๆ ภายในสิ่งมีชีวิต โดยระบบทางเดินหายใจ (Respiratory System) ทำหน้าที่แลกเปลี่ยนก๊าซออกซิเจนและคาร์บอนไดออกไซด์เพื่อรักษาดุลยภาพกรด-ด่างและระดับก๊าซในเลือด ในขณะที่ระบบทางเดินอาหาร (Gastrointestinal System) ทำหน้าที่ย่อยสลายสารอาหารเชิงซ้อน ดูดซึมสารอาหารและน้ำเข้าสู่กระแสเลือด และขับถ่ายของเสีย ทั้งสองระบบทำงานประสานกันอย่างใกล้ชิดภายใต้การควบคุมของระบบประสาทอัตโนมัติและระบบต่อมไร้ท่อ',
    },
    {
      id: 'sec-qwen-physiostudy',
      heading: '2. PhysioStudy: คลังแบบจำลองสรีรวิทยา Interactive สมจริง (Qwen Suite)',
      type: 'legacy-html',
      content: {
        modulePath: '/qwen-modules/biology/physiostudy/index.html',
        title: 'PhysioStudy — คลังสรุปสรีรวิทยา + 19 แบบจำลอง Interactive จาก Qwen',
        description:
          'โมดูลไฟล์เดียวสมบูรณ์แบบที่สร้างขึ้นโดย Qwen ครอบคลุมทั้งระบบ RS และ GI พร้อมกราฟและแคนวาสแบบจำลองเคลื่อนไหว 19 โมเดล ทำงานอย่างปลอดภัยใน Sandboxed iframe',
        initialHeight: 880,
      },
    },
    {
      id: 'sec-respiratory-mechanics',
      heading: '3. สรุปหัวใจสำคัญ: กลศาสตร์การหายใจและการแลกเปลี่ยนก๊าซ (Respiratory Mechanics)',
      type: 'key-points',
      content: {
        title: 'หลักการสำคัญทางสรีรวิทยาระบบหายใจ (Physio-RS)',
        points: [
          'กฎของบอยล์ (Boyle’s Law: P1V1 = P2V2): เมื่อปริมาตรช่องอกเพิ่มขึ้น ความดันในถุงลม (Palv) จะลดลง อากาศจึงไหลจากบรรยากาศเข้าสู่ปอด',
          'การหายใจเข้า (Inspiration): เป็น Active process อาศัยกะบังลม (Diaphragm) เคลื่อนต่ำลง 1-2 cm และกล้ามเนื้อ External Intercostal ดึงซี่โครงขึ้น',
          'การหายใจออกปกติ (Quiet Expiration): เป็น Passive process เกิดจากแรงดึงกลับตามธรรมชาติของเนื้อเยื่อปอด (Elastic recoil) และแรงตึงผิวในถุงลม',
          'Intrapleural Pressure (Pip): ความดันในช่องเยื่อหุ้มปอดมีค่าเป็นลบเสมอ (-4 ถึง -7 mmHg) เพื่อต้านแรงหดตัวของปอดและป้องกันภาวะปอดแฟบ (Atelectasis)',
          'สารลดแรงตึงผิว (Pulmonary Surfactant): หลั่งจาก Type II Alveolar cells ประกอบด้วย Dipalmitoylphosphatidylcholine (DPPC) ช่วยลดแรงตึงผิวตามกฎของ Laplace (P = 2T/r)',
          'Bohr Effect: เมื่อเมแทบอลิซึมเพิ่มขึ้น (CO2 สูง, pH ต่ำ, อุณหภูมิสูง, 2,3-BPG สูง) กราฟ Oxyhemoglobin จะเลื่อนไปทางขวา (Right shift) ส่งผลให้ Hb ปล่อย O2 ให้เนื้อเยื่อได้ดียิ่งขึ้น',
        ],
      },
    },
    {
      id: 'sec-formula-respiratory',
      heading: '4. สมการและสูตรคำนวณทางสรีรวิทยาระบบหายใจที่สำคัญ',
      type: 'formula',
      content: {
        latex: 'P_{tp} = P_{alv} - P_{ip} \\quad , \\quad V_A = RR \\times (V_T - V_D)',
        explanation:
          'สมการความดันขยายปอด (Transpulmonary Pressure) และอัตราการระบายอากาศของถุงลม (Alveolar Ventilation)',
        variables: [
          { symbol: 'P_{tp}', meaning: 'Transpulmonary pressure — แรงที่ต้าน elastic recoil ของปอด', unit: 'mmHg' },
          { symbol: 'P_{alv}', meaning: 'Intra-alveolar pressure — ความดันในถุงลม', unit: 'mmHg' },
          { symbol: 'P_{ip}', meaning: 'Intrapleural pressure — ความดันในช่องเยื่อหุ้มปอด (ปกติ -4 ถึง -7)', unit: 'mmHg' },
          { symbol: 'V_A', meaning: 'Alveolar ventilation — ปริมาตรอากาศที่เข้าถึงถุงลมเพื่อแลกเปลี่ยนก๊าซต่อนาที', unit: 'mL/min' },
          { symbol: 'V_T', meaning: 'Tidal volume — ปริมาตรอากาศหายใจเข้าออกปกติครั้งละ ~500', unit: 'mL' },
          { symbol: 'V_D', meaning: 'Anatomic dead space — ปริมาตรบริเวณท่อทางเดินหายใจที่ไม่เกิดการแลกเปลี่ยน ~150', unit: 'mL' },
          { symbol: 'RR', meaning: 'Respiratory rate — อัตราการหายใจต่อนาที (ปกติ 12-16)', unit: 'ครั้ง/นาที' },
        ],
        displayMode: true,
      },
    },
    {
      id: 'sec-gi-mechanics',
      heading: '5. สรุปหัวใจสำคัญ: โครงสร้างผนังและการบีบตัวของทางเดินอาหาร (GI Physiology)',
      type: 'key-points',
      content: {
        title: 'โครงสร้างและกลไกสำคัญในระบบทางเดินอาหาร (GI Tract)',
        points: [
          'ผนังทางเดินอาหาร 4 ชั้นหลัก: Mucosa (ชั้นเยื่อบุและดูดซึม), Submucosa (มี Meissner’s submucosal plexus), Muscularis externa (Circular & Longitudinal มี Auerbach’s myenteric plexus), Serosa/Adventitia',
          'ระบบประสาทลำไส้ (Enteric Nervous System - ENS): เปรียบเสมือนสมองที่สอง (Second Brain) มีเซลล์ประสาทกว่า 100 ล้านเซลล์ ควบคุม Motility และ Secretion ได้อย่างอิสระผ่าน Local reflexes',
          'การเคลื่อนไหว 3 แบบหลัก: Peristalsis (การบีบรูดขับเคลื่อนอาหารไปข้างหน้า), Segmentation (การหดเกร็งสลับปล้องเพื่อผสมคลุกเคล้า), Migrating Motor Complex (MMC คลื่นกวาดล้างสิ่งตกค้างตอนท้องว่าง)',
          'เซลล์กระเพาะอาหารสำคัญ: Parietal cells (หลั่ง HCl ผ่าน H+/K+ ATPase pump และหลั่ง Intrinsic factor ช่วยดูดซึม Vitamin B12), Chief cells (หลั่ง Pepsinogen), G cells (หลั่ง Gastrin)',
        ],
      },
    },
    {
      id: 'sec-gi-hormone-table',
      heading: '6. ตารางเปรียบเทียบฮอร์โมนทางเดินอาหารหลัก (GI Hormones Comparison)',
      type: 'table',
      content: {
        caption: 'ฮอร์โมนหลักของระบบทางเดินอาหาร จุดกำเนิด สิ่งกระตุ้น และผลทางสรีรวิทยา',
        headers: ['ฮอร์โมน', 'เซลล์ต้นกำเนิด & ตำแหน่ง', 'สิ่งเร้าให้หลั่ง (Stimuli)', 'หน้าที่หลักทางสรีรวิทยา'],
        rows: [
          [
            'Gastrin',
            'G cells (Stomach Antrum, Duodenum)',
            'Peptides, Amino acids, Vagal stimulation (ผ่าน GRP)',
            'กระตุ้น Parietal cells หลั่งกรด HCl, กระตุ้นการเจริญของเยื่อบุกระเพาะ',
          ],
          [
            'Cholecystokinin (CCK)',
            'I cells (Duodenum & Jejunum)',
            'กรดไขมัน (Fatty acids), เปปไทด์ในลำไส้เล็ก',
            'กระตุ้นการบีบตัวของถุงน้ำดี, กระตุ้นตับอ่อนหลั่ง Enzyme, คลาย Sphincter of Oddi',
          ],
          [
            'Secretin',
            'S cells (Duodenum)',
            'ความเป็นกรดในลำไส้เล็ก (Chyme pH < 4.5)',
            'กระตุ้นตับอ่อนและท่อน้ำดีหลั่งน้ำด่าง HCO3- ปริมาณมากเพื่อสะเทินกรด, ยับยั้งการหลั่งกรดในกระเพาะ',
          ],
          [
            'GIP (Glucose-dependent Insulinotropic Peptide)',
            'K cells (Duodenum & Jejunum)',
            'น้ำตาลกลูโคส, กรดไขมัน, กรดอะมิโน',
            'กระตุ้นการหลั่ง Insulin จากตับอ่อน (Incretin effect), ยับยั้งการหลั่งกรด',
          ],
          [
            'Somatostatin',
            'D cells (Stomach, Intestine, Pancreas)',
            'กรดในกระเพาะอาหาร (pH ต่ำมาก)',
            'ฮอร์โมนยับยั้งสากล (Universal inhibitor): ยับยั้ง Gastrin, Histamine, Secretin และการหลั่งกรด',
          ],
        ],
      },
    },
    {
      id: 'sec-clinical-pearls',
      type: 'callout',
      content: {
        variant: 'info',
        title: 'Clinical Pearls: การเชื่อมโยงสรีรวิทยาสู่เวชปฏิบัติ',
        text: '1. ยาปฏิชีวนะและแผลในกระเพาะอาหาร: เชื้อ Helicobacter pylori สร้างเอนไซม์ Urease ย่อยสลาย Urea เป็นแอมโมเนียเพื่อสะเทินกรดรอบตัว ส่งผลให้เยื่อบุถูกทำลายจนเกิด Peptic Ulcer\n2. ยาในกลุ่ม Proton Pump Inhibitor (PPIs เช่น Omeprazole) ออกฤทธิ์จับแบบ Irreversible กับเอนไซม์ H+/K+ ATPase ที่ apical membrane ของ Parietal cell เป็นยาหลักในการรักษาแผลในกระเพาะและ GERD\n3. ภาวะกะบังลมแฟบ / ลมในช่องอก (Pneumothorax): เมื่อผนังช่องอกทะลุ อากาศภายนอกจะไหลเข้าสู่ช่องเยื่อหุ้มปอด ทำให้ Pip กลายเป็นศูนย์เท่ากับบรรยากาศ ปอดข้างนั้นจะยุบตัวลงทันทีเนื่องจากสูญเสีย Transpulmonary pressure',
      },
    },
    {
      id: 'sec-quiz',
      heading: '7. แบบทดสอบวัดความเข้าใจสรีรวิทยา (RS & GI Physiology Quiz)',
      type: 'quiz',
      content: {
        title: 'แบบทดสอบสรีรวิทยา: ระบบทางเดินหายใจและทางเดินอาหาร',
        description: 'เลือกคำตอบที่ถูกต้องที่สุดเพื่อประเมินความเข้าใจ',
        questions: [
          {
            id: 'q-physio-1',
            question:
              'ในระหว่างการหายใจเข้าปกติ (Quiet Inspiration) สภาวะความดันในถุงลม (Palv) และความดันในช่องเยื่อหุ้มปอด (Pip) จะมีการเปลี่ยนแปลงอย่างไร?',
            options: [
              'Palv เป็นบวก, Pip เป็นศูนย์',
              'Palv เป็นลบ (-1 mmHg), Pip มีความเป็นลบมากขึ้น (เช่น จาก -4 เป็น -7 mmHg)',
              'Palv เป็นบวก (+1 mmHg), Pip เป็นบวก (+4 mmHg)',
              'Palv เป็นลบ, Pip เป็นบวก',
            ],
            correctAnswerIndex: 1,
            explanation:
              'เมื่อกะบังลมหดตัว ปริมาตรทรวงอกจะขยายออก ทำให้ Pip ยิ่งเป็นลบมากขึ้น ส่งผลให้เนื้อปอดถูกดึงขยายออก ปริมาตรถุงลมจึงเพิ่มขึ้นและความดัน Palv ลดต่ำลงต่ำกว่าบรรยากาศ (-1 mmHg) ดึงอากาศภายนอกไหลเข้าสู่ปอด',
          },
          {
            id: 'q-physio-2',
            question:
              'ปริมาตรอากาศที่ยังคงค้างอยู่ในปอดหลังจากที่หายใจออกอย่างเต็มที่ (Maximal Expiration) เรียกว่าอะไร และสามารถวัดด้วยการตรวจ Spirometry ธรรมดาได้หรือไม่?',
            options: [
              'Tidal Volume (TV) — สามารถวัดได้',
              'Expiratory Reserve Volume (ERV) — สามารถวัดได้',
              'Residual Volume (RV) — ไม่สามารถวัดได้โดยตรงจาก Spirometry',
              'Vital Capacity (VC) — ไม่สามารถวัดได้',
            ],
            correctAnswerIndex: 2,
            explanation:
              'Residual Volume (RV) คือปริมาตรอากาศตกค้างที่ไม่สามารถขับออกจากปอดได้แม้หายใจออกสุด จึงไม่สามารถวัดด้วยเครื่อง Spirometer ทั่วไปได้ ต้องใช้เทคนิค Helium dilution หรือ Body plethysmography',
          },
          {
            id: 'q-physio-3',
            question:
              'ฮอร์โมนทางเดินอาหารชนิดใดที่หลั่งออกมาเมื่ออาหารที่มีไขมันและกรดอะมิโนเข้าสู่ลำไส้เล็กส่วนต้น มีบทบาทหลักในการกระตุ้นให้ถุงน้ำดีบีบตัวและตับอ่อนหลั่งเอนไซม์?',
            options: ['Gastrin', 'Secretin', 'Cholecystokinin (CCK)', 'Motilin'],
            correctAnswerIndex: 2,
            explanation:
              'CCK (Cholecystokinin) หลั่งจาก I cells ใน Duodenum และ Jejunum เมื่อสัมผัสกับกรดไขมันและเปปไทด์ ทำหน้าที่กระตุ้นถุงน้ำดีบีบตัวและกระตุ้น Acinar cells ของตับอ่อนให้หลั่งน้ำย่อย',
          },
          {
            id: 'q-physio-4',
            question:
              'เซลล์ใดในกระเพาะอาหารทำหน้าที่หลั่งกรดไฮโดรคลอริก (HCl) และ Intrinsic Factor (IF) ซึ่งจำเป็นต่อการดูดซึมวิตามินบี 12?',
            options: ['Chief cells', 'Parietal cells', 'G cells', 'Enterochromaffin-like (ECL) cells'],
            correctAnswerIndex: 1,
            explanation:
              'Parietal cells (Oxyntic cells) ในบริเวณกระเพาะอาหารส่วน Body และ Fundus มีหน้าที่หลั่ง HCl ผ่าน H+/K+ ATPase pump และหลั่ง Intrinsic Factor ที่จำเป็นต่อการดูดซึม Vitamin B12 ที่ปลายลำไส้เล็ก (Terminal ileum)',
          },
        ],
      },
    },
  ],
  updatedAt: '2026-09-21',
};

export default physiologyRespiratoryGiChapter;
