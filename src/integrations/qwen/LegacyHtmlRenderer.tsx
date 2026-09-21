import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RefreshCw, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';
import type { QwenPostMessagePayload } from './types';

interface LegacyHtmlRendererProps {
  modulePath: string; // e.g. "/qwen-modules/biology/cell-structure/index.html"
  title: string;
  description?: string;
  initialHeight?: number;
}

export const LegacyHtmlRenderer: React.FC<LegacyHtmlRendererProps> = ({
  modulePath,
  title,
  description,
  initialHeight = 460,
}) => {
  const [iframeHeight, setIframeHeight] = useState<number>(initialHeight);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [reloadKey, setReloadKey] = useState<number>(0);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Normalize module path to respect BASE_URL
  const cleanPath = modulePath.startsWith('/') ? modulePath.slice(1) : modulePath;
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const resolvedPath = `${baseUrl}${cleanPath}`;

  // Listen for secure postMessage from within sandboxed iframe
  const handleMessage = useCallback((event: MessageEvent) => {
    // Only accept messages from same origin
    if (event.origin !== window.location.origin && event.origin !== 'null' && event.origin !== '') {
      return;
    }

    try {
      const data = event.data as QwenPostMessagePayload;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'QWEN_MODULE_RESIZE' && typeof data.height === 'number') {
        // Clamp height between 250px and 1200px for stability
        const clampedHeight = Math.max(250, Math.min(data.height, 1200));
        setIframeHeight(clampedHeight);
      }
    } catch {
      // Ignore malformed messages
    }
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [handleMessage]);

  const handleReload = () => {
    setIsLoading(true);
    setHasError(false);
    setReloadKey((prev) => prev + 1);
  };

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
      {/* Header bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-subtle)',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={18} color="var(--primary)" />
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h4 style={{ margin: 0, fontSize: '0.975rem', color: 'var(--text-primary)' }}>{title}</h4>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '2px 6px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--info-bg)',
                  color: 'var(--info)',
                  border: '1px solid var(--info-border)',
                  fontWeight: 600,
                }}
              >
                Sandboxed HTML Module
              </span>
            </div>
            {description && (
              <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={handleReload}
            title="รีโหลดโมดูล"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-secondary)',
              fontSize: '0.8rem',
              fontWeight: 500,
            }}
          >
            <RefreshCw size={14} className={isLoading ? 'spin-icon' : ''} />
            รีโหลด
          </button>
          <a
            href={resolvedPath}
            target="_blank"
            rel="noopener noreferrer"
            title="เปิดโมดูลในแท็บใหม่"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-secondary)',
              fontSize: '0.8rem',
              fontWeight: 500,
            }}
          >
            <ExternalLink size={14} />
            เปิดเต็มจอ
          </a>
        </div>
      </div>

      {/* Frame Container */}
      <div style={{ position: 'relative', width: '100%', minHeight: `${iframeHeight}px` }}>
        {hasError ? (
          <div
            style={{
              padding: '40px 20px',
              textAlign: 'center',
              color: 'var(--danger)',
              backgroundColor: 'var(--danger-bg)',
            }}
          >
            <AlertCircle size={32} style={{ marginBottom: '8px' }} />
            <h4 style={{ margin: '0 0 8px', color: 'var(--danger)' }}>ไม่สามารถโหลดโมดูล HTML ได้</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              ไม่พบไฟล์หรือเกิดข้อผิดพลาดที่ตำแหน่ง: <code>{resolvedPath}</code>
            </p>
            <button
              onClick={handleReload}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary)',
                color: '#fff',
                fontSize: '0.875rem',
              }}
            >
              ลองใหม่อีกครั้ง
            </button>
          </div>
        ) : (
          <iframe
            key={reloadKey}
            ref={iframeRef}
            src={resolvedPath}
            title={title}
            // Strict sandbox attributes to isolate styles and prevent global state pollution
            sandbox="allow-scripts allow-same-origin allow-forms"
            onLoad={() => {
              setIsLoading(false);
              // Send handshake or trigger postMessage resize from inside
              try {
                iframeRef.current?.contentWindow?.postMessage({ type: 'PARENT_READY' }, '*');
              } catch {
                // Ignore cross-origin error if any
              }
            }}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            style={{
              width: '100%',
              height: `${iframeHeight}px`,
              border: 'none',
              display: 'block',
              transition: 'height 200ms ease',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default LegacyHtmlRenderer;

