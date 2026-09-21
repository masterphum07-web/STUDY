import React from 'react';
import { CheckCircle } from 'lucide-react';
import type { KeyPointsContent } from '../../../types/content';

interface KeyPointsSectionProps {
  content: KeyPointsContent;
}

export const KeyPointsSection: React.FC<KeyPointsSectionProps> = ({ content }) => {
  return (
    <div
      style={{
        margin: '20px 0',
        padding: '20px',
        borderRadius: 'var(--radius-md)',
        backgroundColor: 'var(--bg-subtle)',
        border: '1px solid var(--border-color)',
      }}
    >
      {content.title && (
        <h5
          style={{
            margin: '0 0 12px',
            fontSize: '0.975rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}
        >
          {content.title}
        </h5>
      )}
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {content.points.map((pt, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
            <CheckCircle size={18} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
            <span style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {pt}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

