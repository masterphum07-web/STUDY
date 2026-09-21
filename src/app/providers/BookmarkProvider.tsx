import React, { useState, type ReactNode } from 'react';
import type { BookmarkItem } from '../../types/storage';
import { getStorageItem, setStorageItem } from '../../storage/localStorage';
import { STORAGE_KEYS } from '../../storage/keys';
import { BookmarkContext } from './bookmarkContext';

export const BookmarkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() =>
    getStorageItem<BookmarkItem[]>(STORAGE_KEYS.BOOKMARKS, [])
  );

  const isBookmarked = (chapterId: string) => {
    return bookmarks.some((b) => b.chapterId === chapterId);
  };

  const toggleBookmark = (item: Omit<BookmarkItem, 'savedAt'>): boolean => {
    const exists = bookmarks.some((b) => b.chapterId === item.chapterId);
    let next: BookmarkItem[];

    if (exists) {
      next = bookmarks.filter((b) => b.chapterId !== item.chapterId);
    } else {
      const newItem: BookmarkItem = {
        ...item,
        savedAt: new Date().toISOString(),
      };
      next = [newItem, ...bookmarks];
    }

    setBookmarks(next);
    setStorageItem(STORAGE_KEYS.BOOKMARKS, next);
    return !exists;
  };

  const removeBookmark = (chapterId: string) => {
    const next = bookmarks.filter((b) => b.chapterId !== chapterId);
    setBookmarks(next);
    setStorageItem(STORAGE_KEYS.BOOKMARKS, next);
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, isBookmarked, toggleBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

