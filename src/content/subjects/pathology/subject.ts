import type { Subject } from '../../../types/content';

export const pathologySubject: Subject = {
  id: 'pathology',
  title: 'พยาธิวิทยาทางการแพทย์ (Medical Pathology)',
  shortTitle: 'พยาธิวิทยา',
  description:
    'คลังสรุปพยาธิวิทยาระบบสืบพันธุ์ชายและหญิง (Disease of Reproductive System) ฉบับสมบูรณ์ 32 บทเรียน พร้อมแบบจำลอง 3D รอยโรคสมจริง และระบบวินิจฉัยเคสคลินิกขับเคลื่อนด้วย TypeSafe JEV AI 80%',
  icon: 'Activity',
  color: '#be123c',
  bgGradient: 'linear-gradient(135deg, #9f1239 0%, #e11d48 100%)',
  order: 2,
  chapterIds: [
    'pathology-reproductive-male',
    'pathology-reproductive-female-breast',
    'pathology-reproductive-atlas',
  ],
};

export default pathologySubject;
