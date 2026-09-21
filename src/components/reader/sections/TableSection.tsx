import React from 'react';
import type { TableContent } from '../../../types/content';

interface TableSectionProps {
  content: TableContent;
}

export const TableSection: React.FC<TableSectionProps> = ({ content }) => {
  return (
    <div style={{ margin: '24px 0', overflowX: 'auto' }}>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '0.925rem',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          overflow: 'hidden',
        }}
      >
        {content.caption && (
          <caption
            style={{
              captionSide: 'top',
              textAlign: 'left',
              fontWeight: 600,
              color: 'var(--text-muted)',
              fontSize: '0.85rem',
              padding: '6px 0',
            }}
          >
            {content.caption}
          </caption>
        )}
        <thead>
          <tr style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '2px solid var(--border-color)' }}>
            {content.headers.map((h, i) => (
              <th
                key={i}
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, rIdx) => (
            <tr
              key={rIdx}
              style={{
                borderBottom: '1px solid var(--border-color)',
                backgroundColor: rIdx % 2 === 0 ? 'transparent' : 'var(--bg-subtle)',
              }}
            >
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  style={{
                    padding: '12px 16px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

