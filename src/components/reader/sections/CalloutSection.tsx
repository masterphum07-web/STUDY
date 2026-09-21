import React from 'react';
import { Info, Lightbulb, AlertTriangle, AlertCircle } from 'lucide-react';
import type { CalloutContent, CalloutVariant } from '../../../types/content';

interface CalloutSectionProps {
  content: CalloutContent;
}

export const CalloutSection: React.FC<CalloutSectionProps> = ({ content }) => {
  const getStyles = (variant: CalloutVariant) => {
    switch (variant) {
      case 'tip':
        return {
          bg: 'var(--success-bg)',
          border: 'var(--success-border)',
          color: 'var(--success)',
          icon: <Lightbulb size={20} />,
          defaultTitle: 'เคล็ดลับ / ข้อแนะนำ',
        };
      case 'warning':
        return {
          bg: 'var(--warning-bg)',
          border: 'var(--warning-border)',
          color: 'var(--warning)',
          icon: <AlertTriangle size={20} />,
          defaultTitle: 'ข้อควรระวัง',
        };
      case 'danger':
        return {
          bg: 'var(--danger-bg)',
          border: 'var(--danger-border)',
          color: 'var(--danger)',
          icon: <AlertCircle size={20} />,
          defaultTitle: 'ข้อห้าม / สิ่งที่มักผิด',
        };
      case 'info':
      case 'note':
      default:
        return {
          bg: 'var(--info-bg)',
          border: 'var(--info-border)',
          color: 'var(--info)',
          icon: <Info size={20} />,
          defaultTitle: 'ข้อสังเกต / ความรู้เพิ่มเติม',
        };
    }
  };

  const config = getStyles(content.variant);

  return (
    <div
      style={{
        margin: '20px 0',
        padding: '16px 20px',
        backgroundColor: config.bg,
        border: `1px solid ${config.border}`,
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ color: config.color, marginTop: '2px', flexShrink: 0 }}>{config.icon}</div>
      <div style={{ flex: 1 }}>
        <h5
          style={{
            margin: '0 0 4px',
            fontSize: '0.95rem',
            fontWeight: 700,
            color: config.color,
          }}
        >
          {content.title || config.defaultTitle}
        </h5>
        <p style={{ margin: 0, fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {content.text}
        </p>
      </div>
    </div>
  );
};

