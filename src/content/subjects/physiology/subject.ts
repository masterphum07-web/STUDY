import type { Subject } from '../../../types/content';

export const physiologySubject: Subject = {
  id: 'physiology',
  title: 'สรีรวิทยาทางการแพทย์ (Medical Physiology)',
  shortTitle: 'สรีรวิทยา',
  description:
    'คลังสรุปและแบบจำลองสรีรวิทยาทางการแพทย์ ระบบทางเดินหายใจ (Physio-RS) และระบบทางเดินอาหาร (GI Tract) พร้อม 27 แบบจำลอง Interactive จาก Qwen',
  icon: 'Activity',
  color: '#0e8074',
  bgGradient: 'linear-gradient(135deg, #0e8074 0%, #0284c7 100%)',
  order: 1,
  chapterIds: ['respiratory-physiology', 'gi-tract-physiology', 'physiology-respiratory-gi'],
};

export default physiologySubject;

