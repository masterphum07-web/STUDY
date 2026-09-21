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
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', fontWeight: 700, fontSize: '1rem' }}>
          <BookOpen size={20} color="var(--primary)" />
          <span>ศูนย์รวมสรุปบทเรียนและ Interactive Simulation Hub</span>
        </div>
        <p style={{ maxWidth: '650px', lineHeight: 1.6, margin: 0, fontSize: '0.85rem' }}>
          แพลตฟอร์มการเรียนรู้และสรุปบทเรียนแบบโต้ตอบ ผสานพลัง <strong>Three.js 3D WebGL</strong>, <strong>TypeSafe AI (JEV System One)</strong>, และ Sandboxed HTML จาก Qwen
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.78rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
            TypeSafe AI Jev 1.13 Online
          </span>
          <span>•</span>
          <span>Three.js r186 Procedural 3D</span>
          <span>•</span>
          <span>Qwen Sandboxed Suite</span>
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
          © {new Date().getFullYear()} PhysioStudy &amp; Academic Learning Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

