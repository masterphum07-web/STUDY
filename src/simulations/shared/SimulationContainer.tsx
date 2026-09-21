import React, { type ReactNode } from 'react';
import { PlayCircle, RotateCcw } from 'lucide-react';

interface SimulationContainerProps {
  title: string;
  description?: string;
  onReset?: () => void;
  children: ReactNode;
  footer?: ReactNode;
}

export const SimulationContainer: React.FC<SimulationContainerProps> = ({
  title,
  description,
  onReset,
  children,
  footer,
}) => {
  return (
    <div
      style={{
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        backgroundColor: 'var(--bg-surface)',
        boxShadow: 'var(--shadow-md)',
        overflow: 'hidden',
        margin: '24px 0',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-subtle)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <PlayCircle size={22} color="var(--primary)" />
          <div>
            <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{title}</h4>
            {description && (
              <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {description}
              </p>
            )}
          </div>
        </div>
        {onReset && (
          <button
            onClick={onReset}
            title="รีเซ็ตค่าเริ่มต้น"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-secondary)',
              fontSize: '0.825rem',
              fontWeight: 500,
              transition: 'background var(--transition-fast)',
            }}
          >
            <RotateCcw size={14} />
            รีเซ็ต
          </button>
        )}
      </div>

      {/* Main Simulation Workspace */}
      <div style={{ padding: '20px' }}>{children}</div>

      {/* Footer controls or stats */}
      {footer && (
        <div
          style={{
            padding: '12px 20px',
            borderTop: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-subtle)',
            fontSize: '0.875rem',
            color: 'var(--text-secondary)',
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
};

