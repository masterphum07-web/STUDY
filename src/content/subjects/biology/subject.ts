import type { Subject } from '../../../types/content';

export const biologySubject: Subject = {
  id: 'biology',
  title: 'ชีววิทยา (Biology)',
  shortTitle: 'ชีววิทยา',
  description: 'ศึกษาปรากฏการณ์ของสิ่งมีชีวิต โครงสร้างเซลล์ กลไกพันธุศาสตร์ และระบบนิเวศอย่างลึกซึ้งและเห็นภาพจริง',
  icon: 'Dna',
  color: 'var(--subject-biology)',
  bgGradient: 'var(--subject-biology-gradient)',
  order: 3,
  chapterIds: ['cell-structure', 'genetics-dna', 'physiology-respiratory-gi'],
};

export default biologySubject;

