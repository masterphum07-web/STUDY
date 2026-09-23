import type { Chapter } from '../../../../types/content';

export const neuropathologyChapter: Chapter = {
  id: 'pathology-neuropathology',
  subjectId: 'pathology',
  title: 'พยาธิวิทยาระบบประสาทส่วนกลางและส่วนปลาย (Neuropathology & Nervous System Diseases)',
  description:
    'สรุปพยาธิวิทยาระบบประสาทครบวงจร: Monro-Kellie Hypothesis, ภาวะความดันในกะโหลกสูง (ICP), สมองเคลื่อน (Herniation), เลือดออกในกะโหลก (EDH/SDH/SAH/ICH), สโตรกขาดเลือด (Stroke), เยื่อหุ้มสมองอักเสบ (Meningitis) และโรคเส้นประสาทส่วนปลาย พร้อมแบบจำลอง 3D สมจริง',
  order: 4,
  estimatedReadingMinutes: 25,
  tags: [
    'พยาธิวิทยา',
    'ระบบประสาท',
    'Neuropathology',
    'ICP',
    'Monro-Kellie',
    'Brain Herniation',
    'EDH',
    'SDH',
    'Stroke',
    'BEFAST',
    'Meningitis',
  ],
  objectives: [
    'อธิบายหลักการ Monro-Kellie Hypothesis และกลไกการเกิดภาวะความดันในกะโหลกศีรษะสูง (Increased ICP)',
    'จำแนกความแตกต่างทางพยาธิสภาพ คลินิก และหลอดเลือดต้นเหตุของ EDH, SDH, SAH และ Intracerebral hemorrhage',
    'ระบุตำแหน่งและอันตรายของภาวะสมองเคลื่อนทั้ง 3 รูปแบบ (Subfalcine, Uncal transtentorial, Tonsillar herniation)',
    'เข้าใจพยาธิกำเนิดของ Ischemic Stroke, ลำดับการเปลี่ยนแปลงของเนื้อสมองตาย (Liquefactive necrosis) และการประเมิน BEFAST',
    'วินิจฉัยโรคติดเชื้อระบบประสาท (Bacterial vs Viral Meningitis) และความผิดปกติของเส้นประสาทส่วนปลาย (Bell’s palsy, Trigeminal neuralgia, Diabetic neuropathy)',
  ],
  sections: [
    {
      id: 'sec-neuro-intro',
      heading: '1. กายวิภาคและการควบคุมความดันในกะโหลกศีรษะ (Monro–Kellie Hypothesis & ICP)',
      type: 'paragraph',
      content:
        'กะโหลกศีรษะของผู้ใหญ่เป็นกล่องกระดูกแข็งที่ไม่สามารถขยายตัวได้ (Rigid container) ภายในบรรจุองค์ประกอบ 3 ส่วนที่มีปริมาตรคงที่รวมประมาณ 1,400–1,500 mL ได้แก่: เนื้อสมอง (Brain tissue ~80%), เลือดในหลอดเลือด (Blood ~10%), และน้ำไขสันหลัง (CSF ~10%)\n\nตามสมมติฐาน Monro–Kellie Hypothesis: ผลรวมของปริมาตรทั้งสามต้องคงที่เสมอ (V_total = V_brain + V_blood + V_CSF). หากเกิดปริมาตรส่วนเกินเพิ่มขึ้นมา (Mass lesion เช่น ก้อนเลือดคั่ง เนื้องอก หรือสมองบวม) ร่างกายจะชดเชยในระยะแรกด้วยการระบาย CSF และเลือดดำลงสู่ช่องไขสันหลัง (Spatial compensation) ความดันในกะโหลก (ICP) จึงยังไม่สูงขึ้นมาก แต่เมื่อกลไกชดเชยหมดลง การเพิ่มขึ้นของปริมาตรเพียงเล็กน้อยจะทำให้ ICP พุ่งสูงขึ้นอย่างก้าวกระโดด (Exponential rise) ขัดขวางการไหลเวียนเลือดเข้าสมอง และนำไปสู่ภาวะสมองเคลื่อน (Herniation) จนถึงแก่ชีวิต',
    },
    {
      id: 'sec-neuro-3d-sim',
      heading: '2. แบบจำลอง 3 มิติ: ระบบประสาทและรอยโรคพยาธิวิทยา (3D Neuropathology & ICP HUD)',
      type: 'simulation',
      content: {
        simulationId: 'realistic-neuropathology-3d',
        title: '3D Procedural Neuropathology & Monro-Kellie Simulator',
        description:
          'หมุน ซูม และผ่าตัดขวางเพื่อตรวจดูโครงสร้างสมอง ก้านสมอง ซีรีเบลลัม โพรงสมอง และรอยโรคจำลองทั้ง 5 ชนิด พร้อมทดลองปรับขนาดก้อนเนื้อ/ก้อนเลือดเพื่อดูการเปลี่ยนแปลงของกราฟ ICP และ CPP แบบเรียลไทม์',
      },
    },
    {
      id: 'sec-neuro-hemorrhage-table',
      heading: '3. ตารางเปรียบเทียบพยาธิสภาพเลือดออกในกะโหลกศีรษะ (Intracranial Hemorrhages)',
      type: 'table',
      content: {
        caption: 'การเปรียบเทียบรอยโรคเลือดออกในสมอง 4 ชนิดสำคัญทางคลินิก',
        headers: [
          'ชนิดของเลือดออก',
          'ตำแหน่งทางกายวิภาค',
          'หลอดเลือดต้นเหตุ',
          'ลักษณะภาพรังสี (CT / MRI)',
          'ลักษณะเด่นทางคลินิก (Clinical Pearl)',
        ],
        rows: [
          [
            'Epidural Hematoma (EDH)',
            'ระหว่างกระโหลกศีรษะกับเยื่อดูรา (Dura mater)',
            'Middle meningeal artery (มักเกิดจาก Pterion fracture)',
            'รูปเลนส์นูน 2 ด้าน (Biconvex / Lenticular) ไม่ข้ามขอบรอยต่อกระโหลก (Sutures)',
            'มี Lucid interval (หมดสติชั่วคราว -> ตื่นรู้ตัวปกติ -> โคม่าเฉียบพลัน) เป็นภาวะฉุกเฉินวิกฤต',
          ],
          [
            'Subdural Hematoma (SDH)',
            'ระหว่าง Dura mater กับ Arachnoid mater',
            'Bridging veins ฉีกขาด',
            'รูปพระจันทร์เสี้ยว (Crescent-shaped) แผ่ตามความโค้งของสมอง ข้าม sutures ได้ แต่ไม่ข้าม Falx',
            'พบบ่อยในผู้สูงอายุ (สมองฝ่อ เส้นเลือดตึง) หรือเด็กลูกเขย่า (Shaken Baby Syndrome)',
          ],
          [
            'Subarachnoid Hemorrhage (SAH)',
            'ในช่อง Subarachnoid space (ชั้นเดียวกับที่ CSF ไหลเวียน)',
            'การแตกของ Berry aneurysm บริเวณ Circle of Willis (พบบ่อยที่ ACom)',
            'เลือดแทรกตามร่อง Sulci และ Basal cisterns',
            'ปวดศีรษะรุนแรงเฉียบพลันที่สุดในชีวิต ("Worst headache of my life / Thunderclap headache"), คอแข็ง',
          ],
          [
            'Intracerebral Hemorrhage (ICH)',
            'เลือดออกในเนื้อสมองโดยตรง (Parenchyma) พบบ่อยที่ Basal ganglia / Thalamus',
            'ความดันโลหิตสูงเรื้อรัง (Hypertension) ทำให้เกิด Charcot-Bouchard microaneurysms แตก',
            'ก้อนเลือดทึบรังสีฝังในเนื้อสมอง พร้อมสมองบวมโดยรอบ (Perilesional edema)',
            'อัมพาตครึ่งซีกเฉียบพลัน ชาครึ่งซีก ระดับความรู้สึกตัวลดลง มักเกิดขณะมีกิจกรรม',
          ],
        ],
      },
    },
    {
      id: 'sec-neuro-herniation',
      heading: '4. ภาวะสมองเคลื่อน (Brain Herniation Syndromes)',
      type: 'key-points',
      content: {
        title: 'รอยโรคสมองเคลื่อน 3 รูปแบบที่อันตรายถึงชีวิต',
        points: [
          'Subfalcine (Cingulate) Herniation: ซีกสมองข้างหนึ่งถูกดันให้ Cingulate gyrus เคลื่อนลอดใต้ Falx cerebri อาจกดเบียด Anterior Cerebral Artery (ACA) เกิดสมองขาดเลือดที่กลีบสมองส่วนหน้า ขาอ่อนแรง',
          'Transtentorial (Uncal) Herniation: ส่วน Uncus ของ Medial Temporal lobe ถูกดันผ่าน Tentorial incisura ลงไปกด Midbrain ส่งผลให้: (1) กดเส้นประสาทสมองคู่ที่ 3 (CN III) รูม่านตาข้างเดียวกันขยายและไม่ตอบสนองต่อแสง (Ipsilateral blown pupil), (2) กดเบียด Posterior Cerebral Artery (PCA) ตาบอดข้างตรงข้าม, และ (3) เกิด Duret hemorrhages เลือดออกในก้านสมอง',
          'Tonsillar Herniation: ก้อนสมองน้อยส่วน Cerebellar tonsils ถูกดันเคลื่อนทะลุรู Foramen magnum ลงไปบดอัดส่วน Medulla oblongata กดทับศูนย์ควบคุมการเต้นของหัวใจและการหายใจ (Cardiorespiratory arrest) เสียชีวิตในเวลาอันรวดเร็ว ข้อห้ามเด็ดขาด: ห้ามเจาะหลัง (Lumbar puncture) ในผู้ป่วยที่มี ICP สูงเพราะจะเร่งให้เกิด Tonsillar herniation',
        ],
      },
    },
    {
      id: 'sec-neuro-stroke-befast',
      heading: '5. สโตรก (Stroke) และการประเมินคัดกรองเร่งด่วน BEFAST',
      type: 'callout',
      content: {
        variant: 'danger',
        title: 'หลักการคัดกรอง BEFAST สำหรับโรคหลอดเลือดสมองเฉียบพลัน',
        text: '• B – Balance: เสียการทรงตัว เดินเซเฉียบพลัน เวียนศีรษะรุนแรง\n• E – Eyes: การมองเห็นผิดปกติเฉียบพลัน ตามัว มองเห็นภาพซ้อน (Diplopia) หรือตามืดบอดครึ่งซีก\n• F – Face: หน้าเบี้ยว มุมปากตก ยิ้มแล้วมุมปากไม่เท่ากัน\n• A – Arms: แขนขาข้างใดข้างหนึ่งอ่อนแรง ยกไม่ขึ้น หรือยกแล้วตกลงทันที\n• S – Speech: พูดไม่ชัด พูดไม่ออก หรือไม่เข้าใจคำพูด (Aphasia)\n• T – Time: เวลาคือชีวิต! รีบนำส่งโรงพยาบาลทันทีเพื่อรับยาละลายลิ่มเลือด rtPA ภายใน Golden Period 4.5 ชั่วโมง',
      },
    },
    {
      id: 'sec-neuro-infections-pns',
      heading: '6. การติดเชื้อระบบประสาทและโรคเส้นประสาทส่วนปลาย (Infections & PNS Disorders)',
      type: 'key-points',
      content: {
        title: 'จุดสรุปพยาธิสภาพ CNS Infections และ PNS Disorders',
        points: [
          'Bacterial Meningitis: เยื่อหุ้มสมองอักเสบจากแบคทีเรีย (เช่น S. pneumoniae, N. meningitidis) น้ำไขสันหลังขุ่นข้น ตรวจพบ Neutrophils สูง, โปรตีนสูงมาก, และน้ำตาล Glucose ต่ำมาก (<40% ของน้ำตาลในเลือด)',
          'Viral Meningitis / Encephalitis: น้ำไขสันหลังใส เม็ดเลือดขาวเป็น Lymphocytes เด่น, โปรตีนเพิ่มเล็กน้อย, น้ำตาลปกติ สาเหตุสำคัญคือ Enterovirus และ HSV-1 (มักโจมตี Temporal lobe)',
          'Bell’s Palsy: อัมพาตใบหน้าครึ่งซีกเฉียบพลันจากการอักเสบของเส้นประสาทสมองคู่ที่ 7 (Facial nerve) ทำให้หลับตาไม่สนิท ยักคิ้วไม่ขึ้น มุมปากตก เป็นแบบ Lower Motor Neuron (LMN) แตกต่างจาก Stroke ซึ่งผู้ป่วยยังยักคิ้วได้ (รอยโรคแบบ UMN หน้าผากได้รับใยประสาททั้งสองข้าง)',
          'Trigeminal Neuralgia: อาการปวดแปลบคล้ายไฟช็อตรุนแรงที่ใบหน้าตามแขนงของเส้นประสาทสมองคู่ที่ 5 (CN V: V2/V3) มักถูกกระตุ้นด้วยการเคี้ยว พูด หรือสัมผัสใบหน้า',
          'Diabetic Neuropathy: เส้นประสาทส่วนปลายเสื่อมจากเบาหวาน เกิดจาก Advanced Glycation End-products (AGEs) และภาวะขาดเลือดของหลอดเลือดฝอยที่เลี้ยงเส้นประสาท (Microangiopathy) แสดงอาการชาแบบ Glove-and-stocking เสี่ยงต่อการเกิดแผลที่เท้าและถูกตัดขา',
          'Myasthenia Gravis (MG): โรคแพ้ภูมิตัวเองที่มี Autoantibodies ต้าน Acetylcholine Receptors (AChR) ที่รอยต่อประสาทและกล้ามเนื้อ (NMJ) กล้ามเนื้ออ่อนแรงมากขึ้นเมื่อใช้งานต่อเนื่อง และดีขึ้นเมื่อได้พักผ่อน มีอาการหนังตาตก (Ptosis) และกลืนลำบาก',
        ],
      },
    },
    {
      id: 'sec-neuro-qwen-reader',
      heading: '7. สไลด์การสอนและห้องทดลองจำลองฉบับสมบูรณ์ (Neuropathology Interactive Suite)',
      type: 'legacy-html',
      content: {
        modulePath: '/qwen-modules/pathology/neuro-msk-hbp/index.html',
        title: 'พยาธิวิทยาระบบประสาท — Interactive Reader & Simulations',
        description:
          'ศึกษาเนื้อหาฉบับเต็มจากสไลด์อาจารย์ พร้อมห้องทดลองจำลอง ICP/Monro-Kellie, Stroke BEFAST Triage และ Myelin Conduction',
        initialHeight: 840,
      },
    },
  ],
  quiz: [
    {
      id: 'quiz-neuro-1',
      question:
        'ผู้ป่วยชายอายุ 25 ปี ประสบอุบัติเหตุศีรษะกระแทกข้างขมับ หมดสติไป 5 นาทีแล้วฟื้นคืนสติดี ต่อมา 2 ชั่วโมงมีอาการปวดศีรษะรุนแรงและซึมลงอย่างรวดเร็ว ตรวจ CT พบก้อนเลือดรูปเลนส์นูน (Biconvex) ไม่ข้ามขอบกะโหลก ภาวะนี้คืออะไรและเกิดจากการฉีกขาดของหลอดเลือดใด?',
      options: [
        'Epidural Hematoma (EDH) จากการฉีกขาดของ Middle Meningeal Artery',
        'Subdural Hematoma (SDH) จากการฉีกขาดของ Bridging Veins',
        'Subarachnoid Hemorrhage (SAH) จากการแตกของ Berry Aneurysm',
        'Intracerebral Hemorrhage (ICH) จาก Charcot-Bouchard microaneurysm',
      ],
      correctAnswerIndex: 0,
      explanation:
        'ประวัติ Lucid interval ร่วมกับก้อนเลือดรูปเลนส์นูน 2 ด้านที่ไม่ข้ามรอยต่อกะโหลก เป็นลักษณะเฉพาะของ Epidural Hematoma (EDH) ซึ่งส่วนใหญ่เกิดจากกระดูก Pterion แตกและฉีกขาด Middle Meningeal Artery',
    },
    {
      id: 'quiz-neuro-2',
      question:
        'ภาวะ Uncal (Transtentorial) Herniation มีลักษณะทางคลินิกที่สำคัญคืออะไร และเกิดจากการกดทับโครงสร้างใดเป็นลำดับแรก?',
      options: [
        'รูม่านตาข้างเดียวกันขยายกว้างและไม่ตอบสนองต่อแสง (Ipsilateral blown pupil) จากการกดทับ Oculomotor nerve (CN III)',
        'หยุดหายใจทันทีจากการกดทับ Respiratory center ใน Medulla',
        'อัมพาตครึ่งซีกข้างเดียวกันจากการกดเบียด Anterior Cerebral Artery (ACA)',
        'สูญเสียการได้ยินทั้งสองข้างจากการกดเบียด Vestibulocochlear nerve (CN VIII)',
      ],
      correctAnswerIndex: 0,
      explanation:
        'เมื่อ Uncus เคลื่อนผ่าน Tentorial incisura จะกดเบียดเส้นประสาทสมองคู่ที่ 3 (CN III) ส่งผลให้ Parasympathetic fibers ซึ่งอยู่รอบนอกของเส้นประสาทเป็นอัมพาต รูม่านตาข้างเดียวกับรอยโรคจึงขยายกว้างและไม่ตอบสนองต่อแสง',
    },
    {
      id: 'quiz-neuro-3',
      question:
        'ข้อใดถูกต้องเกี่ยวกับผลตรวจน้ำไขสันหลัง (CSF Analysis) ในผู้ป่วยที่เป็น Acute Bacterial Meningitis เมื่อเทียบกับภาวะปกติ?',
      options: [
        'CSF ขุ่นข้น, Neutrophils เด่นชัดเจน, โปรตีนสูงมาก, และน้ำตาล Glucose ลดต่ำลงมาก',
        'CSF ใส, Lymphocytes เด่น, โปรตีนปกติ, และน้ำตาล Glucose ปกติ',
        'CSF เป็นสีแดงสม่ำเสมอทุกหลอด, Eosinophils เด่น, โปรตีนต่ำ',
        'CSF ขุ่น, น้ำตาล Glucose สูงกว่าในกระแสเลือด, ปราศจากเซลล์เม็ดเลือดขาว',
      ],
      correctAnswerIndex: 0,
      explanation:
        'ใน Bacterial Meningitis เชื้อแบคทีเรียจะบริโภคน้ำตาลใน CSF ทำให้น้ำตาลลดต่ำลงอย่างมาก (<40% ของ blood glucose) ขณะที่ร่างกายส่ง Neutrophils จำนวนมากเข้ามาต่อสู้ และเกิดการรั่วของโปรตีนจากหลอดเลือดที่อักเสบทำให้น้ำไขสันหลังขุ่นข้น',
    },
    {
      id: 'quiz-neuro-4',
      question:
        'แพทย์ตรวจผู้ป่วยที่มุมปากตกข้างขวา หลับตาขวาไม่สนิท และยักคิ้วข้างขวาไม่ขึ้น ผู้ป่วยรายนี้มีความผิดปกติแบบใด?',
      options: [
        'Bell’s Palsy (Lower Motor Neuron lesion ของเส้นประสาทสมองคู่ที่ 7 ฝั่งขวา)',
        'Acute Ischemic Stroke (Upper Motor Neuron lesion ของสมองซีกซ้าย)',
        'Trigeminal Neuralgia ของเส้นประสาทสมองคู่ที่ 5',
        'Myasthenia Gravis ที่เป็นเฉพาะกล้ามเนื้อใบหน้า',
      ],
      correctAnswerIndex: 0,
      explanation:
        'หากมีความผิดปกติของกล้ามเนื้อใบหน้าทั้งส่วนบน (หน้าผาก ยักคิ้ว) และส่วนล่าง (มุมปาก) จะเป็นพยาธิสภาพแบบ Lower Motor Neuron (LMN) ของ Facial nerve (CN VII) เรียกว่า Bell’s Palsy ในขณะที่ Stroke (UMN lesion) ผู้ป่วยจะยังยักคิ้วได้เนื่องจากหน้าผากได้รับสัญญาณประสาทจากสมองทั้งสองข้าง',
    },
  ],
  updatedAt: '2026-09-23',
};

export default neuropathologyChapter;
