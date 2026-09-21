import React, { useEffect, useState, useCallback } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Bookmark, Clock, CheckCircle2, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { getSubjectById, getChapterById, getNextAndPrevChapter } from '../../content/registry';
import { useProgress } from '../../hooks/useProgress';
import { useBookmarks } from '../../hooks/useBookmarks';
import { Breadcrumb } from '../../components/navigation/Breadcrumb/Breadcrumb';
import { TableOfContents } from '../../components/navigation/TableOfContents/TableOfContents';
import { ReadingProgressBar } from '../../components/reader/ReadingProgressBar';
import { ChapterRenderer } from '../../components/reader/ChapterRenderer';

export const ChapterPage: React.FC = () => {
  const { subjectId, chapterId } = useParams<{ subjectId: string; chapterId: string }>();
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const subject = subjectId ? getSubjectById(subjectId) : undefined;
  const chapter = chapterId ? getChapterById(chapterId) : undefined;

  const { recordVisit, updateScrollProgress, markCompleted, getChapterStatus } = useProgress();
  const { isBookmarked, toggleBookmark } = useBookmarks();

  // Record visit on mount or change of chapter
  useEffect(() => {
    if (chapterId && subjectId && subject && chapter) {
      recordVisit(chapterId, subjectId);
      window.scrollTo(0, 0);
    }
  }, [chapterId, subjectId, subject, chapter, recordVisit]);

  // Track scroll position
  const handleScroll = useCallback(() => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) return;
    const currentScroll = window.scrollY;
    const percent = Math.min(100, Math.round((currentScroll / totalHeight) * 100));
    setScrollPercent(percent);

    if (chapterId && subjectId) {
      updateScrollProgress(chapterId, subjectId, percent);
    }
  }, [chapterId, subjectId, updateScrollProgress]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Redirect to 404 if subject or chapter does not exist
  if (!subject || !chapter || chapter.subjectId !== subject.id) {
    return <Navigate to="/404" replace />;
  }

  const { prev, next } = getNextAndPrevChapter(subject.id, chapter.id);
  const status = getChapterStatus(chapter.id);
  const bookmarked = isBookmarked(chapter.id);

  const handleToggleBookmark = () => {
    toggleBookmark({
      chapterId: chapter.id,
      subjectId: subject.id,
      chapterTitle: chapter.title,
      subjectTitle: subject.title,
    });
  };

  const handleMarkCompleted = () => {
    markCompleted(chapter.id, subject.id);
  };

  return (
    <div>
      {/* Top Fixed Reading Progress Bar */}
      <ReadingProgressBar progressPercent={scrollPercent} />

      <div
        style={{
          maxWidth: 'var(--container-max-width)',
          margin: '0 auto',
          padding: '24px 16px 64px',
        }}
      >
        <Breadcrumb
          items={[
            { label: subject.title, path: `/subject/${subject.id}` },
            { label: chapter.title },
          ]}
        />

        {/* Chapter Header Card */}
        <header
          style={{
            padding: '32px',
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <span
              style={{
                fontSize: '0.85rem',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary)',
                border: '1px solid var(--primary-border)',
              }}
            >
              บทที่ {chapter.order} • {subject.shortTitle}
            </span>

            {/* Bookmark & Read status actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                type="button"
                onClick={handleToggleBookmark}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: bookmarked ? 'var(--primary-light)' : 'var(--bg-subtle)',
                  color: bookmarked ? 'var(--primary)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  transition: 'all var(--transition-fast)',
                }}
              >
                <Bookmark size={16} fill={bookmarked ? 'currentColor' : 'none'} />
                <span>{bookmarked ? 'บันทึกแล้ว' : 'บุ๊กมาร์ก'}</span>
              </button>

              <button
                type="button"
                onClick={handleMarkCompleted}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  backgroundColor: status === 'completed' ? 'var(--success-bg)' : 'var(--bg-subtle)',
                  color: status === 'completed' ? 'var(--success)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  transition: 'all var(--transition-fast)',
                }}
              >
                {status === 'completed' ? <Check size={16} /> : <CheckCircle2 size={16} />}
                <span>{status === 'completed' ? 'อ่านจบแล้ว' : 'ทำเครื่องหมายว่าอ่านจบ'}</span>
              </button>
            </div>
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.25,
              marginBottom: '12px',
            }}
          >
            {chapter.title}
          </h1>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '20px',
            }}
          >
            {chapter.description}
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '16px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} />
              <span>ใช้เวลาอ่านประมาณ {chapter.estimatedReadingMinutes} นาที</span>
            </div>
            <div>
              แท็ก:{' '}
              {chapter.tags.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    display: 'inline-block',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--bg-subtle)',
                    marginRight: '6px',
                    fontSize: '0.8rem',
                  }}
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Objectives Box */}
          {chapter.objectives && chapter.objectives.length > 0 && (
            <div
              style={{
                marginTop: '20px',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-subtle)',
                borderLeft: '4px solid var(--primary)',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
                เป้าหมายการเรียนรู้ในบทนี้:
              </div>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {chapter.objectives.map((obj, i) => (
                  <li key={i} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {/* Content Layout: Main Reading + Sticky Sidebar TOC */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 280px',
            gap: '36px',
            alignItems: 'start',
          }}
          className="reader-grid"
        >
          {/* Main Content Column */}
          <main style={{ maxWidth: 'var(--reader-max-width)', width: '100%' }}>
            <ChapterRenderer
              sections={chapter.sections}
              subjectId={subject.id}
              chapterId={chapter.id}
            />

            {/* Bottom Chapter Navigation & Complete action */}
            <nav
              aria-label="Chapter Navigation"
              style={{
                marginTop: '48px',
                paddingTop: '24px',
                borderTop: '2px solid var(--border-color)',
                display: 'flex',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              {prev ? (
                <Link
                  to={`/chapter/${subject.id}/${prev.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 20px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    maxWidth: '45%',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <ChevronLeft size={20} color="var(--primary)" />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>บทก่อนหน้า</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{prev.title}</div>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {next ? (
                <Link
                  to={`/chapter/${subject.id}/${next.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 20px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-color)',
                    backgroundColor: 'var(--bg-surface)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    textAlign: 'right',
                    maxWidth: '45%',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>บทถัดไป</div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>{next.title}</div>
                  </div>
                  <ChevronRight size={20} color="var(--primary)" />
                </Link>
              ) : (
                <Link
                  to={`/subject/${subject.id}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 20px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--success-bg)',
                    border: '1px solid var(--success-border)',
                    color: 'var(--success)',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <Check size={18} />
                  <span>จบบทเรียนวิชานี้แล้ว กลับหน้าวิชา</span>
                </Link>
              )}
            </nav>
          </main>

          {/* Sticky Sidebar: TOC */}
          <aside className="toc-sidebar">
            <TableOfContents sections={chapter.sections} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ChapterPage;
