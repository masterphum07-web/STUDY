import type { Chapter } from '../../../../types/content';

export const hepatobiliaryPancreasChapter: Chapter = {
  id: 'pathology-hepatobiliary-pancreas',
  subjectId: 'pathology',
  title: 'พยาธิวิทยาของตับ ถุงน้ำดี และตับอ่อน (Diseases of Liver, Gallbladder & Pancreas)',
  description:
    'สรุปพยาธิวิทยาระบบทางเดินอาหารส่วนบนฉบับสมบูรณ์: กลไกและประเภทของดีซ่าน (Jaundice 3 ชนิด), ไวรัสตับอักเสบ A–E, พยาธิสภาพตับแข็ง (Cirrhosis) และภาวะความดันหลอดเลือดพอร์ทัลสูง, มะเร็งตับ HCC vs มะเร็งท่อน้ำดี CCA (พยาธิใบไม้ตับ), นิ่วในถุงน้ำดี (Cholelithiasis), ถุงน้ำดีอักเสบ, ตับอ่อนอักเสบเฉียบพลันและเรื้อรัง (Pancreatitis), และมะเร็งตับอ่อน',
  order: 6,
  estimatedReadingMinutes: 28,
  tags: [
    'พยาธิวิทยา',
    'โรคตับ',
    'ถุงน้ำดี',
    'ตับอ่อน',
    'Jaundice',
    'Hepatitis',
    'Cirrhosis',
    'Portal Hypertension',
    'HCC',
    'CCA',
    'Cholelithiasis',
    'Pancreatitis',
  ],
  objectives: [
    'จำแนกกลไกการเกิดและผลการตรวจทางห้องปฏิบัติการของดีซ่านทั้ง 3 กลุ่ม (Hemolytic, Hepatocellular, Obstructive jaundice)',
    'เข้าใจพยาธิสภาพของโรคไวรัสตับอักเสบ (HBsAg, HBeAg, Dane particle, Ground-glass hepatocytes) และโรคตับจากแอลกอฮอล์ (Mallory-Denk bodies)',
    'อธิบายผลแทรกซ้อนทางคลินิกของภาวะตับแข็งและความดันพอร์ทัลสูง (Ascites, Esophageal varices, Caput medusae, Hepatic encephalopathy)',
    'ระบุความแตกต่างระหว่างมะเร็งตับปฐมภูมิ (Hepatocellular Carcinoma - AFP) และมะเร็งท่อน้ำดี (Cholangiocarcinoma - Opisthorchis viverrini)',
    'เข้าใจปัจจัยเสี่ยงและพยาธิสภาพของนิ่วในถุงน้ำดี (Cholelithiasis 4Fs) และภาวะแทรกซ้อน Acute cholecystitis (Murphy’s sign)',
    'อธิบายพยาธิกำเนิดของ Acute Pancreatitis (Auto-digestion & Fat necrosis), การตรวจเอนไซม์ Amylase/Lipase, และอาการแสดงของมะเร็งหัวตับอ่อน (Courvoisier sign & Trousseau syndrome)',
  ],
  sections: [
    {
      id: 'sec-hbp-anatomy',
      heading: '1. กายวิภาคและโครงสร้างจุลทรรศน์ของตับ (Liver Lobular Architecture)',
      type: 'paragraph',
      content:
        'ตับเป็นอวัยวะภายในที่ใหญ่ที่สุดในร่างกาย มีน้ำหนักประมาณ 1.2–1.6 กิโลกรัม แบ่งเป็นกลีบขวา (Right lobe ซึ่งมีขนาดใหญ่กว่ากลีบซ้ายประมาณ 6 เท่า) และกลีบซ้าย หน่วยทำงานย่อยระดับจุลภาคคือ Classical Hepatic Lobule ซึ่งมีลักษณะเป็นรูปหกเหลี่ยม (Hexagonal structure) ตรงกลางมี Central Vein และที่มุมแต่ละมุมมี Portal Triad ประกอบด้วย 3 โครงสร้างสำคัญ:\n1. แขนงของหลอดเลือดดำพอร์ทัล (Portal Venule): ลำเลียงเลือดที่มีสารอาหารจากทางเดินอาหารเข้าสู่ตับ\n2. แขนงของหลอดเลือดแดงตับ (Hepatic Arteriole): ลำเลียงเลือดที่มีออกซิเจนสูงมาหล่อเลี้ยงเซลล์ตับ\n3. ท่อน้ำดี (Bile Ductule): รับน้ำดีที่สร้างจากเซลล์ตับส่งออกไปยังถุงน้ำดีและลำไส้เล็ก\n\nเลือดจาก Portal venule และ Hepatic arteriole จะไหลผ่านโพรงหลอดเลือดฝอย Sinusoids สัมผัสกับเซลล์ตับ (Hepatocytes) และเซลล์จับกิน Kupffer cells ก่อนไหลไปรวมกันที่ Central vein แล้วออกสู่ Hepatic veins กลับเข้าหัวใจ',
    },
    {
      id: 'sec-hbp-jaundice-table',
      heading: '2. ตารางเปรียบเทียบกลไกและผลตรวจของภาวะดีซ่าน (Differential Diagnosis of Jaundice)',
      type: 'table',
      content: {
        caption: 'การเปรียบเทียบพยาธิสรีรวิทยาของดีซ่าน 3 ชนิดสำคัญ',
        headers: [
          'ชนิดของดีซ่าน (Jaundice Type)',
          'กลไกการเกิดโรค (Mechanism)',
          'ระดับ Bilirubin ในเลือด',
          'สีของปัสสาวะและอุจจาระ',
          'เอนไซม์ตับเด่น (Liver Enzymes)',
        ],
        rows: [
          [
            'Pre-hepatic (Hemolytic Jaundice)',
            'เม็ดเลือดแดงถูกทำลายมากเกินปกติ (เช่น Thalassemia, Autoimmune hemolytic anemia) เกินความสามารถของตับในการจับ Conjugation',
            'Unconjugated (Indirect) Bilirubin สูงเด่น',
            'ปัสสาวะสีปกติ (เพราะ Unconjugated ไม่ละลายน้ำ ไม่ผ่านไต), อุจจาระสีเข้ม (Urobilinogen สูง)',
            'AST, ALT, ALP ปกติ (LDH สูงจาก hemolysis)',
          ],
          [
            'Hepatic (Hepatocellular Jaundice)',
            'เซลล์ตับอักเสบหรือถูกทำลาย (เช่น Viral hepatitis, Cirrhosis, Paracetamol toxicity) เสียทั้งการจับ Conjugate และการหลั่งน้ำดี',
            'สูงทั้ง Conjugated และ Unconjugated Bilirubin (Mixed)',
            'ปัสสาวะสีเข้มปานกลาง, สีอุจจาระปกติหรือซีดลงเล็กน้อย',
            'AST และ ALT พุ่งสูงเด่น (>1,000 U/L ใน acute viral hepatitis)',
          ],
          [
            'Post-hepatic (Obstructive / Cholestatic)',
            'การอุดตันของท่อน้ำดี (เช่น นิ่ว Common bile duct stone, มะเร็งหัวตับอ่อน, Cholangiocarcinoma) น้ำดีไหลลงลำไส้ไม่ได้',
            'Conjugated (Direct) Bilirubin สูงเด่นมาก',
            'ปัสสาวะสีชาเข้มจัด (Tea-colored urine จากการรั่วของ conjugated bilirubin ออกไต), อุจจาระสีซีดคล้ายดินเหนียว (Clay-colored stool), คันตามตัว (Pruritus)',
            'Alkaline Phosphatase (ALP) และ GGT สูงเด่นมาก (มักสูง >3 เท่าของค่าปกติ)',
          ],
        ],
      },
    },
    {
      id: 'sec-hbp-hepatitis',
      heading: '3. โรคไวรัสตับอักเสบและโรคตับจากแอลกอฮอล์ (Hepatitis & Alcoholic Liver Disease)',
      type: 'key-points',
      content: {
        title: 'สรุปลักษณะเด่นของไวรัสตับอักเสบและพยาธิสภาพตับจากแอลกอฮอล์',
        points: [
          'Hepatitis A Virus (HAV): ติดต่อทาง Fecal-oral (อาหารและน้ำปนเปื้อน) ทำให้เกิด Acute hepatitis เท่านั้น ไม่เป็นพาหะเรื้อรัง และไม่กลายเป็นตับแข็งหรือมะเร็ง',
          'Hepatitis B Virus (HBV): ไวรัส DNA ชนิดเดียว (Hepadnavirus) ตัวไวรัสสมบูรณ์เรียกว่า Dane particle ติดต่อทางเลือด เพศสัมพันธ์ และจากแม่สู่ลูก ในเซลล์ตับจะพบลักษณะ Ground-glass hepatocytes (Cytoplasm ขุ่นมัวจากการสะสม HBsAg) เป็นสาเหตุสำคัญของ Hepatocellular Carcinoma แม้ยังไม่เกิดตับแข็ง',
          'การแปลผล Serology ของ HBV:\n• HBsAg (+): มีการติดเชื้อในปัจจุบัน (Active infection)\n• Anti-HBs (+): มีภูมิคุ้มกัน (จากการหายจากโรคหรือได้รับวัคซีน)\n• HBeAg (+): ไวรัสกำลังแบ่งตัวสูง แพร่เชื้อได้ง่ายมาก\n• Anti-HBc IgM (+): การติดเชื้อระยะเฉียบพลัน (Acute infection window)',
          'Hepatitis C Virus (HCV): ติดต่อทางเลือด (ผู้ใช้ยาเสพติดฉีดเข้าเส้นเลือด) กว่า 80% กลายเป็นการติดเชื้อเรื้อรัง (Chronic hepatitis) นำไปสู่ Cirrhosis และ HCC',
          'Alcoholic Liver Disease (ลำดับ 3 ขั้น):\n1. Hepatic Steatosis (Fatty liver): ไขมันสะสมในเซลล์ตับ เกิดขึ้นเร็วและย้อนกลับสู่ปกติได้เมื่อหยุดดื่ม\n2. Alcoholic Hepatitis: เซลล์ตับบวม (Ballooning degeneration), มี Neutrophils ล้อมรอบ, และพบลักษณะสำคัญคือ Mallory-Denk bodies (ก้อนโปรตีน Eosinophilic Hyaline รวมกลุ่มในเซลล์)\n3. Alcoholic Cirrhosis: ตับแข็งระยะสุดท้าย ชนิด Micronodular มีพังผืดล้อมรอบเนื้อตับ',
        ],
      },
    },
    {
      id: 'sec-hbp-cirrhosis-portal-htn',
      heading: '4. โรคตับแข็งและผลสืบเนื่องจากความดันพอร์ทัลสูง (Cirrhosis & Portal Hypertension)',
      type: 'callout',
      content: {
        variant: 'danger',
        title: 'ผลแทรกซ้อนวิกฤตของความดันหลอดเลือดพอร์ทัลสูง (Consequences of Portal HTN)',
        text: 'เมื่อเนื้อตับถูกแทนที่ด้วยพังผืด (Bridging fibrosis) และ Regenerative nodules แรงต้านในตับจะสูงขึ้น ทำให้ความดันใน Portal venous system พุ่งสูง (>10–12 mmHg) เกิดผลตามมา 5 ประการ:\n1. ท้องมาน (Ascites): น้ำคั่งในช่องท้องจากความดัน Hydrostatic สูง ร่วมกับตับสังเคราะห์ Albumin ลดลง (Hypoalbuminemia)\n2. หลอดเลือดขอดในหลอดอาหาร (Esophageal Varices): เลือดไหลย้อนเข้า Left gastric vein -> Azygos vein หลอดเลือดดำที่หลอดอาหารโป่งพองและแตกออก ทำให้ผู้ป่วยอาเจียนเป็นเลือดสดปริมาณมาก (Massive hematemesis) อัตราเสียชีวิตสูงมาก\n3. ม้ามโต (Splenomegaly): เลือดคั่งในม้าม นำไปสู่ภาวะ Hypersplenism ทำลายเกล็ดเลือดและเม็ดเลือดแดง ทำให้เลือดออกง่ายและซีด\n4. หลอดเลือดดำหน้าท้องโป่งพอง (Caput Medusae): หลอดเลือดดำรอบสะดือขยายตัวเป็นเส้นนูนแผ่กระจาย\n5. กลุ่มอาการทางสมองจากโรคตับ (Hepatic Encephalopathy): สารพิษโดยเฉพาะ Ammonia ไม่ผ่านการเปลี่ยนรูปที่ตับ เข้าสู่กระแสเลือดไปทำลายสมอง ทำให้ซึม สับสน มีอาการสั่นแบบ Asterixis (Flapping tremor) และโคม่า',
      },
    },
    {
      id: 'sec-hbp-tumors-table',
      heading: '5. ตารางเปรียบเทียบเนื้องอกและมะเร็งของตับ (Hepatic Neoplasms)',
      type: 'table',
      content: {
        caption: 'การเปรียบเทียบพยาธิสภาพของเนื้องอกและมะเร็งตับที่พบบ่อย',
        headers: [
          'ชนิดของก้อนเนื้อ (Tumor Type)',
          'พยาธิกำเนิดและความสัมพันธ์ (Etiology)',
          'ลักษณะมหภาค (Gross Pathology)',
          'Tumor Marker & Clinical Features',
        ],
        rows: [
          [
            'Cavernous Hemangioma (พบบ่อยที่สุดในกลุ่ม Benign)',
            'ความผิดปกติแต่กำเนิดของหลอดเลือดใต้ Capsule ตับ',
            'ก้อนเนื้อนุ่ม สีแดงคล้ำ ขอบเขตชัด ใต้ผิวตับ มีโพรงเลือดขนาดใหญ่กั้นด้วยผนังบางๆ',
            'มักไม่มีอาการ ตรวจพบโดยบังเอิญจาก Ultrasound / CT ห้ามเจาะชิ้นเนื้อ (Biopsy) เพราะเสี่ยงเลือดออกรุนแรง',
          ],
          [
            'Hepatocellular Carcinoma (HCC)',
            'มะเร็งปฐมภูมิที่พบบ่อยที่สุด สัมพันธ์กับ HBV, HCV, Cirrhosis, แอลกอฮอล์, และสารพิษ Aflatoxin B1',
            'ก้อนเดี่ยวขนาดใหญ่ หรือก้อนกระจายหลายจุด สีเหลืองอมเขียว (เนื่องจากเซลล์มะเร็งยังสร้างน้ำดีได้) แทรกซึมเข้าหลอดเลือด Portal vein ได้ง่าย',
            'Serum Alpha-Fetoprotein (AFP) สูงเด่น (>400–500 ng/mL บ่งชี้มะเร็งชัดเจน), น้ำหนักลด, ปวดแน่นชายโครงขวา',
          ],
          [
            'Cholangiocarcinoma (CCA)',
            'มะเร็งของเยื่อบุท่อน้ำดี พบบ่อยมากในประเทศไทย (ภาคอีสาน) สัมพันธ์กับการติดเชื้อพยาธิใบไม้ตับ (Opisthorchis viverrini) และสารไนโตรซามีน',
            'ก้อนเนื้อแน่น แข็ง สีเทาขาว ขอบเขตไม่เรียบ มีพังผืดหนาแน่นมาก (Desmoplastic stroma) ไม่สร้างน้ำดี',
            'Serum CA 19-9 และ CEA สูง, ผู้ป่วยมาด้วยอาการดีซ่านอุดกั้น น้ำหนักลด ตับโต ผอมแห้ง',
          ],
          [
            'Metastatic Liver Tumors (มะเร็งแพร่กระจาย)',
            'พบได้บ่อยกว่ามะเร็งปฐมภูมิของตับทั้งหมด ต้นกำเนิดหลักมาจาก Colon, Pancreas, Stomach, Breast, Lung',
            'พบก้อนเนื้อกระจายตัวจำนวนมากทั้งสองกลีบตับ (Multiple nodules) มีรอยบุ๋มตรงกลางก้อน (Central Umbilication จากเนื้อตายขาดเลือด)',
            'มีอาการของมะเร็งปฐมภูมิเดิมร่วมกับตับโตและการทำงานของตับทรุดลง',
          ],
        ],
      },
    },
    {
      id: 'sec-hbp-gallbladder-pancreas',
      heading: '6. พยาธิสภาพของถุงน้ำดีและตับอ่อน (Gallbladder & Pancreatic Pathology)',
      type: 'key-points',
      content: {
        title: 'สรุปพยาธิสภาพนิ่วถุงน้ำดี ตับอ่อนอักเสบ และมะเร็งหัวตับอ่อน',
        points: [
          'Cholelithiasis (นิ่วในถุงน้ำดี): พบบ่อยในเพศหญิง สัมพันธ์กับกฎ 4Fs (Female, Fat, Forty, Fertile) แบ่งเป็น:\n• Cholesterol Stones (~80%): สีนวลเหลือง เกิดจากคอเลสเตอรอลในน้ำดีอิ่มตัวเกิน (Supersaturation)\n• Pigment Stones (~20%): สีนิลดำ (Black stones เกิดจาก Chronic hemolysis) หรือสีน้ำตาล (Brown stones สัมพันธ์กับการติดเชื้อแบคทีเรียหรือพยาธิในท่อน้ำดี)',
          'Acute Cholecystitis: เกิดจากนิ่วไปติดขัดที่คอถุงน้ำดีหรือท่อ Cystic Duct ทำให้ถุงน้ำดีบวมโต ผนังหนา มีอาการปวดจุกชายโครงขวาอย่างรุนแรงร้าวไปสะบักขวา ตรวจร่างกายพบ Murphy’s Sign เป็นบวก (ผู้ป่วยสะดุ้งหยุดหายใจขณะแพทย์กดใต้ชายโครงขวาแล้วให้หายใจเข้าลึก)',
          'Acute Pancreatitis: การกระตุ้นเอนไซม์ย่อยอาหารก่อนกำหนดในตับอ่อน (Premature activation ของ Trypsinogen เป็น Trypsin) ส่งผลให้เกิด Auto-digestion ย่อยทำลายเนื้อตับอ่อนและหลอดเลือด เกิด Enzymatic Fat Necrosis (ไขมันรวมตัวกับ Calcium เกิดเป็นคราบขาวคล้ายสบู่ Saponification ทำให้แคลเซียมในเลือดต่ำ Hypocalcemia) สารสำคัญในเลือดคือ Serum Amylase และ Serum Lipase พุ่งสูงเด่น (>3 เท่าของปกติ โดย Lipase มีความจำเพาะสูงกว่า) อาการรุนแรงอาจพบรอยจ้ำเลือดรอบสะดือ (Cullen’s sign) หรือที่สีข้าง (Grey Turner’s sign)',
          'Chronic Pancreatitis: การอักเสบเรื้อรังซ้ำซาก ส่วนใหญ่เกิดจากสุราเรื้อรัง ทำให้เนื้อตับอ่อนฝ่อตัว เกิดพังผืด (Irreversible fibrosis) และหินปูนเกาะ (Calcification) นำไปสู่ภาวะดูดซึมอาหารบกพร่อง ถ่ายอุจจาระเป็นไขมันลอยน้ำ (Steatorrhea) และเบาหวาน',
          'Pancreatic Adenocarcinoma: มะเร็งท่อตับอ่อน พบบ่อยที่สุดบริเวณหัวตับอ่อน (Head of pancreas ~60–70%) ทำให้เกิดอาการดีซ่านอุดกั้นแบบไม่ปวด (Painless Progressive Jaundice) และคลำพบถุงน้ำดีโตแต่ไม่เจ็บ เรียกว่า Courvoisier’s Sign / Courvoisier’s Law นอกจากนี้ยังอาจพบ Migratory thrombophlebitis (Trousseau syndrome)',
        ],
      },
    },
    {
      id: 'sec-hbp-qwen-reader',
      heading: '7. สไลด์และห้องทดลองจำลองฉบับเต็ม: Hepatobiliary & Pancreas Interactive Labs',
      type: 'legacy-html',
      content: {
        modulePath: '/qwen-modules/pathology/neuro-msk-hbp/index.html',
        title: 'โรคตับ ถุงน้ำดี และตับอ่อน — Interactive Suite',
        description:
          'เข้าสู่ห้องทดลองจำลอง Lab 1 (Bilirubin & Jaundice Simulator), Lab 2 (Liver Cirrhosis Progression & Portal HTN), และ Lab 8 (Gallstone Formation Simulator)',
        initialHeight: 840,
      },
    },
  ],
  quiz: [
    {
      id: 'quiz-hbp-1',
      question:
        'ผู้ป่วยหญิงอายุ 48 ปี มีอาการตัวเหลืองตาเหลือง ปัสสาวะสีชาเข้มจัด อุจจาระสีซีดคล้ายดินเหนียว และมีอาการคันตามผิวหนัง ผลตรวจเลือดพบ Total bilirubin 8.5 mg/dL, Direct (Conjugated) bilirubin 7.2 mg/dL, และระดับ Alkaline Phosphatase (ALP) สูงถึง 480 U/L ภาวะนี้จัดเป็นดีซ่านชนิดใดและเกิดจากสาเหตุใด?',
      options: [
        'Post-hepatic (Obstructive Jaundice) จากการอุดตันของท่อน้ำดี เช่น นิ่วใน Common Bile Duct',
        'Pre-hepatic (Hemolytic Jaundice) จากการแตกทำลายของเม็ดเลือดแดงอย่างรุนแรง',
        'Hepatic Jaundice จากการติดเชื้อไวรัสตับอักเสบเอแบบเฉียบพลัน',
        'Physiological Jaundice จากการขาดเอนไซม์ UGT ในวัยแรกเกิด',
      ],
      correctAnswerIndex: 0,
      explanation:
        'Conjugated bilirubin สูงเด่น ร่วมกับปัสสาวะสีชาเข้ม (Conjugated bilirubin ละลายน้ำรั่วออกไต), อุจจาระสีซีดคล้ายดินเหนียว (น้ำดีลงสู่ทางเดินอาหารไม่ได้), อาการคันจากเกลือน้ำดีคั่ง และ ALP สูงเด่น เป็นลักษณะคลาสสิกของ Post-hepatic / Obstructive Jaundice จากการอุดตันของท่อน้ำดี',
    },
    {
      id: 'quiz-hbp-2',
      question:
        'ชายไทยอายุ 55 ปี ภูมิลำเนาอยู่ภาคตะวันออกเฉียงเหนือ มีประวัติชอบรับประทานก้อยปลาดิบเป็นประจำ มาพบแพทย์ด้วยอาการเบื่ออาหาร น้ำหนักลดลง 8 กิโลกรัมใน 2 เดือน และมีอาการตัวเหลือง ผล CT ตรวจพบก้อนเนื้อแข็งสีเทาขาวบริเวณขั้วตับร่วมกับท่อน้ำดีขยายตัว ผู้ป่วยรายนี้น่าจะเป็นมะเร็งชนิดใดและสัมพันธ์กับเชื้อใดมากที่สุด?',
      options: [
        'Cholangiocarcinoma (CCA) สัมพันธ์กับการติดเชื้อพยาธิใบไม้ตับ Opisthorchis viverrini',
        'Hepatocellular Carcinoma (HCC) สัมพันธ์กับสารพิษ Aflatoxin B1',
        'Metastatic Adenocarcinoma สัมพันธ์กับเชื้อ Helicobacter pylori',
        'Cavernous Hemangioma สัมพันธ์กับการติดเชื้อ Hepatitis A Virus',
      ],
      correctAnswerIndex: 0,
      explanation:
        'มะเร็งท่อน้ำดี (Cholangiocarcinoma) พบบ่อยมากในภาคอีสานของไทย โดยมีความสัมพันธ์อย่างใกล้ชิดกับการรับประทานปลาน้ำจืดเกล็ดขาวดิบที่มีตัวอ่อนพยาธิใบไม้ตับ (Opisthorchis viverrini) ซึ่งก่อให้เกิดการอักเสบเรื้อรังของท่อน้ำดีจนกลายเป็นมะเร็ง',
    },
    {
      id: 'quiz-hbp-3',
      question:
        'ผู้ป่วยโรคตับแข็ง (Liver Cirrhosis) เกิดภาวะความดันในระบบหลอดเลือดพอร์ทัลสูง (Portal Hypertension) กลไกดังกล่าวส่งผลให้เกิดภาวะแทรกซ้อนที่เป็นอันตรายถึงชีวิตมากที่สุดในข้อใด?',
      options: [
        'การแตกของหลอดเลือดขอดในหลอดอาหาร (Ruptured Esophageal Varices) ทำให้เกิด Massive Hematemesis',
        'การเกิดภาวะ Caput medusae บริเวณรอบสะดือ',
        'การเกิดภาวะม้ามโต (Splenomegaly) อย่างช้าๆ',
        'การสะสมของน้ำในช่องท้อง (Ascites) ระดับเล็กน้อย',
      ],
      correctAnswerIndex: 0,
      explanation:
        'ภาวะแทรกซ้อนที่เฉียบพลันและเป็นอันตรายถึงชีวิตมากที่สุดของ Portal Hypertension คือการแตกฉีกขาดของหลอดเลือดขอดที่หลอดอาหาร (Esophageal Varices) ซึ่งทำให้เกิดการอาเจียนเป็นเลือดสดปริมาณมหาศาล (Massive upper GI bleeding) นำไปสู่ Hypovolemic shock และเสียชีวิตได้อย่างรวดเร็ว',
    },
    {
      id: 'quiz-hbp-4',
      question:
        'ชายอายุ 45 ปี มีประวัติดื่มสุราหนักเป็นประจำ ถูกนำส่งห้องฉุกเฉินด้วยอาการปวดท้องรุนแรงบริเวณลิ้นปี่ ปวดทะลุไปข้างหลัง คลื่นไส้อาเจียน ผลตรวจเลือดพบ Serum Amylase 850 U/L และ Serum Lipase 1,200 U/L แพทย์สังเกตพบรอยเขียวคล้ำรอบสะดือ (Cullen’s sign) ภาวะนี้คืออะไรและรอยโรค fat necrosis เกิดจากกลไกใด?',
      options: [
        'Acute Pancreatitis โดยเกิด Enzymatic Fat Necrosis จากเอนไซม์ Lipase ย่อยสลายไขมันแล้วจับกับ Calcium (Saponification)',
        'Acute Cholecystitis จากการอักเสบติดเชื้อแบคทีเรีย E. coli ในถุงน้ำดี',
        'Peptic Ulcer Perforation จากกรดในกระเพาะอาหารกัดทะลุ',
        'Acute Appendicitis ที่มีไส้ติ่งแตกทะลุเข้าสู่ช่องท้อง',
      ],
      correctAnswerIndex: 0,
      explanation:
        'อาการปวดท้องรุนแรงทะลุหลังหลังดื่มสุรา ร่วมกับ Amylase และ Lipase สูงเกิน 3 เท่า และพบลักษณะ Cullen’s sign เป็นลักษณะเฉพาะของ Acute Pancreatitis รอยโรคทางพยาธิวิทยาที่สำคัญคือ Enzymatic Fat Necrosis ซึ่งเกิดจาก Lipase หลุดออกมาย่อยสลาย Triacylglycerol เป็นกรดไขมันอิสระ แล้วไปจับกับเกลือแคลเซียมกลายเป็นสบู่ขาวขุ่น (Saponification)',
    },
  ],
  updatedAt: '2026-09-23',
};

export default hepatobiliaryPancreasChapter;
