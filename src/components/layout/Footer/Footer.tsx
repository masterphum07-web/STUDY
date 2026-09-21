import React from 'react';
import { BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-surface)',
        padding: '32px 16px',
        marginTop: '60px',
        color: 'var(--text-muted)',
        fontSize: '0.875rem',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max-width)',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 600 }}>
          <BookOpen size={18} color="var(--primary)" />
          <span>ศูนย์รวมสรุปบทเรียนและ Interactive Simulation Hub</span>
        </div>
        <p style={{ maxWidth: '600px', lineHeight: 1.5 }}>
          แพลตฟอร์มการเรียนรู้และสรุปบทเรียนแบบโต้ตอบ รองรับทั้ง React Modules และ Sandboxed HTML จาก Qwen
        </p>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Lesson Summary Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

