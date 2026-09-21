import type { SectionType } from '../types/content';

const VALID_SECTION_TYPES: readonly SectionType[] = [
  'paragraph',
  'heading',
  'bullet-list',
  'numbered-list',
  'callout',
  'key-points',
  'formula',
  'example',
  'table',
  'image',
  'quote',
  'simulation',
  'legacy-html',
  'quiz',
] as const;

export interface ValidationError {
  path: string;
  message: string;
}

export function validateSubject(subject: unknown): { valid: boolean; errors: ValidationError[] } {
  const errors: ValidationError[] = [];

  if (!subject || typeof subject !== 'object') {
    return { valid: false, errors: [{ path: 'root', message: 'Subject must be an object' }] };
  }

  const s = subject as Record<string, unknown>;

  if (!s.id || typeof s.id !== 'string') {
    errors.push({ path: 'id', message: 'Subject id is required and must be a non-empty string' });
  }
  if (!s.title || typeof s.title !== 'string') {
    errors.push({ path: 'title', message: 'Subject title is required' });
  }
  if (!Array.isArray(s.chapterIds)) {
    errors.push({ path: 'chapterIds', message: 'Subject chapterIds must be an array of strings' });
  }

  return { valid: errors.length === 0, errors };
}

export function validateSection(section: unknown, index: number): ValidationError[] {
  const errors: ValidationError[] = [];
  const prefix = `sections[${index}]`;

  if (!section || typeof section !== 'object') {
    return [{ path: prefix, message: 'Section must be an object' }];
  }

  const sec = section as Record<string, unknown>;

  if (!sec.id || typeof sec.id !== 'string') {
    errors.push({ path: `${prefix}.id`, message: 'Section id is required' });
  }

  if (!sec.type || typeof sec.type !== 'string' || !VALID_SECTION_TYPES.includes(sec.type as SectionType)) {
    errors.push({
      path: `${prefix}.type`,
      message: `Invalid section type "${sec.type}". Allowed types: ${VALID_SECTION_TYPES.join(', ')}`,
    });
  }

  if (sec.content === undefined) {
    errors.push({ path: `${prefix}.content`, message: 'Section content is required' });
  }

  return errors;
}

export function validateChapter(chapter: unknown): { valid: boolean; errors: ValidationError[] } {
  const errors: ValidationError[] = [];

  if (!chapter || typeof chapter !== 'object') {
    return { valid: false, errors: [{ path: 'root', message: 'Chapter must be an object' }] };
  }

  const c = chapter as Record<string, unknown>;

  if (!c.id || typeof c.id !== 'string') {
    errors.push({ path: 'id', message: 'Chapter id is required and must be a string' });
  }
  if (!c.subjectId || typeof c.subjectId !== 'string') {
    errors.push({ path: 'subjectId', message: 'Chapter subjectId is required' });
  }
  if (!c.title || typeof c.title !== 'string') {
    errors.push({ path: 'title', message: 'Chapter title is required' });
  }
  if (!Array.isArray(c.sections)) {
    errors.push({ path: 'sections', message: 'Chapter sections must be an array' });
  } else {
    c.sections.forEach((sec, idx) => {
      errors.push(...validateSection(sec, idx));
    });
  }

  return { valid: errors.length === 0, errors };
}

export function isSectionTypeSupported(type: string): type is SectionType {
  return VALID_SECTION_TYPES.includes(type as SectionType);
}
