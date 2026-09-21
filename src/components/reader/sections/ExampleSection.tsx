import React from 'react';
import { HelpCircle, CheckCircle2 } from 'lucide-react';
import type { ExampleContent } from '../../../types/content';

interface ExampleSectionProps {
  content: ExampleContent;
}

export const ExampleSection: React.FC<ExampleSectionProps> = ({ content }) => {
  return (
    <div
      style={{
        margin: '24px 0',
        padding: '20px',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-surface)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {/* Problem Header */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '16px' }}>
        <HelpCircle size={20} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
        <div>
          <h5 style={{ margin: '0 0 6px', fontSize: '1rem', color: 'var(--primary)', fontWeight: 700 }}>
            โจทย์ตัวอย่าง (Worked Example)
          </h5>
          <p style={{ margin: 0, fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.6 }}>
            {content.problem}
          </p>
        </div>
      </div>

      {/* Given information */}
      {content.given && content.given.length > 0 && (
        <div
          style={{
            marginBottom: '16px',
            padding: '10px 14px',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: 'var(--bg-subtle)',
            fontSize: '0.875rem',
          }}
        >
          <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>สิ่งที่โจทย์กำหนด: </span>
          <span style={{ color: 'var(--text-muted)' }}>{content.given.join(', ')}</span>
        </div>
      )}

      {/* Steps */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
        {content.steps.map((step) => (
          <div
            key={step.stepNumber}
            style={{
              paddingLeft: '16px',
              borderLeft: '3px solid var(--primary-border)',
            }}
          >
            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '2px' }}>
              ขั้นตอนที่ {step.stepNumber}: {step.title}
            </div>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              {step.explanation}
            </p>
          </div>
        ))}
      </div>

      {/* Answer */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '12px 16px',
          borderRadius: 'var(--radius-sm)',
          backgroundColor: 'var(--success-bg)',
          border: '1px solid var(--success-border)',
          color: 'var(--success)',
          fontWeight: 600,
          fontSize: '0.925rem',
        }}
      >
        <CheckCircle2 size={18} />
        <span>คำตอบ: {content.answer}</span>
      </div>
    </div>
  );
};

