import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Trash2, ArrowRight, BookOpen } from 'lucide-react';
import { useBookmarks } from '../../hooks/useBookmarks';
import { Breadcrumb } from '../../components/navigation/Breadcrumb/Breadcrumb';

export const BookmarksPage: React.FC = () => {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <div style={{ maxWidth: 'var(--container-max-width)', margin: '0 auto', padding: '32px 16px' }}>
      <Breadcrumb items={[{ label: 'รายการโปรด (Bookmarks)' }]} />

      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
          บทเรียนที่บันทึกไว้ (Bookmarks)
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
          รายการบทเรียนที่คุณกดบันทึกไว้เพื่อกลับมาทบทวนในภายหลัง
        </p>
      </div>

      {bookmarks.length === 0 ? (
        <div
          style={{
            padding: '60px 24px',
            textAlign: 'center',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--border-color)',
            maxWidth: '500px',
            margin: '40px auto',
          }}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-subtle)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              marginBottom: '16px',
            }}
          >
            <Bookmark size={30} />
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', marginBottom: '8px' }}>
            ยังไม่มีบทเรียนที่บันทึกไว้
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.925rem', marginBottom: '24px', lineHeight: 1.5 }}>
            เมื่อคุณเปิดอ่านบทเรียนใด สามารถกดปุ่ม &quot;บุ๊กมาร์ก&quot; ด้านบนเพื่อบันทึกเก็บไว้ดูที่นี่ได้ทันที
          </p>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            <BookOpen size={16} />
            <span>ค้นหาบทเรียน</span>
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {bookmarks.map((item) => (
            <div
              key={item.chapterId}
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--bg-surface)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all var(--transition-fast)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '10px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--primary-light)',
                      color: 'var(--primary)',
                      fontWeight: 600,
                    }}
                  >
                    {item.subjectTitle}
                  </span>

                  <button
                    type="button"
                    onClick={() => removeBookmark(item.chapterId)}
                    title="ลบออกจากรายการโปรด"
                    style={{
                      color: 'var(--text-muted)',
                      padding: '4px',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--danger)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                  }}
                >
                  {item.chapterTitle}
                </h3>
              </div>

              <div
                style={{
                  marginTop: '16px',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  บันทึกเมื่อ {new Date(item.savedAt).toLocaleDateString('th-TH')}
                </span>

                <Link
                  to={`/chapter/${item.subjectId}/${item.chapterId}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--primary)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                  }}
                >
                  <span>อ่านต่อ</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookmarksPage;
