import React, { Suspense, useMemo, type ComponentType } from 'react';
import { SimulationErrorBoundary } from '../../simulations/shared/SimulationErrorBoundary';
import { getSimulationComponent } from '../../simulations/registry';
import type { QwenReactModuleProps } from './types';

interface QwenReactRendererProps {
  simulationId: string;
  subjectId: string;
  chapterId: string;
  title?: string;
  initialParams?: Record<string, unknown>;
}

export const QwenReactRenderer: React.FC<QwenReactRendererProps> = ({
  simulationId,
  subjectId,
  chapterId,
  title,
  initialParams,
}) => {
  const Component: ComponentType<any> | null = useMemo(
    () => getSimulationComponent(simulationId),
    [simulationId]
  );

  if (!Component) {
    return (
      <div
        role="alert"
        style={{
          padding: '24px',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--warning-bg)',
          border: '1px solid var(--warning-border)',
          color: 'var(--text-primary)',
          margin: '20px 0',
        }}
      >
        <h4 style={{ margin: '0 0 6px', color: 'var(--warning)' }}>
          ไม่พบแบบจำลอง: &quot;{simulationId}&quot;
        </h4>
        <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          แบบจำลองนี้ยังไม่ได้ถูกลงทะเบียนใน <code>src/simulations/registry.ts</code>{' '}
          โปรดตรวจสอบชื่อ simulationId หรือนำเข้าคอมโพเนนต์จาก Qwen
        </p>
      </div>
    );
  }

  const props: QwenReactModuleProps = {
    subjectId,
    chapterId,
    initialParams,
  };

  return (
    <SimulationErrorBoundary simulationId={simulationId} fallbackTitle={title}>
      <Suspense
        fallback={
          <div
            style={{
              padding: '40px',
              textAlign: 'center',
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
            }}
          >
            กำลังโหลดแบบจำลอง...
          </div>
        }
      >
        {React.createElement(Component, props)}
      </Suspense>
    </SimulationErrorBoundary>
  );
};

export default QwenReactRenderer;
