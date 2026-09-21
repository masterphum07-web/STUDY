import React, { useMemo } from 'react';
import katex from 'katex';
import type { FormulaContent } from '../../../types/content';

interface FormulaSectionProps {
  content: FormulaContent;
}

export const FormulaSection: React.FC<FormulaSectionProps> = ({ content }) => {
  const html = useMemo(() => {
    try {
      return katex.renderToString(content.latex, {
        displayMode: content.displayMode !== false,
        throwOnError: false,
      });
    } catch (err) {
      console.error('[FormulaSection] KaTeX error:', err);
      return `<code>${content.latex}</code>`;
    }
  }, [content.latex, content.displayMode]);

  return (
    <div
      style={{
        margin: '20px 0',
        padding: '18px 24px',
        backgroundColor: 'var(--bg-subtle)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-md)',
        overflowX: 'auto',
      }}
    >
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        style={{
          display: 'flex',
          justifyContent: 'center',
          fontSize: '1.2rem',
          margin: '8px 0',
          color: 'var(--text-primary)',
        }}
      />

      {content.explanation && (
        <p
          style={{
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
            marginTop: '8px',
          }}
        >
          {content.explanation}
        </p>
      )}

      {content.variables && content.variables.length > 0 && (
        <div
          style={{
            marginTop: '14px',
            paddingTop: '12px',
            borderTop: '1px solid var(--border-color)',
            fontSize: '0.825rem',
          }}
        >
          <div style={{ fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
            ความหมายของตัวแปร:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '6px' }}>
            {content.variables.map((v, i) => (
              <div key={i} style={{ color: 'var(--text-secondary)' }}>
                <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{v.symbol}</span> = {v.meaning}{' '}
                {v.unit && <span style={{ color: 'var(--text-muted)' }}>({v.unit})</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

