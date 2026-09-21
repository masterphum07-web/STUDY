import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChapterRenderer } from '../src/components/reader/ChapterRenderer';
import type { ChapterSection } from '../src/types/content';

describe('ChapterRenderer', () => {
  it('should render heading and paragraph sections correctly', () => {
    const sections: ChapterSection[] = [
      {
        id: 'sec-1',
        heading: 'หัวข้อทดสอบที่ 1',
        type: 'paragraph',
        content: 'นี่คือเนื้อหาการทดสอบเรนเดอร์ย่อหน้า',
      },
    ];

    render(
      <ChapterRenderer
        sections={sections}
        subjectId="test-sub"
        chapterId="test-chap"
      />
    );

    expect(screen.getByText('หัวข้อทดสอบที่ 1')).toBeInTheDocument();
    expect(screen.getByText('นี่คือเนื้อหาการทดสอบเรนเดอร์ย่อหน้า')).toBeInTheDocument();
  });

  it('should render unknown section types gracefully with fallback warning without crashing', () => {
    const sections: ChapterSection[] = [
      {
        id: 'sec-unknown',
        type: 'unknown-future-type' as any,
        content: 'ข้อมูลที่ยังไม่มี renderer',
      },
    ];

    render(
      <ChapterRenderer
        sections={sections}
        subjectId="test-sub"
        chapterId="test-chap"
      />
    );

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText(/ไม่รองรับประเภทเนื้อหา "unknown-future-type"/)).toBeInTheDocument();
  });
});

