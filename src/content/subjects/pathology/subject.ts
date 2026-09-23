import type { Subject } from '../../../types/content';

export const pathologySubject: Subject = {
  id: 'pathology',
  title: 'พยาธิวิทยาทางการแพทย์ (Medical Pathology)',
  shortTitle: 'พยาธิวิทยา',
  description:
    'คลังสรุปพยาธิวิทยาทางการแพทย์ฉบับสมบูรณ์: ระบบสืบพันธุ์ (Reproductive System), ระบบประสาท (Neuropathology & Monro-Kellie), กระดูกและข้อ (Musculoskeletal), ตับ ถุงน้ำดี และตับอ่อน (Hepatobiliary & Pancreas) พร้อมแบบจำลอง 3D รอยโรคสมจริง และห้องทดลองจำลอง 8 สถานการณ์คลินิก',
  icon: 'Activity',
  color: '#be123c',
  bgGradient: 'linear-gradient(135deg, #9f1239 0%, #e11d48 100%)',
  order: 2,
  chapterIds: [
    'pathology-reproductive-male',
    'pathology-reproductive-female-breast',
    'pathology-reproductive-atlas',
    'pathology-neuropathology',
    'pathology-musculoskeletal',
    'pathology-hepatobiliary-pancreas',
    'pathology-multi-lab',
  ],
};

export default pathologySubject;
