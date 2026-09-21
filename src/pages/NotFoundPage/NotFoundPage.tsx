import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        maxWidth: '560px',
        margin: '80px auto',
        padding: '40px 24px',
        textAlign: 'center',
        backgroundColor: 'var(--bg-surface)',
        borderRadius: 'var(--radius-xl)',
        border: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          backgroundColor: 'var(--warning-bg)',
          color: 'var(--warning)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <HelpCircle size={36} />
      </div>

      <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
        404 - ไม่พบหน้าที่คุณค้นหา
      </h1>

      <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '28px' }}>
        วิชาหรือบทเรียนที่คุณกำลังเปิดอาจถูกย้าย หรือ URL ไม่ถูกต้อง
        แต่ไม่ต้องกังวล คุณสามารถกลับสู่หน้าหลักเพื่อเลือกบทเรียนอื่นๆ ได้ทันที
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
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
          <Home size={16} />
          <span>กลับสู่หน้าแรก</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
