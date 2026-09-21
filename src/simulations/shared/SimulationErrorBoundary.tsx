import React, { Component, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
  simulationId?: string;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class SimulationErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(`[SimulationErrorBoundary] Error in simulation "${this.props.simulationId}":`, error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          style={{
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid var(--danger-border)',
            backgroundColor: 'var(--danger-bg)',
            color: 'var(--text-primary)',
            margin: '16px 0',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--danger)', marginBottom: '8px' }}>
            <AlertTriangle size={24} />
            <h4 style={{ margin: 0, color: 'var(--danger)' }}>
              {this.props.fallbackTitle || 'แบบจำลองไม่สามารถแสดงผลได้'}
            </h4>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
            {this.state.error?.message || 'เกิดข้อผิดพลาดในการรันโค้ดแบบจำลอง แต่ส่วนอื่นของบทเรียนยังอ่านได้ตามปกติ'}
          </p>
          <button
            onClick={this.handleReset}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              fontSize: '0.875rem',
              fontWeight: 500,
            }}
          >
            <RefreshCw size={16} />
            ลองโหลดแบบจำลองใหม่
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

