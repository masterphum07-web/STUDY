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

describe('Content Registry & Data Schema', () => {
  it('should load all registered subjects and validate their schema', () => {
    const subjects = getAllSubjects();
    expect(subjects.length).toBeGreaterThanOrEqual(3);

    subjects.forEach((subject) => {
      const validation = validateSubject(subject);
      expect(validation.valid).toBe(true);
      expect(validation.errors).toHaveLength(0);
      expect(subject.chapterIds.length).toBeGreaterThan(0);
    });
  });

  it('should retrieve specific subject by ID', () => {
    const physics = getSubjectById('physics');
    expect(physics).toBeDefined();
    expect(physics?.title).toContain('ฟิสิกส์');

    const math = getSubjectById('mathematics');
    expect(math).toBeDefined();
    expect(math?.title).toContain('คณิตศาสตร์');

    const bio = getSubjectById('biology');
    expect(bio).toBeDefined();
    expect(bio?.title).toContain('ชีววิทยา');
  });

  it('should retrieve chapters by subject ID and validate their schema', () => {
    const physicsChapters = getChaptersBySubjectId('physics');
    expect(physicsChapters.length).toBe(2);

    physicsChapters.forEach((chapter) => {
      const validation = validateChapter(chapter);
      expect(validation.valid).toBe(true);
      expect(validation.errors).toHaveLength(0);
      expect(chapter.sections.length).toBeGreaterThan(0);
    });
  });

  it('should retrieve a specific chapter by ID', () => {
    const chapter = getChapterById('projectile-motion');
    expect(chapter).toBeDefined();
    expect(chapter?.subjectId).toBe('physics');
    expect(chapter?.title).toContain('โพรเจกไทล์');
  });

  it('should calculate next and previous chapters correctly', () => {
    const { prev, next } = getNextAndPrevChapter('physics', 'projectile-motion');
    expect(prev).toBeNull();
    expect(next).not.toBeNull();
    expect(next?.id).toBe('newton-laws');

    const lastNav = getNextAndPrevChapter('physics', 'newton-laws');
    expect(lastNav.prev?.id).toBe('projectile-motion');
    expect(lastNav.next).toBeNull();
  });

  it('should search subjects and chapters accurately', () => {
    const resultsPhysics = searchContent('โพรเจกไทล์');
    expect(resultsPhysics.length).toBeGreaterThan(0);
    expect(resultsPhysics.some((r) => r.id === 'projectile-motion')).toBe(true);

    const resultsMath = searchContent('พาราโบลา');
    expect(resultsMath.length).toBeGreaterThan(0);
    expect(resultsMath.some((r) => r.id === 'quadratic-functions')).toBe(true);

    const resultsBio = searchContent('เซลล์');
    expect(resultsBio.length).toBeGreaterThan(0);

    const resultsPhysio = searchContent('สรีรวิทยา');
    expect(resultsPhysio.length).toBeGreaterThan(0);
    expect(resultsPhysio.some((r) => r.id === 'physiology-respiratory-gi')).toBe(true);
  });

  it('should validate the physiology chapter with Qwen legacy-html section', () => {
    const physio = getChapterById('physiology-respiratory-gi');
    expect(physio).toBeDefined();
    expect(physio?.subjectId).toBe('biology');
    expect(physio?.sections.length).toBeGreaterThanOrEqual(6);

    const legacySection = physio?.sections.find((s) => s.type === 'legacy-html');
    expect(legacySection).toBeDefined();
    if (legacySection && typeof legacySection.content === 'object' && legacySection.content !== null) {
      expect((legacySection.content as { modulePath: string }).modulePath).toBe(
        '/qwen-modules/biology/physiostudy/index.html'
      );
    }
  });
});

