export type ThemeMode = 'light' | 'dark' | 'system';

export interface BookmarkItem {
  subjectId: string;
  chapterId: string;
  chapterTitle: string;
  subjectTitle: string;
  savedAt: string;
}

export interface ReadingProgressRecord {
  chapterId: string;
  subjectId: string;
  scrollPercent: number;
  lastReadAt: string;
  isCompleted: boolean;
  completedAt?: string;
  quizScore?: {
    correct: number;
    total: number;
    takenAt: string;
  };
}

export interface UserProgressState {
  records: Record<string, ReadingProgressRecord>; // key: chapterId
  recentChapterIds: string[]; // ordered list of last visited chapter IDs
}

