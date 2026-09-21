import { createContext, useContext } from 'react';
import type { ReadingProgressRecord } from '../../types/storage';
import type { ReadStatus } from '../../types/content';

export interface ProgressContextType {
  getChapterRecord: (chapterId: string) => ReadingProgressRecord | undefined;
  getChapterStatus: (chapterId: string) => ReadStatus;
  markCompleted: (chapterId: string, subjectId: string) => void;
  updateScrollProgress: (chapterId: string, subjectId: string, percent: number) => void;
  recordVisit: (chapterId: string, subjectId: string) => void;
  getRecentChapterIds: () => string[];
  getSubjectProgress: (
    subjectId: string,
    chapterIds: string[]
  ) => { completed: number; total: number; percent: number };
  getTotalCompletedChapters: () => number;
}

export const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function useProgress(): ProgressContextType {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}

