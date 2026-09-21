import { createContext, useContext } from 'react';
import type { BookmarkItem } from '../../types/storage';

export interface BookmarkContextType {
  bookmarks: BookmarkItem[];
  isBookmarked: (chapterId: string) => boolean;
  toggleBookmark: (item: Omit<BookmarkItem, 'savedAt'>) => boolean;
  removeBookmark: (chapterId: string) => void;
}

export const BookmarkContext = createContext<BookmarkContextType | undefined>(undefined);

export function useBookmarks(): BookmarkContextType {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
}

