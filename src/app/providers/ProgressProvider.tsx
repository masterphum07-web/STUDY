import React, { useState, useCallback, useMemo, type ReactNode } from 'react';
import type { ReadingProgressRecord, UserProgressState } from '../../types/storage';
import type { ReadStatus } from '../../types/content';
import { getStorageItem, setStorageItem } from '../../storage/localStorage';
import { STORAGE_KEYS } from '../../storage/keys';
import { ProgressContext } from './progressContext';

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progressState, setProgressState] = useState<UserProgressState>(() =>
    getStorageItem<UserProgressState>(STORAGE_KEYS.PROGRESS, {
      records: {},
      recentChapterIds: [],
    })
  );

  const getChapterRecord = useCallback(
    (chapterId: string): ReadingProgressRecord | undefined => {
      return progressState.records[chapterId];
    },
    [progressState.records]
  );

  const getChapterStatus = useCallback(
    (chapterId: string): ReadStatus => {
      const record = progressState.records[chapterId];
      if (!record) return 'not-started';
      if (record.isCompleted) return 'completed';
      return record.scrollPercent > 5 ? 'in-progress' : 'not-started';
    },
    [progressState.records]
  );

  const recordVisit = useCallback((chapterId: string, subjectId: string) => {
    setProgressState((prev) => {
      const existing = prev.records[chapterId];
      const updatedRecord: ReadingProgressRecord = {
        chapterId,
        subjectId,
        scrollPercent: existing?.scrollPercent || 0,
        lastReadAt: new Date().toISOString(),
        isCompleted: existing?.isCompleted || false,
        completedAt: existing?.completedAt,
      };

      const updatedRecents = [chapterId, ...prev.recentChapterIds.filter((id) => id !== chapterId)].slice(
        0,
        5
      );

      const nextState: UserProgressState = {
        records: {
          ...prev.records,
          [chapterId]: updatedRecord,
        },
        recentChapterIds: updatedRecents,
      };

      setStorageItem(STORAGE_KEYS.PROGRESS, nextState);
      return nextState;
    });
  }, []);

  const updateScrollProgress = useCallback((chapterId: string, subjectId: string, percent: number) => {
    setProgressState((prev) => {
      const existing = prev.records[chapterId];
      const rounded = Math.round(percent);
      const shouldComplete = rounded >= 95 || existing?.isCompleted;

      // Skip storage & state update if scroll percent hasn't meaningfully changed
      if (existing && Math.abs(existing.scrollPercent - rounded) < 3 && existing.isCompleted === shouldComplete) {
        return prev;
      }

      const updatedRecord: ReadingProgressRecord = {
        chapterId,
        subjectId,
        scrollPercent: Math.max(existing?.scrollPercent || 0, rounded),
        lastReadAt: new Date().toISOString(),
        isCompleted: Boolean(shouldComplete),
        completedAt: shouldComplete ? existing?.completedAt || new Date().toISOString() : undefined,
      };

      const nextState: UserProgressState = {
        ...prev,
        records: {
          ...prev.records,
          [chapterId]: updatedRecord,
        },
      };

      setStorageItem(STORAGE_KEYS.PROGRESS, nextState);
      return nextState;
    });
  }, []);

  const markCompleted = useCallback((chapterId: string, subjectId: string) => {
    setProgressState((prev) => {
      const updatedRecord: ReadingProgressRecord = {
        chapterId,
        subjectId,
        scrollPercent: 100,
        lastReadAt: new Date().toISOString(),
        isCompleted: true,
        completedAt: new Date().toISOString(),
      };

      const nextState: UserProgressState = {
        ...prev,
        records: {
          ...prev.records,
          [chapterId]: updatedRecord,
        },
      };

      setStorageItem(STORAGE_KEYS.PROGRESS, nextState);
      return nextState;
    });
  }, []);

  const getRecentChapterIds = useCallback((): string[] => {
    return progressState.recentChapterIds;
  }, [progressState.recentChapterIds]);

  const getSubjectProgress = useCallback(
    (_subjectId: string, chapterIds: string[]): { completed: number; total: number; percent: number } => {
      const total = chapterIds.length;
      if (total === 0) return { completed: 0, total: 0, percent: 0 };

      const completed = chapterIds.filter((id) => progressState.records[id]?.isCompleted).length;
      const percent = Math.round((completed / total) * 100);

      return { completed, total, percent };
    },
    [progressState.records]
  );

  const getTotalCompletedChapters = useCallback((): number => {
    return Object.values(progressState.records).filter((r) => r.isCompleted).length;
  }, [progressState.records]);

  const contextValue = useMemo(
    () => ({
      getChapterRecord,
      getChapterStatus,
      markCompleted,
      updateScrollProgress,
      recordVisit,
      getRecentChapterIds,
      getSubjectProgress,
      getTotalCompletedChapters,
    }),
    [
      getChapterRecord,
      getChapterStatus,
      markCompleted,
      updateScrollProgress,
      recordVisit,
      getRecentChapterIds,
      getSubjectProgress,
      getTotalCompletedChapters,
    ]
  );

  return <ProgressContext.Provider value={contextValue}>{children}</ProgressContext.Provider>;
};
