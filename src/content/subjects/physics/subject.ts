import type { Subject } from '../../../types/content';

export const physicsSubject: Subject = {
  id: 'physics',
  title: 'ฟิสิกส์ (Physics)',
  shortTitle: 'ฟิสิกส์',
  description: 'เข้าใจธรรมชาติ กฎการเคลื่อนที่ พลังงาน และปรากฏการณ์รอบตัวอย่างเป็นระบบด้วยแบบจำลองเสมือนจริง',
  icon: 'Atom',
  color: 'var(--subject-physics)',
  bgGradient: 'var(--subject-physics-gradient)',
  order: 1,
  chapterIds: ['projectile-motion', 'newton-laws'],
};

export default physicsSubject;

