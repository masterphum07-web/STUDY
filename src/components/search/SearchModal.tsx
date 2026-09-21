import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { searchContent, type SearchResult } from '../../content/registry';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    setQuery('');
    setResults([]);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) handleClose();
      }
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  const handleSearch = (text: string) => {
    setQuery(text);
    if (text.trim().length > 0) {
      const searchRes = searchContent(text);
      setResults(searchRes);
    } else {
      setResults([]);
    }
  };

  const handleSelect = (path: string) => {
    handleClose();
    navigate(path);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: '60px 16px 20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '640px',
          backgroundColor: 'var(--bg-surface)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-color)',
          boxShadow: 'var(--shadow-xl)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '80vh',
        }}
      >
        {/* Search input header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px 20px',
            borderBottom: '1px solid var(--border-color)',
            gap: '12px',
          }}
        >
          <Search size={20} color="var(--text-muted)" />
          <input
            ref={inputRef}
            type="text"
            placeholder="ค้นหาวิชา บทเรียน สูตร หรือแบบจำลอง..."
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '1.05rem',
              color: 'var(--text-primary)',
            }}
          />
          {query && (
            <button
              onClick={() => handleSearch('')}
              style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
            >
              <X size={18} />
            </button>
          )}
          <span
            style={{
              padding: '2px 6px',
              borderRadius: '4px',
              border: '1px solid var(--border-color)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              backgroundColor: 'var(--bg-subtle)',
            }}
          >
            ESC
          </span>
        </div>

        {/* Results Container */}
        <div style={{ overflowY: 'auto', padding: '12px 16px', flex: 1 }}>
          {query.trim() === '' ? (
            <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '0.95rem' }}>พิมพ์คำค้นหา เช่น &quot;โพรเจกไทล์&quot;, &quot;พาราโบลา&quot;, &quot;นิวเคลียส&quot;</p>
            </div>
          ) : results.length === 0 ? (
            <div style={{ padding: '32px 16px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '0.95rem' }}>ไม่พบผลลัพธ์ที่ตรงกับ &quot;{query}&quot;</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {results.map((res) => (
                <div
                  key={`${res.type}-${res.id}`}
                  onClick={() => handleSelect(res.path)}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--bg-subtle)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '12px',
                    transition: 'all var(--transition-fast)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                  }}
                >
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        padding: '8px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor:
                          res.type === 'subject' ? 'var(--primary-light)' : 'var(--bg-surface)',
                        color: res.type === 'subject' ? 'var(--primary)' : 'var(--text-secondary)',
                        marginTop: '2px',
                      }}
                    >
                      {res.type === 'subject' ? <Layers size={18} /> : <BookOpen size={18} />}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <h4 style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                          {res.title}
                        </h4>
                        <span
                          style={{
                            fontSize: '0.7rem',
                            padding: '1px 6px',
                            borderRadius: '4px',
                            backgroundColor: 'var(--border-color)',
                            color: 'var(--text-muted)',
                          }}
                        >
                          {res.type === 'subject' ? 'วิชา' : 'บทเรียน'}
                        </span>
                      </div>
                      <p
                        style={{
                          margin: '4px 0 0',
                          fontSize: '0.825rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.4,
                        }}
                      >
                        {res.subtitle}
                      </p>
                      {res.matchSnippet && (
                        <p
                          style={{
                            margin: '4px 0 0',
                            fontSize: '0.78rem',
                            color: 'var(--primary)',
                            fontStyle: 'italic',
                          }}
                        >
                          &quot;{res.matchSnippet}&quot;
                        </p>
                      )}
                    </div>
                  </div>
                  <ArrowRight size={16} color="var(--text-muted)" style={{ marginTop: '6px' }} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
