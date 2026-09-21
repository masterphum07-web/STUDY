import type { Chapter } from '../../../../types/content';

export const giTractPhysiologyChapter: Chapter = {
  id: 'gi-tract-physiology',
  subjectId: 'physiology',
  title: 'สรีรวิทยาระบบทางเดินอาหาร (Physiology of GI Tract)',
  description:
    'สรุปสรีรวิทยาทางเดินอาหารเชิงลึก ผนัง 4 ชั้น ระบบประสาทลำไส้ การหลั่งกรดของเซลล์พาไรทัล ฮอร์โมนทางเดินอาหาร และ 15 แบบจำลอง Interactive จาก Qwen',
  order: 2,
  estimatedReadingMinutes: 20,
  tags: [
    'สรีรวิทยา',
    'ระบบทางเดินอาหาร',
    'GI Tract',
    'ENS',
    'Parietal Cells',
    'GI Hormones',
    'Interactive Models',
  ],
  objectives: [
    'อธิบายโครงสร้างเนื้อเยื่อผนังทางเดินอาหาร 4 ชั้น และบทบาทของระบบประสาท Meissner และ Auerbach plexus',
    'เปรียบเทียบรูปแบบการเคลื่อนไหวของทางเดินอาหาร: Peristalsis, Segmentation และ Migrating Motor Complex (MMC)',
    'เข้าใจกลไกการผลิตและหลั่งกรดเกลือ (HCl) ของ Parietal cells ผ่านเอนไซม์ H+/K+ ATPase',
    'จำแนกแหล่งกำเนิด ตัวกระตุ้น และหน้าที่ทางสรีรวิทยาของฮอร์โมน Gastrin, CCK, Secretin, GIP และ Somatostatin',
  ],
  sections: [
    {
      id: 'sec-gi-intro',
      heading: '1. บทนำและโครงสร้างผนังทางเดินอาหาร 4 ชั้น (Histological Organization of GI Wall)',
      type: 'paragraph',
      content:
        'ทางเดินอาหารตั้งแต่หลอดอาหารจนถึงทวารหนักประกอบด้วยผนัง 4 ชั้นหลักเรียงจากด้านในสู่ด้านนอก: (1) Mucosa ทำหน้าที่ปกป้อง หลั่งสารคัดหลั่ง และดูดซึมสารอาหาร, (2) Submucosa ประกอบด้วยเนื้อเยื่อเกี่ยวพัน หลอดเลือด ท่อน้ำเหลือง และ Meissner’s submucosal plexus ควบคุมการหลั่ง, (3) Muscularis externa ประกอบด้วยกล้ามเนื้อเรียบชั้นในเรียงวงกลม (Circular) และชั้นนอกเรียงตามยาว (Longitudinal) โดยมี Auerbach’s myenteric plexus แทรกอยู่ตรงกลางควบคุมการบีบตัว และ (4) Serosa หรือ Adventitia หุ้มด้านนอกสุด',
    },
    {
      id: 'sec-gi-qwen-sim',
      heading: '2. คลังแบบจำลอง Interactive ระบบทางเดินอาหาร (GI Tract 15 โมเดล)',
      type: 'legacy-html',
      content: {
        modulePath: '/qwen-modules/biology/physiostudy/index.html?file=gi',
        title: 'Physiology of GI Tract — แบบจำลองการบีบตัวและเซลล์หลั่งกรด (Qwen Interactive Suite)',
        description:
          '15 แบบจำลองเชิงโต้ตอบ: กลไกการบีบรูด Peristalsis และ Segmentation, ปั๊มโปรตอน H+/K+ ATPase ใน Parietal cell, การย่อยและดูดซึมไขมัน ไมเซลล์ และการควบคุมโดยฮอร์โมน',
        initialHeight: 880,
      },
    },
    {
      id: 'sec-gi-motility',
      heading: '3. รูปแบบการเคลื่อนไหวของทางเดินอาหาร (GI Motility Patterns)',
      type: 'key-points',
      content: {
        title: 'การบีบตัว 3 รูปแบบหลักในระบบทางเดินอาหาร',
        points: [
          'Peristalsis (การบีบรูด): กล้ามเนื้อวงกลมด้านหลังก้อนอาหารหดตัว ขณะที่กล้ามเนื้อด้านหน้าคลายตัว เกิดเป็นคลื่นผลักดันอาหารไปข้างหน้าตลอดทางเดินอาหาร',
          'Segmentation (การหดเกร็งสลับปล้อง): เกิดขึ้นหนาแน่นในลำไส้เล็ก กล้ามเนื้อวงกลมหดตัวและคลายตัวสลับช่วง ช่วยในการคลุกเคล้าอาหารกับเอนไซม์ย่อย (Chyme mixing) และเพิ่มการสัมผัสกับผิวดูดซึม',
          'Migrating Motor Complex (MMC): คลื่นการบีบตัวที่เกิดขึ้นเป็นวงรอบในช่วงท้องว่าง (Fasting state) ทุกๆ 90-120 นาที ทำหน้าที่ "แม่บ้านกวาดล้าง" (Housekeeping) สิ่งตกค้างและแบคทีเรียจากกระเพาะเข้าสู่ลำไส้ใหญ่ ควบคุมโดยฮอร์โมน Motilin',
        ],
      },
    },
    {
      id: 'sec-gi-acid-secretion',
      heading: '4. กลไกการหลั่งกรดในกระเพาะอาหาร (Gastric Acid Secretion by Parietal Cells)',
      type: 'key-points',
      content: {
        title: 'การทำงานของ Parietal Cell และเอนไซม์ H+/K+ ATPase',
        points: [
          'การสร้างกรด: น้ำและ CO2 รวมตัวกันโดยเอนไซม์ Carbonic Anhydrase เกิดเป็น H+ และ HCO3- จากนั้น H+ จะถูกปั๊มออกสู่กระเพาะอาหารแลกกับ K+ ผ่าน H+/K+ ATPase (Proton Pump)',
          'Alkaline Tide: HCO3- ถูกขับออกจากเซลล์เข้าสู่กระแสเลือดแลกกับ Cl- ทำให้เลือดที่ออกจากกระเพาะอาหารหลังมื้ออาหารมีค่า pH สูงขึ้นชั่วคราว',
          'ตัวกระตุ้นการหลั่งกรด 3 ชนิด: (1) Acetylcholine (จาก Vagus nerve ผ่าน M3 receptor), (2) Gastrin (จาก G cells ผ่าน CCKB receptor), (3) Histamine (จาก ECL cells ผ่าน H2 receptor)',
          'ตัวยับยั้งการหลั่งกรด: Somatostatin (จาก D cells) และ Prostaglandins ยับยั้ง adenylate cyclase',
        ],
      },
    },
    {
      id: 'sec-gi-hormone-table',
      heading: '5. ตารางเปรียบเทียบฮอร์โมนทางเดินอาหารหลัก (Major GI Hormones)',
      type: 'table',
      content: {
        caption: 'ฮอร์โมนระบบทางเดินอาหาร จุดกำเนิด สิ่งเร้า และการออกฤทธิ์ทางสรีรวิทยา',
        headers: ['ฮอร์โมน', 'เซลล์และตำแหน่ง', 'สิ่งกระตุ้นการหลั่ง', 'หน้าที่หลัก'],
        rows: [
          [
            'Gastrin',
            'G cells (Stomach Antrum & Duodenum)',
            'Peptides, Amino acids, การกระตุ้นของเส้นประสาท Vagus',
            'กระตุ้น Parietal cells ให้หลั่งกรด HCl และกระตุ้นการเจริญของ Mucosa',
          ],
          [
            'Cholecystokinin (CCK)',
            'I cells (Duodenum & Jejunum)',
            'Fatty acids (กรดไขมัน) และกรดอะมิโนในลำไส้เล็ก',
            'กระตุ้นถุงน้ำดีบีบตัว, กระตุ้นตับอ่อนหลั่ง Enzyme, คลายหูรูด Oddi',
          ],
          [
            'Secretin',
            'S cells (Duodenum)',
            'กรดในลำไส้เล็กส่วนต้น (Chyme pH < 4.5)',
            'กระตุ้นตับอ่อนและท่อน้ำดีหลั่งน้ำด่าง HCO3- ปริมาณมากเพื่อสะเทินกรด',
          ],
          [
            'GIP',
            'K cells (Duodenum & Jejunum)',
            'กลูโคส, ไขมัน และกรดอะมิโน',
            'กระตุ้นการหลั่ง Insulin จากตับอ่อน (Incretin effect), ยับยั้งการหลั่งกรด',
          ],
          [
            'Somatostatin',
            'D cells (Stomach, Intestine, Pancreas)',
            'กรดในกระเพาะอาหาร (pH ต่ำมาก)',
            'ยับยั้งการทำงานและการหลั่งฮอร์โมน-เอนไซม์ทุกชนิดในทางเดินอาหาร',
          ],
        ],
      },
    },
    {
      id: 'sec-gi-clinical',
      type: 'callout',
      content: {
        variant: 'tip',
        title: 'Clinical Application: ยาและพยาธิสรีรวิทยาทางเดินอาหาร',
        text: '1. ยาลดกรดกลุ่ม Proton Pump Inhibitors (PPIs เช่น Omeprazole, Esomeprazole) ออกฤทธิ์ยับยั้ง H+/K+ ATPase แบบถาวร เป็นยาที่มีประสิทธิภาพสูงสุดในการรักษาแผลในกระเพาะและกรดไหลย้อน (GERD)\n2. ยาแก้แพ้กลุ่ม H2-Receptor Antagonists (เช่น Famotidine) ออกฤทธิ์ปิดกั้นตัวรับ Histamine ที่ Parietal cell จึงลดการกระตุ้นการหลั่งกรดได้เช่นกัน\n3. โรค Hirschsprung disease เกิดจากความบกพร่องแต่กำเนิดที่ Auerbach และ Meissner plexus ไม่เจริญในลำไส้ใหญ่ส่วนปลาย ทำให้ลำไส้ไม่บีบตัวและเกิดภาวะลำไส้อุดตัน',
      },
    },
    {
      id: 'sec-gi-quiz',
      heading: '6. แบบทดสอบสรีรวิทยาระบบทางเดินอาหาร (GI Physiology Quiz)',
      type: 'quiz',
      content: {
        title: 'ทดสอบความรู้: สรีรวิทยาระบบทางเดินอาหาร',
        description: 'เลือกคำตอบที่ถูกต้องที่สุดตามหลักการสรีรวิทยา',
        questions: [
          {
            id: 'gi-q1',
            question:
              'ระบบประสาทลำไส้ส่วนใดที่แทรกตัวอยู่ระหว่างชั้นกล้ามเนื้อ Circular และ Longitudinal ของ Muscularis externa และทำหน้าที่หลักในการควบคุมการบีบตัว (Motility)?',
            options: [
              'Meissner’s submucosal plexus',
              'Auerbach’s myenteric plexus',
              'Celiac plexus',
              'Vagus nerve terminal plexus',
            ],
            correctAnswerIndex: 1,
            explanation:
              'Auerbach’s (Myenteric) plexus แทรกอยู่ระหว่างชั้นกล้ามเนื้อวงกลมและกล้ามเนื้อตามยาวของ Muscularis externa ทำหน้าที่หลักในการควบคุมการบีบตัว (Motility) ของทางเดินอาหาร',
          },
          {
            id: 'gi-q2',
            question:
              'เมื่อกรดจากกระเพาะอาหารไหลลงสู่ลำไส้เล็กส่วนต้น (Duodenum) จนมี pH ต่ำกว่า 4.5 เซลล์ชนิดใดจะหลั่งฮอร์โมน และเป็นฮอร์โมนชนิดใดที่กระตุ้นให้ตับอ่อนหลั่งสารละลายโซเดียมไบคาร์บอเนตเข้มข้น?',
            options: [
              'G cells หลั่ง Gastrin',
              'I cells หลั่ง Cholecystokinin (CCK)',
              'S cells หลั่ง Secretin',
              'K cells หลั่ง GIP',
            ],
            correctAnswerIndex: 2,
            explanation:
              'S cells ใน Duodenum ไวต่อความเป็นกรด (pH < 4.5) จะหลั่งฮอร์โมน Secretin เพื่อกระตุ้น Pancreatic ductal cells ให้หลั่งสารละลายที่มี HCO3- สูงเพื่อสะเทินกรด',
          },
          {
            id: 'gi-q3',
            question:
              'ยาในกลุ่ม Proton Pump Inhibitors (PPIs เช่น Omeprazole) ออกฤทธิ์ยับยั้งเอนไซม์ใดที่ Apical membrane ของ Parietal cell เพื่อลดการหลั่งกรด?',
            options: [
              'Na+/K+ ATPase',
              'H+/K+ ATPase',
              'Carbonic Anhydrase',
              'Pepsinogen Cleavage Enzyme',
            ],
            correctAnswerIndex: 1,
            explanation:
              'PPIs ออกฤทธิ์จับแบบ Irreversible กับเอนไซม์ H+/K+ ATPase (Proton Pump) ซึ่งเป็นขั้นตอนสุดท้ายของการหลั่งกรด H+ สู่กระเพาะอาหาร',
          },
        ],
      },
    },
  ],
  updatedAt: '2026-09-21',
};

export default giTractPhysiologyChapter;

