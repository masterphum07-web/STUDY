import { describe, it, expect, beforeEach } from 'vitest';
import { getStorageItem, setStorageItem, removeStorageItem } from '../src/storage/localStorage';

describe('Storage Layer (Safe localStorage)', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('should return default value when key does not exist', () => {
    const val = getStorageItem('non_existing_key', { test: true });
    expect(val).toEqual({ test: true });
  });

  it('should set and get items accurately', () => {
    const data = [{ chapterId: 'ch-1', title: 'Test Chapter' }];
    const success = setStorageItem('test_key', data);
    expect(success).toBe(true);

    const retrieved = getStorageItem('test_key', []);
    expect(retrieved).toEqual(data);
  });

  it('should remove items correctly', () => {
    setStorageItem('to_remove', 'hello');
    expect(getStorageItem('to_remove', '')).toBe('hello');

    removeStorageItem('to_remove');
    expect(getStorageItem('to_remove', 'default')).toBe('default');
  });

  it('should handle malformed JSON without crashing', () => {
    window.localStorage.setItem('bad_json', '{invalid:json');
    const val = getStorageItem('bad_json', 'fallback');
    expect(val).toBe('fallback');
  });
});

