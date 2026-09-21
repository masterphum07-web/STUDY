import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        flexWrap: 'wrap',
        marginBottom: '16px',
      }}
    >
      <Link
        to="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
          color: 'var(--text-secondary)',
          transition: 'color var(--transition-fast)',
        }}
      >
        <Home size={14} />
        <span>หน้าแรก</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight size={14} color="var(--border-color-strong)" />
            {isLast || !item.path ? (
              <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                style={{
                  color: 'var(--text-secondary)',
                  transition: 'color var(--transition-fast)',
                }}
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

