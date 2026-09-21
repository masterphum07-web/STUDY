import { describe, it, expect } from 'vitest';
import {
  getAllSubjects,
  getSubjectById,
  getChapterById,
  getChaptersBySubjectId,
  getNextAndPrevChapter,
  searchContent,
} from '../src/content/registry';
import { validateSubject, validateChapter } from '../src/content/schema';

describe('Content Registry & Data Schema (Medical Physiology)', () => {
  it('should load registered physiology subject and validate its schema', () => {
    const subjects = getAllSubjects();
    expect(subjects.length).toBeGreaterThanOrEqual(1);

    subjects.forEach((subject) => {
      const validation = validateSubject(subject);
      expect(validation.valid).toBe(true);
      expect(validation.errors).toHaveLength(0);
      expect(subject.chapterIds.length).toBeGreaterThan(0);
    });
  });

  it('should retrieve specific physiology subject by ID', () => {
    const physio = getSubjectById('physiology');
    expect(physio).toBeDefined();
    expect(physio?.title).toContain('สรีรวิทยา');
    expect(physio?.chapterIds).toContain('respiratory-physiology');
    expect(physio?.chapterIds).toContain('gi-tract-physiology');
    expect(physio?.chapterIds).toContain('physiology-respiratory-gi');
  });

  it('should retrieve chapters for physiology and validate their schema', () => {
    const chapters = getChaptersBySubjectId('physiology');
    expect(chapters.length).toBe(3);

    chapters.forEach((chapter) => {
      const validation = validateChapter(chapter);
      expect(validation.valid).toBe(true);
      expect(validation.errors).toHaveLength(0);
      expect(chapter.sections.length).toBeGreaterThan(0);
    });
  });

  it('should retrieve specific chapters by ID and verify their properties', () => {
    const rsChapter = getChapterById('respiratory-physiology');
    expect(rsChapter).toBeDefined();
    expect(rsChapter?.subjectId).toBe('physiology');
    expect(rsChapter?.title).toContain('ระบบทางเดินหายใจ');

    const giChapter = getChapterById('gi-tract-physiology');
    expect(giChapter).toBeDefined();
    expect(giChapter?.subjectId).toBe('physiology');
    expect(giChapter?.title).toContain('ระบบทางเดินอาหาร');

    const suiteChapter = getChapterById('physiology-respiratory-gi');
    expect(suiteChapter).toBeDefined();
    expect(suiteChapter?.subjectId).toBe('physiology');
    expect(suiteChapter?.title).toContain('PhysioStudy');
  });

  it('should calculate next and previous chapters correctly', () => {
    const { prev, next } = getNextAndPrevChapter('physiology', 'respiratory-physiology');
    expect(prev).toBeNull();
    expect(next).not.toBeNull();
    expect(next?.id).toBe('gi-tract-physiology');

    const giNav = getNextAndPrevChapter('physiology', 'gi-tract-physiology');
    expect(giNav.prev?.id).toBe('respiratory-physiology');
    expect(giNav.next?.id).toBe('physiology-respiratory-gi');

    const lastNav = getNextAndPrevChapter('physiology', 'physiology-respiratory-gi');
    expect(lastNav.prev?.id).toBe('gi-tract-physiology');
    expect(lastNav.next).toBeNull();
  });

  it('should search subjects and chapters accurately', () => {
    const resultsPhysio = searchContent('สรีรวิทยา');
    expect(resultsPhysio.length).toBeGreaterThan(0);
    expect(resultsPhysio.some((r) => r.id === 'respiratory-physiology')).toBe(true);

    const resultsRS = searchContent('หายใจ');
    expect(resultsRS.length).toBeGreaterThan(0);
    expect(resultsRS.some((r) => r.id === 'respiratory-physiology')).toBe(true);

    const resultsGI = searchContent('ทางเดินอาหาร');
    expect(resultsGI.length).toBeGreaterThan(0);
    expect(resultsGI.some((r) => r.id === 'gi-tract-physiology')).toBe(true);
  });

  it('should validate Qwen legacy-html modules inside chapters', () => {
    const rsChapter = getChapterById('respiratory-physiology');
    const rsSection = rsChapter?.sections.find((s) => s.type === 'legacy-html');
    expect(rsSection).toBeDefined();
    if (rsSection && typeof rsSection.content === 'object' && rsSection.content !== null) {
      expect((rsSection.content as { modulePath: string }).modulePath).toContain('file=rs');
    }

    const giChapter = getChapterById('gi-tract-physiology');
    const giSection = giChapter?.sections.find((s) => s.type === 'legacy-html');
    expect(giSection).toBeDefined();
    if (giSection && typeof giSection.content === 'object' && giSection.content !== null) {
      expect((giSection.content as { modulePath: string }).modulePath).toContain('file=gi');
    }
  });
});
