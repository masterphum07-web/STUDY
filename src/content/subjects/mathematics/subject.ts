import type { Subject } from '../../../types/content';

export const mathematicsSubject: Subject = {
  id: 'mathematics',
  title: 'คณิตศาสตร์ (Mathematics)',
  shortTitle: 'คณิตศาสตร์',
  description: 'พัฒนาทักษะการคิดวิเคราะห์พีชคณิต ฟังก์ชัน ตรีโกณมิติ และแคลคูลัส พร้อมกราฟแบบจำลองที่ปรับเปลี่ยนได้จริง',
  icon: 'Calculator',
  color: 'var(--subject-math)',
  bgGradient: 'var(--subject-math-gradient)',
  order: 2,
  chapterIds: ['quadratic-functions', 'trigonometry'],
};

export default mathematicsSubject;

