import type { Chapter } from '../../../../types/content';

export const pathologyMultiLabChapter: Chapter = {
  id: 'pathology-multi-lab',
  subjectId: 'pathology',
  title: 'ห้องปฏิบัติการจำลองพยาธิวิทยามัลติซิสเต็มและคลังข้อสอบ (Multi-System Pathology Lab & Exam Bank)',
  description:
    'ศูนย์รวมห้องทดลองจำลองสรีรพยาธิวิทยา 8 สถานการณ์คลินิก (ดีซ่าน, ตับแข็ง, Monro-Kellie ICP, Stroke BEFAST, ไมอีลิน, มวลกระดูก DXA, การสมานกระดูก, นิ่วถุงน้ำดี) ภาพจำลองชี้ส่วนประกอบทางกายวิภาคและพยาธิวิทยา และคลังข้อสอบประเมินตนเองครบทุกบทเรียน',
  order: 7,
  estimatedReadingMinutes: 30,
  tags: [
    'พยาธิวิทยา',
    'Interactive Lab',
    'Simulations',
    'Bilirubin',
    'Portal HTN',
    'Monro-Kellie',
    'BEFAST',
    'Myelin',
    'DXA T-score',
    'Fracture Healing',
    'Gallstones',
    'Exam Bank',
  ],
  objectives: [
    'ทดลองปรับแต่งตัวแปรทางสรีรพยาธิวิทยาในห้องทดลองจำลองทั้ง 8 ห้องเพื่อสังเกตผลกระทบต่อร่างกายผู้ป่วย',
    'ตรวจดูภาพจำลองชี้ส่วนประกอบ (Interactive Anatomical & Pathological Diagrams) ของระบบประสาท กระดูก และตับ/ทางเดินน้ำดี',
    'ฝึกคัดกรองผู้ป่วยโรคหลอดเลือดสมองเฉียบพลันด้วยเครื่องมือ BEFAST Triage Trainer',
    'ฝึกแปลผลค่าความหนาแน่นมวลกระดูก (T-score) และวิเคราะห์ระยะการสมานกระดูกหัก',
    'ทดสอบความรู้ความเข้าใจผ่านคลังข้อสอบประเมินผลพยาธิวิทยามัลติซิสเต็ม',
  ],
  sections: [
    {
      id: 'sec-lab-overview',
      heading: '1. ภาพรวมห้องทดลองจำลองทั้ง 8 สถานการณ์คลินิก (Simulation Labs 1–8)',
      type: 'paragraph',
      content:
        'ห้องปฏิบัติการจำลองพยาธิวิทยาเสมือนจริง (Patho Study Lab) ถูกออกแบบขึ้นเพื่อให้นักศึกษาแพทย์และบุคลากรทางการแพทย์ได้ทดลองปรับเปลี่ยนตัวแปรต้นทางสรีรพยาธิวิทยาและสังเกตผลลัพธ์ที่แสดงออกทางคลินิกแบบเรียลไทม์ ครอบคลุม 8 สถานการณ์สำคัญ:\n\n• Lab 1 (Bilirubin & Jaundice): ทดลองปรับระดับ Hemolysis, Hepatic conjugation, และ Biliary obstruction เพื่อสังเกตสีผิว สีตา สีปัสสาวะ และสีอุจจาระ\n• Lab 2 (Liver Cirrhosis & Portal HTN): ปรับระยะของโรคตับแข็งเพื่อดูภาพตัดตับจำลอง และระดับความดันหลอดเลือดพอร์ทัลพร้อมอาการแทรกซ้อน (ท้องมาน หลอดเลือดขอดในหลอดอาหาร)\n• Lab 3 (Monro–Kellie ICP & Perfusion): ปรับขนาดก้อนเนื้อสมอง สังเกตกราฟ Pressure–Volume และระดับ Cerebral Perfusion Pressure (CPP)\n• Lab 4 (Stroke BEFAST Triage Trainer): จำลองการตรวจอาการผู้ป่วยตามหลัก B-E-F-A-S-T เพื่อประเมินความเร่งด่วนในการให้ยา rtPA\n• Lab 5 (Myelin & Nerve Conduction): ปรับความสมบูรณ์ของปลอกไมอีลิน (0–100%) เพื่อดูความเร็วการส่งกระแสประสาทและการข้าม Node of Ranvier ในภาวะ Guillain-Barré / Multiple Sclerosis\n• Lab 6 (Bone Mineral Density DXA): ปรับค่า T-score (-4.0 ถึง +2.0) และทดลองเลือกปัจจัยเสี่ยง (หมดประจำเดือน สเตียรอยด์ ขาดแคลเซียม) เพื่อสังเกตความหนาแน่นของกระดูกสันหลังจำลอง\n• Lab 7 (Fracture Healing Timeline): เลื่อนแถบเวลาตั้งแต่วันที่ 1 ถึง 1 ปี เพื่อสังเกตการเปลี่ยนแปลงจากก้อนเลือดคั่ง สู่กระดูกอ่อน กระดูกสาน และกระดูกลามิลลาร์ที่สมบูรณ์\n• Lab 8 (Gallstone Formation): ปรับสัดส่วน Cholesterol, Bile salts, Phospholipids, และ Bilirubin เพื่อดูชนิดของนิ่วที่ตกตะกอนในถุงน้ำดีจำลอง',
    },
    {
      id: 'sec-lab-full-suite',
      heading: '2. ห้องปฏิบัติการและคลังข้อสอบฉบับสมบูรณ์ (Patho Study Lab Interactive Suite)',
      type: 'legacy-html',
      content: {
        modulePath: '/qwen-modules/pathology/neuro-msk-hbp/index.html',
        title: 'ห้องปฏิบัติการจำลองพยาธิวิทยามัลติซิสเต็ม — Interactive Suite',
        description:
          'เข้าใช้งานห้องทดลองจำลองทั้ง 8 ห้อง แผนภาพจำลองชี้ส่วนประกอบ และคลังข้อสอบพยาธิวิทยาฉบับเต็ม',
        initialHeight: 920,
      },
    },
    {
      id: 'sec-lab-summary',
      heading: '3. สรุปสาระสำคัญสำหรับการสอบพยาธิวิทยา (High-Yield Exam Pearls)',
      type: 'key-points',
      content: {
        title: 'ประเด็นที่ออกสอบบ่อยที่สุด (High-Yield Topics)',
        points: [
          'Monro-Kellie Doctrine: ปริมาตรในกะโหลกศีรษะคงที่ กลไกชดเชยจะใช้การระบาย CSF และ Venous blood ออกก่อน เมื่อหมดกลไกชดเชย ICP จะพุ่งสูงอย่างรวดเร็ว',
          'Intracranial Bleeding: EDH (เลนส์นูน / MMA / Lucid interval), SDH (พระจันทร์เสี้ยว / Bridging veins / ผู้สูงอายุ), SAH (Berry aneurysm / Thunderclap headache)',
          'Brain Herniation: Uncal herniation กดทับ CN III (Ipsilateral blown pupil) และก้านสมอง (Duret hemorrhages); Tonsillar herniation กด Medulla ทำให้หยุดหายใจ',
          'Osteoporosis vs Osteomalacia: Osteoporosis เป็นความผิดปกติของปริมาณมวลกระดูกลดลง (T-score <= -2.5) ส่วน Osteomalacia เป็นความผิดปกติของคุณภาพการสะสมแร่ธาตุ (Mineralization defect ขาด Vit D)',
          'OA vs RA: OA สึกหรอตามอายุ ปวดตอนใช้ ตึงเช้าสั้น พบ Heberden nodes ที่ DIP; RA เป็นแพ้ภูมิตัวเอง ตึงเช้านาน >1 ชม. เป็นแบบสมมาตรที่ MCP/PIP ตรวจพบ Anti-CCP',
          'Jaundice Differentials: Pre-hepatic (Unconjugated สูง ปัสสาวะสีปกติ อุจจาระเข้ม), Hepatic (Mixed AST/ALT สูง), Post-hepatic (Conjugated สูง ปัสสาวะสีชาเข้ม อุจจาระซีดดินเหนียว ALP สูง)',
          'Liver & Gallbladder Neoplasms: HCC สัมพันธ์กับ HBV/HCV/Cirrhosis (AFP สูง); CCA สัมพันธ์กับ Opisthorchis viverrini (CA 19-9 สูง); Metastasis พบบ่อยที่สุด ก้อนมี Umbilication',
          'Pancreatitis: Acute pancreatitis จากนิ่วหรือแอลกอฮอล์ มี Auto-digestion, Fat necrosis (Saponification), Lipase/Amylase สูงเด่น, Cullen/Turner signs',
        ],
      },
    },
  ],
  quiz: [
    {
      id: 'quiz-lab-1',
      question:
        'จากการทดลองใน Lab 1 (Bilirubin Simulator) เมื่อเกิดภาวะ Biliary Obstruction อย่างสมบูรณ์ เหตุใดอุจจาระของผู้ป่วยจึงเปลี่ยนเป็นสีซีดคล้ายดินเหนียว (Clay-colored stool)?',
      options: [
        'เพราะน้ำดีไม่สามารถไหลลงสู่ลำไส้เล็ก ทำให้แบคทีเรียในลำไส้ไม่สามารถเปลี่ยน Conjugated bilirubin ไปเป็น Urobilinogen และ Stercobilin ซึ่งเป็นรงควัตถุสีน้ำตาลของอุจจาระได้',
        'เพราะเม็ดเลือดแดงหยุดการแตกสลายตัวโดยสิ้นเชิง',
        'เพราะเซลล์ตับหยุดการสร้างเกลือน้ำดีและคอเลสเตอรอล',
        'เพราะไตดูดซึมสารสีทั้งหมดกลับเข้าสู่กระแสเลือด',
      ],
      correctAnswerIndex: 0,
      explanation:
        'ในภาวะท่อน้ำดีอุดตัน น้ำดีที่มี Conjugated bilirubin ไม่สามารถเข้าสู่ทางเดินอาหารได้ แบคทีเรียในลำไส้จึงขาดสารตั้งต้นในการเปลี่ยนเป็น Stercobilin ซึ่งให้สีน้ำตาลแก่อุจจาระ ส่งผลให้อุจจาระมีสีซีดขาวคล้ายดินเหนียว (Achollic / Clay-colored stool)',
    },
    {
      id: 'quiz-lab-2',
      question:
        'จากการทดลองใน Lab 3 (Monro–Kellie Simulator) ในช่วงที่ปริมาตรของก้อนเนื้อ (Mass) เพิ่มขึ้นตั้งแต่ 0 ถึง 30 mL ความดันในกะโหลกศีรษะ (ICP) แทบจะไม่เพิ่มขึ้นเลย เกิดจากกลไกชดเชยใดของร่างกาย?',
      options: [
        'การระบายน้ำไขสันหลัง (CSF) และเลือดดำ (Venous blood) ออกจากโพรงกะโหลกศีรษะลงสู่ช่องไขสันหลังและหลอดเลือดดำใหญ่',
        'การขยายตัวของกระดูกกะโหลกศีรษะตามแรงดัน',
        'การลดการเต้นของหัวใจและความดันโลหิตลงสู่ศูนย์',
        'การดูดซึมเนื้อสมองกลับเข้าสู่หลอดเลือดแดง',
      ],
      correctAnswerIndex: 0,
      explanation:
        'ตามสมมติฐาน Monro-Kellie: ในช่วงแรกของการมีก้อนเนื้อส่วนเกิน ร่างกายจะชดเชยโดยการระบาย CSF ผ่าน Arachnoid granulations และระบายเลือดดำผ่าน Dural venous sinuses ออกจากกะโหลกศีรษะ ทำให้ปริมาตรรวมคงที่และ ICP ยังไม่สูงขึ้น (Compensated phase)',
    },
    {
      id: 'quiz-lab-3',
      question:
        'ในการประเมินผู้ป่วยที่สงสัยภาวะ Acute Ischemic Stroke ตามเครื่องมือ Stroke BEFAST Triage Trainer ใน Lab 4 ตัวอักษร "F" และ "T" หมายถึงสิ่งใด?',
      options: [
        'F คือ Face (หน้าเบี้ยว มุมปากตก) และ T คือ Time (เวลาคือชีวิต รีบนำส่งโรงพยาบาลทันที)',
        'F คือ Fever (ไข้สูง) และ T คือ Temperature (อุณหภูมิร่างกาย)',
        'F คือ Finger (นิ้วสั่น) และ T คือ Tremor (อาการสั่น)',
        'F คือ Fracture (กระดูกหัก) และ T คือ Trauma (การบาดเจ็บ)',
      ],
      correctAnswerIndex: 0,
      explanation:
        'ในหลักการ BEFAST: B=Balance, E=Eyes, F=Face (หน้าเบี้ยว มุมปากตก ยิ้มไม่เท่ากัน), A=Arms, S=Speech, และ T=Time (เวลาคือชีวิต ต้องรีบส่ง รพ. ภายใน 4.5 ชม. เพื่อพิจารณาให้ยาละลายลิ่มเลือด)',
    },
  ],
  updatedAt: '2026-09-23',
};

export default pathologyMultiLabChapter;
