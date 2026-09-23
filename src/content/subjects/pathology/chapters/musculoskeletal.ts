import type { Chapter } from '../../../../types/content';

export const musculoskeletalChapter: Chapter = {
  id: 'pathology-musculoskeletal',
  subjectId: 'pathology',
  title: 'พยาธิวิทยาของระบบกล้ามเนื้อ กระดูก และข้อ (Musculoskeletal Pathology & Joint Diseases)',
  description:
    'สรุปพยาธิวิทยาระบบกล้ามเนื้อ กระดูก และข้อฉบับสมบูรณ์: โรคกระดูกทางพันธุกรรม (Achondroplasia, Osteogenesis Imperfecta), โรคกระดูกเมแทบอลิก (Osteoporosis, Osteomalacia, Paget disease), กระบวนการสมานกระดูกหัก 4 ระยะ, การเปรียบเทียบข้อเสื่อม (OA) vs ข้ออักเสบรูมาตอยด์ (RA), โรคเกาต์ (Monosodium urate), และโรคกล้ามเนื้อเสื่อมดูเชนน์ (DMD)',
  order: 5,
  estimatedReadingMinutes: 25,
  tags: [
    'พยาธิวิทยา',
    'กระดูกและข้อ',
    'Musculoskeletal',
    'Osteoporosis',
    'Osteomalacia',
    'Paget Disease',
    'Fracture Healing',
    'Osteoarthritis',
    'Rheumatoid Arthritis',
    'Gout',
    'DMD',
  ],
  objectives: [
    'อธิบายพยาธิกำเนิดของโรคกระดูกพันธุกรรม Achondroplasia (FGFR3) และ Osteogenesis Imperfecta (Type I collagen & Blue sclera)',
    'เข้าใจเกณฑ์วินิจฉัยภาวะกระดูกพรุน (Osteopenia vs Osteoporosis) ด้วยค่า T-score จาก DXA scan และกลไกของฮอร์โมน Estrogen / PTH',
    'จำแนกพยาธิสภาพของโรค Paget disease of bone ทั้ง 3 ระยะ และลักษณะ Mosaic pattern',
    'ลำดับขั้นตอนกระบวนการสมานกระดูกหัก (Bone Fracture Healing) ทั้ง 4 ขั้นตอน',
    'เปรียบเทียบจุดแตกต่างทางคลินิกและพยาธิสภาพระหว่าง Osteoarthritis (OA) และ Rheumatoid Arthritis (RA) ได้อย่างแม่นยำ',
    'ระบุลักษณะผลึกกรดยูริกในโรคเกาต์ (Monosodium urate crystals) และพยาธิกำเนิดของ Duchenne Muscular Dystrophy (Dystrophin deficiency & Gowers sign)',
  ],
  sections: [
    {
      id: 'sec-msk-bone-intro',
      heading: '1. เซลล์กระดูกและการสร้าง-สลายเนื้อกระดูก (Bone Remodeling & Biology)',
      type: 'paragraph',
      content:
        'เนื้อกระดูกเป็นโครงสร้างที่มีการเปลี่ยนแปลงอยู่ตลอดชีวิต (Dynamic remodeling) ผ่านการทำงานร่วมกันของเซลล์ 3 ชนิด:\n1. Osteoblasts: ทำหน้าที่สังเคราะห์สารเคลือบกระดูก (Osteoid / Organic matrix) ซึ่งประกอบด้วย Type I Collagen ถึง 90% และกระตุ้นการสะสมผลึกแร่ธาตุ Hydroxyapatite\n2. Osteocytes: เซลล์กระดูกที่เจริญเต็มที่และฝังตัวอยู่ในช่อง Lacunae คอยรับแรงกล (Mechanosensation) และส่งสัญญาณควบคุมสมดุลแร่ธาตุ\n3. Osteoclasts: เซลล์ขนาดใหญ่หลายนิวเคลียสที่พัฒนามาจาก Monocyte-macrophage lineage ทำหน้าที่หลั่งกรดและเอนไซม์ย่อยสลายกระดูก (Bone resorption) โดยถูกควบคุมผ่านระบบ RANKL และ Osteoprotegerin (OPG)',
    },
    {
      id: 'sec-msk-3d-model',
      heading: '2. แบบจำลอง 3 มิติ: ระบบกระดูก ข้อ และรอยโรคพยาธิสภาพ (3D Bone & Joint Pathology Model)',
      type: 'simulation',
      content: {
        simulationId: 'realistic-bone-joint-3d',
        title: '3D Procedural Bone & Joint Simulator — กระดูก ข้อเข่า และรอยโรคเสื่อม/หัก/รูมาตอยด์',
        description:
          'หมุนสำรวจ 360° ตรวจดูเนื้อกระดูกทึบ Cortical bone, โพรงกระดูกพรุน Trabecular bone, รอยหักและ Callus, กระดูกงอกข้อเสื่อม (OA) เทียบกับเยื่อพานนัสรูมาตอยด์ (RA) และก้อนโทฟัสเกาต์ พร้อม HUD ปรับค่า T-score DXA แบบเรียลไทม์',
      },
    },
    {
      id: 'sec-msk-genetic-table',
      heading: '3. ตารางเปรียบเทียบโรคกระดูกทางพันธุกรรมและเมแทบอลิก (Developmental & Metabolic Bone Diseases)',
      type: 'table',
      content: {
        caption: 'การเปรียบเทียบพยาธิสภาพของโรคกระดูกสำคัญ 4 ชนิด',
        headers: [
          'ชื่อโรค (Disease)',
          'สาเหตุและการกลายพันธุ์',
          'พยาธิสภาพมหภาคและจุลทรรศน์',
          'ลักษณะเด่นทางคลินิก (Clinical Hallmark)',
        ],
        rows: [
          [
            'Achondroplasia',
            'Gain-of-function mutation ในยีน FGFR3 (ยับยั้งการแบ่งเซลล์กระดูกอ่อน)',
            'ความผิดปกติของการเจริญเติบโตที่ Epiphyseal growth plate ทำให้กระดูกยาวไม่ยืดตัว',
            'สาเหตุที่พบบ่อยที่สุดของ Dwarfism (แคระ), แขนขาสั้น ลำตัวยาวปกติ ศีรษะโต สติปัญญาปกติ',
          ],
          [
            'Osteogenesis Imperfecta (Brittle Bone Disease)',
            'Autosomal dominant mutation ในยีน COL1A1 / COL1A2 (บกพร่องในการสังเคราะห์ Type I Collagen)',
            'เนื้อกระดูกบางเปราะ คอร์เทกซ์บาง Trabeculae มีจำนวนลดลงอย่างรุนแรง',
            'กระดูกเปราะหักง่ายมากตั้งแต่แรกเกิด, ตาขาวเป็นสีฟ้า (Blue sclera จาก Choroid ใต้เยื่อตา), หูหนวกจากการนำเสียง',
          ],
          [
            'Osteomalacia (ผู้ใหญ่) / Rickets (เด็ก)',
            'ขาด Vitamin D หรือ Calcium ทำให้กระบวนการ Mineralization ล้มเหลว',
            'การสะสมของ Unmineralized osteoid matrix ปริมาณมาก กระดูกอ่อนและนิ่ม ไม่แข็งแรง',
            'เด็ก: ขาโก่งงอ (Bowing legs), Rachitic rosary ตามซี่โครง\nผู้ใหญ่: ปวดกระดูกทั่วตัว เสี่ยงต่อการหักแบบ Looser zones',
          ],
          [
            'Paget Disease of Bone (Osteitis Deformans)',
            'พยาธิสภาพการสลายและสร้างกระดูกไม่เป็นระเบียบ (Disordered remodeling) ร่วมกับปัจจัยไวรัส / พันธุกรรม',
            '3 ระยะ: Osteolytic -> Mixed -> Osteosclerotic พบ Mosaic / Jigsaw puzzle pattern of lamellar bone',
            'ศีรษะโตขึ้น (หมวกคับ), ปวดกระดูก, กระดูกโก่งงอ, Serum Alkaline Phosphatase (ALP) สูงเด่น เสี่ยงเกิด Osteosarcoma',
          ],
        ],
      },
    },
    {
      id: 'sec-msk-osteoporosis',
      heading: '3. โรคกระดูกพรุน (Osteoporosis) และการแปลผลมวลกระดูก DXA Scan',
      type: 'key-points',
      content: {
        title: 'เกณฑ์การประเมิน T-score และกลไกของภาวะกระดูกพรุน',
        points: [
          'เกณฑ์ T-score (จำนวนเท่าของค่าเบี่ยงเบนมาตรฐานเทียบกับผู้ใหญ่สุขภาพดีอายุ 30 ปี):\n• T-score >= -1.0: ความหนาแน่นมวลกระดูกปกติ (Normal BMD)\n• -2.5 < T-score < -1.0: ภาวะมวลกระดูกต่ำ (Osteopenia)\n• T-score <= -2.5: โรคกระดูกพรุน (Osteoporosis)\n• T-score <= -2.5 ร่วมกับมีกระดูกหักจากอุบัติเหตุไม่รุนแรง: กระดูกพรุนขั้นรุนแรง (Severe / Established Osteoporosis)',
          'Postmenopausal Osteoporosis: การลดลงของฮอร์โมน Estrogen ในหญิงหมดประจำเดือน ส่งผลให้การหลั่งสารอักเสบ (IL-1, IL-6, TNF) และ RANKL เพิ่มขึ้น กระตุ้น Osteoclasts ให้สลายกระดูกเนื้อโปร่ง (Trabecular bone) อย่างรวดเร็ว พบบ่อยที่กระดูกสันหลังยุบ (Vertebral compression fracture) และกระดูกข้อมือ (Colles fracture)',
          'Senile Osteoporosis: การเสื่อมตามอายุในผู้สูงอายุ (>70 ปี) ทั้งชายและหญิง เซลล์ Osteoblasts มีความสามารถในการสร้างกระดูกลดลง เกิดการสูญเสียทั้ง Trabecular และ Cortical bone มักเกิดกระดูกคอสะโพกหัก (Femoral neck fracture)',
        ],
      },
    },
    {
      id: 'sec-msk-fracture-healing',
      heading: '4. กระบวนการสมานกระดูกหัก 4 ระยะ (Four Stages of Bone Fracture Healing)',
      type: 'key-points',
      content: {
        title: 'ขั้นตอนการฟื้นฟูของกระดูกหักตามลำดับเวลา',
        points: [
          'ระยะที่ 1: Fracture Hematoma & Inflammation (1–7 วัน): หลอดเลือดที่ฉีกขาดทำให้เกิดก้อนเลือดคั่งรอบรอยหัก เซลล์อักเสบและ Macrophages เข้ามากำจัดเนื้อเยื่อตาย และหลั่ง Growth factors (PDGF, TGF-beta, VEGF)',
          'ระยะที่ 2: Soft Callus Formation (Fibrocartilaginous callus, 2–3 สัปดาห์): เส้นเลือดใหม่และ Fibroblasts เข้ามาสร้าง Granulation tissue พร้อม Chondrocytes สร้างกระดูกอ่อนทำหน้าที่เป็นเฝือกชีวภาพยึดหัวท้ายกระดูก',
          'ระยะที่ 3: Hard Callus Formation (Bony callus, 3–8 สัปดาห์): กระบวนการ Endochondral ossification เปลี่ยนกระดูกอ่อนให้กลายเป็นกระดูกทอประสาน (Woven bone) มีความแข็งแรงเพียงพอในการรับน้ำหนักเบาๆ',
          'ระยะที่ 4: Bone Remodeling (หลายเดือนถึงหลายปี): Osteoclasts และ Osteoblasts ปรับแต่งกระดูก Woven bone ให้กลับคืนเป็น Lamellar bone ที่มีระบบ Haversian system สมบูรณ์ตามแนวแรงเค้น (Wolff’s law)',
        ],
      },
    },
    {
      id: 'sec-msk-joints-table',
      heading: '5. ตารางเปรียบเทียบโรคข้อ: Osteoarthritis (OA) เทียบกับ Rheumatoid Arthritis (RA)',
      type: 'table',
      content: {
        caption: 'ข้อแตกต่างสำคัญระหว่างข้อเสื่อม (OA) และข้ออักเสบรูมาตอยด์ (RA)',
        headers: [
          'คุณลักษณะ (Feature)',
          'Osteoarthritis (OA) ข้อเสื่อม',
          'Rheumatoid Arthritis (RA) ข้ออักเสบรูมาตอยด์',
        ],
        rows: [
          [
            'พยาธิกำเนิด (Pathogenesis)',
            'ความเสื่อมจากการสึกหรอ (Wear & Tear) ของ Articular cartilage ตามอายุและการใช้งาน',
            'โรคภูมิคุ้มกันทำลายตนเองเรื้อรัง (Autoimmune) สร้าง Pannus ทำลายเยื่อบุและกระดูกอ่อน',
          ],
          [
            'ตำแหน่งข้อที่พบบ่อย',
            'ข้อนิ้วข้อปลาย (DIP: Heberden nodes), ข้อนิ้วข้อกลาง (PIP: Bouchard nodes), ข้อเข่า, ข้อสะโพก',
            'ข้อนิ้วข้อต้น (MCP), ข้อนิ้วข้อกลาง (PIP), ข้อมือ (มักเว้นข้อนิ้วข้อปลาย DIP)',
          ],
          [
            'รูปแบบการเกิด',
            'มักไม่สมมาตร (Asymmetrical) หรือขึ้นกับข้างที่ใช้งานมาก',
            'เกิดแบบสมมาตรทั้ง 2 ข้าง (Symmetrical polyarthritis)',
          ],
          [
            'อาการตึงขัดตอนเช้า (Morning Stiffness)',
            'ตึงขัดช่วงสั้นๆ (< 30 นาที) อาการดีขึ้นเมื่อพัก ใช้งานแล้วปวดมากขึ้น',
            'ตึงขัดช่วงเช้านาน (> 1 ชั่วโมง) ยิ่งขยับยิ่งเบาลง ตอนพักจะยิ่งตึงปวด',
          ],
          [
            'ลักษณะพยาธิวิทยา',
            'Cartilage fibrillation, Eburnation (กระดูกขัดมัน), Subchondral cysts, Osteophytes (กระดูกงอก)',
            'Synovial hyperplasia, Pannus formation, Ankylosis (ข้อติดแข็ง), Rheumatoid nodules',
          ],
          [
            'ผลตรวจทางห้องปฏิบัติการ',
            'ไม่มีการอักเสบในระบบ, ESR และ CRP ปกติ, Autoantibodies เป็นลบ',
            'Rheumatoid Factor (RF) เป็นบวก (~80%), Anti-CCP เป็นบวก (>95% มีความจำเพาะสูง), ESR/CRP สูง',
          ],
        ],
      },
    },
    {
      id: 'sec-msk-gout-muscle',
      heading: '6. โรคเกาต์ (Gout) และโรคของกล้ามเนื้อลาย (Skeletal Muscle Pathology)',
      type: 'callout',
      content: {
        variant: 'warning',
        title: 'สรุปพยาธิสภาพข้ออักเสบเกาต์และกล้ามเนื้อเสื่อมดูเชนน์ (DMD)',
        text: '• โรคเกาต์ (Gout): เกิดจากการสะสมของผลึก Monosodium Urate (MSU) ในข้อและเนื้อเยื่อรอบข้อ จากภาวะ Hyperuricemia ตรวจ Polarization microscopy พบผลึกรูปเข็ม (Needle-shaped crystals) ที่มี Negative birefringence (ผลึกเป็นสีเหลืองสดใสเมื่อขนานกับแกนแสง Polarizer) มักเกิดที่ข้อนิ้วหัวแม่เท้าข้อแรก (Podagra)\n• Duchenne Muscular Dystrophy (DMD): โรคทางพันธุกรรม X-linked recessive บกพร่องในการสร้างโปรตีน Dystrophin ซึ่งเชื่อมต่อ Cytoskeleton ของเซลล์กล้ามเนื้อเข้ากับ Extracellular matrix ทำให้เยื่อหุ้มเซลล์กล้ามเนื้อฉีกขาดง่ายเมื่อหดตัว เซลล์กล้ามเนื้อตายและถูกแทนที่ด้วยเนื้อเยื่อไขมันและพังผืด (Pseudohypertrophy ของน่อง) แสดงอาการสำคัญคือ Gowers Sign (ลุกขึ้นยืนโดยต้องใช้มือดันตามลำตัวและขา)',
      },
    },
    {
      id: 'sec-msk-qwen-reader',
      heading: '7. สไลด์และห้องทดลองจำลอง: Musculoskeletal Pathology (Interactive Suite)',
      type: 'legacy-html',
      content: {
        modulePath: '/qwen-modules/pathology/neuro-msk-hbp/index.html',
        title: 'พยาธิวิทยาระบบกระดูกและกล้ามเนื้อ — Interactive Lecture & Labs',
        description:
          'เข้าสู่ห้องทดลองจำลอง Lab 6: Bone Mineral Density (T-score / DXA) และ Lab 7: Fracture Healing Timeline พร้อมคลังข้อสอบ',
        initialHeight: 840,
      },
    },
  ],
  quiz: [
    {
      id: 'quiz-msk-1',
      question:
        'ทารกแรกเกิดมีประวัติกระดูกหักหลายตำแหน่งแม้ได้รับการดูแลอย่างเบามือ ตรวจร่างกายพบตาขาวเป็นสีฟ้า (Blue sclera) ทารกรายนี้น่าจะเป็นโรคใด และเกิดจากความผิดปกติของโครงสร้างใด?',
      options: [
        'Osteogenesis Imperfecta จากการกลายพันธุ์ในการสร้าง Type I Collagen',
        'Achondroplasia จากการกลายพันธุ์ของ FGFR3 receptor',
        'Rickets จากการขาดสารอาหาร Vitamin D อย่างรุนแรง',
        'Paget Disease of Bone จากการทำงานผิดปกติของ Osteoclasts',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Osteogenesis Imperfecta (Brittle Bone Disease) เกิดจากการกลายพันธุ์ในยีนสร้าง Type I Collagen ทำให้กระดูกเปราะหักง่าย และเนื่องจาก Type I Collagen เป็นองค์ประกอบหลักของ Sclera เมื่อคอลลาเจนบางลงจึงทำให้มองเห็นเส้นเลือด Choroid ด้านล่างเป็นสีฟ้า (Blue sclera)',
    },
    {
      id: 'quiz-msk-2',
      question:
        'ผลตรวจวัดความหนาแน่นมวลกระดูก (DXA Scan) ของหญิงหมดประจำเดือนอายุ 62 ปี พบ T-score ที่บริเวณ Femoral neck เท่ากับ -2.8 หญิงรายนี้ได้รับการวินิจฉัยภาวะใดตามเกณฑ์ของ WHO?',
      options: [
        'โรคกระดูกพรุน (Osteoporosis)',
        'ภาวะมวลกระดูกต่ำ (Osteopenia)',
        'ความหนาแน่นมวลกระดูกอยู่ในเกณฑ์ปกติ (Normal BMD)',
        'โรคกระดูกนิ่ม (Osteomalacia)',
      ],
      correctAnswerIndex: 0,
      explanation:
        'ตามเกณฑ์ของ WHO: ค่า T-score ที่น้อยกว่าหรือเท่ากับ -2.5 (T-score <= -2.5) วินิจฉัยเป็นโรคกระดูกพรุน (Osteoporosis) ในขณะที่ Osteopenia อยู่ระหว่าง -1.0 ถึง -2.5',
    },
    {
      id: 'quiz-msk-3',
      question:
        'ข้อใดเป็นลักษณะเฉพาะในการแยกแยะ Rheumatoid Arthritis (RA) ออกจาก Osteoarthritis (OA)?',
      options: [
        'RA มีอาการตึงขัดข้อตอนเช้า (Morning stiffness) นานกว่า 1 ชั่วโมง และเกิดกับข้อนิ้ว MCP/PIP แบบสมมาตรทั้ง 2 ข้าง',
        'RA มักเกิดกับข้อนิ้วข้อปลายสุด (DIP) และพบ Heberden nodes',
        'OA ตรวจพบค่า Anti-CCP และ Rheumatoid factor ในเลือดสูงมาก',
        'OA มีการสร้างเยื่อ Pannus เข้าทำลายข้ออย่างรวดเร็ว',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Rheumatoid Arthritis เป็นโรคข้ออักเสบจากภูมิคุ้มกัน มีอาการตึงขัดช่วงเช้านานกว่า 1 ชั่วโมง มีการอักเสบแบบสมมาตรที่ข้อนิ้ว MCP และ PIP ในขณะที่ OA ปวดเมื่อใช้งาน ตึงช่วงเช้าสั้นๆ (<30 นาที) และพบ Heberden nodes ที่ข้อนิ้ว DIP',
    },
    {
      id: 'quiz-msk-4',
      question:
        'เด็กชายอายุ 4 ขวบ เริ่มมีอาการเดินล้มบ่อย น่องทั้งสองข้างมีขนาดโตแน่น (Pseudohypertrophy) เมื่อให้นั่งลงกับพื้นและลุกขึ้นยืน เด็กต้องใช้มือทั้งสองข้างดันพื้นแล้วไต่ตามหัวเข่าและต้นขาขึ้นมา (Gowers sign) พยาธิกำเนิดของโรคนี้คืออะไร?',
      options: [
        'การขาดโปรตีน Dystrophin ในเยื่อหุ้มเซลล์กล้ามเนื้อ (X-linked recessive)',
        'การมี Autoantibody ต่อ Acetylcholine receptors ที่รอยต่อประสาทและกล้ามเนื้อ',
        'การสะสมของ Monosodium urate crystals ในกล้ามเนื้อลาย',
        'การกลายพันธุ์ของ FGFR3 ยับยั้งการเจริญเติบโตของมัดกล้ามเนื้อ',
      ],
      correctAnswerIndex: 0,
      explanation:
        'อาการน่องโตหลอก (Pseudohypertrophy) ร่วมกับ Gowers sign ในเด็กชายเป็นลักษณะคลาสสิกของ Duchenne Muscular Dystrophy (DMD) ซึ่งเกิดจากการกลายพันธุ์แบบ X-linked recessive ทำให้ขาดโปรตีน Dystrophin ส่งผลให้เซลล์กล้ามเนื้อฉีกขาดและสลายตัวกลายเป็นพังผืดและไขมัน',
    },
  ],
  simulationIds: ['realistic-bone-joint-3d'],
  updatedAt: '2026-09-23',
};

export default musculoskeletalChapter;
