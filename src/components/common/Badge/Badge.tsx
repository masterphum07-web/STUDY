import React, { type ReactNode } from 'react';

interface BadgeProps {
  variant?: 'primary' | 'success' | 'warning' | 'info' | 'neutral';
  size?: 'sm' | 'md';
  children: ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'neutral', size = 'sm', children }) => {
  const getColors = () => {
    switch (variant) {
      case 'primary':
        return { bg: 'var(--primary-light)', color: 'var(--primary)', border: 'var(--primary-border)' };
      case 'success':
        return { bg: 'var(--success-bg)', color: 'var(--success)', border: 'var(--success-border)' };
      case 'warning':
        return { bg: 'var(--warning-bg)', color: 'var(--warning)', border: 'var(--warning-border)' };
      case 'info':
        return { bg: 'var(--info-bg)', color: 'var(--info)', border: 'var(--info-border)' };
      case 'neutral':
      default:
        return { bg: 'var(--bg-subtle)', color: 'var(--text-secondary)', border: 'var(--border-color)' };
    }
  };

  const colors = getColors();

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        padding: size === 'sm' ? '2px 8px' : '4px 10px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: colors.bg,
        color: colors.color,
        border: `1px solid ${colors.border}`,
        fontSize: size === 'sm' ? '0.75rem' : '0.85rem',
        fontWeight: 600,
        lineHeight: 1.2,
      }}
    >
      {children}
    </span>
  );
};

