import React from 'react';

interface ReadingProgressBarProps {
  progressPercent: number;
}

export const ReadingProgressBar: React.FC<ReadingProgressBarProps> = ({ progressPercent }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 'var(--header-height)',
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: 'transparent',
        zIndex: 49,
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${Math.min(100, Math.max(0, progressPercent))}%`,
          backgroundColor: 'var(--primary)',
          transition: 'width 100ms ease-out',
        }}
      />
    </div>
  );
};

